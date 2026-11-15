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
    eyebrow: "text-white/80",
    title: "text-white",
    description: "text-white/85",
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
          className={`text-[10px] font-bold uppercase tracking-[0.18em] ${colors.eyebrow}`}
        >
          {eyebrow}
        </p>
      )}

      <h2
        id={id}
        className={`mt-3 text-3xl font-bold leading-[1.1] tracking-tight md:text-4xl ${colors.title}`}
      >
        {title}
      </h2>

      {description && (
        <p className={`mt-4 text-sm leading-6 ${colors.description}`}>
          {description}
        </p>
      )}
    </div>
  );
}
