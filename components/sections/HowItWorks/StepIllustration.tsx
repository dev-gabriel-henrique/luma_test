export type StepIllustrationVariant = "focus" | "experience" | "practice";

interface IStepIllustrationProps {
  variant: StepIllustrationVariant;
}

const illustrations: Record<
  StepIllustrationVariant,
  { background: string; foreground: string }
> = {
  focus: {
    background: "size-9 rounded-full bg-brand-primary-light",
    foreground: "left-1 top-1 size-4 rounded bg-brand-primary",
  },
  experience: {
    background: "size-9 rotate-12 rounded-lg bg-orange",
    foreground: "left-4.5 top-4 size-4 rounded-full bg-coral",
  },
  practice: {
    background: "size-9 rounded-lg bg-brand-secondary-light",
    foreground: "left-1 bottom-3 size-3 rounded-full bg-brand-secondary",
  },
};

export default function StepIllustration({ variant }: IStepIllustrationProps) {
  const { background, foreground } = illustrations[variant];

  return (
    <div aria-hidden="true" className="relative size-11">
      <span className={`absolute left-0 top-0 ${background}`} />
      <span className={`absolute ${foreground}`} />
    </div>
  );
}
