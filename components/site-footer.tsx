const SOCIALS = [
  { label: "Twitter", src: "/images/icon-twitter.svg" },
  { label: "Read.cv", src: "/images/icon-readcv.svg" },
  { label: "Discord", src: "/images/icon-discord.svg" },
  { label: "Instagram", src: "/images/icon-instagram.svg" },
];

export function SiteFooter() {
  return (
    <footer className="relative mt-[clamp(140px,28vw,403.5px)] flex justify-center overflow-hidden px-6 pt-[clamp(120px,22.2vw,320px)] pb-4 lg:px-[120px]">
      <div className="relative w-full max-w-[1200px]">
        {/* `646d4d2680dab2a392420fbb_diagram-footer.png` — the dial that bleeds
            off the bottom-left corner of the page. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/footer-glow.png"
          alt=""
          aria-hidden
          className="pointer-events-none absolute -bottom-[308.8px] -left-[225px] h-[606.4px] w-[610px] max-w-none"
        />

        <div className="relative flex h-10 flex-wrap items-center justify-between gap-4 lg:justify-start">
          <p className="text-subtle text-[13px] leading-6 font-medium opacity-80 lg:absolute lg:left-[320px]">
            ©2026 Javascript Mumbai
          </p>

          <div className="flex items-center lg:absolute lg:left-[1056px]">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href="#"
                aria-label={social.label}
                className="pr-3 transition-opacity hover:opacity-70"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={social.src}
                  alt=""
                  aria-hidden
                  width={24}
                  height={24}
                  className="size-6"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
