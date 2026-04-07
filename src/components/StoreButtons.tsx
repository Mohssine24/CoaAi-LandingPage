const PLAY_STORE =
  "https://play.google.com/store/apps/details?id=com.coaai.app";

function GooglePlayIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 512 512" fill="none">
      <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" fill="url(#gp)" />
      <defs>
        <linearGradient id="gp" x1="25" y1="0" x2="487" y2="512">
          <stop stopColor="#00C4FF" /><stop offset=".25" stopColor="#34A853" /><stop offset=".5" stopColor="#FBBC04" /><stop offset="1" stopColor="#EA4335" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function AppleIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 384 512" fill="currentColor">
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-27.1-46.8-42-83.2-44.9-35.3-2.8-73.8 20.7-87.9 20.7-14.8 0-49-19.7-74.3-19.7C63.3 141.2 0 184.8 0 273.5c0 26.2 4.8 53.3 14.4 81.2 12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-62.1 24-72.5-24 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  );
}

/* ── Hero buttons ── */

export function GooglePlayButton() {
  return (
    <a href={PLAY_STORE} target="_blank" rel="noopener noreferrer"
      className="group flex h-[60px] items-center gap-3.5 rounded-2xl bg-[#111111] px-6 shadow-[0_2px_16px_rgba(0,0,0,0.12)] transition-all duration-200 hover:bg-[#2A2A2A] hover:shadow-[0_4px_24px_rgba(0,0,0,0.18)] active:scale-[0.97]">
      <GooglePlayIcon size={28} />
      <div className="flex flex-col items-start leading-none">
        <span className="text-[10px] font-medium tracking-wide text-[rgba(255,255,255,0.55)]">GET IT ON</span>
        <span className="mt-0.5 text-[18px] font-bold tracking-[-0.01em] text-white">Google Play</span>
      </div>
    </a>
  );
}

export function IOSWaitlistButton() {
  return (
    <a href="#download"
      className="group flex h-[60px] items-center gap-3.5 rounded-2xl border-[1.5px] border-[#E5E5E3] bg-white px-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-200 hover:border-[#D1D0CC] hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] active:scale-[0.97]">
      <span className="text-[#111111]"><AppleIcon size={24} /></span>
      <div className="flex flex-col items-start leading-none">
        <span className="text-[10px] font-medium tracking-wide text-[#9CA3B8]">COMING SOON</span>
        <span className="mt-0.5 text-[18px] font-bold tracking-[-0.01em] text-[#111111]">App Store</span>
      </div>
    </a>
  );
}

/* ── Footer buttons ── */

export function GooglePlayButtonSmall() {
  return (
    <a href={PLAY_STORE} target="_blank" rel="noopener noreferrer"
      className="flex h-[44px] items-center gap-2.5 rounded-xl bg-[#111111] px-4 transition-colors hover:bg-[#2A2A2A]">
      <GooglePlayIcon size={20} />
      <div className="flex flex-col items-start leading-none">
        <span className="text-[8px] font-medium tracking-wide text-[rgba(255,255,255,0.45)]">GET IT ON</span>
        <span className="text-[13px] font-bold text-white">Google Play</span>
      </div>
    </a>
  );
}

export function IOSBadgeSmall() {
  return (
    <div className="flex h-[44px] items-center gap-2.5 rounded-xl border border-[#E5E5E3] bg-[#F5F5F3] px-4">
      <span className="text-[#9CA3B8]"><AppleIcon size={16} /></span>
      <div className="flex flex-col items-start leading-none">
        <span className="text-[8px] font-medium tracking-wide text-[#9CA3B8]">COMING SOON</span>
        <span className="text-[13px] font-bold text-[#9CA3B8]">App Store</span>
      </div>
    </div>
  );
}

/* ── CTA section large button ── */

export function GooglePlayButtonLarge() {
  return (
    <a href={PLAY_STORE} target="_blank" rel="noopener noreferrer"
      className="group flex h-[68px] items-center gap-4 rounded-2xl bg-[#111111] px-8 shadow-[0_4px_24px_rgba(0,0,0,0.15)] transition-all duration-200 hover:bg-[#2A2A2A] hover:shadow-[0_6px_32px_rgba(0,0,0,0.22)] active:scale-[0.97]">
      <GooglePlayIcon size={32} />
      <div className="flex flex-col items-start leading-none">
        <span className="text-[11px] font-medium tracking-wide text-[rgba(255,255,255,0.55)]">GET IT ON</span>
        <span className="mt-0.5 text-[20px] font-bold tracking-[-0.01em] text-white">Google Play</span>
      </div>
    </a>
  );
}
