import CaseStudyDetail from "@/components/CaseStudyDetail";

type Props = {
    params: {
        slug: string;
    };
};

export default async function Page({ params }: Props) {
    return <CaseStudyDetail slug={params.slug} />;
}