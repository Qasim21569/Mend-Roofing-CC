
import { GetStarted } from "@/components/get-started";
import { blogPosts } from "@/lib/blog-data";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";


export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = blogPosts.find((p) => p.slug === params.slug);

    if (!post) {
        notFound();
    }

    return (
      <div className="flex flex-col bg-background">
        <section className="w-full py-12 md:py-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-3 items-start gap-8">
                    <div className="lg:col-span-2 space-y-8">
                        <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden shadow-lg flex items-end p-8 bg-gray-100">
                             <div className="absolute inset-0 p-8">
                                <Image
                                    src={post.image}
                                    alt={post.image_alt}
                                    fill
                                    priority
                                    className="object-contain"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
                                    data-ai-hint={post.image_hint}
                                />
                             </div>
                             <div className="relative space-y-4 text-white z-10">
                                <h1 className="hero-heading text-3xl md:text-4xl !text-primary">
                                    {post.title}
                                </h1>
                                <p className="text-xs text-muted-foreground">By {post.author} / {post.date}</p>
                            </div>
                        </div>
                        <div 
                            className="prose max-w-none content-description"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                    </div>

                    <div className="sticky top-24 space-y-8">
                       <div className="relative">
                            <Input placeholder="Search blog" className="pr-10" />
                            <Button variant="ghost" size="icon" className="absolute top-1/2 right-1 -translate-y-1/2 h-8 w-8">
                                <Search className="h-4 w-4" />
                            </Button>
                       </div>
                       <GetStarted />
                        <Card>
                           <CardContent className="p-4">
                               <Tabs defaultValue="recent">
                                   <TabsList className="grid w-full grid-cols-3">
                                       <TabsTrigger value="recent">Recent</TabsTrigger>
                                       <TabsTrigger value="categories">Categories</TabsTrigger>
                                       <TabsTrigger value="archives">Archives</TabsTrigger>
                                   </TabsList>
                                   <TabsContent value="recent" className="space-y-4 pt-4">
                                       {blogPosts.map(p => (
                                           <Link key={p.slug} href={`/about/blog/${p.slug}`} className="flex items-center gap-4 group">
                                               <div className="relative w-16 h-16 rounded-md overflow-hidden shrink-0 bg-gray-100 p-1">
                                                   <Image src={p.image} alt={p.image_alt} fill className="object-contain" />
                                               </div>
                                               <p className="text-sm font-medium group-hover:text-primary transition-colors">{p.title}</p>
                                           </Link>
                                       ))}
                                   </TabsContent>
                                   <TabsContent value="categories" className="pt-4">
                                       <p className="text-sm text-muted-foreground">Categories coming soon.</p>
                                   </TabsContent>
                                   <TabsContent value="archives" className="pt-4">
                                       <p className="text-sm text-muted-foreground">Archives coming soon.</p>
                                   </TabsContent>
                               </Tabs>
                           </CardContent>
                       </Card>
                    </div>
                </div>
            </div>
        </section>
      </div>
    );
}
