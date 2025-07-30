import Link from 'next/link';
import { ReactElement, memo } from 'react';

// Types
interface SocialLink {
  href: string;
  label: string;
  icon: ReactElement;
}

interface NavigationLink {
  href: string;
  label: string;
}

interface NavigationSection {
  title: string;
  links: NavigationLink[];
}

// Constants
const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://twitter.com/journalscript',
    label: 'Follow us on Twitter',
    icon: (
      <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
  },
  {
    href: 'https://github.com/journalscript',
    label: 'View our GitHub repository',
    icon: (
      <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    href: 'https://linkedin.com/company/journalscript',
    label: 'Connect with us on LinkedIn',
    icon: (
      <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

const NAVIGATION_SECTIONS: NavigationSection[] = [
  {
    title: 'Quick Links',
    links: [
      { href: '/', label: 'Home' },
      { href: '/articles', label: 'Articles' },
      { href: '/about', label: 'About' },
      { href: '/contact', label: 'Contact' },
    ],
  },
  {
    title: 'Categories',
    links: [
      { href: '/categories/technology', label: 'Technology' },
      { href: '/categories/lifestyle', label: 'Lifestyle' },
      { href: '/categories/business', label: 'Business' },
      { href: '/categories/design', label: 'Design' },
    ],
  },
];

const FOOTER_LINKS: NavigationLink[] = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Service' },
  { href: '/sitemap', label: 'Sitemap' },
];

// CSS Classes for better maintainability
const STYLES = {
  footer: 'bg-gradient-to-br from-green-50 via-green-100 to-green-50 text-gray-800 relative overflow-hidden border-t border-green-200',
  backgroundPattern: 'absolute inset-0 opacity-10',
  backgroundGradient: 'absolute inset-0 bg-gradient-to-r from-transparent via-green-300 to-transparent transform rotate-12 scale-150',
  container: 'relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16',
  grid: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12',
  logoSection: 'lg:col-span-2',
  logoContainer: 'flex items-center space-x-3 mb-4 sm:mb-6',
  logoIcon: 'h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center shadow-lg',
  logoText: 'text-white font-bold text-lg sm:text-2xl',
  brandName: 'text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent',
  description: 'text-gray-700 mb-6 sm:mb-8 max-w-md text-sm sm:text-base lg:text-lg leading-relaxed',
  socialContainer: 'flex space-x-3 sm:space-x-4',
  socialButton: 'group p-2 sm:p-3 rounded-lg bg-green-100 hover:bg-green-200 transition-all duration-300 hover:scale-110 border border-green-200',
  socialIcon: 'h-5 w-5 sm:h-6 sm:w-6 text-green-600 group-hover:text-green-700 transition-colors duration-200',
  sectionContainer: 'space-y-6 sm:space-y-8',
  sectionTitle: 'text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-gray-800 flex items-center',
  sectionDot: 'w-2 h-2 bg-green-500 rounded-full mr-3',
  linksList: 'space-y-2 sm:space-y-3',
  navLink: 'text-sm sm:text-base text-gray-600 hover:text-green-600 transition-all duration-300 flex items-center group',
  navIndicator: 'w-0 group-hover:w-4 h-0.5 bg-green-500 mr-0 group-hover:mr-2 transition-all duration-300',
  bottomSection: 'mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-green-200',
  bottomContainer: 'flex flex-col lg:flex-row justify-between items-center space-y-4 sm:space-y-6 lg:space-y-0',
  copyrightSection: 'flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-6 lg:space-x-8',
  copyrightText: 'text-gray-600 text-xs sm:text-sm font-medium text-center sm:text-left',
  madeWithLove: 'flex items-center space-x-2 text-gray-600 text-xs sm:text-sm',
  heart: 'text-red-500 text-base sm:text-lg',
  footerLinksContainer: 'flex flex-wrap justify-center lg:justify-end gap-4 sm:gap-6',
  footerLink: 'text-gray-600 hover:text-green-600 text-xs sm:text-sm font-medium transition-colors duration-300 relative group',
  footerLinkUnderline: 'absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 group-hover:w-full transition-all duration-300',
} as const;

// Components
const SocialMediaButton = memo(({ href, label, icon }: SocialLink) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={STYLES.socialButton}
    aria-label={label}
  >
    <div className={STYLES.socialIcon}>
      {icon}
    </div>
  </a>
));

SocialMediaButton.displayName = 'SocialMediaButton';

const NavigationLinkComponent = memo(({ href, label }: NavigationLink) => (
  <li>
    <Link
      href={href}
      className={STYLES.navLink}
    >
      <span className={STYLES.navIndicator} />
      {label}
    </Link>
  </li>
));

NavigationLinkComponent.displayName = 'NavigationLinkComponent';

const NavigationSectionComponent = memo(({ title, links }: NavigationSection) => (
  <div className={STYLES.sectionContainer}>
    <div>
      <h4 className={STYLES.sectionTitle}>
        <span className={STYLES.sectionDot} />
        {title}
      </h4>
      <ul className={STYLES.linksList}>
        {links.map((link) => (
          <NavigationLinkComponent key={link.href} {...link} />
        ))}
      </ul>
    </div>
  </div>
));

NavigationSectionComponent.displayName = 'NavigationSectionComponent';

const FooterLinkComponent = memo(({ href, label }: NavigationLink) => (
  <Link
    href={href}
    className={STYLES.footerLink}
  >
    {label}
    <span className={STYLES.footerLinkUnderline} />
  </Link>
));

FooterLinkComponent.displayName = 'FooterLinkComponent';

/**
 * Footer component for the JournalScript application.
 * 
 * Features:
 * - Responsive design with mobile-first approach
 * - Social media links with hover animations
 * - Navigation sections (Quick Links, Categories)
 * - Copyright and legal links
 * - Optimized with React.memo for performance
 * - Centralized styling for maintainability
 * 
 * @returns JSX.Element - The footer component
 */
const Footer = memo(() => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={STYLES.footer}>
      {/* Background Pattern */}
      <div className={STYLES.backgroundPattern}>
        <div className={STYLES.backgroundGradient} />
      </div>
      
      <div className={STYLES.container}>
        <div className={STYLES.grid}>
          {/* Logo and Description */}
          <div className={STYLES.logoSection}>
            <div className={STYLES.logoContainer}>
              <div className={STYLES.logoIcon}>
                <span className={STYLES.logoText}>J</span>
              </div>
              <h3 className={STYLES.brandName}>
                JournalScript
              </h3>
            </div>
            <p className={STYLES.description}>
              Empowering writers and readers with a modern, elegant platform for sharing stories, 
              insights, and knowledge. Built for performance, designed for engagement.
            </p>
            
            {/* Social Media Links */}
            <div className={STYLES.socialContainer}>
              {SOCIAL_LINKS.map((social) => (
                <SocialMediaButton key={social.href} {...social} />
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          {NAVIGATION_SECTIONS.map((section) => (
            <NavigationSectionComponent key={section.title} {...section} />
          ))}
        </div>

        {/* Bottom Section */}
        <div className={STYLES.bottomSection}>
          <div className={STYLES.bottomContainer}>
            <div className={STYLES.copyrightSection}>
              <p className={STYLES.copyrightText}>
                © {currentYear} JournalScript. All rights reserved.
              </p>
              <div className={STYLES.madeWithLove}>
                <span>Made with</span>
                <span className={STYLES.heart}>♥</span>
                <span>by the JournalScript Team</span>
              </div>
            </div>
            <div className={STYLES.footerLinksContainer}>
              {FOOTER_LINKS.map((link) => (
                <FooterLinkComponent key={link.href} {...link} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;