import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: "About Us",
  description:
    "Juno BizHub is a Dubai corporate services provider helping founders with business setup, banking, visas, accounting, tax and ongoing compliance in the UAE.",
  canonicalUrl: '/about-us',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
