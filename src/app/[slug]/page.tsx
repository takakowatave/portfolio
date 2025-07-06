import CaseStudyDetail from "@/components/CaseStudyDetail";

export default function Page({ params }: { params: { slug: string } }) {
    return <CaseStudyDetail slug={params.slug} />;
}
