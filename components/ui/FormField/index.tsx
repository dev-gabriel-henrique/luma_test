import { InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from "react";

interface IFieldProps {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
}

interface IFieldControlProps {
  id: string;
  label: string;
  error?: string;
}

type InputProps = IFieldControlProps & InputHTMLAttributes<HTMLInputElement>;

type TextareaProps = IFieldControlProps &
  TextareaHTMLAttributes<HTMLTextAreaElement>;

const controlClasses =
  "w-full rounded-md border border-border bg-background px-4 py-3 text-xs text-text-primary outline-none transition-colors placeholder:text-text-secondary/70 focus:border-brand-primary focus:bg-white aria-invalid:border-coral";

function getErrorId(id: string) {
  return `${id}-error`;
}

function getAccessibilityProps(id: string, error?: string) {
  return {
    id,
    name: id,
    "aria-invalid": Boolean(error),
    "aria-describedby": error ? getErrorId(id) : undefined,
  };
}

function Field({ id, label, error, children }: IFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-xs font-semibold text-text-primary">
        {label}
      </label>

      {children}

      {error && (
        <p id={getErrorId(id)} className="text-[11px] text-coral">
          {error}
        </p>
      )}
    </div>
  );
}

export function Input({ id, label, error, ...props }: InputProps) {
  return (
    <Field id={id} label={label} error={error}>
      <input
        {...props}
        {...getAccessibilityProps(id, error)}
        className={controlClasses}
      />
    </Field>
  );
}

export function Textarea({
  id,
  label,
  error,
  rows = 4,
  ...props
}: TextareaProps) {
  return (
    <Field id={id} label={label} error={error}>
      <textarea
        {...props}
        {...getAccessibilityProps(id, error)}
        rows={rows}
        className={`${controlClasses} resize-none`}
      />
    </Field>
  );
}
