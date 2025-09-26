
import { GetStarted } from "@/components/get-started";
import { blogPosts } from "@/lib/blog-data";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function BlogPage() {
    return (
      <div className="flex flex-col bg-background">
        <section className="w-full py-12 md:py-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-3 items-start gap-8">
                    <div className="lg:col-span-2 space-y-12">
                         <h1 className="hero-heading uppercase mb-12">
                            BLOG
                        </h1>
                        {blogPosts.map((post) => (
                            <div key={post.slug} className="space-y-4">
                                <Link href={`/about/blog/${post.slug}`} className="group transition-colors">
                                    <h2 className="content-heading text-xl group-hover:text-primary group-hover:underline">
                                        {post.title}
                                    </h2>
                                </Link>
                                <p className="text-xs text-muted-foreground">By {post.author} / {post.date}</p>
                                
                                <div className="grid grid-cols-[120px_1fr] items-start gap-4">
                                    <Link href={`/about/blog/${post.slug}`} className="block">
                                        <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-gray-100 p-2">
                                            <Image
                                                src={post.image}
                                                alt={post.image_alt}
                                                fill
                                                className="object-contain"
                                                sizes="120px"
                                                data-ai-hint={post.image_hint}
                                            />
                                        </div>
                                    </Link>
                                    <div className="space-y-2 max-w-md">
                                        <p className="content-description text-sm">
                                            {post.excerpt}
                                        </p>
                                        <Button asChild variant="link" className="p-0 h-auto text-sm">
                                            <Link href={`/about/blog/${post.slug}`}>Read More</Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
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
                                       {blogPosts.map(post => (
                                           <Link key={post.slug} href={`/about/blog/${post.slug}`} className="flex items-center gap-4 group">
                                               <div className="relative w-16 h-16 rounded-md overflow-hidden shrink-0 bg-gray-100 p-1">
                                                   <Image src={post.image} alt={post.image_alt} fill className="object-contain" />
                                               </div>
                                               <p className="text-sm font-medium group-hover:text-primary transition-colors">{post.title}</p>
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
