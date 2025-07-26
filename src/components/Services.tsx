"use client";

import {useTranslations} from 'next-intl';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Services() {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();
  const services = [
    {
      key: 'corporate',
      icon: '🏢',
      bgColor: 'bg-pure-mint',
      textColor: 'text-cape-cod'
    },
    {
      key: 'contracts',
      icon: '📄',
      bgColor: 'bg-obsidian',
      textColor: 'text-pure-white'
    },
    {
      key: 'employment',
      icon: '👥',
      bgColor: 'bg-cape-cod',
      textColor: 'text-pure-white'
    },
    {
      key: 'intellectual',
      icon: '💡',
      bgColor: 'bg-pure-mint',
      textColor: 'text-cape-cod'
    },
    {
      key: 'realEstate',
      icon: '🏠',
      bgColor: 'bg-obsidian',
      textColor: 'text-pure-white'
    },
    {
      key: 'litigation',
      icon: '⚖️',
      bgColor: 'bg-cape-cod',
      textColor: 'text-pure-white'
    }
  ];

  return (
    <div className="min-h-screen bg-pure-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cape-cod to-obsidian text-pure-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-darker-grotesque font-bold mb-6">
            {t('services.title')}
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.key}
                className={`${service.bgColor} ${service.textColor} p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300`}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-darker-grotesque font-bold mb-4">
                  {t(`services.cards.${service.key}.title`)}
                </h3>
                <p className="text-lg leading-relaxed">
                  {t(`services.cards.${service.key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-pure-mint py-16 text-center" >
        <div className="container mx-auto px-6 text-center flex flex-col items-center justify-center">
          <h2 className="text-4xl font-darker-grotesque font-bold text-cape-cod mb-6">
            {t('services.cta.title')}
          </h2>
          <p className="text-xl text-cape-cod mb-8 max-w-2xl mx-auto">
            {t('services.cta.description')}
          </p>

          <motion.button
            onClick={() => router.push('/contact')}
            className="px-4 py-2 bg-cyan-950 text-cyan-50 dark:text-cyan-100 dark:bg-cyan-950 border-cyan-800 dark:border-cyan-100 rounded-full flex items-center hover:bg-obsidian hover:text-pure-white transition-colors font-mona-sans hover:border-cyan-100 cursor-pointer border"
            animate={{
              y: [0, -10, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "loop"
            }}
            whileHover={{
              scale: 1.05,
              y: -5
            }}
            whileTap={{
              scale: 0.95
            }}
          >
            {t('services.cta.button')} <span className="ml-2">▶</span>
          </motion.button>
        </div>
      </section>
    </div>
  );
} 