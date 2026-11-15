import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { LinkButton } from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const courseDetails: string[] = ["8 lessons", "2h 40min", "Intermediate"];

export default function FeaturedCourse() {
  return (
    <section
      id="featured-course"
      aria-labelledby="featured-course-title"
      className="bg-brand-primary py-16 md:py-24"
    >
      <Container className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-14">
        <div className="relative aspect-4/3 overflow-hidden rounded-xl bg-brand-primary-light">
          <Image
            src="/Images/course.jpg"
            alt="Designer organizing product prototypes on a desk"
            fill
            sizes="(max-width: 767px) 100vw, 50vw"
            className="object-cover"
          />
          <span className="absolute left-3 top-3 rounded bg-brand-secondary px-2 py-1 text-[9px] font-bold uppercase tracking-widest text-text-primary">
            Featured course
          </span>
        </div>

        <div>
          <SectionHeading
            id="featured-course-title"
            tone="inverted"
            eyebrow="Most popular this month"
            title="Designing products people understand."
            description="Learn how to turn complex workflows into simple, intentional product experiences through research, structure and thoughtful interaction design."
          />

          <p className="mt-5 text-xs text-white/85">
            with <span className="font-semibold text-white">Maya Chen</span> ·
            Senior Product Designer
          </p>

          <ul aria-label="Course details" className="mt-5 flex flex-wrap gap-2">
            {courseDetails.map((detail) => (
              <li
                key={detail}
                className="rounded-md border border-white/50 px-3 py-1.5 text-[11px] font-medium text-white"
              >
                {detail}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-6">
            <LinkButton
              href="#designing-products"
              variant="secondary"
              size="sm"
            >
              View course
            </LinkButton>

            <Link
              href="#courses"
              className="group inline-flex items-center justify-center gap-2 text-xs font-semibold text-white hover:underline"
            >
              Browse all courses
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
