/*
  `div.ui-ai-canvas` — the recessed grey plate with the faint dot grid that
  shows up inside the playground panels and the team cards.
*/
export function DotCanvas({ className = "" }: { className?: string }) {
  return (
    <div
      className={`overflow-hidden border border-canvas-line bg-canvas ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/dot-grid.png"
        alt=""
        aria-hidden
        className="h-full w-full object-cover opacity-40"
      />
    </div>
  );
}
