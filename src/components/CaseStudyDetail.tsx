import { Work } from "@/types/work";
import { client } from "@/libs/client";
import Image from "next/image";
import parse, { DOMNode, domToReact } from "html-react-parser";
import { Element as DomElement } from "domhandler";
import Heading from "@/components/Heading";
import LottieGrid from "@/components/LottieGrid";

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
            <Heading level="h1">{work.title}</Heading>
            <div className="flex flex-wrap gap-2 mb-4">
            {work.categories.map((cat) => (
                <span
                key={cat}
                className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
                >
                {cat}
                </span>
            ))}
            </div>
            <p className="mb-12">{work.outline}</p>
        </div>
        
        <>

        {/* 画像：スマホとPCで切り替え */}
        {work.thumbnail?.url && (
        <div className="w-full h-auto mb-8 sm:hidden">
            <Image
            src={work.thumbnail.url}
            alt={work.title}
            width={1000}
            height={562}
            className="object-cover w-full h-auto"
            />
        </div>
        )}

        {work.eyecatchImage?.url && (
        <div className="w-full h-auto mb-8 hidden sm:block">
            <Image
            src={work.eyecatchImage.url}
            alt={work.title}
            width={1000}
            height={562}
            className="object-cover w-full h-auto"
            />
        </div>
        )}
        </>


        <div className="max-w-3xl mx-auto">
            <section className="mb-10 grid grid-cols-2 gap-4">
            <div>
                {work.language.length > 0 && (
                <div>
                    <p className="font-semibold mt-2">使用言語</p>
                    <p>{work.language?.join("、 ")}</p>
                </div>
                )}
                
                <p className="font-semibold mt-2">期間</p>
                <p>{work.duration}</p>
                <p className="font-semibold mt-2">クライアント</p>
                <p>{work.client}</p>
            </div>


            <div>
                <p className="font-semibold my-2">役割</p>
                <p className="mb-4">{work.role?.join("、 ")}</p>
                <p className="font-semibold mt-2">チーム構成</p>
                <p>{work.member}</p>
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
                
                if (el.name === "table") {
                return (
                    <div className="overflow-x-auto my-6">
                    <table className="table-auto border-collapse w-full text-left">
                        {domToReact(el.children as DOMNode[])}
                    </table>
                    </div>
                );
                }

                if (
                el.name === "pre" &&
                (el.children[0] as DomElement)?.name === "code"
                ) {
                const codeEl = el.children[0] as DomElement;
                return (
                    <pre className="bg-gray-100 text-sm p-4 rounded overflow-x-auto">
                    <code>{domToReact(codeEl.children as DOMNode[])}</code>
                    </pre>
                );
                }


                if (domNode.type === "tag" && el.name === "h5") {
                return (
                    <h5 className="text-gray-600 underline hover:opacity-80">
                    {domToReact(el.children as unknown as DOMNode[])}
                    </h5>
                );
                }

                if (el.name === "img") {
                    const src = el.attribs.src;
                    const alt = el.attribs.alt || "";
                    return (
                    <div className="p-2 rounded-xl rounded-xl">
                        <img src={src} alt={alt} className="mx-auto block h-auto" />
                    </div>
                    );
                }

                if (el.name === "p") {
                // 子要素が a タグ1つだけなら、pは不要
                const onlyChild = el.children?.[0] as DomElement;
                if (onlyChild?.name === "a") {
                    return domToReact(el.children as unknown as DOMNode[]);
                }
                return (
                    <div className="mb-6">
                    {domToReact(el.children as unknown as DOMNode[])}
                    </div>
                );
                }

                if (domNode.type === "tag" && el.name === "h2") {
                    return (
                    <Heading level="h2">
                        {domToReact(el.children as unknown as DOMNode[])}
                    </Heading>
                    );
                }

                if (domNode.type === "tag" && el.name === "h3") {
                    return (
                    <Heading level="h3">
                        {domToReact(el.children as unknown as DOMNode[])}
                    </Heading>
                    );
                }
                },
            })}
            </div>

            {/* Lottieグリッドを特定slugのときだけ表示 */}
            {slug === "enechange" && (
            <section className="my-12">
                <LottieGrid />
            </section>
            )}
        </div>
        </article>
    );
}
