"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, Search} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Articles", href: "/articles" },
  { name: "Categories", href: "/categories" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-gradient-to-r from-green-50 to-green-100/95 backdrop-blur-md shadow-lg border-b border-green-200' 
        : 'bg-gradient-to-r from-green-50/90 to-green-100/80 backdrop-blur-sm border-b border-green-100/50'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center group">
            <Link href="/" className="flex items-center space-x-3 transition-transform duration-300 hover:scale-105">
              <div className="relative h-10 w-10 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg group-hover:shadow-green-200 transition-shadow duration-300">
                <span className="text-white font-bold text-xl">J</span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-green-400 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <span className="font-bold text-2xl bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
                JournalScript
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative px-4 py-2 text-sm font-medium text-gray-700 hover:text-green-600 transition-all duration-300 rounded-lg hover:bg-green-50 group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-green-600 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Search and Actions */}
          <div className="flex items-center space-x-4">
            {/* Search - Hidden on mobile */}
            <div className="hidden lg:flex items-center">
              <div className="relative group">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-green-500 group-focus-within:text-green-600 transition-colors duration-200" />
                <Input 
                  type="search" 
                  placeholder="Search articles..." 
                  className="w-64 pl-10 pr-4 py-2 border-green-200 focus:border-green-500 focus:ring-green-500 rounded-lg transition-all duration-300 hover:border-green-300" 
                />
              </div>
            </div>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="md:hidden h-10 w-10 rounded-lg hover:bg-green-50 transition-colors duration-300"
                >
                  <Menu className="h-5 w-5 text-green-600" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72 bg-white border-l border-green-100 transform transition-transform duration-500 ease-in-out">
                {/* Mobile Menu Header */}
                <div className="pb-4 border-b border-green-100 animate-in slide-in-from-right-2 duration-300">
                  <h2 className="text-lg font-semibold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
                    Menu
                  </h2>
                </div>
                
                <div className="flex flex-col space-y-6 mt-4 animate-in slide-in-from-right-4 duration-500 delay-100">
                  {/* Mobile Search */}
                  <div className="relative animate-in fade-in duration-300 delay-200">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-green-500" />
                    <Input 
                      type="search" 
                      placeholder="Search articles..." 
                      className="pl-10 border-green-200 focus:border-green-500 focus:ring-green-500 rounded-lg h-10" 
                    />
                  </div>

                  {/* Mobile Navigation */}
                  <nav className="flex flex-col space-y-1 animate-in slide-in-from-right-6 duration-700 delay-300">
                    {navigation.map((item, index) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="text-base font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 px-3 py-2.5 rounded-lg transition-all duration-300 transform hover:translate-x-1"
                        onClick={() => setIsOpen(false)}
                        style={{
                          animationDelay: `${400 + index * 100}ms`
                        }}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
