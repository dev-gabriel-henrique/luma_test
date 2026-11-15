import Link from "next/link";

import Container from "@/components/ui/Container";
import { ComboDTO } from "@/utils/types";

interface FooterGroupDTO {
  title: string;
  links: ComboDTO[];
}

const footerGroups: FooterGroupDTO[] = [
  {
    title: "Explore",
    links: [
      { label: "Courses", value: "#courses" },
      { label: "Categories", value: "#categories" },
      { label: "Instructors", value: "#instructors" },
      { label: "For Teams", value: "#contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", value: "#about" },
      { label: "Careers", value: "#careers" },
      { label: "Journal", value: "#journal" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", value: "#help-center" },
      { label: "Contact", value: "#contact" },
      { label: "Terms", value: "#terms" },
      { label: "Privacy", value: "#privacy" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-auto w-full bg-foreground pb-5 pt-15 md:pb-10">
      <Container>
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="md:flex-1">
            <Link
              href="#home"
              aria-label="Luma - Home Page"
              className="font-heading text-lg font-bold text-white"
            >
              luma.
            </Link>
            <p className="mt-2 max-w-48 text-xs leading-5 text-text-secondary">
              Practical learning for curious people.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 md:flex md:flex-1 md:justify-between md:gap-8">
            {footerGroups.map((group) => (
              <nav key={group.title} aria-label={group.title}>
                <h5 className="text-[10px] font-bold uppercase tracking-[0.18em] text-white">
                  {group.title}
                </h5>

                <ul className="mt-4 space-y-4">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.value}
                        className="text-xs text-text-secondary transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <hr className="my-6 border-text-secondary/40 md:my-8" />

        <p className="text-center text-xs text-text-secondary md:text-start">
          © 2026 Luma Learning
        </p>
      </Container>
    </footer>
  );
}
