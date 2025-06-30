import { client } from "@/libs/client";
import { Work } from "@/types/work";

export default async function CaseStudyList() {
    const data = await client.get<{ contents: Work[] }>({ endpoint: "casestudy" });

    return (
        <main>
        {data.contents.map((work) => (
            <div key={work.id}>
            <h2>{work.title}</h2>
            <p>{work.role}</p>
            </div>
        ))}
        </main>
    );
}
