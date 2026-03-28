'use client';

import { socialProofItems } from '@/lib/config';

export default function SocialProofBar() {
  // Duplicate items for seamless infinite scroll
  const items = [...socialProofItems, ...socialProofItems];

  return (
    <section className="overflow-hidden border-y border-dark-200 bg-dark-50 py-4 dark:border-dark-800 dark:bg-dark-900">
      <div className="animate-scroll-left flex whitespace-nowrap">
        {items.map((item, i) => (
          <span
            key={i}
            className="mx-8 inline-flex items-center gap-2 text-sm font-medium text-dark-600 dark:text-dark-300"
          >
            <span className="text-primary-500">✦</span>
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
