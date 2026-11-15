import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface IContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className }: IContainerProps) {
  return (
    <div
      className={twMerge(
        "mx-auto w-full max-w-7xl px-5 md:px-10 lg:px-20",
        className,
      )}
    >
      {children}
    </div>
  );
}
