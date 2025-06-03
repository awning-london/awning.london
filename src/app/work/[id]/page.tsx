import { FadeIn } from "@/components/FadeIn";
import { PageIntro } from "@/components/PageIntro";
import { getWork, getAllWorkIds } from "@/lib/work";
import { notFound } from "next/navigation";
import Image from 'next/image'
import { SectionIntro } from "@/components/SectionIntro";
import { TagList, TagListItem } from "@/components/TagList";
import { List, ListItem } from '@/components/List'
import { Container } from "@/components/Container";
import { StylizedImage } from "@/components/StylizedImage";
import { ContactSection } from "@/components/ContactSection";
import ScrollButton from "@/components/ScrollButton";

export async function generateStaticParams() {
  const workIds = await getAllWorkIds();
  return workIds.map((id) => ({ id }));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function generateMetadata(props: any) {
  const { id } = await Promise.resolve(props.params);
  const work = await getWork(id);
  if (!work) {
    notFound();
  }

  return {
    title: work.metaWork || 'Default Title',
    description: 'Explore our portfolio of successful projects, showcasing our expertise in creating functional and stylish awnings for a wide range of clients.',
  };
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
        <FadeIn className="grid grid-cols-2 md:grid-cols-4 gap-x-2 md:flex-row gap-5" >
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
      <section className="my-10">
        <SectionIntro 
          eyebrow=""
          title="Overview">
          <p>
            {work.overview}
          </p>
        </SectionIntro>
      </section>
      <section className="my-10">
        <SectionIntro 
          eyebrow=""
          title="What do they say about us?">
          <span className="font-bold">
            {work.reviewTitle}
          </span>
          <p className="italic">
            &quot;{work.reviewDesc}&quot;
          </p>
          <div className="flex justify-start items-center gap-4">
            <Image 
            src={work.reviewImg} 
            className="rounded-full"
            width={40} 
            height={40} 
            alt="customer"/>
            <span>
              {work.score}
            </span>
          </div>
        </SectionIntro>
      </section>
      <section className="my-10">
        <SectionIntro 
          eyebrow=""
          title="what ">
          <TagList>
            {work.benefit.map((item, index) => (
              <TagListItem key={index}>{item}</TagListItem>

            ))}
          </TagList>
        </SectionIntro>
      </section>
      <Container className="my-20">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={work.imgurl[0]}
                width={300}
                height={100}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-8 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            {work.featured.map((item, index) => (
                <ListItem key={index} title={item.slice(0, item.indexOf("-"))}>
                  {item.slice(item.indexOf("-") + 1)}
                </ListItem>
            ))}
          </List>
        </div>
      </Container>
      <ContactSection />
      <ScrollButton />
    </>
  );
}
