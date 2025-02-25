import { FadeIn } from "@/components/FadeIn";
import { PageIntro } from "@/components/PageIntro";
import { getWork, getAllWorkIds } from "@/lib/work";
import { notFound } from "next/navigation";
import Image from 'next/image'
import { SectionIntro } from "@/components/SectionIntro";

export async function generateStaticParams() {
  const workIds = await getAllWorkIds();
  return workIds.map((id) => ({ id }));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function WorkPage(props: any) {
  const { id } = await Promise.resolve(props.params);
  const work = await getWork(id);

  if (!work) {
    notFound();
  }

  return (
    <>
      <PageIntro eyebrow="Our work" title={work.title}>
        <p>{work.desc}</p>
      </PageIntro>
      <section className='my-4 mx-auto max-w-7xl px-2 lg:px-4'>
        <FadeIn className="flex items-center gap-x-2 flex-col md:flex-row gap-5">
          {work.imgurl.map((image, index) => (
              <div key={index} className='flex h-full w-full items-center justify-center'>
                <Image
                  width={300}
                  height={100}
                  src={image}
                  alt={"awning casestudy"}
                  className='block h-full w-full object-cover rounded-4xl'
                />
              </div>
          ))}
        </FadeIn>
      </section>
      <SectionIntro 
        eyebrow="Overview"
        title="">
        <p>
          {work.overview}
        </p>
      </SectionIntro>
    </>
  );
}
