import { PageIntro } from "@/components/PageIntro";
import { getWork, getAllWorkIds } from "@/lib/work";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const workIds = await getAllWorkIds();
  return workIds.map((id) => ({ id }));
}

export default async function WorkPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await Promise.resolve(params);
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
}
