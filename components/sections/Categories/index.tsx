import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

import CategoryCard, { CategoryDTO } from "./CategoryCard";

const categories: CategoryDTO[] = [
  {
    title: "Product Design",
    description: "Turn complex problems into clear, useful experiences.",
    href: "#product-design",
  },
  {
    title: "Technology",
    description:
      "Build a stronger understanding of the tools shaping digital products.",
    href: "#technology",
  },
  {
    title: "Business",
    description:
      "Develop practical skills for better decisions and stronger teams.",
    href: "#business",
  },
  {
    title: "Creative",
    description: "Explore new ways to communicate, create and tell stories.",
    href: "#creative",
  },
];

export default function Categories() {
  return (
    <section
      id="courses"
      aria-labelledby="categories-title"
      className="bg-white py-16 md:py-25"
    >
      <Container>
        <SectionHeading
          id="categories-title"
          eyebrow="Find your next skill"
          title="Learn something worth knowing."
          description="Short, practical courses designed around skills you can put to work immediately."
        />

        <ul className="mt-11 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {categories.map((category, index) => (
            <li key={category.title}>
              <CategoryCard category={category} position={index + 1} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
