import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: "Contact Juno BizHub in Dubai",
  description:
    "Contact Juno BizHub at Aspin Commercial Tower, Sheikh Zayed Road, Dubai. Call, WhatsApp or send an inquiry to plan your UAE business setup with our team.",
  canonicalUrl: '/contact',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
