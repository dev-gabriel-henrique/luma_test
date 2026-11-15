import AvatarGroup from "@/components/ui/AvatarGroup";
import { LinkButton } from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { LEARNER_AVATARS } from "@/utils/constants";

import Decorations from "./Decorations";

export default function FinalCTA() {
  return (
    <section
      aria-labelledby="final-cta-title"
      className="relative overflow-hidden bg-brand-secondary-light py-24 md:py-32"
    >
      <Decorations />

      <Container className="relative flex flex-col items-center text-center">
        <AvatarGroup
          avatars={LEARNER_AVATARS}
          borderClassName="border-brand-secondary"
        />

        <h2
          id="final-cta-title"
          className="mt-8 max-w-sm text-4xl font-extrabold leading-[1.1] tracking-tight text-text-primary md:max-w-none md:text-6xl"
        >
          What will you learn next?
        </h2>

        <p className="mt-4 text-sm text-text-secondary">
          Start with one course. Build from there.
        </p>

        <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <LinkButton href="#courses" size="sm">
            Explore all courses
          </LinkButton>
          <LinkButton href="#signup" size="sm" variant="neutral">
            Join Luma
          </LinkButton>
        </div>
      </Container>
    </section>
  );
}
