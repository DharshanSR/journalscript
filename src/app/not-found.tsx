"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Home, Search, BookOpen, Mail } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        {/* Animated 404 Number */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 200, 
            damping: 20,
            delay: 0.1 
          }}
          className="mb-8"
        >
          <h1 className="text-8xl md:text-9xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-none">
            404
          </h1>
        </motion.div>

        {/* Floating Elements Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-6"
        >
          <div className="relative">
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0] 
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 3,
                ease: "easeInOut" 
              }}
              className="absolute -top-8 -left-8 text-blue-400 opacity-60"
            >
              <BookOpen size={24} />
            </motion.div>
            
            <motion.div
              animate={{ 
                y: [0, 15, 0],
                rotate: [0, -5, 5, 0] 
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 4,
                ease: "easeInOut",
                delay: 1 
              }}
              className="absolute -top-4 -right-12 text-purple-400 opacity-60"
            >
              <Search size={20} />
            </motion.div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-3">
            Oops! Page Not Found
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-lg max-w-md mx-auto">
            The page you&apos;re looking for seems to have wandered off into the digital void. 
            Don&apos;t worry, even the best explorers get lost sometimes!
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
        >
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 min-w-[160px]"
            >
              <Home size={18} />
              Go Home
            </motion.button>
          </Link>

          <Link href="/blog">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-white dark:bg-slate-800 text-slate-800 dark:text-white border-2 border-slate-200 dark:border-slate-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 min-w-[160px]"
            >
              <BookOpen size={18} />
              Browse Blog
            </motion.button>
          </Link>
        </motion.div>

        {/* Additional Help */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-sm text-slate-500 dark:text-slate-400"
        >
          <p className="mb-3">Still can&apos;t find what you&apos;re looking for?</p>
          <div className="flex justify-center gap-6">
            <Link 
              href="/contact" 
              className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Mail size={16} />
              Contact Us
            </Link>
            <Link 
              href="/blog" 
              className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Search size={16} />
              Search Blog
            </Link>
          </div>
        </motion.div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ 
              x: [0, 100, 0],
              y: [0, -50, 0],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 10,
              ease: "linear" 
            }}
            className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-200 dark:bg-blue-900 rounded-full blur-xl"
          />
          
          <motion.div
            animate={{ 
              x: [0, -80, 0],
              y: [0, 60, 0],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 8,
              ease: "linear",
              delay: 2
            }}
            className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-purple-200 dark:bg-purple-900 rounded-full blur-xl"
          />
        </div>
      </div>
    </div>
  );
}
