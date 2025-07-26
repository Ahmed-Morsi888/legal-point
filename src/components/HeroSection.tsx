"use client";

import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion, Variants } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function HeroSection() {
  const t = useTranslations();
  const locale = useLocale();
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const leftSideVariants: Variants = {
    hidden: {
      x: -100,
      opacity: 0,
      scale: 0.9
    },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.8
      }
    }
  };

  const rightSideVariants: Variants = {
    hidden: {
      x: 100,
      opacity: 0,
      scale: 0.9
    },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.8
      }
    }
  };

  const textVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const serviceButtons = [
    t('hero.services.corporate'),
    t('hero.services.dispute'),
    t('hero.services.employment')
  ];

  if (!mounted) {
    return (
      <section className="bg-pure-white min-h-[90vh]">
        <div className="container mx-auto p-8 border rounded-lg border-gray-300 dark:border-cyan-500">
          <div className="grid grid-cols-1 lg:grid-cols-5 lg:gap-12 h-[600px] md:h-[700px]">
            <div className="flex flex-col justify-center space-y-8 col-span-2">
              <div className="mb-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cape-cod">
                  {t('hero.brandName')}
                </h1>
              </div>
              <p className="text-lg md:text-xl text-obsidian leading-relaxed max-w-lg">
                {t('hero.description')}
              </p>
            </div>
            <div className="col-span-3 relative">
              <div className="relative z-10 h-full flex flex-col justify-center items-center p-8 md:p-12">
                <div className="text-center mb-8">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-pure-white mb-4 text-cyan-50 dark:text-cyan-100">
                    {t('hero.compassTitle')}
                  </h2>
                  <p className="text-pure-mint text-lg md:text-xl text-cyan-50 dark:text-cyan-100">
                    {t('hero.compassSubtitle')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <motion.section
      className="bg-pure-white min-h-[90vh]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto  p-8 border rounded-lg border-gray-300 dark:border-cyan-500">
        <div className="grid grid-cols-1 lg:grid-cols-5 lg:gap-12 h-[600px] md:h-[700px]">

          {/* Left Side - Logo and Content */}
          <motion.div
              className="flex flex-col justify-center space-y-8 col-span-2"
            variants={leftSideVariants}
          >
            {/* Logo */}
            <motion.div
              className="mb-8"
              variants={textVariants}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cape-cod ">
                {t('hero.brandName')}
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-lg md:text-xl text-obsidian leading-relaxed max-w-lg"
              variants={textVariants}
            >
              {t('hero.description')}
            </motion.p>

            {/* Service Buttons */}
            <div className="space-y-4">
              {serviceButtons.map((service, index) => (
                <motion.div
                  key={index}
                  variants={buttonVariants}
                  custom={index}
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    variant="outline"
                    className="w-full md:w-auto justify-between bg-transparent border-cape-cod text-cape-cod hover:bg-cape-cod hover:text-pure-white transition-all duration-300 text-left px-6 py-4 rounded-lg"
                  >
                    <span className="font-medium">{service}</span>
                    <span className="text-pure-mint">→</span>
                  </Button>
                </motion.div>
              ))}
            </div>

            {/* View All Button */}
            <motion.div
              variants={textVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-cape-cod text-pure-white px-8 py-3 rounded-lg hover:bg-obsidian transition-colors text-lg font-semibold">
                {t('hero.viewAll')} <span className="ml-2">→</span>
                <span className="ml-2 text-pure-mint">{t('hero.viewAllCount')}</span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Side - Navigation and Image */}
          <motion.div
            className="relative bg-obsidian rounded-lg overflow-hidden shadow-lg col-span-3 min-h-80"
            variants={rightSideVariants}
          >
            {/* Navigation Header */}
            <motion.div
              className="absolute top-0 left-0 right-0 z-20 p-6 flex justify-between items-center"
              variants={textVariants}
            >


              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href={`/${locale}/contact`}>
                  <Button className="cursor-pointer bg-pure-mint text-cape-cod px-4 py-2 rounded-full hover:bg-obsidian hover:text-pure-white transition-colors">
                    {t('navigation.bookCall')} <span className="ml-2">→</span>
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Background Image/Pattern */}
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              <div className="w-full h-full bg-gradient-to-br from-cape-cod via-obsidian to-cape-cod opacity-90 dark:bg-gradient-to-br dark:from-cyan-950 dark:via-cyan-900 dark:to-cyan-950"></div>
              {/* Add a subtle pattern overlay */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
            </motion.div>

            {/* Main Content */}
            <div className="relative z-10 h-full flex flex-col justify-center items-center p-8 md:p-12">
              {/* Overlay Text */}
              <motion.div
                className="text-center mb-8"
                variants={textVariants}
              >
                <motion.h2
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-pure-white mb-4 text-cyan-50 dark:text-cyan-100"
                  variants={textVariants}
                >
                  {t('hero.compassTitle')}
                </motion.h2>
                <motion.p
                  className="text-pure-mint text-lg md:text-xl text-cyan-50 dark:text-cyan-100"
                  variants={textVariants}
                >
                  {t('hero.compassSubtitle')}
                </motion.p>
              </motion.div>

              {/* Scroll Indicator */}
              <motion.div
                className="absolute bottom-6 right-6"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <div className="w-6 h-6 border-2 border-pure-white rounded-full flex items-center justify-center">
                  <motion.div
                    className="w-1 h-1 bg-pure-white rounded-full"
                    animate={{ y: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
} 