import { client } from "@/libs/client";
import Link from "next/link";
import Image from "next/image";
import Heading from "@/components/Heading";

export default async function CaseStudyList() {
    const { contents } = await client.get<{
        contents: {
        slug: string;
        title: string;
        outline: string;
        thumbnail?: { url: string };
        role?: string[];
        }[];
    }>({
        endpoint: "casestudy",
        queries: { limit: 10 },
    });

    return (
        <section className="mx-auto px-4 py-12 max-w-5xl">
        <Heading level="h1">Takako Watabe is a designer and developer based in Tokyo.</Heading>
        <Heading level="h2">Case Studies</Heading>
        <div className="grid md:grid-cols-2 gap-8 mt-6">
            {contents.map(({ slug, title, thumbnail, role }) => (
<Link
    key={slug}
    href={`/${slug}`}
    className="block  overflow-hidden"
>
    {thumbnail?.url && (
<div className="rounded-xl overflow-hidden">
  <Image
    src={thumbnail.url}
    alt={title}
    width={1000}
    height={562}
    className="w-full h-auto object-cover transition-transform duration-300 hover:scale-110"
  />
</div>


    )}

    <div className="p-4">                 
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-sm text-gray-500 mt-1">
        {role?.join("、 ")}
        </p>
    </div>
</Link>

            ))}
        </div>
        </section>
    );
}
