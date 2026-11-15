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
        "absolute flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-[0_8px_24px_rgba(23,27,44,0.08)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
