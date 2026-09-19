/*
  Everything on the page that lives behind the sections: four bands of the
  `6418f6e0109266f276d32960_stars.svg` particle field and two oversized
  `div.ui-ai-dot-grid` panels. Offsets are absolute from the top of the
  document, taken from the Figma frame and divided by 1.2.

  Hidden below `lg` — at narrow widths the sections reflow and the fixed
  offsets would land in the wrong places.
*/

/* The star SVG exports with its own near-black backdrop baked in; `screen`
   drops that and leaves just the particles over the page wash. */
const STAR_BANDS = [479, 1047, 2287, 2579];

const DOT_GRIDS = [
  { top: 1253, left: -52.5 },
  { top: 2010, left: 1073 },
];

export function PageDecor() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block"
    >
      {/* The offsets below are measured on the 1440 grid, so they hang off a
          centred column of that width rather than the full-bleed page. */}
      <div className="absolute top-0 left-1/2 h-full w-[1440px] -translate-x-1/2">
      {DOT_GRIDS.map((grid) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={`${grid.top}-${grid.left}`}
          src="/images/page-dot-grid.png"
          alt=""
          className="absolute h-[450.8px] w-[996.7px] max-w-none"
          style={{ top: grid.top, left: grid.left }}
        />
      ))}

      {STAR_BANDS.map((top) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={top}
          src="/images/stars.svg"
          alt=""
          className="absolute h-[285px] w-[1439px] max-w-none mix-blend-screen"
          style={{ top, left: -1.7 }}
        />
      ))}
      </div>
    </div>
  );
}
