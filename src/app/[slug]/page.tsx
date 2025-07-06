import CaseStudyDetail from "@/components/CaseStudyDetail";

type Page = {
    params: {
        slug: string;
    };
};

export default async function Page({ params }: { params: { slug: string } }) {
  return <CaseStudyDetail slug={params.slug} />;
}
