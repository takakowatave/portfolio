
// components/CaseStudyDetail.tsx
import { Work } from "@/types/work";
import { client } from "@/libs/client";
import Image from "next/image";
import parse, { DOMNode, domToReact } from "html-react-parser";
import { Element as DomElement } from "domhandler";
import Heading from "@/components/Heading";

type Props = {
    slug: string;
};

export default async function CaseStudyDetail({ slug }: Props) {
    const { contents } = await client.get<{ contents: Work[] }>({
        endpoint: "casestudy",
        queries: {
            filters: `slug[equals]${slug}`,
        },
    });

    const work = contents[0];
    if (!work) return <p>記事が見つかりませんでした。</p>;

    return (
        <article className="mx-auto px-4 py-12 leading-relaxed">
        <div className="max-w-3xl mx-auto">
            <Heading level="h1" >{work.title}</Heading>
            <p className="mb-12">{work.outline}</p>
        </div>
            {work.eyecatchImage?.url && (
<div className="relative w-full h-[300px] mb-8">
  <Image
    src={work.eyecatchImage.url}
    alt={work.title}
    fill
    className="object-cover"
  />
</div>
            )}
            
        <div className="max-w-3xl mx-auto">
            <section className="mb-10 grid grid-cols-2 gap-4">
                <div>
                    <p className="font-semibold mt-2">担当</p>
                    <p>{work.role?.join("、 ")}</p>
                    <p className="font-semibold mt-2">期間</p>
                    <p>{work.duration}</p>
                    <p className="font-semibold mt-2">クライアント</p>
                    <p>{work.client}</p>
                </div>
                <div>
                    <p className="font-semibold mt-2">チーム構成</p>
                    <p>{work.member}</p>
                    <p className="font-semibold mt-2">カテゴリ</p>
                    <p>{work.categories.join("、")}</p>
                    {work.language.length > 0 && (
                    <div>
                        <p className="font-semibold mt-2">使用技術</p>
                        <p>{work.language.join("、")}</p>
                    </div>
                    )}

                </div>
            </section>

            <div className="text-base leading-relaxed space-y-6">
                {parse(work.body, {
                    replace(domNode: DOMNode) {
                        const el = domNode as DomElement;
                        
                        if (el.name === "img") {
                            const src = el.attribs.src;
                            const alt = el.attribs.alt || "";
                            return (
                            <div className="p-8">
                                <img src={src} alt={alt} className="mx-auto block h-auto" />
                            </div>
                            );
                        }

                        if (el.name === "p") {
                            return <div className="mb-6">{domToReact(el.children as unknown as DOMNode[])}</div>;
                        }
                        if (domNode.type === "tag" && (domNode as DomElement).name === "h2") {
                            const el = domNode as DomElement;
                            return <Heading level="h2" >{domToReact(el.children as unknown as DOMNode[])}</Heading>;
                        }
                        if (domNode.type === "tag" && (domNode as DomElement).name === "h3") {
                            const el = domNode as DomElement;
                            return <Heading level="h3">{domToReact(el.children as unknown as DOMNode[])}</Heading>;
                        }
                    },
                })}
            </div>
        </div>
        </article>
    );
}
