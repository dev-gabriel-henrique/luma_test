"use server";

import { ContactField, ContactFormState } from "./contact.types";
import { validateContact } from "./contact.validate";

function readField(formData: FormData, field: ContactField) {
  return String(formData.get(field) ?? "").trim();
}

export async function sendContactMessage(
  _previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const values = {
    name: readField(formData, "name"),
    email: readField(formData, "email"),
    question: readField(formData, "question"),
  };

  const errors = validateContact(values);

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Please review the highlighted fields.",
      errors,
      values,
    };
  }

  return {
    status: "success",
    message: `Thanks, ${values.name}! We'll reply within 24 hours.`,
    errors: {},
    values: { name: "", email: "", question: "" },
  };
}
