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
  "w-full rounded-lg border border-border bg-background px-4 text-[15px] text-text-primary outline-none transition-colors placeholder:text-text-secondary/80 focus:border-brand-primary focus:bg-white focus:ring-4 focus:ring-brand-primary/10 aria-invalid:border-coral";

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
      <label
        htmlFor={id}
        className="text-[15px] font-semibold text-text-primary"
      >
        {label}
      </label>

      {children}

      {error && (
        <p id={getErrorId(id)} className="text-sm text-coral">
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
        className={`${controlClasses} h-12`}
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
        className={`${controlClasses} h-30 resize-none py-3`}
      />
    </Field>
  );
}
