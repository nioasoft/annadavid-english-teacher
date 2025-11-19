import { ReactNode } from 'react';
import { useTranslations } from 'next-intl';
import { locales } from '@/lib/i18n';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

interface LocaleLayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({
  children,
  params
}: LocaleLayoutProps) {
  const { locale } = await params;
  const t = useTranslations('Navigation');

  const navigation = {
    home: `/${locale}`,
    about: `/${locale}/about`,
    services: `/${locale}/services`,
    process: `/${locale}/process`,
    contact: `/${locale}/contact`
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header navigation={navigation} currentLocale={locale} />
      <main className="flex-1">
        {children}
      </main>
      <Footer navigation={navigation} />
    </div>
  );
}
