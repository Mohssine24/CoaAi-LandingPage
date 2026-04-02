import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { join } from "path";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default async function Icon() {
  const iconData = await readFile(join(process.cwd(), "public/images/icon.png"));
  const base64 = iconData.toString("base64");
  const dataUri = `data:image/png;base64,${base64}`;

  return new ImageResponse(
    (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={dataUri}
        alt=""
        width={32}
        height={32}
        style={{ borderRadius: "50%" }}
      />
    ),
    { ...size }
  );
}
