import Image from "next/image";

const PLAY_STORE =
  "https://play.google.com/store/apps/details?id=com.coaai.app";

/* ── Hero buttons ── */

export function GooglePlayButton() {
  return (
    <a href={PLAY_STORE} target="_blank" rel="noopener noreferrer"
      className="group flex h-[60px] items-center gap-3.5 rounded-2xl bg-[#111111] px-6 shadow-[0_2px_16px_rgba(0,0,0,0.12)] transition-all duration-200 hover:bg-[#2A2A2A] hover:shadow-[0_4px_24px_rgba(0,0,0,0.18)] active:scale-[0.97]">
      <Image src="/Google_Play_icon.png" alt="Google Play" width={28} height={28} className="h-7 w-7" />
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
      <Image src="/App_Store_Icon.png" alt="App Store" width={24} height={24} className="h-6 w-6" />
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
      <Image src="/Google_Play_icon.png" alt="Google Play" width={20} height={20} className="h-5 w-5" />
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
      <Image src="/App_Store_Icon.png" alt="App Store" width={16} height={16} className="h-4 w-4 opacity-50" />
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
      <Image src="/Google_Play_icon.png" alt="Google Play" width={32} height={32} className="h-8 w-8" />
      <div className="flex flex-col items-start leading-none">
        <span className="text-[11px] font-medium tracking-wide text-[rgba(255,255,255,0.55)]">GET IT ON</span>
        <span className="mt-0.5 text-[20px] font-bold tracking-[-0.01em] text-white">Google Play</span>
      </div>
    </a>
  );
}
