import { ReactNode } from 'react';

interface TimelineItem {
  number: number;
  title: string;
  description: string[];
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-border-light"></div>

      <div className="space-y-12">
        {items.map((item) => (
          <div key={item.number} className="relative flex items-start md:items-center">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center font-bold text-xl shadow-md">
                {item.number}
              </div>
            </div>
            <div className="ml-6 md:ml-12 flex-1">
              <h3 className="text-2xl font-semibold mb-2 text-text-primary">{item.title}</h3>
              <div className="text-text-secondary space-y-1">
                {item.description.map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
