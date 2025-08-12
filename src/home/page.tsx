import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-accent/10 to-secondary/10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-6 tracking-tight">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              JournalScript
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover stories, insights, and ideas that matter. A modern platform for thoughtful writing and meaningful conversations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 h-auto">
              Start Reading
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 h-auto">
              About Us
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Featured Stories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Handpicked articles from our community of writers and thinkers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Featured Post 1 */}
            <article className="group cursor-pointer">
              <div className="bg-card rounded-xl border border-border p-6 h-full transition-all duration-300 hover:shadow-lg hover:border-primary/20">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                    Technology
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3 group-hover:text-primary transition-colors">
                  The Future of Web Development
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  Exploring the latest trends and technologies that are reshaping how we build for the web...
                </p>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>By Dharshan</span>
                  <time dateTime="2024-12-01">Dec 1, 2024</time>
                </div>
              </div>
            </article>

            {/* Featured Post 2 */}
            <article className="group cursor-pointer">
              <div className="bg-card rounded-xl border border-border p-6 h-full transition-all duration-300 hover:shadow-lg hover:border-primary/20">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-accent/50 text-accent-foreground rounded-full">
                    Design
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3 group-hover:text-primary transition-colors">
                  Crafting User Experiences
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  A deep dive into the principles of creating intuitive and delightful user interfaces...
                </p>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>By Design Team</span>
                  <time dateTime="2024-11-28">Nov 28, 2024</time>
                </div>
              </div>
            </article>

            {/* Featured Post 3 */}
            <article className="group cursor-pointer">
              <div className="bg-card rounded-xl border border-border p-6 h-full transition-all duration-300 hover:shadow-lg hover:border-primary/20">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full">
                    Lifestyle
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3 group-hover:text-primary transition-colors">
                  Finding Balance in Digital Age
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  Practical tips for maintaining work-life balance while staying productive in our connected world...
                </p>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>By Life Coach</span>
                  <time dateTime="2024-11-25">Nov 25, 2024</time>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Subscribe to our newsletter for the latest stories and insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <Button className="px-8 py-3 h-auto">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Recent Posts Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Recent Posts
            </h2>
            <Link href="/blog">
              <Button variant="outline">
                View All Posts
              </Button>
            </Link>
          </div>

          <div className="space-y-8">
            {/* Recent Post 1 */}
            <article className="flex flex-col md:flex-row gap-6 p-6 bg-card rounded-xl border border-border hover:shadow-md transition-shadow">
              <div className="md:w-1/3">
                <div className="aspect-video bg-muted rounded-lg"></div>
              </div>
              <div className="md:w-2/3">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-sm text-primary font-medium">Technology</span>
                  <time className="text-sm text-muted-foreground">2 days ago</time>
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3 hover:text-primary transition-colors cursor-pointer">
                  Building Scalable Applications with Modern Architecture
                </h3>
                <p className="text-muted-foreground mb-4">
                  Learn how to design and implement scalable applications using microservices, containerization, and cloud-native approaches...
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">By Tech Team</span>
                  <span className="text-sm text-muted-foreground">5 min read</span>
                </div>
              </div>
            </article>

            {/* Recent Post 2 */}
            <article className="flex flex-col md:flex-row gap-6 p-6 bg-card rounded-xl border border-border hover:shadow-md transition-shadow">
              <div className="md:w-1/3">
                <div className="aspect-video bg-muted rounded-lg"></div>
              </div>
              <div className="md:w-2/3">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-sm text-primary font-medium">Productivity</span>
                  <time className="text-sm text-muted-foreground">1 week ago</time>
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3 hover:text-primary transition-colors cursor-pointer">
                  The Art of Deep Work in a Distracted World
                </h3>
                <p className="text-muted-foreground mb-4">
                  Discover strategies to maintain focus and achieve deep work sessions for maximum productivity and creative output...
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">By Dharshan</span>
                  <span className="text-sm text-muted-foreground">8 min read</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
