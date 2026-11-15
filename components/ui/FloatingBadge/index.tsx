import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface IFloatingBadgeProps {
  children: ReactNode;
  className?: string;
}

export default function FloatingBadge({
  children,
  className,
}: IFloatingBadgeProps) {
  return (
    <div
      className={twMerge(
        "absolute flex items-center gap-2 rounded-lg bg-white px-3 py-2 shadow-md",
        className,
      )}
    >
      {children}
    </div>
  );
}
