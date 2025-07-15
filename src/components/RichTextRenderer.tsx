// components/RichTextRenderer.tsx
import parse, { DOMNode, domToReact } from "html-react-parser";
import { Element as DomElement } from "domhandler";
import Heading from "@/components/Heading";


export const RichTextRenderer = ({ html }: { html: string }) => {
    return <>
            {parse(html, {
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
                    <div className="p-4 rounded-xl rounded-xl">
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
    </>;
};
