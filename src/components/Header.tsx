"use client";

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const switchLocale = locale === 'en' ? 'ar' : 'en';
  const switchPath = pathname.replace(`/${locale}`, `/${switchLocale}`);
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navigationItems = [
    { href: `/${locale}/services`, label: t('navigation.services') },
    { href: `/${locale}/about`, label: t('navigation.aboutUs') },
    { href: `/${locale}/resources`, label: t('navigation.resources') },
    // { href: `/${locale}/client-stories`, label: t('navigation.clientStories') },
    { href: `/${locale}/blog`, label: t('navigation.blog') },
    { href: `/${locale}/contact`, label: t('navigation.contact') },
  ];

  // Check if a navigation item is active
  const isActiveLink = (href: string) => {
    if (href === `/${locale}` && pathname === `/${locale}`) {
      return true;
    }
    if (href !== `/${locale}` && pathname.startsWith(href)) {
      return true;
    }
    return false;
  };

  // Animation variants
  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const mobileItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  const logoVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const actionsVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <header className="bg-cape-cod container mx-auto text-pure-white p-6">
      <div className="mx-auto flex justify-between items-center">
        {/* Logo */}
        <motion.div 
          className="flex items-center"
          variants={logoVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span 
            className="text-xl md:text-2xl font-mona-sans font-bold"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            {t('header.brandName')}
          </motion.span>
        </motion.div>
    
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navigationItems.map((item, index) => {
            const isActive = isActiveLink(item.href);
            return (
              <motion.div
                key={item.href}
                custom={index}
                variants={navItemVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ 
                  y: -2,
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <Link
                  href={item.href}
                  className={`transition-colors font-mona-sans relative group ${
                    isActive 
                      ? 'text-pure-mint font-semibold' 
                      : 'hover:text-pure-mint'
                  }`}
                >
                  {item.label}
                  <motion.div
                    className={`absolute -bottom-1 left-0 h-0.5 bg-pure-mint transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                    initial={{ width: isActive ? "100%" : 0 }}
                    animate={{ width: isActive ? "100%" : 0 }}
                    whileHover={{ width: "100%" }}
                  />
                </Link>
              </motion.div>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <motion.div 
          className="hidden md:flex items-center space-x-4"
          variants={actionsVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ThemeToggle />
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href={switchPath}
              className="px-3 py-1 border border-pure-white rounded text-sm hover:bg-pure-white hover:text-cape-cod transition-colors font-mona-sans"
            >
              {switchLocale.toUpperCase()}
            </Link>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button variant="outline" onClick={() => router.push('/contact')} className="bg-cyan-950 text-cyan-50 dark:text-cyan-100 dark:bg-cyan-950 border-cyan-800 dark:border-cyan-100 px-4 py-2 rounded-full flex items-center hover:bg-obsidian hover:text-pure-white transition-colors font-mona-sans hover:border-cyan-100 cursor-pointer ">
              {t('navigation.bookCall')} <span className="ml-2">▶</span>
            </Button>
          </motion.div>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.div 
          className="md:hidden flex items-center space-x-2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ThemeToggle />
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="text-pure-white hover:bg-obsidian"
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden overflow-hidden"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="px-4 py-2 space-y-4 bg-cape-cod border-t border-obsidian">
              {/* Mobile Navigation */}
              <nav className="flex flex-col space-y-4">
                {navigationItems.map((item, index) => {
                  const isActive = isActiveLink(item.href);
                  return (
                    <motion.div
                      key={item.href}
                      variants={mobileItemVariants}
                      custom={index}
                    >
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        className={`transition-colors py-2 font-mona-sans block relative ${
                          isActive 
                            ? 'text-pure-mint font-semibold' 
                            : 'hover:text-pure-mint'
                        }`}
                      >
                        {item.label}
                        {isActive && (
                          <motion.div
                            className="absolute left-0 bottom-0 w-full h-0.5 bg-pure-mint"
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 0.3 }}
                          />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Mobile Actions */}
              <motion.div 
                className="flex flex-col space-y-3 pt-4 border-t border-obsidian"
                variants={mobileItemVariants}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href={switchPath}
                    onClick={closeMenu}
                    className="px-3 py-2 border border-pure-white rounded text-sm hover:bg-pure-white hover:text-cape-cod transition-colors text-center font-mona-sans block"
                  >
                    {switchLocale.toUpperCase()}
                  </Link>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    onClick={() => router.push('/contact')} 
                    className="cursor-pointer bg-pure-mint text-cape-cod px-4 py-2 rounded-full hover:bg-obsidian hover:text-pure-white transition-colors w-full"
                  >
                    BOOK A CALL <span className="ml-2">▶</span>
                  </Button>
                </motion.div>
              </motion.div>    
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
} 