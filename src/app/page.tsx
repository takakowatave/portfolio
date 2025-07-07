import CaseStudyList from "@/components/CaseStudyList";
import Heading from "@/components/Heading";

export default function Page() {
  return (
  <section className="mx-auto px-4 py-12 max-w-5xl">        
    <Heading level="h1">Takako Watabe is a designer and developer based in Tokyo.</Heading>
    <CaseStudyList />
  </section>
  );
}