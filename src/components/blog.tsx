
import { blogPosts } from "@/lib/blog-data";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import Link from "next/link";

export function Blog() {
  const postsToShow = blogPosts.slice(0, 3);

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-8">
            <div className="max-w-xl">
                <p className="content-heading uppercase tracking-widest text-destructive mb-2">GOOD GUYS BLOG</p>
                <h2 className="hero-heading text-primary mb-4">
                    THE LATEST IN QUALITY ROOF REPLACEMENT SERVICES
                </h2>
                <p className="content-description text-muted-foreground">
                    Stay up-to-date on professional roofing recommendations, expert remodeling tips, and industry updates in our helpful blog posts.
                </p>
            </div>
            <Button asChild variant="outline" className="mt-6 md:mt-0 shrink-0">
                <Link href="/about/blog">READ ALL BLOGS</Link>
            </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {postsToShow.map((post) => (
              <Card key={post.slug} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative w-full aspect-video bg-gray-100">
                     <Image
                        src={post.image}
                        alt={post.image_alt}
                        layout="fill"
                        objectFit="contain"
                        className="p-4"
                     />
                </div>
                <CardContent className="p-6 flex-1 flex flex-col bg-card">
                  <h3 className="font-bold uppercase text-primary text-sm mb-2" style={{ fontFamily: '"Stardos Stencil", system-ui' }}>{post.title}</h3>
                  <p className="content-description flex-1 mt-2 text-sm text-muted-foreground">{post.excerpt}</p>
                  <Button asChild className="w-full mt-4 bg-primary hover:bg-primary/90">
                    <Link href={`/about/blog/${post.slug}`}>LEARN MORE</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
      </div>
    </section>
  );
}
