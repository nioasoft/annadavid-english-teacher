'use client';

import { useTranslations } from 'next-intl';
import Section from '@/components/ui/Section';
import ContactForm from '@/components/sections/ContactForm';
import React from 'react';

export default function ContactPage() {
  const t = useTranslations();

  return (
    <>
      <Section className="pt-24">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-text-primary mb-4">
          {t('Contact.title')}
        </h1>
        <p className="text-xl text-center text-text-secondary max-w-2xl mx-auto">
          {t('Contact.subtitle')}
        </p>
      </Section>

      <Section>
        <ContactForm />
      </Section>

      <Section className="bg-background">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-text-primary mb-4">
            {t('Contact.alternative.title')}
          </h2>
          <p className="text-text-secondary mb-8">
            {t('Contact.alternative.description')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <div className="bg-surface rounded-lg shadow-md p-4">
              <h3 className="font-semibold text-text-primary">Email</h3>
              <a
                href={`mailto:${t('Contact.alternative.email')}`}
                className="text-accent hover:underline"
              >
                {t('Contact.alternative.email')}
              </a>
            </div>
            <div className="bg-surface rounded-lg shadow-md p-4">
              <h3 className="font-semibold text-text-primary">WhatsApp</h3>
              <a
                href={`https://wa.me/${t('Contact.alternative.whatsapp').replace(/[-\s]/g, '')}`}
                className="text-accent hover:underline"
              >
                {t('Contact.alternative.whatsapp')}
              </a>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
