// app/about/page.tsx
import Link from "next/link";
import { RichTextRenderer } from "@/components/RichTextRenderer";
import { client } from "@/libs/client";
import Button from "@/components/Button";

export default async function AboutPage() {
    const aboutData = await client.get({ endpoint: "about" });

    return (
        <main className="px-4 py-12 leading-relaxed max-w-3xl mx-auto space-y-12">
        <section>
            <RichTextRenderer html={aboutData.aboutme} />
        </section>
        <section>
            <RichTextRenderer html={aboutData.history} />
        </section>
        <section>
            <RichTextRenderer html={aboutData.voice} />
        </section>
        <div className="flex justify-center">
            <Link href="/">
                <Button>TOPへ戻る</Button>
            </Link>
        </div>
        </main>
    );
}
