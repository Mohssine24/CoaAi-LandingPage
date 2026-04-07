import { NextRequest, NextResponse } from "next/server";
import { put, list } from "@vercel/blob";
import { timingSafeEqual } from "crypto";

const BLOB_NAME = "CoaAi_IOS.csv";
const CSV_HEADER = "email,subscribed_at\n";

/* ── Rate limiting (in-memory, per serverless instance) ─────── */
const RATE_WINDOW_MS = 60_000;
const RATE_MAX_POST = 5;
const RATE_MAX_GET = 3;
const hits = new Map<string, { count: number; reset: number }>();

function isRateLimited(ip: string, max: number): boolean {
  const now = Date.now();
  const key = `${ip}`;
  const entry = hits.get(key);
  if (!entry || now > entry.reset) {
    hits.set(key, { count: 1, reset: now + RATE_WINDOW_MS });
    return false;
  }
  entry.count++;
  return entry.count > max;
}

/* ── Constant-time secret comparison ────────────────────────── */
function safeCompare(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  return timingSafeEqual(Buffer.from(a), Buffer.from(b));
}

/* ── Validation ─────────────────────────────────────────────── */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateEmail(raw: unknown): string | null {
  if (typeof raw !== "string") return null;
  const email = raw.trim().toLowerCase();
  if (email.length === 0 || email.length > 254) return null;
  if (!EMAIL_RE.test(email)) return null;
  return email;
}

/* ── CSV-injection prevention ───────────────────────────────── */
function sanitizeForCsv(value: string): string {
  if (/^[=+\-@\t\r\n|]/.test(value)) return `'${value}`;
  if (value.includes(",") || value.includes('"'))
    return `"${value.replace(/"/g, '""')}"`;
  return value;
}

/* ── Blob helpers ───────────────────────────────────────────── */
async function readCsv(): Promise<string> {
  try {
    const { blobs } = await list({ prefix: BLOB_NAME });
    if (blobs.length === 0) return CSV_HEADER;
    const res = await fetch(blobs[0].url);
    return await res.text();
  } catch {
    return CSV_HEADER;
  }
}

async function writeCsv(content: string): Promise<void> {
  await put(BLOB_NAME, content, { access: "public", addRandomSuffix: false });
}

/* ── POST: subscribe ────────────────────────────────────────── */
export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";

  if (isRateLimited(ip, RATE_MAX_POST)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const email = validateEmail((body as Record<string, unknown>)?.email);
  if (!email) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 },
    );
  }

  try {
    const csv = await readCsv();

    const isDuplicate = csv
      .split("\n")
      .some((line) => line.split(",")[0]?.replace(/^'/, "").toLowerCase() === email);

    if (isDuplicate) {
      return NextResponse.json({ message: "You're already on the waitlist!" }, { status: 200 });
    }

    const row = `${sanitizeForCsv(email)},${new Date().toISOString()}\n`;
    await writeCsv(csv + row);

    return NextResponse.json({ message: "Successfully joined the waitlist!" }, { status: 201 });
  } catch (err) {
    console.error("[waitlist] Blob write failed:", err);
    return NextResponse.json({ error: "Server error. Please try again later." }, { status: 500 });
  }
}

/* ── GET: download CSV (admin only via Authorization header) ── */
export async function GET(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";

  if (isRateLimited(ip, RATE_MAX_GET)) {
    return NextResponse.json(
      { error: "Too many requests." },
      { status: 429 },
    );
  }

  const secret = process.env.ADMIN_SECRET;
  if (!secret) {
    return NextResponse.json({ error: "Not configured." }, { status: 403 });
  }

  // Accept secret from Authorization header (preferred) or query param (fallback)
  const authHeader = req.headers.get("authorization")?.replace("Bearer ", "") ?? "";
  const queryKey = req.nextUrl.searchParams.get("key") ?? "";
  const token = authHeader || queryKey;

  if (!token || !safeCompare(token, secret)) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  try {
    const csv = await readCsv();
    return new NextResponse(csv, {
      status: 200,
      headers: {
        "Content-Type": "text/csv",
        "Content-Disposition": 'attachment; filename="CoaAi_IOS_waitlist.csv"',
      },
    });
  } catch {
    return NextResponse.json({ error: "No data yet." }, { status: 404 });
  }
}
