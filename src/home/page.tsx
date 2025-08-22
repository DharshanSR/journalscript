import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, User } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src="/blog-workspace-background.png" alt="Hero background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        {/* Featured Badge */}
        <Badge variant="secondary" className="mb-6 bg-accent/20 text-accent-foreground border-accent/30">
          Featured Article
        </Badge>

        {/* Main Heading */}
        <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Discover Stories That
          <span className="block text-accent">Inspire & Inform</span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
          Dive into our curated collection of insights, tutorials, and thought-provoking articles crafted by industry
          experts and passionate writers.
        </p>

        {/* Article Meta */}
        <div className="flex items-center justify-center gap-6 mb-8 text-gray-300">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            <span>Sarah Johnson</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>Dec 15, 2024</span>
          </div>
        </div>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
            Read Featured Article
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white/30 text-white hover:bg-white/10 px-8 py-3 bg-transparent"
          >
            Browse All Posts
          </Button>
        </div>

        {/* Navigation Links */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm">
          <a href="#" className="text-secondary hover:text-accent transition-colors">
            Technology
          </a>
          <a href="#" className="text-secondary hover:text-accent transition-colors">
            Design
          </a>
          <a href="#" className="text-secondary hover:text-accent transition-colors">
            Business
          </a>
          <a href="#" className="text-secondary hover:text-accent transition-colors">
            Lifestyle
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
