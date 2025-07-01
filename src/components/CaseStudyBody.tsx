"use client";

import { useEffect, useState } from "react";
import parse from "html-react-parser";

type Props = {
    html: string;
};

export default function CaseStudyBody({ html }: Props) {
    const [content, setContent] = useState<React.ReactNode>(null);

    useEffect(() => {
        setContent(parse(html));
    }, [html]);

    return <div className="prose prose-sm max-w-none">{content}</div>;
}
