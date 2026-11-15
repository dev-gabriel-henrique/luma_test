import Image from "next/image";

import AvatarGroup from "@/components/ui/AvatarGroup";
import { LinkButton } from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { LEARNER_AVATARS } from "@/utils/constants";

import CoursesBadge from "./CoursesBadge";
import RatingBadge from "./RatingBadge";

const TRUSTED_AVATARS_COUNT = 3;

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="overflow-hidden bg-background"
    >
      <Container className="grid grid-cols-1 items-center gap-12 py-15 lg:grid-cols-[minmax(0,1fr)_500px] lg:gap-20 lg:py-25">
        <div className="relative mx-2 max-w-[500px] sm:mx-auto sm:w-full lg:order-2">
          <div className="absolute -left-4.5 bottom-3 size-24 rounded-full bg-brand-primary-light lg:-left-11 lg:bottom-2.5 lg:size-28" />
          <div className="absolute -right-4.5 top-6 bottom-3.5 w-1/3 rounded-2xl bg-orange lg:-right-9.5 lg:bottom-7" />

          <div className="relative aspect-10/11 overflow-hidden rounded-3xl bg-white lg:aspect-25/26">
            <Image
              src="/Images/heroImage.jpg"
              alt="A smiling student with glasses learning on a laptop"
              fill
              loading="eager"
              fetchPriority="high"
              sizes="(max-width: 1023px) 100vw, 500px"
              className="object-cover"
            />
          </div>

          <CoursesBadge className="-left-2 top-1.5 lg:-left-5.5 lg:top-4" />
          <RatingBadge className="-right-4.5 bottom-9 lg:-right-14" />
        </div>

        <div className="lg:order-1">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-primary md:text-[13px]">
            Learn at your own pace
          </p>

          <h1
            id="hero-title"
            className="mt-6 text-[40px] font-bold leading-[1.1] tracking-[-0.04em] text-text-primary md:text-5xl lg:mt-4 lg:text-[64px]"
          >
            Build skills that actually move you forward.
          </h1>

          <p className="mt-8 max-w-[480px] text-base leading-[1.65] text-text-secondary md:text-lg lg:mt-6">
            Practical courses taught by people who do the work every day. Learn
            design, technology, business and more — one focused lesson at a
            time.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <LinkButton href="#courses">Explore courses</LinkButton>
            <LinkButton href="#how-it-works" variant="neutral">
              See how it works
            </LinkButton>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4 sm:justify-start">
            <AvatarGroup
              avatars={LEARNER_AVATARS.slice(0, TRUSTED_AVATARS_COUNT)}
            />
            <p className="text-[15px] text-text-secondary">
              <span className="font-semibold text-text-primary">
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
