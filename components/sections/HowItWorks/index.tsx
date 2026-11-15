import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

import StepIllustration, { StepIllustrationVariant } from "./StepIllustration";

interface StepDTO {
  title: string;
  description: string;
  illustration: StepIllustrationVariant;
}

const steps: StepDTO[] = [
  {
    title: "Choose your focus",
    description:
      "Find courses based on the skill you want to build, not endless content categories.",
    illustration: "focus",
  },
  {
    title: "Learn from experience",
    description:
      "Follow concise lessons created by professionals who use these skills.",
    illustration: "experience",
  },
  {
    title: "Put it into practice",
    description:
      "Every course includes practical exercises designed to turn knowledge into action.",
    illustration: "practice",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-title"
      className="bg-background py-16 md:py-24"
    >
      <Container>
        <SectionHeading
          id="how-it-works-title"
          align="center"
          eyebrow="How Luma works"
          title="Less browsing. More learning."
        />

        <ol className="relative mt-12 grid grid-cols-1 gap-12 md:mt-16 md:grid-cols-3 md:gap-10">
          {steps.map((step, index) => (
            <li key={step.title} className="relative">
              {index < steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute left-4.5 top-4.5 hidden h-px w-[calc(100%+2.5rem)] bg-border md:block"
                />
              )}

              <StepIllustration variant={step.illustration} />

              <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.18em] text-text-secondary">
                Step {String(index + 1).padStart(2, "0")}
              </p>

              <h3 className="mt-2 text-base font-bold text-text-primary">
                {step.title}
              </h3>

              <p className="mt-3 max-w-xs text-xs leading-5 text-text-secondary">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
