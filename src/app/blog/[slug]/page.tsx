import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import { PageIntro } from "@/components/PageIntro";
import { notFound } from "next/navigation";
import { SectionIntro } from "@/components/SectionIntro";
import { ContactSection } from "@/components/ContactSection";
import ScrollButton from "@/components/ScrollButton";
import { getBlog, getAllBlogIds } from "@/lib/blog";
import Image from "next/image";
import { TiTick } from "react-icons/ti";
import clsx from "clsx";
import { Container } from "@/components/Container";
import { StylizedImage } from "@/components/StylizedImage";

export async function generateStaticParams() {
  const blogIds = await getAllBlogIds();
  return blogIds.map((id: string) => ({ id }));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function generateMetadata(props: any) {
  const { slug } = await Promise.resolve(props.params);
  const blog = await getBlog(slug);
  
  if (!blog) {
    notFound();
  }

  return {
    title: blog.metaWork || 'Default Title',
    description: 'Explore our blog for insights on awning solutions, design tips, and the latest trends in outdoor living spaces.',
  };
}


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function BlogPage(props: any) {
  const { slug } = await Promise.resolve(props.params);
  const blog = await getBlog(slug);
  if (!blog) {
    notFound();
  }

  return (
    <>
      <PageIntro eyebrow={`our blog ${blog.date}`} title={blog.title}>
        <p>{blog.desc}</p>
      </PageIntro>
      <section className='my-4 mx-auto max-w-7xl px-2 lg:px-4'>
        <FadeIn className="grid gap-x-2" >
          <Image
            width={400}
            height={200}
            src={blog.image1}
            alt={"awning blog"}
            className='block h-full w-full object-cover rounded-4xl md:h-96'
          />
        </FadeIn>
      </section>
      <section className="my-10">
        <SectionIntro 
          title={blog.heading1}>
          <p>
            {blog.desc1}
          </p>
        </SectionIntro>
      </section>
      <div className="lg:flex lg:items-center lg:justify-end mt-10">
        <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
          <FadeIn className="w-[25rem] md:w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              src={blog.image1}
              width={200}
              height={400}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end"
            />
          </FadeIn>
        </div>
        <div className='flex flex-col justify-center items-center gap-10'>
          <SectionIntro 
            title={blog.heading2}>
            <p>
              {blog.desc2}
            </p>
          </SectionIntro>
        </div>
      </div>
      <section className="my-10">
        <OptionSection optionheader={blog.optionheader} optiondesc={blog.optiondesc} />
      </section>
      <div className="lg:flex lg:items-center lg:justify-end mt-10">
        <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
          <FadeIn className="w-[25rem] md:w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              src={blog.image2}
              width={200}
              height={400}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end"
            />
          </FadeIn>
        </div>
        <div className='flex flex-col justify-center items-center gap-10'>
          <SectionIntro 
            title={blog.heading3}>
            <p>
              {blog.desc3}
            </p>
          </SectionIntro>
        </div>
      </div>
      <ContactSection />
      <ScrollButton />
    </>
  );
}

function OptionSection(props: { optionheader: string | null | undefined; optiondesc: string[]; }) {
  return (
    <div className="mx-2 rounded-4xl bg-sky-600 py-8 sm:mt-6 sm:py-10 lg:mt-6">
      <Container>
        <div className="flex items-center gap-x-2">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            {props.optionheader}
          </h2>
          <div className="h-px flex-auto bg-sky-500" />
        </div>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-1 lg:grid-cols-3 text-white"
          >
            {props.optiondesc.map((item) => (
              <li key={item} className={clsx('flex items-center ')}>
                <TiTick size={20}/>
                {item}
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}