import { ComboDTO } from "@/utils/types";
import Link from "next/link";

const navigation: ComboDTO[] = [
  { label: "Courses", value: "#courses" },
  { label: "For teams", value: "#teams" },
  { label: "Community", value: "#community" },
  { label: "About", value: "#about" },
];

const company: ComboDTO[] = [
  { label: "About", value: "#about" },
  { label: "Careers", value: "#careers" },
  { label: "Journal", value: "#journal" },
];

const support: ComboDTO[] = [
  { label: "Help Center", value: "#help-center" },
  { label: "Contact", value: "#contact" },
  { label: "Terms", value: "#terms" },
  { label: "Privacy", value: "#privacy" },
];

export default function Footer() {
  return (
    <footer className="pb-5 pt-15 px-5 bg-foreground mt-auto w-full md:pt-15 md:px-15 md:pb-10">
      <div className="flex flex-col gap-10 md:flex-row md:justify-between md:items-start">
        <div>
          <Link
            href="#home"
            aria-label="Luma - Home Page"
            className="text-white font-bold"
          >
            luma.
          </Link>
          <p className="text-text-secondary">
            Practical learning for curious people.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 md:gap-8 md:justify-around">
          <nav className="col-span-2 md:col-span-1">
            <h5 className="text-white">Explore</h5>

            <ul className="space-y-4 mt-4">
              {navigation.map((item) => (
                <li key={item.value}>
                  <Link
                    href={item.value}
                    className="text-text-secondary hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav className="col-span-2 md:col-span-1">
            <h5 className="text-white">Company</h5>
            <ul className="space-y-4 mt-4">
              {company.map((item) => (
                <li key={item.value}>
                  <Link
                    href={item.value}
                    className="text-text-secondary hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav className="col-span-2 md:col-span-1">
            <h5 className="text-white">Support</h5>
            <ul className="space-y-4 mt-4">
              {support.map((item) => (
                <li key={item.value}>
                  <Link
                    href={item.value}
                    className="text-text-secondary hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <hr className="border-text-secondary my-3 md:my-8" />

      <p className="text-text-secondary text-center md:text-start">
        © 2026 Luma Learning
      </p>
    </footer>
  );
}
