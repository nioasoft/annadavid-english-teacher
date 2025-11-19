'use client';

import { useTranslations } from 'next-intl';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import { BookOpen, TrendingUp, Plane, Briefcase, Award, Clock } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  whatYouWillLearn: { items: string[]; title: string };
  idealFor: string;
}

function ServiceCard({ icon, title, whatYouWillLearn, idealFor }: ServiceCardProps) {
  return (
    <Card>
      <div className="flex items-start space-x-4 mb-6">
        <div className="text-accent flex-shrink-0">{icon}</div>
        <div>
          <h3 className="text-2xl font-bold text-text-primary mb-2">{title}</h3>
          <div className="text-text-secondary">
            <p className="font-semibold mb-2">{whatYouWillLearn.title}:</p>
            <ul className="space-y-1 mb-4">
              {whatYouWillLearn.items.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p><span className="font-semibold">Ideal for:</span> {idealFor}</p>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default function ServicesPage() {
  const t = useTranslations();

  return (
    <>
      <Section className="pt-24">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-text-primary mb-4">
          {t('Services.title')}
        </h1>
        <p className="text-xl text-center text-text-secondary max-w-2xl mx-auto">
          {t('Services.subtitle')}
        </p>
      </Section>

      <Section>
        <div className="space-y-8 max-w-5xl mx-auto">
          <ServiceCard
            icon={<Briefcase size={32} />}
            title={t('Services.business.title')}
            whatYouWillLearn={{
              title: "What You'll Learn",
              items: t.raw('Services.business.whatYouWillLearn')
            }}
            idealFor={t('Services.business.idealFor')}
          />

          <ServiceCard
            icon={<Plane size={32} />}
            title={t('Services.travel.title')}
            whatYouWillLearn={{
              title: "What You'll Learn",
              items: t.raw('Services.travel.whatYouWillLearn')
            }}
            idealFor={t('Services.travel.idealFor')}
          />

          <ServiceCard
            icon={<Award size={32} />}
            title={t('Services.testprep.title')}
            whatYouWillLearn={{
              title: "What You'll Learn",
              items: t.raw('Services.testprep.whatYouWillLearn')
            }}
            idealFor={t('Services.testprep.idealFor')}
          />

          <ServiceCard
            icon={<BookOpen size={32} />}
            title={t('Services.general.title')}
            whatYouWillLearn={{
              title: "What You'll Learn",
              items: t.raw('Services.general.whatYouWillLearn')
            }}
            idealFor={t('Services.general.idealFor')}
          />
        </div>
      </Section>

      <Section className="bg-background">
        <h2 className="text-3xl font-bold text-center text-text-primary mb-8">
          {t('Services.approach.title')}
        </h2>
        <div className="max-w-3xl mx-auto">
          <Card>
            <ul className="space-y-3 text-text-secondary">
              {t.raw('Services.approach.items').map((item: string, index: number) => (
                <li key={index} className="flex items-start">
                  <span className="text-accent-secondary mr-3 text-lg">✓</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>
    </>
  );
}
