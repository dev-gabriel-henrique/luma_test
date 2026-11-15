import { Button } from "@/components/ui/Button";
import { ComboDTO } from "@/utils/types";
import { X } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

interface ISidebarProps {
  isOpen: boolean;
  navigation: ComboDTO[];
  onClose: () => void;
}

export default function Sidebar({
  isOpen,
  navigation,
  onClose,
}: ISidebarProps) {
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, isOpen]);

  return (
    <>
      <button
        type="button"
        aria-label="Close menu"
        onClick={onClose}
        aria-hidden={!isOpen}
        tabIndex={isOpen ? 0 : -1}
        className={`fixed inset-0 z-60 bg-black/40 backdrop-blur-[2px] transition-opacity duration-300 md:hidden ${
          isOpen
            ? "visible opacity-100"
            : "invisible opacity-0 pointer-events-none"
        }`}
      />

      <aside
        id="mobile-navigation"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        aria-hidden={!isOpen}
        inert={!isOpen}
        className={`fixed inset-y-0 right-0 z-70 flex w-[min(88vw,380px)] flex-col border-l border-border bg-background shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center justify-between border-b border-border px-6">
          <Button
            size="sm"
            variant="link"
            aria-label="Close menu"
            onClick={onClose}
            className="ml-auto"
          >
            <X size={24} strokeWidth={1.8} />
          </Button>
        </div>

        <nav className="flex flex-1 flex-col gap-2 px-6 py-8">
          <span className="mb-3 text-xs font-semibold tracking-widest text-text-secondary uppercase">
            Navigation
          </span>

          {navigation.map((item) => (
            <Link
              key={item.value}
              href={item.value}
              onClick={onClose}
              className="rounded-md px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-brand-primary-light hover:text-brand-primary"
            >
              {item.label}
            </Link>
          ))}

          <div className="my-5 border-t border-border" />

          <Link
            href="#login"
            onClick={onClose}
            className="rounded-md px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-brand-primary-light"
          >
            Log in
          </Link>
        </nav>

        <div className="border-t border-border p-6">
          <Link
            href="#courses"
            onClick={onClose}
            className="flex w-full items-center justify-center rounded-md bg-brand-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-primary"
          >
            Start learning
          </Link>
        </div>
      </aside>
    </>
  );
}
