import { twMerge } from "tailwind-merge";

type SectionHeadingAlign = "left" | "center";
type SectionHeadingTone = "default" | "inverted";

interface ISectionHeadingProps {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  align?: SectionHeadingAlign;
  tone?: SectionHeadingTone;
  className?: string;
}

const alignments: Record<SectionHeadingAlign, string> = {
  left: "text-left",
  center: "mx-auto text-center",
};

const tones: Record<
  SectionHeadingTone,
  { eyebrow: string; title: string; description: string }
> = {
  default: {
    eyebrow: "text-brand-primary",
    title: "text-text-primary",
    description: "text-text-secondary",
  },
  inverted: {
    eyebrow: "text-white/85",
    title: "text-white",
    description: "text-white/90",
  },
};

export default function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "left",
  tone = "default",
  className,
}: ISectionHeadingProps) {
  const colors = tones[tone];

  return (
    <div className={twMerge("max-w-xl", alignments[align], className)}>
      {eyebrow && (
        <p
          className={`text-xs font-semibold uppercase tracking-[0.16em] md:text-[13px] ${colors.eyebrow}`}
        >
          {eyebrow}
        </p>
      )}

      <h2
        id={id}
        className={`mt-3 text-[32px] font-bold leading-[1.1] tracking-[-0.03em] md:mt-4 md:text-5xl md:leading-[1.15] ${colors.title}`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-4 max-w-[530px] text-base leading-[1.65] md:text-lg ${colors.description}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
