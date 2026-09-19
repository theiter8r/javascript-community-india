import { PillButton } from "./ui/pill-button";

const NAV = ["Places", "Our sponsors", "Members", "Contact us"];

export function SiteHeader() {
  return (
    <header className="relative z-20 bg-ink">
      <div className="mx-auto flex h-[162px] max-w-[1440px] items-center justify-between px-6 lg:px-20">
        <div className="flex items-center gap-6 xl:gap-[38px]">
          <a href="#" className="flex shrink-0 items-end">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo-js.png"
              alt=""
              aria-hidden
              width={83}
              height={82}
              className="h-[clamp(52px,5.7vw,82px)] w-[clamp(53px,5.8vw,83px)] object-contain"
            />
            <span className="font-wordmark text-wordmark text-[clamp(26px,2.9vw,41.9px)] leading-[0.9] tracking-[clamp(1.3px,0.15vw,2.09px)]">
              <span className="block">COMMUNITY</span>
              <span className="block">INDIA</span>
              <span className="sr-only">Javascript Community India</span>
            </span>
          </a>

          <nav className="hidden items-center gap-4 lg:flex">
            {NAV.map((item) => (
              <a
                key={item}
                href="#"
                className="font-ui text-muted flex h-12 items-center px-2 py-3 text-base leading-6 font-medium tracking-[0.5px] whitespace-nowrap transition-colors hover:text-white"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#"
            className="font-ui text-brand hidden rounded-lg px-6 py-3 text-base leading-6 font-medium tracking-[0.5px] whitespace-nowrap sm:inline-flex"
          >
            Log In
          </a>
          <PillButton tone="brand" href="#">
            Sign Up
          </PillButton>
        </div>
      </div>
    </header>
  );
}
