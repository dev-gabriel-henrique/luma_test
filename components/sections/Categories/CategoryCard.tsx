import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface CategoryDTO {
  title: string;
  description: string;
  href: string;
}

interface ICategoryCardProps {
  category: CategoryDTO;
  position: number;
}

export default function CategoryCard({
  category,
  position,
}: ICategoryCardProps) {
  const order = String(position).padStart(2, "0");

  return (
    <article className="flex h-full flex-col rounded-2xl border border-border bg-white p-6 transition-shadow hover:shadow-md lg:p-7">
      <span className="w-fit rounded-md bg-brand-primary-light px-2 py-1 text-[13px] font-semibold tracking-wider text-brand-primary">
        {order}
      </span>

      <h3 className="mt-6 text-xl font-semibold tracking-tight text-text-primary">
        {category.title}
      </h3>

      <p className="mt-4 flex-1 text-[15px] leading-6 text-text-secondary">
        {category.description}
      </p>

      <Link
        href={category.href}
        aria-label={`Explore ${category.title} courses`}
        className="group mt-6 inline-flex w-fit items-center gap-3 text-[15px] font-semibold text-text-primary hover:text-brand-primary"
      >
        Explore
        <ArrowRight
          size={18}
          aria-hidden="true"
          className="transition-transform group-hover:translate-x-1"
        />
      </Link>
    </article>
  );
}
