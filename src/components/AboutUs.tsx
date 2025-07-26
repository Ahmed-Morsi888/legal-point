"use client";

import {useTranslations} from 'next-intl';
import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import { useState, useEffect } from 'react';

export default function AboutUs() {
  const t = useTranslations();
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const values = [
    { key: 'integrity', icon: '🤝' },
    { key: 'excellence', icon: '⭐' },
    { key: 'innovation', icon: '🚀' },
    { key: 'clientFocus', icon: '🎯' }
  ];

  const teamMembers = [
    { key: 'sarah', image: '👩‍💼' },
    { key: 'michael', image: '👨‍💼' },
    { key: 'emily', image: '👩‍💼' }
  ];

  const stats = [
    { key: 'clients', label: 'Happy Clients' },
    { key: 'cases', label: 'Cases Won' },
    { key: 'years', label: 'Years Experience' },
    { key: 'successRate', label: 'Success Rate' }
  ];

  // Animation variants for values cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: {
        duration: 0.3
      }
    }
  };

  if (!mounted) {
    return <div className="min-h-screen bg-pure-white"><HeroSection /></div>;
  }

  return (
    <div className="min-h-screen bg-pure-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-darker-grotesque font-bold text-cape-cod mb-8 text-gray-700 dark:text-cyan-100">
              {t('about.mission.title')}
            </h2>
            <p className="text-xl text-gray-700 dark:text-cyan-100 leading-relaxed">
              {t('about.mission.description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-pure-mint pb-16 border-b border-obsidian bg-obsidian min-h-[600px] flex items-center justify-center">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl font-darker-grotesque font-bold text-cape-cod text-center mb-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t('about.values.title')}
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div 
                key={value.key} 
                className="text-center border-2 border-gray-500 dark:border-cyan-500    rounded-lg p-6 bg-cyan-50 dark:bg-cyan-950   shadow-lg hover:shadow-2xl transition-all duration-100 group cursor-pointer hover:bg-obsidian hover:text-pure-white"
                variants={cardVariants}
                whileHover={{ 
                  y: -10,
                  scale: 1.05,
                  backgroundColor: 'var(--obsidian)',
                  color: 'var(--pure-white)',
                  borderColor: 'var(--obsidian)',
                  borderWidth: '1px'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div 
                  className="text-6xl mb-6 group-hover:text-pure-mint text-gray-700 dark:text-cyan-100"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  {value.icon}
                </motion.div>
                
                <motion.h3 
                  className="text-2xl font-darker-grotesque text-cyan-800 dark:text-cyan-100 font-bold text-cape-cod mb-4 group-hover:text-pure-white transition-colors duration-300"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {t(`about.values.items.${value.key}.title`)}
                </motion.h3>
                
                <motion.p 
                  className="text-cyan-800 dark:text-cyan-500 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {t(`about.values.items.${value.key}.description`)}
                </motion.p>
                
                {/* Decorative element */}
                <motion.div 
                  className="w-0 h-1 bg-pure-mint dark:bg-cyan-300 mt-4 mx-auto group-hover:w-16 transition-all duration-500"
                  initial={{ width: 0 }}
                  whileHover={{ width: "4rem" }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 pt-8">
          <motion.h2 
            className="text-4xl font-darker-grotesque font-bold text-cape-cod text-center mb-12 "
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t('about.team.title')}
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, staggerChildren: 0.2 }}
            viewport={{ once: true }}
          >
            {teamMembers.map((member, index) => (
              <motion.div 
                key={member.key} 
                className="text-center p-6 rounded-lg hover:bg-pure-mint hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  className="text-6xl mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {member.image}
                </motion.div>
                <h3 className="text-2xl font-darker-grotesque text-gray-700 font-bold text-cape-cod mb-2">
                  {t(`about.team.members.${member.key}.name`)}
                </h3>
                <p className="text-gray-700 font-semibold mb-2">
                  {t(`about.team.members.${member.key}.role`)}
                </p>
                <p className="text-gray-600">
                  {t(`about.team.members.${member.key}.description`)}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-cape-cod text-pure-white py-16">
        <div className="container mx-auto px-6">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.key}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
              >
                <motion.div 
                  className="text-4xl font-darker-grotesque font-bold text-pure-mint mb-2"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                >
                  {t(`about.stats.${stat.key}`)}
                </motion.div>
                <p className="text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
} 