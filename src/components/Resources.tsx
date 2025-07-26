"use client";

import {useTranslations} from 'next-intl';
import { BookOpen, FileText, PenTool, Rocket, ClipboardList, Users } from 'lucide-react';

export default function Resources() {
  const t = useTranslations();

  const categories = [
    { key: 'guides', icon: BookOpen, color: 'bg-pure-mint text-cape-cod' },
    { key: 'templates', icon: FileText, color: 'bg-obsidian text-pure-white' },
    { key: 'blog', icon: PenTool, color: 'bg-cape-cod text-pure-white' }
  ];

  const featuredResources = [
    { key: 'startup', icon: Rocket },
    { key: 'contract', icon: ClipboardList },
    { key: 'employment', icon: Users }
  ];

  return (
    <div className="min-h-screen bg-pure-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cape-cod to-obsidian text-pure-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-darker-grotesque font-bold mb-6">
            {t('resources.title')}
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            {t('resources.subtitle')}
          </p>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <div key={category.key} className={`${category.color} p-8 rounded-lg text-center`}>
                  <div className="flex justify-center mb-4">
                    <IconComponent size={48} />
                  </div>
                  <h3 className="text-2xl font-darker-grotesque font-bold mb-4">
                    {t(`resources.categories.${category.key}.title`)}
                  </h3>
                  <p className="text-lg">
                    {t(`resources.categories.${category.key}.description`)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="bg-pure-mint py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-darker-grotesque font-bold text-cape-cod text-center mb-12">
            {t('resources.featured.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredResources.map((resource) => {
              const IconComponent = resource.icon;
              return (
                <div key={resource.key} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="flex justify-center mb-4">
                    <IconComponent size={40} className="text-cape-cod" />
                  </div>
                  <h3 className="text-2xl font-darker-grotesque font-bold text-cape-cod mb-4">
                    {t(`resources.featured.items.${resource.key}.title`)}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {t(`resources.featured.items.${resource.key}.description`)}
                  </p>
                  <button className="bg-pure-mint text-cape-cod px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-colors">
                    {t('common.download')}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-darker-grotesque font-bold text-cape-cod mb-6">
              {t('resources.newsletter.title')}
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              {t('resources.newsletter.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder={t('resources.newsletter.placeholder')}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pure-mint"
              />
              <button className="bg-cape-cod text-pure-white px-6 py-3 rounded-lg font-semibold hover:bg-obsidian transition-colors">
                {t('resources.newsletter.button')}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 