"use client";

import { Button, LinkButton } from "@/components/ui/Button";
import { ComboDTO } from "@/utils/types";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Sidebar from "../Sidebar";

const navigation: ComboDTO[] = [
  { label: "Courses", value: "#courses" },
  { label: "For teams", value: "#teams" },
  { label: "Community", value: "#community" },
  { label: "About", value: "#about" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="relative z-50 border-b border-border bg-background">
      <div className="mx-auto flex h-17 max-w-7xl items-center justify-between px-5 md:px-20">
        <Link
          href="#home"
          aria-label="Luma - Home Page"
          className="text-primary font-bold"
        >
          luma.
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              href={item.value}
              key={item.value}
              className="text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-6 md:flex">
          <Link
            href="#login"
            className="text-sm font-medium transition-colors  text-text-secondary hover:text-text-primary"
          >
            Log in
          </Link>

          <LinkButton size="sm" href="#courses">
            Start learning
          </LinkButton>
        </div>

        <Button
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          size="sm"
          variant="link"
          className="p-0 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu width={18} strokeWidth={1.8} />
        </Button>
      </div>

      <Sidebar
        isOpen={isMenuOpen}
        onClose={closeMenu}
        navigation={navigation}
      />
    </header>
  );
}
