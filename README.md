# Luma — Landing Page

Responsive landing page for **Luma**, a fictional online learning platform, built from the Buzzvel FE Test 2026 Figma design with **Next.js 16 (App Router)**, **React 19**, **TypeScript** and **Tailwind CSS v4**. The layout is built mobile first.

## Getting started

Requires Node.js 20+.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run start   # serve the production build
npm run lint    # ESLint
```

## Project structure

```
app/
  layout.tsx          Fonts (Inter + Plus Jakarta Sans), metadata, <body>
  page.tsx            Page composition: Header → sections → Footer
  globals.css         Design tokens and base styles
components/
  layout/             Header, Sidebar (mobile menu), Footer
  sections/           One folder per page section
    Hero/             index.tsx + CoursesBadge.tsx + RatingBadge.tsx
    Categories/       index.tsx + CategoryCard.tsx
    FeaturedCourse/
    HowItWorks/       index.tsx + StepIllustration.tsx
    Testimonial/
    Community/        index.tsx + PhotoCollage.tsx
    Contact/          index.tsx + ContactForm.tsx + contact.model.ts
                      + contact.types.ts + contact.validate.ts
    FinalCTA/         index.tsx + Decorations.tsx
  ui/                 Reusable, content-agnostic components
    Button/           Button and LinkButton, with sizes and variants
    Container/        Max width and horizontal padding
    SectionHeading/   Eyebrow + title + description
    AvatarGroup/      Overlapping avatars
    FloatingBadge/    White floating card used over images
    FormField/        Input and Textarea with label and error handling
utils/
  constants.ts        Data shared by more than one section
  types.ts            Shared types (ComboDTO)
  validations.ts      Shared validation patterns
public/Images/        Local images
```

## Key decisions

**Component conventions**
- One component per folder, exported from `index.tsx`. A subcomponent that only makes sense inside one section lives in that section's folder (for example `Categories/CategoryCard.tsx`) instead of `ui/`.
- Content lives in typed constants at the top of each file, and the JSX only maps over them. Prop interfaces use the `I` prefix (`ICategoryCardProps`) and data shapes use the `DTO` suffix (`CategoryDTO`).
- Variants are written as `Record<Variant, string>` maps (`Button`, `SectionHeading`, `StepIllustration`, `AvatarGroup`) instead of chained ternaries. `twMerge` lets a caller's `className` override the defaults safely.
- Server Components by default. Only `Header` (menu state) and `ContactForm` (`useActionState`) are Client Components, so very little JavaScript is shipped.

**Layout and styling**
- Colors are CSS variables in `globals.css`, exposed to Tailwind through `@theme inline` (`bg-brand-primary`, `text-text-secondary`, …). Headings use Plus Jakarta Sans and body text uses Inter, both loaded with `next/font`.
- `Container` is the single source of the page's max width and horizontal padding, so every section, the Header and the Footer line up on the same column.
- Spacing and type sizes were measured from the design exports (1280px desktop frame and 402px mobile frame, both at 2x). Most sections use 64px vertical padding on mobile and 100px on desktop.
- The design only provides mobile and desktop frames. For tablet, two-column layouts stay stacked below `lg` (1024px) so that text and images never get cramped. Card grids move to two columns from `sm`.

**Sections**
- **Hero**: the hero image is the likely LCP element, so it uses `loading="eager"` and `fetchPriority="high"`. The star rating has `role="img"` and an `aria-label`, so screen readers announce "5 out of 5 stars" instead of five separate icons.
- **Categories**: the "01–04" labels are derived from each card's position, so reordering cards never breaks the numbering. Each "Explore" link has an `aria-label` with the category name, because four links all named "Explore" are ambiguous out of context.
- **How it works**: the steps are an ordered list (`<ol>`). The illustrations are pure CSS shapes. The design labels all three steps "STEP 01", which looks like a copy mistake, so the numbers come from the index (01, 02, 03).
- **Testimonial**: uses `figure` / `blockquote` / `figcaption`. The stats are a `<dl>`. Each number is shown above its label with `flex-col-reverse`, so `<dt>` still comes before `<dd>` in the DOM.
- **Community**: the photo collage is described as data (columns with vertical offsets, photos with aspect ratios), so the arrangement can change without touching the JSX.
- **Contact**: the form uses a **Server Action with `useActionState`**, the pattern the Next.js 16 docs recommend. Validation runs on the server, which is the source of truth. The submit button is disabled while sending, values are kept when there are errors, and feedback is announced through an `aria-live` region. Each field links its error with `aria-describedby` and sets `aria-invalid`. There is no backend, so a valid submission returns a mock success message.
- **Final CTA**: the decorative shapes are inline SVG, with Lucide icons for the small pictograms. They are split into two halves anchored to the left and right edges, so on mobile the corner shapes stay visible instead of being cropped away.

**Accessibility and performance**
- Semantic landmarks (`header`, `nav`, `main`, `footer`). Every section has an `aria-labelledby` pointing at its title, and the heading hierarchy goes `h1 → h2 → h3`.
- Mobile menu: locks page scroll, closes with `Esc` or by clicking the overlay, and uses `inert` while closed so hidden links cannot be reached with the keyboard.
- A global `:focus-visible` outline for keyboard users. Decorative elements are `aria-hidden`, and all content images have descriptive `alt` text.
- `prefers-reduced-motion` is respected: smooth scrolling only applies when the user has not asked for reduced motion, and transitions are disabled when they have.
- All images go through `next/image` with `sizes`. Only the hero image is loaded eagerly.

## Known gaps
- Some navigation links point to anchors that have no matching section on this page (`#about`, `#login`, `#signup`, `#careers`, etc…), because the design does not include those pages.
- The contact form has no backend. Valid submissions return a mock success message.
- There are no automated tests or Storybook (both optional in the brief).

## Time spent

Approximately **8** hours.

## AI tools

This project used **Claude Code** (Anthropic) for three things:
- Reviewing the code.
- Speeding up the more complex, abstract components, such as the decorative shapes in `FinalCTA`.
- Reviewing sizes and spacing for pixel-perfect accuracy against the design.

### How I checked the AI output

- I compared every AI-generated component against the ones I wrote by hand (`Header` and `Footer`), so the new code follows the same structure and conventions.
- I checked each piece against the design, page by page.
- I reviewed the code against clean code principles:
  - descriptive names;
  - functions and components placed where they belong;
  - React and Next.js best practices.
- `tsc --noEmit`, `npm run lint` and `npm run build` pass with no errors.
