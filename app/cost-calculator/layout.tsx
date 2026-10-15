import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: "Business Setup Cost Calculator in Dubai",
  description:
    "Estimate your UAE business setup cost by activity, jurisdiction and visas with the Juno BizHub calculator. Final costs are confirmed in your quotation.",
  canonicalUrl: '/cost-calculator',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
