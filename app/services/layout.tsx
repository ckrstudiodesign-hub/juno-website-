import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: "Business Setup and Corporate Services in Dubai",
  description:
    "Explore Juno BizHub services: mainland, free zone and offshore company setup, PRO and visas, banking support, accounting, VAT and Corporate Tax in the UAE.",
  canonicalUrl: '/services',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
