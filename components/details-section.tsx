import { PillButton } from "./ui/pill-button";
import { SectionHeading } from "./ui/section-heading";

export function DetailsSection() {
  return (
    <section className="relative mx-auto mt-[clamp(120px,22.9vw,329.2px)] w-full max-w-[1194px] px-6 lg:px-0">
      <div className="flex flex-col items-center gap-[clamp(48px,7vw,101.2px)]">
        <div className="flex w-full flex-col items-center gap-[26.5px] text-center">
          <SectionHeading className="w-full">Snag the details.</SectionHeading>

          <p className="text-ramp font-display w-full text-[clamp(20px,2.4vw,35px)] font-normal">
            <span className="font-display font-semibold">
              Snag the details.{" "}
            </span>
            voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto
            beatae vitae dicta sunt umquam eius modi tempora incidunt ut labore
            et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
            veniam, quis
          </p>
        </div>

        <PillButton href="#" className="w-full max-w-[272.4px]">
          Get clued in
        </PillButton>
      </div>
    </section>
  );
}
