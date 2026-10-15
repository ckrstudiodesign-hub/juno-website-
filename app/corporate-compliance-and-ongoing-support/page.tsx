import ServicePage from '@/components/ServicePage';
import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Corporate Compliance and Ongoing Support in Dubai',
  description:
    'Ongoing corporate compliance support in Dubai, including renewals, UBO, AML, VAT and Corporate Tax coordination for UAE businesses.',
  canonicalUrl: '/corporate-compliance-and-ongoing-support',
});

export default function CorporateCompliancePage() {
  return (
    <ServicePage
      title="Corporate Compliance & Ongoing Support"
      subtitle="Practical support throughout your UAE business lifecycle"
      heroImage="/images/core_compliance.jpg"
      description={[
        "Receiving your trade licence is only the beginning of operating a UAE company. Juno BizHub helps coordinate the recurring administrative, tax and regulatory tasks that keep your business organised after incorporation.",
        "We support renewals, corporate record updates, UBO and AML/CFT requirements, VAT and Corporate Tax coordination, bookkeeping referrals and authority correspondence. Where a regulated professional is required, we coordinate with the appropriate licensed partner.",
        "Our work is designed to help you meet current UAE requirements; specific obligations depend on your activity, authority, structure and revenue."
      ]}
      advantages={[
        "Licence and registration renewal tracking",
        "UBO and corporate record coordination",
        "AML/CFT and goAML process support where applicable",
        "VAT and Corporate Tax registration and filing coordination",
        "Bookkeeping and audit coordination with suitable providers",
        "Deadline tracking to help avoid late filing and registration penalties",
        "Authority correspondence and document follow-up",
        "Ongoing support as your company grows"
      ]}
      executiveSummary={{
        summary: "Corporate compliance support helps UAE businesses organise recurring renewals, records, tax obligations and regulatory processes after incorporation.",
        keyFacts: [
          "Obligations depend on the activity, authority, structure and revenue",
          "UAE companies must assess Corporate Tax registration and filing requirements",
          "UBO and AML/CFT requirements may apply depending on the business",
          "Licensed partners are coordinated where regulated advice or representation is required"
        ]
      }}
      faqs={[
        {
          question: "What does ongoing corporate compliance support include?",
          answer: "It may include renewal tracking, corporate record updates, UBO and AML/CFT coordination, VAT and Corporate Tax support, bookkeeping coordination and authority follow-up. The exact scope is confirmed after reviewing your company."
        },
        {
          question: "Can Juno BizHub provide regulated legal or tax representation?",
          answer: "Juno BizHub coordinates with licensed legal and tax professionals where regulated advice or representation is required. We do not replace those licensed professionals."
        }
      ]}
      sections={[
        {
          title: "A clear compliance calendar",
          content: "We help you maintain a practical calendar for licence renewals, tax registration and filing deadlines, UBO updates, AML/CFT requirements and other recurring obligations relevant to your company."
        }
      ]}
    />
  );
}
