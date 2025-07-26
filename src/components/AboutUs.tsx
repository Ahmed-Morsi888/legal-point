"use client";

import {useTranslations} from 'next-intl';
import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import { useState, useEffect } from 'react';
import { Handshake, Star, Rocket, Target, Users, Award, Clock, TrendingUp } from 'lucide-react';

export default function AboutUs() {
  const t = useTranslations();
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const values = [
    { key: 'integrity', icon: Handshake },
    { key: 'excellence', icon: Star },
    { key: 'innovation', icon: Rocket },
    { key: 'clientFocus', icon: Target }
  ];

  const teamMembers = [
    { key: 'sarah', image: Users },
    { key: 'michael', image: Users },
    { key: 'emily', image: Users }
  ];

  const stats = [
    { key: 'clients', icon: Users },
    { key: 'cases', icon: Award },
    { key: 'years', icon: Clock },
    { key: 'successRate', icon: TrendingUp }
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

  // Count animation hook
  const useCountAnimation = (end: number, duration: number = 2000) => {
    const [count, setCount] = useState(0);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
      if (isInView && count < end) {
        const increment = end / (duration / 16); // 60fps
        const timer = setTimeout(() => {
          setCount(prev => Math.min(prev + increment, end));
        }, 16);
        return () => clearTimeout(timer);
      }
    }, [count, end, duration, isInView]);

    return { count: Math.floor(count), setIsInView };
  };

  // Stat Item Component
  const StatItem = ({ stat, index }: { stat: { key: string; icon: React.ComponentType<{ size?: number; className?: string }> }; index: number }) => {
    const IconComponent = stat.icon;
    const { count, setIsInView } = useCountAnimation(parseInt(t(`about.stats.${stat.key}`).replace(/,/g, '')), 2500);
    
    return (
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true }}
        onViewportEnter={() => setIsInView(true)}
      >
        <div className="flex justify-center mb-4">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
            viewport={{ once: true }}
          >
            <IconComponent size={40} className="text-cape-cod" />
          </motion.div>
        </div>
        <motion.div 
          className="text-3xl font-bold text-cape-cod mb-2"
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
          viewport={{ once: true }}
        >
          {count.toLocaleString()}
        </motion.div>
        <motion.div 
          className="text-gray-600 font-medium"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.7 }}
          viewport={{ once: true }}
        >
          {t(`about.stats.labels.${stat.key}`)}
        </motion.div>
      </motion.div>
    );
  };

  if (!mounted) {
    return <div className="min-h-[90vh] bg-pure-white"><HeroSection /></div>;
  }

  return (
    <div className="min-h-[90vh] bg-pure-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Mission Section */}
      <section className="py-16 min-h-[350px] flex items-center justify-center">
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
            className="text-5xl font-darker-grotesque font-bold text-cape-cod text-center mb-24"
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
            {values.map((value) => {
              const IconComponent = value.icon;
              return (
                                 <motion.div
                   key={value.key}
                   className="min-h-[250px] flex flex-col justify-center items-center text-center border border-gray-500 dark:border-cyan-500 rounded-lg p-6 bg-cyan-50 dark:bg-cyan-950 shadow-lg hover:shadow-2xl transition-all duration-100 group cursor-pointer hover:bg-obsidian"
                   variants={cardVariants}
                   whileHover={{ 
                     y: -10,
                     scale: 1.05,
                     backgroundColor: 'var(--obsidian)',
                     borderColor: 'var(--obsidian)',
                     borderWidth: '1px'
                   }}
                   whileTap={{ scale: 0.95 }}
                 >
                   <motion.div
                     className="text-6xl mb-6 flex justify-center"
                     variants={iconVariants}
                     whileHover="hover"
                   >
                     <IconComponent size={48} className="text-cyan-950 dark:text-cyan-50 group-hover:text-cyan-50" />
                   </motion.div>
                   <h3 className="text-xl font-darker-grotesque font-bold text-cyan-950 dark:text-cyan-50 mb-4 group-hover:text-cyan-50">
                     {t(`about.values.items.${value.key}.title`)}
                   </h3>
                   <p className="text-gray-600 dark:text-cyan-50 group-hover:text-cyan-50 leading-relaxed">
                     {t(`about.values.items.${value.key}.description`)}
                   </p>
                 </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

          {/* Team Section */}
          <section className="py-16 min-h-[700px] flex items-center justify-center">
        <div className="container mx-auto px-6 pt-8">
          <motion.h2 
            className="text-4xl font-darker-grotesque font-bold text-cape-cod text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t('about.team.title')}
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => {
              const IconComponent = member.image;
              return (
                <motion.div 
                  key={member.key} 
                  className={`min-h-[500px] overflow-hidden flex flex-col justify-start items-center gap-1 text-center p-4 rounded-lg hover:bg-pure-mint hover:shadow-lg transition-all duration-300 ${index % 2 === 1 ? 'bg-cyan-950 dark:bg-cyan-900'  : ' bg-white dark:bg-cyan-950 shadow-lg'}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <motion.div 
                    className="text-6xl mb-4 min-h-[300px] bg-gray-300 dark:bg-cyan-950 w-full flex items-center justify-center border border-gray-200 dark:border-cyan-500 rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <IconComponent size={80} className="text-pure-white" />
                  </motion.div>
                  <h3 className={`text-2xl font-darker-grotesque font-bold text-cape-cod mb-2 ${index % 2 === 1 ? 'text-cyan-50' : 'text-cyan-950'}`}>
                    {t(`about.team.members.${member.key}.name`)}
                  </h3>
                  <p className={` font-semibold mb-2 ${index % 2 === 1 ? 'text-cyan-50' : 'text-cyan-100'}`}>
                    {t(`about.team.members.${member.key}.role`)}
                  </p>
                  <p className={` ${index % 2 === 1 ? 'text-cyan-50' : 'text-cyan-100'}`}>
                    {t(`about.team.members.${member.key}.description`)}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

             {/* Stats Section */}
          <section className="py-16 bg-pure-white min-h-[400px] flex items-center justify-center">
         <div className="container mx-auto px-6">
           <motion.div
             className="grid grid-cols-2 md:grid-cols-4 gap-8"
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, staggerChildren: 0.2 }}
             viewport={{ once: true }}
           >
                           {stats.map((stat, index) => (
                <StatItem key={stat.key} stat={stat} index={index} />
              ))}
           </motion.div>
         </div>
       </section>

  
    </div>
  );
} 