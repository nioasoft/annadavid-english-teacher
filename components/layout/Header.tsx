'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';
import { Menu as MenuIcon, X as XIcon } from 'lucide-react';

interface HeaderProps {
  navigation: {
    home: string;
    about: string;
    services: string;
    process: string;
    contact: string;
  };
  currentLocale: string;
}

export default function Header({ navigation, currentLocale }: HeaderProps) {
  const t = useTranslations('Navigation');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: navigation.home, label: t('home') },
    { href: navigation.about, label: t('about') },
    { href: navigation.services, label: t('services') },
    { href: navigation.process, label: t('process') },
    { href: navigation.contact, label: t('contact') }
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href={navigation.home} className="text-xl font-bold text-text-primary">
          Anna David | English Teacher
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-text-secondary hover:text-accent transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <LanguageSwitcher currentLocale={currentLocale} />
        </nav>

        <div className="md:hidden flex items-center space-x-2">
          <LanguageSwitcher currentLocale={currentLocale} />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-text-primary"
          >
            {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-border-light">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 text-text-secondary hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
