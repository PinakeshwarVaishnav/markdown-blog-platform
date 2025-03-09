import { PostCard } from "@/components/post-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  // fetch the blog posts from API
  const featuredPosts = [
    {
      id: "1",
      title: "Getting Started with Markdown",
      excerpt:
        "Learn the basics of Markdown and how to use it effectively in your blog posts.",
      author: "John Doe",
      authorRole: "Admin",
      publishedAt: "2023-05-15",
      slug: "getting-started-with-markdown",
      tags: ["markdown", "tutorial"],
    },
    {
      id: "2",
      title: "The Future of Web Development",
      excerpt:
        "Exploring upcoming trends and technologies in web development for 2023 and beyond.",
      author: "Jane Smith",
      authorRole: "Editor",
      publishedAt: "2023-05-10",
      slug: "future-of-web-development",
      tags: ["webdev", "trends"],
    },
    {
      id: "3",
      title: "Building Accessible Websites",
      excerpt:
        "Best practices for creating websites that are accessible to everyone.",
      author: "Alex Johnson",
      authorRole: "Editor",
      publishedAt: "2023-05-05",
      slug: "building-accessible-websites",
      tags: ["accessibility", "webdev"],
    },
  ];

  return (
    <div className="space-y-10">
      <section className="py-10 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
          Modern Blog Platform
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Share your thoughts, ideas, and stories with the world using our
          powerful markdown-based blogging platform.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/blog">Browse Articles</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/auth/login">Start Writing</Link>
          </Button>
        </div>
      </section>

      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold ml-4">Featured Posts</h2>
          <Button asChild variant="ghost">
            <Link href="/blog">View All</Link>
          </Button>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
