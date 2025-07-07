import CaseStudyDetail from "@/components/CaseStudyDetail";
import CaseStudyList from "@/components/CaseStudyList";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <div>        
      <CaseStudyDetail slug={slug} />
      <div className="text-center text-3xl font-bold pt-10 font-Outfit pb-2">他の案件も見る</div>
        
      <CaseStudyList />
    </div>
      
);
}
