'use client';

import { useTranslations } from 'next-intl';
import Section from '@/components/ui/Section';
import Timeline from '@/components/ui/Timeline';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function ProcessPage() {
  const t = useTranslations();

  const steps = t.raw('Process.steps').map((step: any) => ({
    ...step,
    description: step.description.split('\n')
  }));

  return (
    <>
      <Section className="pt-24">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-text-primary mb-4">
          {t('Process.title')}
        </h1>
        <p className="text-xl text-center text-text-secondary max-w-2xl mx-auto">
          {t('Process.subtitle')}
        </p>
      </Section>

      <Section>
        <Timeline items={steps} />
      </Section>

      <Section className="bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-text-primary mb-8">
            {t('Process.expectations.title')}
          </h2>
          <Card>
            <p className="text-lg text-text-primary mb-6">
              {t('Process.expectations.intro')}
            </p>
            <ul className="space-y-3 mb-6">
              {t.raw('Process.expectations.items').map((item: string, index: number) => (
                <li key={index} className="flex items-start text-text-secondary">
                  <span className="text-accent mr-3 text-lg">✓</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-text-primary leading-relaxed">
              {t('Process.expectations.closing')}
            </p>
          </Card>
        </div>
      </Section>

      <Section>
        <div className="text-center">
          <h2 className="text-3xl font-bold text-text-primary mb-4">
            Ready to Begin?
          </h2>
          <p className="text-xl text-text-secondary mb-8">
            Let's schedule your free consultation today.
          </p>
          <Button href="/contact" variant="primary">
            Schedule Free Consultation
          </Button>
        </div>
      </Section>
    </>
  );
}
