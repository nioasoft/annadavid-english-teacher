'use client';

import { useTranslations } from 'next-intl';
import Hero from '@/components/ui/Hero';
import Section from '@/components/ui/Section';
import IconCard from '@/components/ui/IconCard';
import Button from '@/components/ui/Button';
import { User, Video, Globe } from 'lucide-react';
import { Briefcase, Plane, GraduationCap, TrendingUp } from 'lucide-react';

export default function HomePage() {
  const t = useTranslations();

  return (
    <>
      <Hero
        title={t('Hero.title')}
        subtitle={t('Hero.subtitle')}
        ctaPrimary={{
          label: t('Hero.cta_primary'),
          href: '/contact'
        }}
        ctaSecondary={{
          label: t('Hero.cta_secondary'),
          href: '/process'
        }}
      />

      <Section>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-text-primary mb-12">
          {t('Hero.title')}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <IconCard
            icon={<User size={48} />}
            title={t('ValuePropositions.personalized.title')}
            description={t('ValuePropositions.personalized.description')}
          />
          <IconCard
            icon={<Video size={48} />}
            title={t('ValuePropositions.virtual.title')}
            description={t('ValuePropositions.virtual.description')}
          />
          <IconCard
            icon={<Globe size={48} />}
            title={t('ValuePropositions.realworld.title')}
            description={t('ValuePropositions.realworld.description')}
          />
        </div>
      </Section>

      <Section>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-text-primary mb-12">
          {t('Hero.title')}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-surface rounded-lg shadow-md p-6">
            <div className="text-accent mb-4">
              <Briefcase size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-text-primary">
              {t('TargetAudiences.business.title')}
            </h3>
            <p className="text-text-secondary">
              {t('TargetAudiences.business.description')}
            </p>
          </div>
          <div className="bg-surface rounded-lg shadow-md p-6">
            <div className="text-accent mb-4">
              <Plane size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-text-primary">
              {t('TargetAudiences.travel.title')}
            </h3>
            <p className="text-text-secondary">
              {t('TargetAudiences.travel.description')}
            </p>
          </div>
          <div className="bg-surface rounded-lg shadow-md p-6">
            <div className="text-accent mb-4">
              <GraduationCap size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-text-primary">
              {t('TargetAudiences.testprep.title')}
            </h3>
            <p className="text-text-secondary">
              {t('TargetAudiences.testprep.description')}
            </p>
          </div>
          <div className="bg-surface rounded-lg shadow-md p-6">
            <div className="text-accent mb-4">
              <TrendingUp size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-text-primary">
              {t('TargetAudiences.general.title')}
            </h3>
            <p className="text-text-secondary">
              {t('TargetAudiences.general.description')}
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-accent-secondary text-white">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('CTA.title')}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {t('CTA.description')}
          </p>
          <Button href="/contact">
            {t('CTA.button')}
          </Button>
        </div>
      </Section>
    </>
  );
}
