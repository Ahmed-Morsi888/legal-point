"use client";

import {useTranslations} from 'next-intl';
import { ShoppingBag, Monitor, Factory } from 'lucide-react';

export default function ClientStories() {
  const t = useTranslations();

  const stories = [
    { key: 'retail', icon: ShoppingBag },
    { key: 'tech', icon: Monitor },
    { key: 'manufacturing', icon: Factory }
  ];

  return (
    <div className="min-h-screen bg-pure-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cape-cod to-obsidian text-pure-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-darker-grotesque font-bold mb-6">
            {t('clientStories.title')}
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            {t('clientStories.subtitle')}
          </p>
        </div>
      </section>

      {/* Featured Story */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-darker-grotesque font-bold text-cape-cod mb-6">
                {t('clientStories.featured.title')}
              </h2>
              <p className="text-lg text-obsidian leading-relaxed mb-6">
                {t('clientStories.featured.description')}
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-pure-mint rounded-full mr-3"></div>
                  <span className="text-obsidian">{t('clientStories.featured.benefit1')}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-pure-mint rounded-full mr-3"></div>
                  <span className="text-obsidian">{t('clientStories.featured.benefit2')}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-pure-mint rounded-full mr-3"></div>
                  <span className="text-obsidian">{t('clientStories.featured.benefit3')}</span>
                </div>
              </div>
            </div>
            <div className="bg-pure-mint p-8 rounded-lg">
              <h3 className="text-2xl font-darker-grotesque font-bold text-cape-cod mb-4">
                {t('clientStories.featured.result')}
              </h3>
              <p className="text-obsidian leading-relaxed">
                {t('clientStories.featured.resultDescription')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Stories */}
      <section className="bg-obsidian text-pure-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-darker-grotesque font-bold text-center mb-12">
            {t('clientStories.industries.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stories.map((story) => {
              const IconComponent = story.icon;
              return (
                <div key={story.key} className="text-center p-6 rounded-lg hover:bg-pure-mint hover:text-cape-cod transition-colors duration-300">
                  <div className="flex justify-center mb-4">
                    <IconComponent size={48} className="text-pure-mint group-hover:text-cape-cod" />
                  </div>
                  <h3 className="text-2xl font-darker-grotesque font-bold mb-4">
                    {t(`clientStories.stories.${story.key}.title`)}
                  </h3>
                  <p className="text-lg leading-relaxed">
                    {t(`clientStories.stories.${story.key}.description`)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
} 