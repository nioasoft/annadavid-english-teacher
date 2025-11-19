'use client';

import { useTranslations } from 'next-intl';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';

export default function AboutPage() {
  const t = useTranslations();

  // Format description that contains newlines and bulleted items
  const formatDescription = (description: string) => {
    const lines = description.split('\n');
    return (
      <div>
        {lines.map((line, index) => (
          <p key={index} className={line.trim().startsWith('-') ? 'ml-6' : ''}>
            {line}
          </p>
        ))}
      </div>
    );
  };

  return (
    <>
      <Section className="pt-24">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-text-primary mb-4">
          {t('About.title')}
        </h1>
        <p className="text-xl text-center text-text-secondary max-w-2xl mx-auto">
          {t('About.subtitle')}
        </p>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto">
          <div className="bg-surface rounded-xl shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-text-primary">
              {t('About.mainStory.paragraph1').split('\\n')[0]}
            </h2>
            <div className="text-text-secondary space-y-4">
              <p>{t('About.mainStory.paragraph2')}</p>
              <p>{t('About.mainStory.paragraph3')}</p>
              <p>{t('About.mainStory.paragraph4')}</p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-background">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-text-primary mb-8">
            My Qualifications
          </h2>
          <Card>
            <h3 className="text-xl font-semibold mb-4 text-text-primary">
              {t('About.qualifications.title')}
            </h3>
            <ul className="space-y-2 text-text-secondary">
              {t.raw('About.qualifications.items').map((item: string, index: number) => (
                <li key={index} className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-text-primary mb-8">
            Teaching Philosophy
          </h2>
          <div className="bg-surface rounded-xl shadow-md p-8">
            <p className="text-text-primary leading-relaxed">
              {t('About.philosophy.content')}
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
