import type { CSSProperties, ReactNode } from "react";
import { SectionHeading } from "./ui/section-heading";

/*
  Cropped from the community's event photos to the two card ratios (1.47 and
  0.70) — see public/images/gallery.
*/
const WIDE: Photo[] = [
  { src: "/images/gallery/wide-1.webp", alt: "A packed room of attendees at a JS Community India meetup" },
  { src: "/images/gallery/wide-2.webp", alt: "Attendees seated across the venue, watching a talk" },
  { src: "/images/gallery/wide-3.webp", alt: "A speaker being handed a gift at the front of the room" },
  { src: "/images/gallery/wide-4.webp", alt: "A speaker presenting from the screen to the room" },
];

const NARROW: Photo[] = [
  { src: "/images/gallery/narrow-1.webp", alt: "Two members with a community gift" },
  { src: "/images/gallery/narrow-2.webp", alt: "A speaker taking the room through their slides" },
  { src: "/images/gallery/narrow-3.webp", alt: "A speaker opening a JS Community India session" },
  { src: "/images/gallery/narrow-4.webp", alt: "Members talking together between sessions" },
];

export function GallerySection() {
  return (
    <section className="relative mx-auto mt-[clamp(120px,24.4vw,351.7px)] w-full max-w-[934px] px-6 lg:px-0">
      <div className="flex flex-col items-center gap-[clamp(32px,3.7vw,52.9px)]">
        <SectionHeading className="w-full text-center">Gallery</SectionHeading>

        <div className="flex w-full flex-col gap-[18.7px]">
          <div className="grid grid-cols-1 gap-[18.7px] sm:grid-cols-2">
            <Card photo={WIDE[0]}>
              <TextToDesignOrbits />
            </Card>
            <Card photo={WIDE[1]}>
              <SuggestOrbits className="top-0 -left-[109px]" />
              <SuggestOrbits className="top-0 -right-[116.8px]" />
            </Card>
          </div>

          <div className="grid grid-cols-1 gap-[18.7px] sm:grid-cols-2">
            <Card photo={WIDE[2]}>
              <IterateOrbits />
            </Card>
            <Card photo={WIDE[3]} />
          </div>

          <div className="grid grid-cols-2 gap-[18.7px] lg:grid-cols-4">
            <Card photo={NARROW[0]}>
              <GeniusRings />
            </Card>
            <Card photo={NARROW[1]} />
            <Card photo={NARROW[2]}>
              <FigmaCorner />
            </Card>
            <Card photo={NARROW[3]}>
              <ChatOrbits />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

type Photo = { src: string; alt: string };

/*
  A card shows a meetup photo when it has one, and otherwise falls back to the
  decorated empty state the comp draws (orbits, rings, the window corner).
*/
function Card({ photo, children }: { photo?: Photo; children?: ReactNode }) {
  return (
    <div className="border-hairline bg-panel relative h-[311.4px] overflow-hidden rounded-[18.7px] border">
      {photo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={photo.src}
          alt={photo.alt}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      ) : (
        children
      )}
    </div>
  );
}

/* ---------------------------------------------------------------- orbits -- */

type OrbitProps = {
  src: string;
  size: number;
  left: number;
  top: number;
  opacity: number;
  style?: CSSProperties;
};

function Orbit({ src, size, left, top, opacity, style }: OrbitProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt=""
      aria-hidden
      className="absolute max-w-none"
      style={{ width: size, height: size, left, top, opacity, ...style }}
    />
  );
}

/* A `div.planet-*-genius` dot: a flat blue disc rather than an exported glyph. */
function PlanetDot({ style }: { style: CSSProperties }) {
  return (
    <span
      aria-hidden
      className="absolute size-[9.3px] rounded-full bg-[#79aeff]"
      style={style}
    />
  );
}

/* Card 1 — `div.text-to-design-absolute`: five nested rings drifting off the
   top-left corner, with a handful of planets riding them. */
function TextToDesignOrbits() {
  return (
    <div className="absolute inset-x-0 top-[56.8px] bottom-0" aria-hidden>
      <Orbit src="/images/orbit-05.svg" size={416.5} left={19.9} top={-82.9} opacity={0.1} />
      <Orbit src="/images/orbit-04.svg" size={342.5} left={56.8} top={-44.4} opacity={0.1} />
      <Orbit src="/images/orbit-03.svg" size={272.4} left={91.9} top={-9.3} opacity={0.15} />
      <Orbit src="/images/orbit-02.svg" size={202.4} left={126.9} top={25.7} opacity={0.2} />
      <Orbit src="/images/orbit-01.svg" size={132.3} left={161.9} top={60.7} opacity={0.3} />

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/planet-gray.svg"
        alt=""
        className="absolute size-[9.3px] rotate-[103.2deg] opacity-30"
        style={{ left: 210.6, top: 59.3 }}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/planet-blue-2.svg"
        alt=""
        className="absolute size-[9.3px] rotate-[103.2deg] opacity-15"
        style={{ left: 241.1, top: -11.3 }}
      />
      <PlanetDot style={{ left: 199.5, top: 34.6, opacity: 0.2 }} />
      <PlanetDot style={{ left: 68.3, top: 61.1, opacity: 0.1 }} />
    </div>
  );
}

