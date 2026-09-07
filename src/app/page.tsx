import Image from "next/image";
import CaseStudyList from "@/components/CaseStudyList";

export const revalidate = 60;

export default function Page() {
  return (
  <section className="mx-auto px-4 py-12 max-w-5xl">
    <div className="flex items-center gap-6 pb-10">
      <Image
        src="/kiko.png"
        alt="Takako Watabe"
        width={160}
        height={160}
        priority
        className="w-24 sm:w-32 md:w-40 h-auto aspect-square object-cover rounded-full shrink-0"
      />
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl leading-loose font-bold font-Outfit">Takako Watabe is a product designer working on AI products in Tokyo. She designs, builds, and ships.</h1>
    </div>
    <CaseStudyList />
  </section>
  );
}