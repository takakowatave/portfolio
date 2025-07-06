import { RichTextRenderer } from "@/components/RichTextRenderer";
import { client } from "@/libs/client";

export default async function AboutPage() {
    const aboutData = await client.get({
        endpoint: "about", // 新しいエンドポイント名に合わせて修正
    });

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
        </main>
    );
}
