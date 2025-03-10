import { PostCard } from "@/components/post-card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search } from "lucide-react"

export default function BlogPage() {
  //fetch this from an API
  const posts = [
    {
      id: "1",
      title: "Getting Started with Markdown",
      excerpt: "Learn the basics of Markdown and how to use it effectively in your blog posts.",
      author: "John Doe",
      authorRole: "Admin",
      publishedAt: "2023-05-15",
      slug: "getting-started-with-markdown",
      tags: ["markdown", "tutorial"],
    },
    {
      id: "2",
      title: "The Future of Web Development",
      excerpt: "Exploring upcoming trends and technologies in web development for 2023 and beyond.",
      author: "Jane Smith",
      authorRole: "Editor",
      publishedAt: "2023-05-10",
      slug: "future-of-web-development",
      tags: ["webdev", "trends"],
    },
    {
      id: "3",
      title: "Building Accessible Websites",
      excerpt: "Best practices for creating websites that are accessible to everyone.",
      author: "Alex Johnson",
      authorRole: "Editor",
      publishedAt: "2023-05-05",
      slug: "building-accessible-websites",
      tags: ["accessibility", "webdev"],
    },
    {
      id: "4",
      title: "Introduction to React Hooks",
      excerpt: "Learn how to use React Hooks to simplify your functional components.",
      author: "Sarah Williams",
      authorRole: "Editor",
      publishedAt: "2023-04-28",
      slug: "introduction-to-react-hooks",
      tags: ["react", "javascript"],
    },
    {
      id: "5",
      title: "Optimizing Website Performance",
      excerpt: "Tips and tricks to improve your website loading speed and overall performance.",
      author: "Michael Brown",
      authorRole: "Admin",
      publishedAt: "2023-04-20",
      slug: "optimizing-website-performance",
      tags: ["performance", "webdev"],
    },
    {
      id: "6",
      title: "CSS Grid vs Flexbox",
      excerpt: "Understanding when to use CSS Grid and when to use Flexbox for layout design.",
      author: "Emily Davis",
      authorRole: "Editor",
      publishedAt: "2023-04-15",
      slug: "css-grid-vs-flexbox",
      tags: ["css", "design"],
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <h1 className="text-3xl font-bold">Blog Articles</h1>
        <div className="relative max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search articles..." className="pl-8" />
        </div>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Posts</TabsTrigger>
          <TabsTrigger value="tutorial">Tutorials</TabsTrigger>
          <TabsTrigger value="webdev">Web Development</TabsTrigger>
          <TabsTrigger value="design">Design</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="tutorial" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts
              .filter((post) => post.tags.includes("tutorial") || post.tags.includes("markdown"))
              .map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
          </div>
        </TabsContent>
        <TabsContent value="webdev" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts
              .filter(
                (post) =>
                  post.tags.includes("webdev") || post.tags.includes("javascript") || post.tags.includes("react"),
              )
              .map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
          </div>
        </TabsContent>
        <TabsContent value="design" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts
              .filter((post) => post.tags.includes("design") || post.tags.includes("css"))
              .map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

