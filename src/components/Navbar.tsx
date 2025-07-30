"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, Search } from "lucide-react"
import { memo, useCallback, useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

// Types
interface NavigationItem {
  name: string;
  href: string;
}

// Constants
const NAVIGATION_ITEMS: NavigationItem[] = [
  { name: "Home", href: "/" },
  { name: "Articles", href: "/articles" },
  { name: "Categories", href: "/categories" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const SCROLL_THRESHOLD = 20;
const MOBILE_MENU_ANIMATION_DELAY = 400;
const MOBILE_MENU_ITEM_DELAY = 100;

// CSS Classes for better maintainability
const STYLES = {
  nav: (scrolled: boolean) => 
    `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-gradient-to-r from-green-50 to-green-100/95 backdrop-blur-md shadow-lg border-b border-green-200' 
        : 'bg-gradient-to-r from-green-50/90 to-green-100/80 backdrop-blur-sm border-b border-green-100/50'
    }`,
  container: 'container mx-auto px-4 sm:px-6 lg:px-8',
  flexContainer: 'flex h-16 items-center justify-between',
  logoGroup: 'flex items-center group',
  logoLink: 'flex items-center space-x-3 transition-transform duration-300 hover:scale-105',
  logoIcon: 'relative h-10 w-10 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg group-hover:shadow-green-200 transition-shadow duration-300',
  logoText: 'text-white font-bold text-xl',
  logoOverlay: 'absolute inset-0 rounded-xl bg-gradient-to-br from-green-400 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300',
  brandName: 'font-bold text-2xl bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent',
  desktopNav: 'hidden md:flex items-center space-x-1',
  desktopNavLink: 'relative px-4 py-2 text-sm font-medium text-gray-700 hover:text-green-600 transition-all duration-300 rounded-lg hover:bg-green-50 group',
  desktopNavUnderline: 'absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-green-600 group-hover:w-full transition-all duration-300',
  actionsContainer: 'flex items-center space-x-4',
  searchContainer: 'hidden lg:flex items-center',
  searchGroup: 'relative group',
  searchIcon: 'absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-green-500 group-focus-within:text-green-600 transition-colors duration-200',
  searchInput: 'w-64 pl-10 pr-4 py-2 border-green-200 focus:border-green-500 focus:ring-green-500 rounded-lg transition-all duration-300 hover:border-green-300',
  mobileMenuButton: 'md:hidden h-10 w-10 rounded-lg hover:bg-green-50 transition-colors duration-300',
  mobileMenuIcon: 'h-5 w-5 text-green-600',
  sheetContent: 'w-72 bg-white border-l border-green-100 transform transition-transform duration-500 ease-in-out',
  mobileHeader: 'pb-4 border-b border-green-100 animate-in slide-in-from-right-2 duration-300',
  mobileTitle: 'text-lg font-semibold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent',
  mobileContainer: 'flex flex-col space-y-6 mt-4 animate-in slide-in-from-right-4 duration-500 delay-100',
  mobileSearchContainer: 'relative animate-in fade-in duration-300 delay-200',
  mobileSearchIcon: 'absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-green-500',
  mobileSearchInput: 'pl-10 border-green-200 focus:border-green-500 focus:ring-green-500 rounded-lg h-10',
  mobileNavContainer: 'flex flex-col space-y-1 animate-in slide-in-from-right-6 duration-700 delay-300',
  mobileNavLink: 'text-base font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 px-3 py-2.5 rounded-lg transition-all duration-300 transform hover:translate-x-1',
} as const;

// Custom hook for scroll detection
const useScrollDetection = (threshold: number = SCROLL_THRESHOLD) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > threshold);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return scrolled;
};

// Components
const Logo = memo(() => (
  <div className={STYLES.logoGroup}>
    <Link href="/" className={STYLES.logoLink}>
      <div className={STYLES.logoIcon}>
        <span className={STYLES.logoText}>J</span>
        <div className={STYLES.logoOverlay} />
      </div>
      <span className={STYLES.brandName}>
        JournalScript
      </span>
    </Link>
  </div>
));

Logo.displayName = 'Logo';

const DesktopNavigation = memo(() => (
  <div className={STYLES.desktopNav}>
    {NAVIGATION_ITEMS.map((item) => (
      <Link
        key={item.name}
        href={item.href}
        className={STYLES.desktopNavLink}
      >
        {item.name}
        <span className={STYLES.desktopNavUnderline} />
      </Link>
    ))}
  </div>
));

DesktopNavigation.displayName = 'DesktopNavigation';

const SearchBar = memo(() => (
  <div className={STYLES.searchContainer}>
    <div className={STYLES.searchGroup}>
      <Search className={STYLES.searchIcon} aria-hidden="true" />
      <Input 
        type="search" 
        placeholder="Search articles..." 
        className={STYLES.searchInput}
        aria-label="Search articles"
      />
    </div>
  </div>
));

SearchBar.displayName = 'SearchBar';

interface MobileMenuProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const MobileMenu = memo(({ isOpen, onOpenChange }: MobileMenuProps) => {
  const handleLinkClick = useCallback(() => {
    onOpenChange(false);
  }, [onOpenChange]);

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className={STYLES.mobileMenuButton}
        >
          <Menu className={STYLES.mobileMenuIcon} />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className={STYLES.sheetContent}>
        {/* Mobile Menu Header */}
        <div className={STYLES.mobileHeader}>
          <h2 className={STYLES.mobileTitle}>
            Menu
          </h2>
        </div>
        
        <div className={STYLES.mobileContainer}>
          {/* Mobile Search */}
          <div className={STYLES.mobileSearchContainer}>
            <Search className={STYLES.mobileSearchIcon} aria-hidden="true" />
            <Input 
              type="search" 
              placeholder="Search articles..." 
              className={STYLES.mobileSearchInput}
              aria-label="Search articles"
            />
          </div>

          {/* Mobile Navigation */}
          <nav className={STYLES.mobileNavContainer}>
            {NAVIGATION_ITEMS.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={STYLES.mobileNavLink}
                onClick={handleLinkClick}
                style={{
                  animationDelay: `${MOBILE_MENU_ANIMATION_DELAY + index * MOBILE_MENU_ITEM_DELAY}ms`
                }}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
});

MobileMenu.displayName = 'MobileMenu';

/**
 * Navbar component for the JournalScript application.
 * 
 * Features:
 * - Responsive design with mobile menu
 * - Scroll-based styling changes
 * - Search functionality
 * - Smooth animations and transitions
 * - Optimized with React.memo for performance
 * - Centralized styling for maintainability
 * - Custom hook for scroll detection
 * 
 * @returns JSX.Element - The navbar component
 */
const Navbar = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const scrolled = useScrollDetection();

  const handleMenuToggle = useCallback((open: boolean) => {
    setIsOpen(open);
  }, []);

  return (
    <nav className={STYLES.nav(scrolled)}>
      <div className={STYLES.container}>
        <div className={STYLES.flexContainer}>
          <Logo />
          <DesktopNavigation />
          
          <div className={STYLES.actionsContainer}>
            <SearchBar />
            <MobileMenu isOpen={isOpen} onOpenChange={handleMenuToggle} />
          </div>
        </div>
      </div>
    </nav>
  );
});

Navbar.displayName = 'Navbar';

export default Navbar;
