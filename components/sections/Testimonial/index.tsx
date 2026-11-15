import Image from "next/image";

import Container from "@/components/ui/Container";

interface StatDTO {
  value: string;
  label: string;
}

const stats: StatDTO[] = [
  { value: "24K+", label: "active learners" },
  { value: "120+", label: "expert-led courses" },
  { value: "92%", label: "complete their first course" },
];

export default function Testimonial() {
  return (
    <section
      aria-label="What our learners say"
      className="bg-white py-16 md:py-24"
    >
      <Container className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_auto] md:items-center md:gap-16">
        <figure className="max-w-xl">
          <span
            aria-hidden="true"
            className="block font-serif text-5xl font-bold leading-none text-brand-primary"
          >
            &rdquo;
          </span>

          <blockquote className="mt-2 font-heading text-xl font-semibold leading-snug text-text-primary md:text-2xl">
            <p>
              The lessons are short enough to fit into my week, but detailed
              enough that I actually leave with something I can use.
            </p>
          </blockquote>

          <figcaption className="mt-6 flex items-center gap-3">
            <span className="relative size-10 overflow-hidden rounded-full">
              <Image
                src="/Images/person4.jpg"
                alt=""
                fill
                sizes="40px"
                className="object-cover"
              />
            </span>
            <span>
              <span className="block text-sm font-bold text-text-primary">
                Alex Morgan
              </span>
              <span className="block text-xs text-text-secondary">
                Product Manager
              </span>
            </span>
          </figcaption>
        </figure>

        <dl className="grid grid-cols-3 gap-4 md:grid-cols-1 md:gap-8 md:border-l md:border-border md:pl-12 items-start">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse">
              <dt className="mt-1 text-[11px] leading-4 text-text-secondary">
                {stat.label}
              </dt>
              <dd className="font-heading text-3xl font-bold text-brand-primary md:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
