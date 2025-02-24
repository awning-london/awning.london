import { PageIntro } from "@/components/PageIntro";
import { getWork, getAllWorkIds } from "@/lib/work";
import { notFound } from "next/navigation";

interface WorkPageProps {
  params: { id: string } | Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const workIds = await getAllWorkIds();
  return workIds.map((id) => ({ id }));
}

export default async function WorkPage(props: WorkPageProps) {
  const { id } = await props.params;
  const work = await getWork(id);

  if (!work) {
    notFound();
  }

  return (
    <>
      <PageIntro eyebrow="Our work" title={work.title}>
        <p>{work.overview}</p>
      </PageIntro>
    </>
  );
};