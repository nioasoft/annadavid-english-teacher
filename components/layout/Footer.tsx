import Link from 'next/link';
import { useTranslations } from 'next-intl';

interface FooterProps {
  navigation: {
    home: string;
    about: string;
    services: string;
    process: string;
    contact: string;
  };
}

export default function Footer({ navigation }: FooterProps) {
  const t = useTranslations('Navigation');
  const tFooter = useTranslations('Footer');

  const navItems = [
    { href: navigation.home, label: t('home') },
    { href: navigation.about, label: t('about') },
    { href: navigation.services, label: t('services') },
    { href: navigation.process, label: t('process') },
    { href: navigation.contact, label: t('contact') }
  ];

  return (
    <footer className="bg-surface border-t border-border-light">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href={navigation.home} className="text-xl font-bold text-text-primary">
              Anna David | English Teacher
            </Link>
          </div>
          <nav className="flex flex-wrap justify-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-text-secondary hover:text-accent transition-colors mb-2 md:mb-0"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-8 pt-8 border-t border-border-light text-center text-sm text-text-secondary">
          {tFooter('copyright')}
        </div>
      </div>
    </footer>
  );
}
