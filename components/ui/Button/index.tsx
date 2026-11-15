import Link, { LinkProps } from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ButtonSize = "sm" | "md" | "lg";
type ButtonVariant = "primary" | "secondary" | "link" | "outline" | "neutral";

interface BaseProps {
  children: ReactNode;
  size?: ButtonSize;
  variant?: ButtonVariant;
  className?: string;
}

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement>;

type LinkButtonProps = BaseProps & Omit<LinkProps, "children" | "className">;

const sizes: Record<ButtonSize, string> = {
  sm: "h-11 px-5 text-[15px]",
  md: "h-13 px-7 text-[15px]",
  lg: "h-14 px-8 text-base",
};

const variants: Record<ButtonVariant, string> = {
  primary: "bg-brand-primary text-white hover:brightness-95",

  secondary: "bg-brand-secondary text-text-primary hover:brightness-95",

  outline:
    "border border-brand-primary bg-transparent text-brand-primary hover:bg-brand-primary-light",

  neutral:
    "border border-border bg-white text-text-primary hover:border-brand-primary",

  link: "bg-transparent text-text-primary hover:underline",
};

function getButtonClasses(
  size: ButtonSize,
  variant: ButtonVariant,
  className = "",
) {
  return twMerge(
    "rounded-lg font-semibold transition-colors items-center justify-center inline-flex cursor-pointer disabled:cursor-not-allowed disabled:opacity-50",
    sizes[size],
    variants[variant],
    className,
  );
}

export function Button({
  size = "md",
  type = "button",
  className,
  children,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      type={type}
      className={getButtonClasses(size, variant, className)}
    >
      {children}
    </button>
  );
}

export function LinkButton({
  size = "md",
  className,
  children,
  variant = "primary",
  ...props
}: LinkButtonProps) {
  return (
    <Link {...props} className={getButtonClasses(size, variant, className)}>
      {children}
    </Link>
  );
}
