import { LinkButton } from "@/components/ui/Button";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

import PhotoCollage from "./PhotoCollage";

export default function Community() {
  return (
    <section
      id="community"
      aria-labelledby="community-title"
      className="overflow-hidden bg-background py-16 md:py-24"
    >
      <Container className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div>
          <SectionHeading
            id="community-title"
            eyebrow="The people"
            title="Meet international students & teachers"
            description="Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus risus ac vel, velit, nunc. Eget commodo eget in aliquam facilisi facilisi nec magna hendrerit. Placerat ipsum sit tellus urna, faucibus aenean lorem faucibus integer."
          />

          <LinkButton
            href="#community"
            size="sm"
            variant="neutral"
            className="mt-8 w-full sm:w-auto"
          >
            Explore teachers and students
          </LinkButton>
        </div>

        <PhotoCollage />
      </Container>
    </section>
  );
}
