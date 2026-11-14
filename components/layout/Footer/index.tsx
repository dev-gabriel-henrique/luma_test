import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex-col py-15 bg-foreground">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 md:flex-row md:px-20">
        <Link
          href="#home"
          aria-label="Luma - Home Page"
          className="text-white font-bold"
        >
          luma.
        </Link>
      </div>
    </footer>
  );
}
