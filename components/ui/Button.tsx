import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  href?: string;
}

export default function Button({
  children,
  variant = 'primary',
  onClick,
  type = 'button',
  className = '',
  href
}: ButtonProps) {
  const baseClasses = 'px-6 py-3 rounded-lg font-medium transition-all duration-200 text-center inline-block';
  const variantClasses = {
    primary: 'bg-accent text-white shadow-md hover:shadow-lg hover:bg-blue-500',
    secondary: 'bg-accent-secondary text-white shadow-md hover:shadow-lg hover:bg-green-500',
    outline: 'bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-white'
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
    >
      {children}
    </button>
  );
}
