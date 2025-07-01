// components/CaseStudyDetail.tsx
import { Work } from "@/types/work";
import { client } from "@/libs/client";
import Image from "next/image";
import parse, { DOMNode, domToReact } from "html-react-parser";
import { Element as DomElement } from "domhandler";

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
        <article className="max-w-3xl mx-auto px-4 py-12 text-sm leading-relaxed text-gray-800">
        {work.eyecatchImage?.url && (
            <div className="relative w-full h-64 mb-8">
            <Image
                src={work.eyecatchImage.url}
                alt={work.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow"
            />
            </div>
        )}
        <h1 className="text-2xl font-semibold mb-6 text-center">{work.title}</h1>

        <section className="mb-10 grid grid-cols-2 gap-4 text-xs">
            <div>
            <p className="font-semibold">担当</p>
            <p>{work.role}</p>
            <p className="font-semibold mt-2">期間</p>
            <p>{work.duration}</p>
            <p className="font-semibold mt-2">クライアント</p>
            <p>{work.client}</p>
            </div>
            <div>
            <p className="font-semibold">チーム構成</p>
            <p>{work.member}</p>
            <p className="font-semibold mt-2">カテゴリ</p>
            <p>{work.categories}</p>
            <p className="font-semibold mt-2">使用技術</p>
            <p>{work.language}</p>
            </div>
        </section>

        <div className="mb-8">
            <a
            href={work.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-gray-600 underline"
            >
            成果物を見る
            </a>
        </div>

        <div className="prose prose-sm max-w-none">
            {parse(work.body, {
            replace(domNode: DOMNode) {
                if (domNode.type === "tag" && (domNode as DomElement).name === "h2") {
                const el = domNode as DomElement;
                return (
                    <h2 className="text-xl mt-8 mb-2 font-bold text-gray-700">
                    {domToReact(el.children as unknown as DOMNode[])}
                    </h2>
                );
                }
                if (domNode.type === "tag" && (domNode as DomElement).name === "h3") {
                const el = domNode as DomElement;
                return (
                    <h3 className="text-lg mt-6 mb-1 font-semibold text-gray-500">
                    {domToReact(el.children as unknown as DOMNode[])}
                    </h3>
                );
                }
            },
            })}
        </div>
        </article>
    );
}
