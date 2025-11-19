import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  padded?: boolean;
}

export default function Section({ children, className = '', padded = true }: SectionProps) {
  const paddingClasses = padded ? 'py-16 md:py-20' : '';

  return (
    <section className={`${paddingClasses} ${className}`}>
      <div className="max-w-6xl mx-auto px-4">
        {children}
      </div>
    </section>
  );
}
