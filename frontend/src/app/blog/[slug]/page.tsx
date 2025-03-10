import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  BookmarkIcon,
  HeartIcon,
  MessageSquareIcon,
  ShareIcon,
} from "lucide-react";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  console.log('params in the blogpostpage component are', params)
  // fetch this from an API based on the slug
  const post = {
    id: "1",
    title: "Getting Started with Markdown",
    content: `
# Getting Started with Markdown

Markdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents. Created by John Gruber in 2004, Markdown is now one of the world's most popular markup languages.

## Why Use Markdown?

- **Easy to Learn**: The syntax is simple and intuitive.
- **Platform Independent**: You can create Markdown files on any device running any operating system.
- **Portable**: Files containing Markdown-formatted text can be opened using virtually any application.
- **Future Proof**: Even if the application you're using stops working, you'll still be able to read your text using a text editing application.

## Basic Syntax

### Headings

To create a heading, add number signs (#) in front of a word or phrase. The number of number signs you use should correspond to the heading level.

\`\`\`
# Heading level 1
## Heading level 2
### Heading level 3
\`\`\`

### Emphasis

You can add emphasis by making text bold or italic.

\`\`\`
*This text is italicized*
**This text is bold**
\`\`\`

### Lists

You can organize items into ordered and unordered lists.

\`\`\`
- First item
- Second item
- Third item

1. First item
2. Second item
3. Third item
\`\`\`

### Links

To create a link, enclose the link text in brackets and then follow it immediately with the URL in parentheses.

\`\`\`
[Visit OpenAI](https://www.openai.com)
\`\`\`

### Images

To add an image, add an exclamation mark (!), followed by alt text in brackets, and the path or URL to the image asset in parentheses.

\`\`\`
![The San Juan Mountains are beautiful!](/assets/images/san-juan-mountains.jpg)
\`\`\`

## Conclusion

Markdown is a versatile and user-friendly way to format text for the web. With just a few simple symbols, you can create well-structured and readable documents.
    `,
    author: "John Doe",
    authorRole: "Admin",
    authorImage: "/placeholder.svg?height=40&width=40",
    publishedAt: "2023-05-15",
    readTime: "5 min read",
    tags: ["markdown", "tutorial"],
    likes: 42,
    comments: 8,
  };

  return (
    <article className="max-w-3xl mx-auto">
      <div className="space-y-4 mb-8">
        <div className="flex gap-2 flex-wrap">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        <h1 className="text-4xl font-bold">{post.title}</h1>
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src={post.authorImage} alt={post.author} />
            <AvatarFallback>{post.author.substring(0, 2)}</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium">{post.author}</div>
            <div className="text-sm text-muted-foreground">
              {post.publishedAt} · {post.readTime}
            </div>
          </div>
        </div>
      </div>

      <Separator className="my-8" />

      <div className="prose dark:prose-invert max-w-none">{post.content}</div>

      <Separator className="my-8" />

      <div className="flex justify-between items-center">
        <div className="flex gap-4">
          <Button variant="ghost" size="sm" className="gap-2">
            <HeartIcon className="h-4 w-4" />
            <span>{post.likes}</span>
          </Button>
          <Button variant="ghost" size="sm" className="gap-2">
            <MessageSquareIcon className="h-4 w-4" />
            <span>{post.comments}</span>
          </Button>
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" size="icon">
            <BookmarkIcon className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <ShareIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Separator className="my-8" />
      {/*Implement comment section here */}
    </article>
  );
}
