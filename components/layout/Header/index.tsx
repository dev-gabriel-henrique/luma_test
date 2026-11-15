"use client";

import { Button, LinkButton } from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { ComboDTO } from "@/utils/types";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Sidebar from "../Sidebar";

const navigation: ComboDTO[] = [
  { label: "Courses", value: "#courses" },
  { label: "For teams", value: "#contact" },
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
      <Container className="flex h-17 items-center justify-between">
        <Link
          href="#home"
          aria-label="Luma - Home Page"
          className="font-heading text-2xl font-bold tracking-tight text-text-primary"
        >
          luma.
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              href={item.value}
              key={item.value}
              className="text-[15px] text-text-secondary transition-colors hover:text-text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-6 md:flex">
          <Link
            href="#login"
            className="text-[15px] text-text-secondary transition-colors hover:text-text-primary"
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
          aria-controls="mobile-navigation"
          size="sm"
          variant="link"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu width={18} strokeWidth={1.8} />
        </Button>
      </Container>

      <Sidebar
        isOpen={isMenuOpen}
        onClose={closeMenu}
        navigation={navigation}
      />
    </header>
  );
}
