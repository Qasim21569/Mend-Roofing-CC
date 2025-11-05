"use client";

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
      {/* Hero Section */}
      <section className="relative w-full py-20 overflow-hidden bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,222,89,0.15),transparent_60%)]" />
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="max-w-2xl text-center mx-auto">
            <p className="uppercase tracking-widest text-destructive mb-3 text-sm">
              MENDROOFING BLOG
            </p>
            <h1
              className="text-4xl md:text-5xl font-bold text-primary mb-4"
              style={{ fontFamily: '"Stardos Stencil", system-ui' }}
            >
              Expert Roofing Insights & Home Improvement Tips
            </h1>
            <p className="text-muted-foreground text-base md:text-lg">
              Stay updated with expert advice, professional recommendations, and
              the latest trends in high-quality roofing and home renovation from
              MendRoofing.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-3 items-start gap-10">
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-10">
              {blogPosts.map((post) => (
                <Card
                  key={post.slug}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200/50 group"
                >
                  <div className="grid md:grid-cols-[300px_1fr]">
                    <div className="relative w-full aspect-[4/3] md:aspect-auto bg-gray-100">
                      <Image
                        src={post.image}
                        alt={post.image_alt}
                        fill
                        className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-6 flex flex-col justify-between">
                      <div>
                        <p className="text-xs text-muted-foreground mb-2">
                          By {post.author} / {post.date}
                        </p>
                        <Link
                          href={`/about/blog/${post.slug}`}
                          className="group-hover:text-primary transition-colors"
                        >
                          <h2
                            className="text-2xl font-semibold mb-3 leading-snug text-gray-800"
                            style={{
                              fontFamily: '"Stardos Stencil", system-ui',
                            }}
                          >
                            {post.title}
                          </h2>
                        </Link>
                        <p className="text-sm text-muted-foreground mb-4">
                          {post.excerpt}
                        </p>
                      </div>
                      <Button
                        asChild
                        className="w-fit bg-primary hover:bg-primary/90 text-white"
                      >
                        <Link href={`/about/blog/${post.slug}`}>
                          Read Full Article
                        </Link>
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>

            {/* Sidebar */}
            <aside className="sticky top-24 space-y-10">
              {/* Search */}
              <div className="relative">
                <Input
                  placeholder="Search MendRoofing blog..."
                  className="pr-10 border-gray-300"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-1/2 right-1 -translate-y-1/2 h-8 w-8"
                >
                  <Search className="h-4 w-4 text-muted-foreground" />
                </Button>
              </div>

              {/* CTA */}
              {/* <GetStarted /> */}

              {/* Tabs */}
              <Card className="backdrop-blur-xl bg-white/60 border border-gray-200/70 shadow-md">
                <CardContent className="p-4">
                  <Tabs defaultValue="recent" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="recent">Recent</TabsTrigger>
                      <TabsTrigger value="categories">Categories</TabsTrigger>
                      <TabsTrigger value="archives">Archives</TabsTrigger>
                    </TabsList>

                    <TabsContent
                      value="recent"
                      className="space-y-4 pt-4 transition-all"
                    >
                      {blogPosts.slice(0, 4).map((post) => (
                        <Link
                          key={post.slug}
                          href={`/about/blog/${post.slug}`}
                          className="flex items-center gap-4 group"
                        >
                          <div className="relative w-16 h-16 rounded-md overflow-hidden shrink-0 bg-gray-100">
                            <Image
                              src={post.image}
                              alt={post.image_alt}
                              fill
                              className="object-contain transition-transform group-hover:scale-105"
                            />
                          </div>
                          <p className="text-sm font-medium group-hover:text-primary transition-colors">
                            {post.title}
                          </p>
                        </Link>
                      ))}
                    </TabsContent>

                    <TabsContent value="categories" className="pt-4">
                      <p className="text-sm text-muted-foreground">
                        Roofing categories and guides coming soon from MendRoofing.
                      </p>
                    </TabsContent>

                    <TabsContent value="archives" className="pt-4">
                      <p className="text-sm text-muted-foreground">
                        Access past roofing insights and tips — archives coming soon.
                      </p>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
