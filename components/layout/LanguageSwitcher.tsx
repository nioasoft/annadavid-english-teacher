'use client';

import { locales, type Locale } from '@/lib/i18n';
import { usePathname, useRouter } from 'next/navigation';

export default function LanguageSwitcher({ currentLocale }: { currentLocale: string }) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLocaleChange = (newLocale: string) => {
    if (newLocale === currentLocale) return;

    // Get the path without the locale prefix
    const pathParts = pathname.split('/');
    const currentLang = pathParts[1];
    const remainingPath = pathParts.slice(2).join('/');

    // If at the root, redirect to home of new locale
    if (!currentLang || !locales.includes(currentLang as Locale)) {
      router.push(`/${newLocale}`);
      return;
    }

    // For other pages, construct new path
    const newPath = remainingPath ? `/${newLocale}/${remainingPath}` : `/${newLocale}`;
    router.push(newPath);
  };

  return (
    <div className="flex items-center space-x-1 bg-accent-tertiary rounded-full p-1">
      {locales.map((locale) => (
        <button
          key={locale}
          onClick={() => handleLocaleChange(locale)}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
            currentLocale === locale
              ? 'bg-white text-accent shadow-sm'
              : 'text-text-secondary hover:text-text-primary'
          }`}
        >
          {locale === 'he' ? 'HE' : 'EN'}
        </button>
      ))}
    </div>
  );
}
