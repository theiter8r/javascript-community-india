import type { ComponentPropsWithoutRef } from "react";

type Tone = "brand" | "deep";

const tones: Record<Tone, string> = {
  // Header "Sign Up" — flat brand yellow with a 2px ring of the same colour.
  brand:
    "bg-brand border-2 border-brand px-7 py-3 text-base leading-6 tracking-[0.5px] font-medium",
  // Hero / CTA — the deeper, more muted gold.
  deep: "bg-brand-deep px-[29.9px] py-[12.8px] text-[17.1px] leading-[25.7px] tracking-[0.535px] font-bold",
};

type PillButtonProps = ComponentPropsWithoutRef<"a"> & {
  tone?: Tone;
};

export function PillButton({
  tone = "deep",
  className = "",
  children,
  ...props
}: PillButtonProps) {
  return (
    <a
      className={`inline-flex items-center justify-center rounded-full font-ui whitespace-nowrap text-white transition-opacity hover:opacity-90 ${tones[tone]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
