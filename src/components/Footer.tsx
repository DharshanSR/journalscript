import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-green-50 via-green-100 to-green-50 text-gray-800 relative overflow-hidden border-t border-green-200">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-300 to-transparent transform rotate-12 scale-150"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg sm:text-2xl">J</span>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
                JournalScript
              </h3>
            </div>
            <p className="text-gray-700 mb-6 sm:mb-8 max-w-md text-sm sm:text-base lg:text-lg leading-relaxed">
              Empowering writers and readers with a modern, elegant platform for sharing stories, 
              insights, and knowledge. Built for performance, designed for engagement.
            </p>
            
            {/* Social Media Links */}
            <div className="flex space-x-3 sm:space-x-4">
              <a
                href="https://twitter.com/journalscript"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-2 sm:p-3 rounded-lg bg-green-100 hover:bg-green-200 transition-all duration-300 hover:scale-110 border border-green-200"
                aria-label="Follow us on Twitter"
              >
                <svg className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 group-hover:text-green-700 transition-colors duration-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="https://github.com/journalscript"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-2 sm:p-3 rounded-lg bg-green-100 hover:bg-green-200 transition-all duration-300 hover:scale-110 border border-green-200"
                aria-label="View our GitHub repository"
              >
                <svg className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 group-hover:text-green-700 transition-colors duration-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/company/journalscript"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-2 sm:p-3 rounded-lg bg-green-100 hover:bg-green-200 transition-all duration-300 hover:scale-110 border border-green-200"
                aria-label="Connect with us on LinkedIn"
              >
                <svg className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 group-hover:text-green-700 transition-colors duration-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-gray-800 flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Quick Links
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <Link
                    href="/"
                    className="text-sm sm:text-base text-gray-600 hover:text-green-600 transition-all duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-0.5 bg-green-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/articles"
                    className="text-sm sm:text-base text-gray-600 hover:text-green-600 transition-all duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-0.5 bg-green-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    Articles
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-sm sm:text-base text-gray-600 hover:text-green-600 transition-all duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-0.5 bg-green-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-sm sm:text-base text-gray-600 hover:text-green-600 transition-all duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-0.5 bg-green-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-gray-800 flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Categories
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <Link
                    href="/categories/technology"
                    className="text-sm sm:text-base text-gray-600 hover:text-green-600 transition-all duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-0.5 bg-green-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    Technology
                  </Link>
                </li>
                <li>
                  <Link
                    href="/categories/lifestyle"
                    className="text-sm sm:text-base text-gray-600 hover:text-green-600 transition-all duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-0.5 bg-green-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    Lifestyle
                  </Link>
                </li>
                <li>
                  <Link
                    href="/categories/business"
                    className="text-sm sm:text-base text-gray-600 hover:text-green-600 transition-all duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-0.5 bg-green-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    Business
                  </Link>
                </li>
                <li>
                  <Link
                    href="/categories/design"
                    className="text-sm sm:text-base text-gray-600 hover:text-green-600 transition-all duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-0.5 bg-green-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    Design
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-green-200">
          <div className="text-center max-w-2xl mx-auto">
            <h4 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">Stay Updated</h4>
            <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
              Subscribe to our newsletter for the latest articles and insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg bg-white border border-green-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300"
              />
              <button className="px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-lg hover:from-green-400 hover:to-green-500 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-green-200">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 sm:space-y-6 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-6 lg:space-x-8">
              <p className="text-gray-600 text-xs sm:text-sm font-medium text-center sm:text-left">
                © {currentYear} JournalScript. All rights reserved.
              </p>
              <div className="flex items-center space-x-2 text-gray-600 text-xs sm:text-sm">
                <span>Made with</span>
                <span className="text-red-500 text-base sm:text-lg">♥</span>
                <span>by the JournalScript Team</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-end gap-4 sm:gap-6">
              <Link
                href="/privacy"
                className="text-gray-600 hover:text-green-600 text-xs sm:text-sm font-medium transition-colors duration-300 relative group"
              >
                Privacy Policy
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="/terms"
                className="text-gray-600 hover:text-green-600 text-xs sm:text-sm font-medium transition-colors duration-300 relative group"
              >
                Terms of Service
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="/sitemap"
                className="text-gray-600 hover:text-green-600 text-xs sm:text-sm font-medium transition-colors duration-300 relative group"
              >
                Sitemap
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}