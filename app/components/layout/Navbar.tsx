'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import React from 'react';
import { useTheme } from '../../lib/theme-context';
import { useRouter, usePathname } from 'next/navigation';

export const defaultNavItems = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Work', href: '#work' },
  { name: 'About', href: '#values' },
];

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/softics',
    icon: (
      <svg
        className="w-5 h-5"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="currentColor" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/company/softics',
    icon: (
      <svg
        className="w-5 h-5"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    name: 'X',
    href: 'https://x.com/softics',
    icon: (
      <svg
        className="w-5 h-5"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/softics',
    icon: (
      <svg
        className="w-5 h-5"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="currentColor" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
      </svg>
    ),
  },
];

const softicsOptions = [
  { name: 'Softics Studio', href: '/', icon: (
    <svg className="w-5 h-5 text-[#FF9933] group-hover:text-[#FFB366] transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7M16 3v4M8 3v4m-5 4h18" /></svg>
  ), description: 'AI development studio' },
  { name: 'Softics Labs', href: '/labs', icon: (
    <svg className="w-5 h-5 text-[#FF9933] group-hover:text-[#FFB366] transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 2v6l-2 4v6a2 2 0 002 2h8a2 2 0 002-2v-6l-2-4V2" /></svg>
  ), description: 'Experimental AI playground' },
];

export interface NavItem { name: string; href: string }
export function Navbar({ items = defaultNavItems }: { items?: NavItem[] }) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Determine current site from pathname
  const pathname = usePathname();
  const initialSite = pathname?.startsWith('/labs') ? 'Softics Labs' : 'Softics Studio';

  const [selectedOption, setSelectedOption] = useState<string>(initialSite);
  const { theme, setTheme } = useTheme();

  // Sync theme with site on mount
  useEffect(() => {
    setTheme(initialSite === 'Softics Labs' ? 'labs' : 'studio');
  }, [initialSite, setTheme]);
  
  const router = useRouter();
  

  

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar when scrolling up or at the top
      if (currentScrollY <= 0) {
        setIsVisible(true);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past threshold
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
      
      // Update active section based on scroll position
      const sections = items.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, items]);

  // Smooth scroll handler
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMobileMenuOpen(false);
      }
    }
  };

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.header
          className="fixed top-0 left-0 right-0 z-50"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className={cn(
            'w-full px-4 sm:px-6 py-4',
            'backdrop-blur-md bg-white/10 border-b border-white/20',
            'shadow-lg'
          )}>
            <div className="flex items-center justify-between max-w-[1600px] mx-auto">
              {/* Logo and Dropdown */}
              <div className="w-[220px] min-w-[220px] max-w-[220px] -ml-8">
                <div
                  className="flex items-center relative"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <Link href="/" className="relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center"
                    >
                      <div className="relative w-8 h-8">
                        <Image
                          src="/logo.svg"
                          alt="Softics Logo"
                          fill
                          className="object-contain"
                          priority
                          style={theme === 'labs' ? { filter: 'hue-rotate(160deg) brightness(1.1)' } : {}}
                        />
                      </div>
                      <div className="flex items-center">
                        <span className="text-xl font-bold bg-gradient-to-r from-[#FF9933] to-[#FFB366] bg-clip-text text-transparent ml-2 truncate w-[120px] block">
                          {selectedOption}
                        </span>
                        <motion.button
                          tabIndex={-1}
                          aria-label="Open Softics Switcher"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-1 text-[#FF9933] hover:text-[#FFB366] transition-colors duration-200 ml-1 focus:outline-none"
                          style={{ pointerEvents: 'none' }} // disables click, hover only
                        >
                          <svg
                            className={cn(
                              "w-3.5 h-3.5 transition-transform duration-200",
                              isDropdownOpen && "rotate-180"
                            )}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </motion.button>
                      </div>
                    </motion.div>
                  </Link>
                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 top-[calc(100%+0.5rem)] w-72 rounded-2xl bg-white/80 backdrop-blur-xl shadow-2xl border border-white/30 py-4 z-50 flex flex-col divide-y divide-gray-100"
                        style={{ minWidth: '260px' }}
                      >
                        {softicsOptions.map((option) => (
                          <motion.button
                             key={option.name}
                             whileHover={{ scale: 1.01 }}
                             whileTap={{ scale: 0.98 }}
                             onClick={() => {
                              
                              setSelectedOption(option.name);
                              setTheme(option.name === 'Softics Labs' ? 'labs' : 'studio');
                              setIsDropdownOpen(false);
                              router.push(option.href);
                            }}
                            className={cn(
                               'group w-full flex items-center px-5 py-4 text-left transition-all duration-200',
                              selectedOption === option.name
                                ? 'bg-[#FF9933]/10'
                                : 'hover:bg-gray-50/70',
                              'focus:outline-none'
                             )}
                           >
                            <div
                              className="flex-shrink-0 mr-4 rounded-full p-2"
                              style={{ backgroundImage: option.name === 'Softics Labs'
                                ? 'linear-gradient(90deg, #FF9933 0%, #FFB366 100%)'
                                : 'linear-gradient(90deg, #FF9933 0%, #FFB366 100%)' }}
                            >
                              {React.cloneElement(option.icon, { className: 'w-5 h-5 text-white' })}
                            </div>
                            <div className="flex-1 text-left">
                              <span
                                className="font-semibold text-base bg-clip-text text-transparent"
                                style={{ backgroundImage: option.name === 'Softics Labs'
                                  ? 'linear-gradient(90deg, #FF9933 0%, #FFB366 100%)'
                                  : 'linear-gradient(90deg, #FF9933 0%, #FFB366 100%)' }}
                              >
                                {option.name}
                              </span>
                              <div className="text-xs text-gray-500 mt-1">{option.description}</div>
                            </div>
                            {selectedOption === option.name && (
                              <svg className="w-5 h-5 text-[#FF9933] ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                            )}
                          </motion.button>
                         ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center justify-center flex-1">
                <div className="flex items-center space-x-12">
                  {items.map((item) => (
                    <motion.div
                      key={item.name}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative"
                    >
                      <Link
                        href={item.href}
                        onClick={(e) => handleSmoothScroll(e, item.href)}
                        className={cn(
                          'relative text-sm font-medium transition-colors duration-200',
                          'text-[#FF9933] hover:text-[#FFB366]',
                          activeSection === item.href.substring(1) && 'text-[#FF9933]'
                        )}
                      >
                        {item.name}
                        {activeSection === item.href.substring(1) && (
                          <motion.div
                            layoutId="activeSection"
                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#FF9933]"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          />
                        )}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </nav>

              {/* Social Links and CTA */}
              <div className="hidden md:flex items-center justify-end w-[180px] space-x-6 mr-[-2rem]">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 rounded-full text-white transition-colors duration-200 shadow-md hover:brightness-110"
                  style={{ backgroundImage: 'var(--brand-gradient)' }}
                  onClick={(e) => handleSmoothScroll(e, '#contact')}
                >
                  Contact
                </motion.button>
                <div className="flex items-center space-x-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={theme === 'labs' ? 'text-[#FF9933] hover:text-[#FFB366] transition-colors duration-200' : 'text-[#FF9933] hover:text-[#FFB366] transition-colors duration-200'}
                    >
                      <span className="sr-only">{social.name}</span>
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden relative z-10 p-2"
              >
                <div className="w-6 h-5 relative flex flex-col justify-between">
                  <motion.span
                    animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                    className="w-full h-0.5 bg-gray-900 rounded-full"
                  />
                  <motion.span
                    animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                    className="w-full h-0.5 bg-gray-900 rounded-full"
                  />
                  <motion.span
                    animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                    className="w-full h-0.5 bg-gray-900 rounded-full"
                  />
                </div>
              </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="md:hidden"
                >
                  <nav className="py-4 space-y-4">
                    {items.map((item) => (
                      <motion.div
                        key={item.name}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Link
                          href={item.href}
                          onClick={(e) => handleSmoothScroll(e, item.href)}
                          className={cn(
                            'block px-4 py-2 text-base font-medium rounded-lg transition-colors duration-200',
                            activeSection === item.href.substring(1)
                              ? 'bg-[#FF9933]/10 text-[#FF9933]'
                              : 'text-[#FF9933] hover:text-[#FFB366] hover:bg-gray-100'
                          )}
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}
                    <div className="px-4 py-2">
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        className="w-full px-4 py-2 text-center rounded-full bg-[#FF9933] text-white hover:bg-[#FFB366] transition-colors duration-200 shadow-md mb-4"
                        onClick={(e) => handleSmoothScroll(e, '#contact')}
                      >
                        Contact
                      </motion.button>
                      <div className="flex items-center justify-center space-x-4">
                        {socialLinks.map((social) => (
                          <motion.a
                            key={social.name}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className={theme === 'labs' ? 'text-[#FF9933] hover:text-[#FFB366] transition-colors duration-200' : 'text-[#FF9933] hover:text-[#FFB366] transition-colors duration-200'}
                          >
                            <span className="sr-only">{social.name}</span>
                            {social.icon}
                          </motion.a>
                        ))}
                      </div>
                    </div>
                  </nav>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
} 