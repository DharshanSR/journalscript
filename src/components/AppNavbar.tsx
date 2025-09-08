"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"
import { Menu, Home, BookOpen, Tag, Users, Mail } from "lucide-react"

export function SiteHeader() {
  const links = [
    { href: "/", label: "Home", icon: Home },
    { href: "/blog", label: "Articles", icon: BookOpen },
    { href: "#categories", label: "Categories", icon: Tag },
    { href: "#about", label: "About", icon: Users },
    { href: "#newsletter", label: "Newsletter", icon: Mail },
  ]

  return (
    <header className="sticky top-0 z-50 p-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex h-16 items-center justify-between px-8 
                        backdrop-blur-lg bg-white/10 
                        border border-white/20 
                        rounded-full 
                        shadow-2xl shadow-black/20
                        before:absolute before:inset-0 before:rounded-full
                        before:bg-gradient-to-r before:from-purple-500/10 before:via-blue-500/10 before:to-cyan-500/10
                        before:blur-xl before:-z-10
                        relative overflow-hidden
                        hover:bg-white/15 hover:border-white/30
                        transition-all duration-300 ease-out
                        transform hover:scale-[1.02]">
          <Link href="/" className="flex items-center gap-2 z-10 relative">
            <div className="relative">
              <Image 
                src="/icons/skitbit-white.svg" 
                alt="TechInsights logo" 
                width={24} 
                height={24} 
                className="h-6 w-6 drop-shadow-lg" 
              />
            </div>
            <span className="font-bold text-lg tracking-wide text-white drop-shadow-lg">TechInsights</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 text-sm md:flex z-10 relative">
            {links.map((l) => (
              <Link 
                key={l.href} 
                href={l.href} 
                className="text-white/90 hover:text-white font-medium
                          hover:scale-110 transition-all duration-300 ease-out
                          drop-shadow-md relative group"
              >
                <span className="relative z-10">{l.label}</span>
                <div className="absolute inset-0 bg-white/10 rounded-full scale-0 
                               group-hover:scale-100 transition-transform duration-300 ease-out
                               blur-sm -z-10"></div>
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex z-10 relative">
            <Button
              asChild
              className="bg-gradient-to-r from-lime-400 to-lime-300 text-black font-bold rounded-full px-8 py-3
                         hover:from-lime-300 hover:to-lime-200 
                         hover:shadow-2xl hover:shadow-lime-400/50
                         hover:scale-110 transform
                         transition-all duration-300 ease-out
                         border-2 border-white/20 backdrop-blur-sm"
            >
              <Link href="#newsletter">Subscribe</Link>
            </Button>
          </div>

          {/* Mobile Nav */}
          <div className="md:hidden z-10 relative">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-white/30 bg-white/10 text-white hover:bg-white/20
                            backdrop-blur-sm rounded-full w-12 h-12
                            hover:scale-110 transition-all duration-300 ease-out
                            shadow-lg"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="backdrop-blur-xl bg-black/40 border-white/20 p-0 w-64 flex flex-col
                                                   rounded-l-3xl border-l-2 border-t-2 border-b-2">
                <div className="flex items-center gap-2 px-6 py-6 border-b border-white/20">
                  <Image
                    src="/icons/skitbit-white.svg"
                    alt="TechInsights logo"
                    width={28}
                    height={28}
                    className="h-7 w-7 drop-shadow-lg"
                  />
                  <span className="font-bold tracking-wide text-white text-xl drop-shadow-lg">TechInsights</span>
                </div>

                {/* Nav Links */}
                <nav className="flex flex-col gap-2 mt-4 px-4">
                  {links.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="flex items-center gap-4 px-4 py-4 rounded-2xl
                                hover:bg-white/10 hover:backdrop-blur-sm
                                text-white/90 hover:text-white 
                                transition-all duration-300 ease-out
                                hover:scale-105 hover:shadow-lg
                                border border-transparent hover:border-white/20"
                    >
                      <span className="inline-flex items-center justify-center w-6 h-6 text-white/80">
                        <l.icon className="h-5 w-5" />
                      </span>
                      <span className="font-medium">{l.label}</span>
                    </Link>
                  ))}
                </nav>

                <div className="mt-auto border-t border-white/20 p-6">
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-lime-400 to-lime-300 text-black font-bold 
                               rounded-2xl px-6 py-4 hover:from-lime-300 hover:to-lime-200
                               hover:shadow-2xl hover:shadow-lime-400/50 hover:scale-105
                               transition-all duration-300 ease-out
                               border-2 border-white/20"
                  >
                    <Link href="#newsletter">Subscribe</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
