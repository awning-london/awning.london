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
export default async function WorkPage(props: any) {
  const { id } = await Promise.resolve(props.params);
  const work = await getWork(id);

  if (!work) {
    notFound();
  }

const review = [
    {
      "title": "The quality 👌",
      "desc": "The custom awning transformed our patio! It provides great shade, and the quality is outstanding. Highly recommend!",
      "from": "Mohsen, hzadeh",
      "review": "⭐⭐⭐⭐⭐",
      "img": "/images/review1.jpg",
      "email": "mohsenhzadeh@gamil.com"
    },
    {
      "title": "Perfect Addition to Our Home!",
      "desc": "They are best, Quick, Quality and cheap ",
      "from": "Alireza, paniran",
      "review": "⭐⭐⭐⭐⭐",
      "img": "/images/review1.jpg",
      "email": "alireza.paniran@yahoo.co.uk"
    },
    {
      "title": "Amazing service with beautiful canopy ",
      "desc": "The custom awning transformed our patio! It provides great shade, and the quality is outstanding. Highly recommend!",
      "from": "tazkhan",
      "review": "⭐⭐⭐⭐⭐",
      "img": "/images/review1.jpg",
      "email": "tazkhan1503@yahoo.co.uk"
    },
    {
      "title": "Excellent Service from Awning.London!",
      "desc": "Excellent Service from Awning.London! I recently used Awning.London to replace the fabric on my European-style shopfront awnings, and I couldn’t be more satisfied with their work. The team was highly professional and efficient. They replaced the old fabric with high-quality new material, serviced the motor, and upgraded the faulty arms with durable chain-operated ones. Everything was done with great attention to detail and cleanliness. The installation was quick, smooth, and handled with real care. I really appreciated the respectful and responsible attitude of the staff throughout the process.",
      "from": "Hosein Keshtkar",
      "review": "⭐⭐⭐⭐⭐",
      "img": "/images/review1.jpg",
      "email": "m.hossin.keshtkar@gmail.com"
    },
    {
      "title": "Recommended!",
      "desc": "number one job",
      "from": "Ali ayubi",
      "review": "⭐⭐⭐⭐⭐",
      "img": "/images/review1.jpg",
      "email": "aliayubi500@gmail.com"
    },
]


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
          title="What we did">
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
