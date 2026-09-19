/*
  `div.ui-ai-large-logo` — the chrome "JS" tile with the multicoloured bloom
  behind it. In Figma the bloom is five stacked radial fills offset by a few
  percent each and blurred; reproduced here as five positioned layers.
*/

const ring = (color: string) =>
  `radial-gradient(ellipse 70.7% 70.7% at 50% 50%, ${color} 0%, transparent 100%)`;

const GLOWS = [
  { color: "#00ccb1", className: "inset-0" },
  { color: "#00ccb1", className: "inset-x-0 top-[21.87%] -bottom-[21.87%]" },
  { color: "#926c15", className: "inset-x-0 -top-[25%] bottom-[25%]" },
  { color: "#ffc414", className: "top-[7.5%] -right-[24.37%] -bottom-[7.5%] left-[24.37%]" },
  { color: "#7b61ff", className: "top-[2.5%] right-[20%] -bottom-[2.5%] -left-[20%]" },
];

export function JsBadge() {
  return (
    <div className="relative flex max-w-[124.5px] items-start p-[1.6px]">
      {GLOWS.map((glow, i) => (
        <div
          key={i}
          aria-hidden
          className={`absolute rounded-[31.1px] ${glow.className} ${
            i === 0 ? "" : "opacity-60 blur-[9.3px]"
          }`}
          style={{ backgroundImage: ring(glow.color) }}
        />
      ))}

      <div
        className="relative flex size-[121.4px] shrink-0 items-center justify-center overflow-hidden rounded-[29.6px] shadow-[0px_4.7px_6.2px_0.78px_rgba(0,0,0,0.5)]"
        style={{
          backgroundImage:
            "linear-gradient(145deg, rgb(32, 31, 34) 0%, rgb(5, 5, 5) 100%)",
        }}
      >
        <span className="text-chrome font-display pt-[8.5px] text-[85.6px] leading-none font-bold">
          JS
        </span>
      </div>
    </div>
  );
}
