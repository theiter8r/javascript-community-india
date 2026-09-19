import type { ReactNode } from "react";

/*
  The 64.45px (Figma) / 53.7px (design grid) display heading used by
  "See what the fuss is about.", "Gallery" and "Snag the details."
*/
export function SectionHeading({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`text-ramp font-display text-[clamp(34px,4.4vw,53.7px)] leading-[1.11] font-bold tracking-[-0.156px] ${className}`}
    >
      {children}
    </h2>
  );
}
