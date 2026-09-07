import CaseStudyList from "@/components/CaseStudyList";
import Heading from "@/components/Heading";

export const revalidate = 60;

export default function Page() {
  return (
  <section className="mx-auto px-4 py-12 max-w-5xl">        
    <Heading level="h1">Takako Watabe is a product designer working on AI products in Tokyo. She designs, builds, and ships.</Heading>
    <CaseStudyList />
  </section>
  );
}