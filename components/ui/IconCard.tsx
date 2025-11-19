import { ReactNode } from 'react';

interface IconCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export default function IconCard({ icon, title, description, className = '' }: IconCardProps) {
  return (
    <div className={`bg-surface rounded-xl shadow-md p-8 text-center ${className}`}>
      <div className="flex justify-center mb-4 text-accent">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-text-primary">{title}</h3>
      <p className="text-text-secondary">{description}</p>
    </div>
  );
}