/* Card 2 — `div.auto-suggest-absolute`: three wide rings hanging off each
   vertical edge so only their arcs read inside the card. */
function SuggestOrbits({ className }: { className: string }) {
  return (
    <div className={`absolute bottom-[-18%] w-px ${className}`} aria-hidden>
      <Orbit src="/images/orbit-05.svg" size={416.5} left={-208.2} top={-26.4} opacity={0.1} />
      <Orbit src="/images/orbit-04.svg" size={342.5} left={-171.3} top={10.4} opacity={0.1} />
      <Orbit src="/images/orbit-03.svg" size={272.4} left={-136.2} top={47.1} opacity={0.15} />
    </div>
  );
}

/* Card 3 — `div.auto-iterates-absolute`: the same stack, rotated 18° and
   pushed off the right edge. */
function IterateOrbits() {
  return (
    <div
      className="absolute top-[16.6px] -right-[182.3px] w-px origin-top rotate-18"
      aria-hidden
    >
      <Orbit src="/images/orbit-05.svg" size={416.5} left={-208.2} top={113.3} opacity={0.1} />
      <Orbit src="/images/orbit-04.svg" size={342.5} left={-171.3} top={150.1} opacity={0.1} />
      <Orbit src="/images/orbit-03.svg" size={272.4} left={-136.2} top={186.8} opacity={0.15} />
      <Orbit src="/images/orbit-02.svg" size={202.4} left={-101.2} top={221.9} opacity={0.2} />
      <Orbit src="/images/orbit-01.svg" size={132.3} left={-66.2} top={256.4} opacity={0.25} />
    </div>
  );
}

/* Card 5 — `div.ui-ai-genius-logo`: a blank tile inside four concentric
   hairline rings that fade as they widen. */
const GENIUS_RINGS = [
  { inset: "-15.63%", radius: 40.5, opacity: 0.4 },
  { inset: "-31.25%", radius: 56, opacity: 0.2 },
  { inset: "-46.88%", radius: 71.6, opacity: 0.1 },
  { inset: "-62.5%", radius: 87.2, opacity: 0.04 },
];

function GeniusRings() {
  return (
    <div
      className="absolute top-[144px] left-1/2 size-[99.6px] -translate-x-1/2"
      aria-hidden
    >
      {GENIUS_RINGS.map((ring) => (
        <div
          key={ring.inset}
          className="absolute border border-[#9292af]"
          style={{
            inset: ring.inset,
            borderRadius: ring.radius,
            opacity: ring.opacity,
          }}
        />
      ))}
      <div
        className="absolute inset-0 rounded-[24.9px] border border-[#9292af] shadow-[0px_19.5px_15.6px_-0.8px_rgba(0,0,0,0.2),inset_0px_-0.8px_0.8px_0.8px_rgba(204,199,199,0.2),inset_0px_0.8px_0.8px_0.8px_rgba(204,199,199,0.2)]"
        style={{
          backgroundImage:
            "linear-gradient(145deg, rgb(32, 31, 34) 0%, rgb(20, 19, 22) 100%)",
        }}
      />
    </div>
  );
}

/* Card 7 — `div.figma-corner`: a slice of an app window pinned to the
   bottom-left, grain and all. */
function FigmaCorner() {
  return (
    <div
      aria-hidden
      className="absolute -bottom-[9.3px] -left-[1.6px] h-[209.4px] w-[193px] rounded-tr-[7.8px] border border-[#2c2c2e] shadow-[0px_0px_3.9px_0px_rgba(0,0,0,0.4)]"
      style={{
        backgroundImage:
          "radial-gradient(ellipse 76% 76% at 50% 50%, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 76%), linear-gradient(90deg, rgba(255,255,255,0.01) 0%, rgba(255,255,255,0.01) 100%)",
      }}
    >
      <div className="absolute top-[87.2px] -bottom-[87.2px] left-[29.6px] w-[155.7px] border-l border-[rgba(255,255,255,0.07)]" />
      <div className="absolute inset-0 overflow-hidden rounded-tr-[7.8px] opacity-52">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/figma-grain.png"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-x-0 top-0 h-[37.4px] rounded-tr-[7.8px] border-b border-[rgba(255,255,255,0.07)] bg-[rgba(0,0,0,0.16)]" />
    </div>
  );
}

/* Card 8 — `div.chat-orbit-container` plus the soft `div.chat-blur` wash. */
function ChatOrbits() {
  return (
    <>
      <div
        className="absolute top-[72.4px] left-[7.8px] size-[194.6px]"
        aria-hidden
      >
        <Orbit src="/images/orbit-01.svg" size={233.5} left={-19.5} top={-20.3} opacity={0.1} />
        <Orbit src="/images/orbit-01.svg" size={194.6} left={0} top={-0.7} opacity={0.1} />
        <Orbit src="/images/orbit-01.svg" size={155.7} left={19.5} top={18.9} opacity={0.15} />
        <Orbit src="/images/orbit-01.svg" size={109} left={42.8} top={42.4} opacity={0.2} />
        <Orbit src="/images/orbit-01.svg" size={68.5} left={63} top={62.8} opacity={0.25} />
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/chat-blur.png"
        alt=""
        aria-hidden
        className="absolute top-[-155.7px] -right-[16.67%] -left-[25.18%] h-[311.4px] max-w-none"
      />
    </>
  );
}
