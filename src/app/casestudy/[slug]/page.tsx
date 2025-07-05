import CaseStudyDetail from "@/components/CaseStudyDetail";

type Props = {
    params: { slug: string };
};

export default function Page({ params }: Props) {
    return <CaseStudyDetail slug={params.slug} />;
}
