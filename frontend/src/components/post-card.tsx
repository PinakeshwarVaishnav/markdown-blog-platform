import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Link from "next/link";

interface Post {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  authorRole: string;
  publishedAt: string;
  slug: string;
  tags: string[];
}

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="flex flex-row items-center gap-4">
        <div>
          <div className="flex gap-2 mb-2">
            {post.tags.slice(0, 2).map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
          <Link href={`/blog/${post.slug}`} className="hover:underline">
            <h3 className="text-xl font-bold">{post.title}</h3>
          </Link>
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-muted-foreground">{post.excerpt}</p>
      </CardContent>
      <CardFooter className="flex justify-between text-sm text-muted-foreground">
        <div>By {post.author}</div>
        <div>{post.publishedAt}</div>
      </CardFooter>
    </Card>
  );
}
