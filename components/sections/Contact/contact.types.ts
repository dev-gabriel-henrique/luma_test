export type ContactField = "name" | "email" | "question";

export interface ContactFormState {
  status: "idle" | "success" | "error";
  message: string;
  errors: Partial<Record<ContactField, string>>;
  values: Record<ContactField, string>;
}

export const INITIAL_CONTACT_STATE: ContactFormState = {
  status: "idle",
  message: "",
  errors: {},
  values: { name: "", email: "", question: "" },
};
