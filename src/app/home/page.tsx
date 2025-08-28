import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Users, TrendingUp } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-background py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Insights That <span className="text-primary">Transform</span> Your Perspective
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Discover thought-provoking articles, expert insights, and actionable strategies that help you navigate
                the complexities of modern business and life.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base px-8 py-3">
                Start Reading
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-base px-8 py-3 bg-transparent">
                Subscribe to Newsletter
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start mb-2">
                  <BookOpen className="h-5 w-5 text-primary mr-2" />
                  <span className="text-2xl font-bold text-foreground">500+</span>
                </div>
                <p className="text-sm text-muted-foreground">Articles Published</p>
              </div>
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start mb-2">
                  <Users className="h-5 w-5 text-primary mr-2" />
                  <span className="text-2xl font-bold text-foreground">50K+</span>
                </div>
                <p className="text-sm text-muted-foreground">Monthly Readers</p>
              </div>
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start mb-2">
                  <TrendingUp className="h-5 w-5 text-primary mr-2" />
                  <span className="text-2xl font-bold text-foreground">95%</span>
                </div>
                <p className="text-sm text-muted-foreground">Reader Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative bg-card rounded-2xl p-8 shadow-lg">
              <img
                src="/blog-workspace-background.png"
                alt="Professional blog illustration"
                className="w-full h-auto rounded-lg"
              />

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                Latest Post
              </div>

              <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                Trending Now
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl -z-10 transform rotate-3"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
