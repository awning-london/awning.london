import { PageIntro } from "@/components/PageIntro";
import { getWork, getAllWorksIds } from "@/lib/work";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const workIds = await getAllWorksIds();
  return workIds.map((id) => ({ id }));
}

export default async function WorkPage({ params }: { params: { id: string } }) {
  const work = await getWork(params.id);
    console.log(work)
  if (!work) {
    notFound();
  }

  return (
    <>
     <PageIntro
         eyebrow="Our work"
         title={work.title}
       >
         <p>
           {work.overview}
         </p>
       </PageIntro>
    </>
  );
}