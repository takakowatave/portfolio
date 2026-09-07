import CaseStudyList from "@/components/CaseStudyList";

export const revalidate = 60;

export default function Page() {
  return (
  <section className="mx-auto px-4 py-12 max-w-5xl">
    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl leading-loose font-bold pb-10 font-Outfit">Takako Watabe is a product designer working on AI products in Tokyo. She designs, builds, and ships.</h1>
    <CaseStudyList />
  </section>
  );
}