import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-surface rounded-xl shadow-md p-8 ${className}`}>
      {children}
    </div>
  );
}
