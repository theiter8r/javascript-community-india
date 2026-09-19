import { DotCanvas } from "./ui/dot-canvas";
import { JsBadge } from "./ui/js-badge";
import { SectionHeading } from "./ui/section-heading";

const BODY = `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis`;

export function FussSection() {
  return (
    <section className="relative mx-auto mt-[clamp(96px,15.7vw,226px)] w-full max-w-[1194px] px-6 lg:px-0">
      <div className="flex flex-col items-center gap-[clamp(40px,4.5vw,64.6px)]">
        {/* The heading sets its own width — the 311px column in Figma is the
            badge's, and the two lines are allowed to run wider than it. */}
        <div className="flex flex-col items-center gap-[24.9px]">
          <JsBadge />
          <SectionHeading className="text-center lg:whitespace-nowrap">
            See what the
            <br />
            fuss is about.
          </SectionHeading>
        </div>

        <div className="flex w-full flex-col items-start gap-[clamp(40px,5.6vw,81px)] lg:flex-row">
          <p className="w-full text-[clamp(16px,1.35vw,19.46px)] text-white lg:w-[553.5px]">
            {BODY}
          </p>

          <PlaygroundPanel />
        </div>
      </div>
    </section>
  );
}

/*
  `div#w-node-_628f54e1…` — the framed playground screenshot on the right.
  A panel holds an inset "canvas" whose top bar carries the Save to Diagram
  button and a 1x/2x tabber, both dimmed to 30%.
*/
function PlaygroundPanel() {
  return (
    <div className="border-hairline bg-panel relative aspect-[560/381] w-full shrink-0 overflow-hidden rounded-[22.8px] border lg:h-[380.7px] lg:w-[559.7px]">
      <div
        className="absolute top-[6.5%] left-[4%] h-[89%] w-[91.8%] overflow-hidden rounded-[22.8px] shadow-[0px_19px_23.8px_-4.8px_rgba(0,0,0,0.8),0px_9.5px_9.5px_-4.8px_rgba(0,0,0,0.9)]"
        style={{
          backgroundImage: "linear-gradient(180deg, #242325 0%, #171619 100%)",
        }}
      >
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_1px_1.9px_0px_#525154]" />

        <div className="absolute top-[19px] right-[19px] left-[19px] flex items-center gap-5 pr-[187px] opacity-30">
          <div className="border-hairline bg-canvas relative h-[30.5px] w-[129.5px] shrink-0 overflow-hidden rounded-[7.6px] border">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/diagram-logo.svg"
              alt=""
              aria-hidden
              className="absolute top-1/2 left-[11.4px] size-[11.4px] -translate-y-1/2 drop-shadow-[0px_1.9px_1.9px_rgba(0,0,0,0.32)]"
            />
            <span className="absolute top-1/2 left-[30.5px] -translate-y-1/2 text-[10.47px] leading-[13.3px] font-semibold text-white">
              Save to Diagram
            </span>
          </div>

          <div className="border-hairline bg-canvas flex shrink-0 items-stretch rounded-[5.7px] border p-px">
            <span className="flex w-[34.3px] items-center justify-center py-[7px] text-[9.5px] leading-[13.3px] font-semibold text-white">
              1x
            </span>
            <span className="border-hairline flex w-[34.3px] items-center justify-center border-x py-[7px] text-[10.47px] leading-[13.3px] font-semibold text-white">
              2x
            </span>
          </div>
        </div>

        {/* The canvas is taller than its frame — the comp lets it run off the
            bottom edge and relies on the panel's clip. */}
        <DotCanvas className="absolute top-[64.7px] right-[19px] left-[19px] h-[285.6px] rounded-[15.2px]" />
      </div>
    </div>
  );
}
