import { ReactNode } from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaPrimary?: {
    label: string;
    href: string;
  };
  ctaSecondary?: {
    label: string;
    href: string;
  };
  className?: string;
}

export default function Hero({
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary,
  className = ''
}: HeroProps) {
  return (
    <section className={`py-20 md:py-32 bg-background ${className}`}>
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className={`${ctaSecondary ? 'text-4xl md:text-6xl' : 'text-3xl md:text-5xl'} font-bold text-text-primary mb-6`}>
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-text-secondary mb-8 max-w-2xl mx-auto">
          {subtitle}
        </p>
        {ctaPrimary && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={ctaPrimary.href}
              className="px-8 py-4 bg-accent text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:bg-blue-500 transition-all"
            >
              {ctaPrimary.label}
            </a>
            {ctaSecondary && (
              <a
                href={ctaSecondary.href}
                className="px-8 py-4 bg-transparent border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent hover:text-white transition-all"
              >
                {ctaSecondary.label}
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
