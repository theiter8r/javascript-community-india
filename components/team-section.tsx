import { DotCanvas } from "./ui/dot-canvas";

export function TeamSection() {
  return (
    <section className="relative mx-auto mt-[clamp(96px,15.9vw,228.7px)] w-full max-w-[984px] px-6 lg:px-0">
      <div className="flex flex-col items-center gap-[clamp(48px,5.8vw,83.3px)]">
        <TeamHeading />

        <div className="flex w-full max-w-[819.4px] flex-col items-center gap-[30.5px]">
          <div className="flex w-full items-center justify-center gap-[clamp(12px,2.2vw,31.1px)]">
            <EmptyCard className="hidden sm:block" />

            {/*
              Exported straight from Figma: the frame already bakes in the
              panel, its dot grid and the cut-out portrait.
            */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/team-shrinivas.png"
              alt="Shrinivas Shah"
              width={316}
              height={433}
              className="border-hairline bg-panel h-[433px] w-[316.4px] shrink-0 rounded-[19px] border object-cover"
            />

            <EmptyCard className="hidden sm:block" />
          </div>

          <div className="flex w-[208px] flex-col items-center text-center">
            <p className="text-ramp-x text-[29.2px] leading-[41.5px] font-semibold">
              Shrinivas Shah
            </p>
            <p className="text-ramp-x text-[16.2px] font-medium">Founder</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/*
  `Group 35516` — the spellbook sits behind the heading, its top half showing
  above the first line and its foot below the second.
*/
function TeamHeading() {
  return (
    <div className="relative flex h-[164.9px] flex-col items-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/team-book.png"
        alt=""
        aria-hidden
        className="absolute top-0 left-1/2 h-[164.9px] w-[116.9px] -translate-x-1/2 object-contain opacity-80"
      />
      {/* Sized by its own text rather than the 295.8px Figma group, which was
          measured in Neutraface and clips the wider stand-in face. */}
      <h2 className="text-ramp font-display relative mt-[63.2px] text-center text-[clamp(26px,2.8vw,40.3px)] leading-[1.16] font-bold tracking-[-0.117px] lg:whitespace-nowrap">
        Meet the team
        <br />
        behind the scoop
      </h2>
    </div>
  );
}

/*
  `div.ui-ai-playground-canvas` — the shorter, unfilled cards flanking the
  featured member.
*/
function EmptyCard({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative h-[318.3px] w-[220.4px] shrink-0 overflow-hidden rounded-[19px] shadow-[0px_15.9px_19.8px_-4px_rgba(0,0,0,0.8),0px_7.9px_7.9px_-4px_rgba(0,0,0,0.9)] ${className}`}
      style={{
        backgroundImage: "linear-gradient(180deg, #242325 0%, #171619 100%)",
      }}
      aria-hidden
    >
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_0.8px_1.6px_0px_#525154]" />
      <DotCanvas className="absolute top-[24px] right-0 left-[17.5px] h-[294.3px] rounded-[12.7px]" />
    </div>
  );
}
