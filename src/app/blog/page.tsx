import { getBlogs } from "@/lib/blog";
import BlogCard from "@/components/BlogCard";
import { PageIntro } from "@/components/PageIntro";
import { Container } from "@/components/Container";



export default async function BlogPage() {
  const blogs = await getBlogs();

  return (
    <>
        <PageIntro eyebrow="Latest Blogs" title="Awning London Blog">
            <p>
                Tips, Trends & Design Ideas
            </p>
        </PageIntro>
        <Container className="my-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
                ))}
            </div>
        </Container>

    </>
  );
}