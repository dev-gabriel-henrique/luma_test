import { Validations } from "@/utils/validations";
import { ContactFormState } from "./contact.types";

const MIN_QUESTION_LENGTH = 10;

export function validateContact(values: ContactFormState["values"]) {
  const errors: ContactFormState["errors"] = {};

  if (!values.name) {
    errors.name = "Please tell us your name.";
  }

  if (!Validations.EMAIL.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (values.question.length < MIN_QUESTION_LENGTH) {
    errors.question = `Your question needs at least ${MIN_QUESTION_LENGTH} characters.`;
  }

  return errors;
}
