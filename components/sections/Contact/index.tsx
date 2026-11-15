import { Clock, MessageCircle, LucideIcon } from "lucide-react";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

import ContactForm from "./ContactForm";

interface ContactChannelDTO {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
}

const channels: ContactChannelDTO[] = [
  {
    icon: MessageCircle,
    title: "Email",
    description: "contact@luma.com",
    href: "mailto:contact@luma.com",
  },
  {
    icon: Clock,
    title: "Response Time",
    description: "Up to 24 hours on business days",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="bg-white py-16 md:py-24"
    >
      <Container className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <SectionHeading
            id="contact-title"
            eyebrow="Contact"
            title="Get in touch"
            description="Have a question? We're here to help. Whether you're looking for the right course, learning with your team or interested in teaching with Luma, we'd love to hear from you."
          />

          <ul className="mt-8 flex flex-col gap-4">
            {channels.map(({ icon: Icon, title, description, href }) => (
              <li
                key={title}
                className="flex items-center gap-4 rounded-lg border border-border bg-background p-4"
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-primary-light text-brand-primary">
                  <Icon size={16} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs font-semibold text-text-primary">
                    {title}
                  </span>
                  {href ? (
                    <a
                      href={href}
                      className="text-xs text-brand-primary hover:underline"
                    >
                      {description}
                    </a>
                  ) : (
                    <span className="text-xs text-text-secondary">
                      {description}
                    </span>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <ContactForm />
      </Container>
    </section>
  );
}
