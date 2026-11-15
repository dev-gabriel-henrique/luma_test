import Image from "next/image";

import AvatarGroup from "@/components/ui/AvatarGroup";
import { LinkButton } from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { LEARNER_AVATARS } from "@/utils/constants";

import CoursesBadge from "./CoursesBadge";
import RatingBadge from "./RatingBadge";

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="overflow-hidden bg-background"
    >
      <Container className="grid grid-cols-1 items-center gap-10 py-8 sm:py-12 md:grid-cols-2 md:gap-12 md:py-20">
        <div className="relative mx-auto w-full max-w-md md:order-2 md:max-w-lg">
          <div className="absolute bottom-0 -left-5 size-16 rounded-full bg-brand-primary-light sm:size-26" />
          <div className="absolute -right-3 top-6 bottom-6 w-1/3 rounded-xl bg-orange" />

          <div className="relative aspect-2/3 overflow-hidden rounded-xl bg-white shadow-sm md:aspect-5/6">
            <Image
              src="/Images/heroImage.jpg"
              alt="A student learning on a laptop"
              fill
              loading="eager"
              fetchPriority="high"
              sizes="(max-width: 767px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <CoursesBadge className="-left-2 top-3 sm:-left-4 sm:top-4" />
          <RatingBadge className="-right-2 bottom-6 sm:-right-6" />
        </div>

        <div className="md:order-1">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-primary">
            Learn at your own pace
          </p>

          <h1
            id="hero-title"
            className="mt-3 max-w-xl text-4xl font-bold leading-[1.08] tracking-tight text-text-primary md:text-5xl lg:text-6xl"
          >
            Build skills that actually move you forward.
          </h1>

          <p className="mt-4 max-w-lg text-sm leading-6 text-text-secondary">
            Practical courses taught by people who do the work every day. Learn
            design, technology, business and more — one focused lesson at a
            time.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <LinkButton href="#courses" size="sm">
              Explore courses
            </LinkButton>
            <LinkButton href="#how-it-works" size="sm" variant="neutral">
              See how it works
            </LinkButton>
          </div>

          <div className="mt-6 flex items-center justify-center gap-3 sm:justify-start">
            <AvatarGroup avatars={LEARNER_AVATARS.filter((_, i) => i < 3)} />
            <p className="text-[11px] text-text-secondary">
              <span className="font-bold text-text-primary">
                Trusted by 24,000+
              </span>{" "}
              learners
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
