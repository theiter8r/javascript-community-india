import { PillButton } from "./ui/pill-button";

export function HeroSection() {
  return (
    <section className="relative">
      {/*
        The still runs full-bleed across the 1440 grid from y=83 to y=1022, so
        it starts *behind* the header's solid black band — hence the pull up.
        The band (z-20) clips its top 79px exactly as the comp does.

        Height is capped against the viewport as well as its width: the comp's
        939px hero is roughly one screen on the 1440x1067 it was drawn for, and
        sizing off `vw` alone made it overflow the fold on short windows.
      */}
      <div className="relative -mt-[clamp(30px,5.5vw,79px)] h-[clamp(420px,min(120vw,88vh),939px)] overflow-hidden rounded-[32px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero-mumbai.png"
          alt="The Bandra–Worli Sea Link at dusk"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/*
          Centred rather than pinned to a fixed top offset, then nudged down by
          61px — which is exactly where the comp's block sits at 1440 — so the
          composition holds at any hero height.
        */}
        <div className="absolute inset-0 mx-auto flex max-w-[1440px] translate-y-[clamp(10px,min(4.2vw,5.5vh),61px)] flex-col items-center justify-center gap-[clamp(20px,min(5.6vw,7vh),81px)] px-6 text-center">
          <div className="flex w-full max-w-[1340px] flex-col items-center gap-[clamp(14px,min(2.7vw,3.4vh),38.9px)] text-white">
            {/* Neutraface is much narrower than the Poppins stand-in, so the
                tracking comes down from 0.05em to keep this on two lines. */}
            <h1 className="font-display text-[clamp(24px,min(6.9vw,11vh),99.7px)] leading-[0.9] font-bold tracking-[0.03em]">
              Javascript Pune is now
              <br />
              in Mumbai
            </h1>
            <p className="text-[clamp(14px,min(1.5vw,2.4vh),21.8px)]">
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </p>
          </div>

          <PillButton href="#">Deets inside</PillButton>
        </div>
      </div>
    </section>
  );
}
