"use client";

import { useActionState, useEffect, useRef } from "react";

import { Button } from "@/components/ui/Button";
import { Input, Textarea } from "@/components/ui/FormField";

import { sendContactMessage } from "./contact.model";
import { INITIAL_CONTACT_STATE } from "./contact.types";

const feedbackColors = {
  idle: "",
  success: "text-brand-primary",
  error: "text-coral",
};

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    sendContactMessage,
    INITIAL_CONTACT_STATE,
  );

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (formRef.current) {
      formRef.current
        .querySelector<HTMLElement>('aria-invalid="true"')
        ?.focus();
    }
  }, []);

  return (
    <div className="rounded-xl border border-border bg-white p-6 shadow-sm md:p-8">
      <h3 className="text-base font-bold text-text-primary">Contact us</h3>
      <p className="mt-2 text-xs text-text-secondary">
        Fill out the fields and we will get in touch.
      </p>

      <form action={formAction} noValidate className="mt-6 flex flex-col gap-5">
        <Input
          id="name"
          label="Full name"
          placeholder="Your name"
          autoComplete="name"
          defaultValue={state.values.name}
          error={state.errors.name}
          required
        />

        <Input
          id="email"
          type="email"
          label="Email"
          placeholder="youremail@example.com"
          autoComplete="email"
          defaultValue={state.values.email}
          error={state.errors.email}
          required
        />

        <Textarea
          id="question"
          label="Your question"
          placeholder="Tell us how we can help..."
          defaultValue={state.values.question}
          error={state.errors.question}
          required
        />

        <Button type="submit" size="md" disabled={isPending} className="w-full">
          {isPending ? "Sending..." : "Send message"}
        </Button>

        <p
          aria-live="polite"
          className={`min-h-4 text-center text-xs ${feedbackColors[state.status]}`}
        >
          {state.message}
        </p>
      </form>
    </div>
  );
}
