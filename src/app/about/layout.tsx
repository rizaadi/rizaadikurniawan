import type { ReactNode } from 'react';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Riza Adi Kurniawan - Mobile Developer with passion for design, coding, and photography.',
  openGraph: {
    title: 'About',
    description:
      'Riza Adi Kurniawan - Mobile Developer with passion for design, coding, and photography.',
  },
  twitter: {
    title: 'About',
    description:
      'Riza Adi Kurniawan - Mobile Developer with passion for design, coding, and photography.',
  },
};

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return <section>{children}</section>;
}
