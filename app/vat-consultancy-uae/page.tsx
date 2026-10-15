import ServicePage from '@/components/ServicePage';
import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: "VAT Consultancy Services in Dubai",
  description:
    "VAT registration, return preparation and filing, and FTA audit support in Dubai. Juno BizHub keeps your records in order and helps you meet FTA deadlines.",
  canonicalUrl: '/vat-consultancy-uae',
});

export default function VATConsultancy() {
  return (
    <ServicePage
      title="VAT Consultancy UAE"
      subtitle="Strategic Tax Compliance & Advisory"
      heroImage="/images/nav-stock.jpg"
      description={[
        "Since the implementation of Value Added Tax (VAT) in the UAE in 2018, maintaining accurate records and ensuring timely filings has become a critical operational requirement for all businesses. Juno BizHub provides expert VAT consultancy to help your business navigate Federal Tax Authority (FTA) regulations.",
        "We offer a comprehensive suite of VAT services—from initial registration and de-registration to quarterly return filings and voluntary disclosures. Our team ensures that your business activities are correctly categorized as standard-rated, zero-rated, or exempt, protecting you from heavy administrative penalties.",
        "Our approach integrates tax advisory with your overall business strategy, ensuring that your financial workflows are optimized for both compliance and operational efficiency."
      ]}
      advantages={[
        "Expert assistance with FTA VAT Registration and De-registration",
        "Quarterly or monthly VAT return preparation and filing, reviewed before submission",
        "Strategic advice on zero-rated and exempt business supplies",
        "VAT health checks to identify compliance gaps before audits",
        "Support during FTA tax audits, with representation through a registered tax agent where needed",
        "Guidance on voluntary disclosures to correct past errors",
        "VAT refund management for eligible business expenses",
        "Integration of tax-compliant accounting software",
        "Minimized risk of administrative penalties and fines",
        "Up-to-date advisory on the latest FTA circulars and laws"
      ]}
      sections={[
        {
          title: "Why Choose Our VAT Services?",
          content: [
            "In a fast-evolving tax landscape, even minor errors can lead to significant financial penalties. We provide the expertise required to ensure your filings are technically sound and filed on time.",
            "Choosing Juno BizHub means your tax obligations are managed by professionals who understand UAE tax procedures and FTA requirements."
          ]
        },
        {
          title: "Strategic Advantage",
          content: "Effective VAT management goes beyond filing returns; it involves optimizing your cash flow and ensuring your supply chain is tax-efficient.",
          list: [
            "Mandatory and Voluntary Registration advisory",
            "Input VAT recovery optimization",
            "Reverse Charge Mechanism (RCM) implementation",
            "Inter-company transaction tax structuring"
          ]
        },
        {
          title: "Ongoing Support",
          content: "We provide year-round support to answer your tax queries, assist in transaction reviews, and ensure that your business remains in the 'Good Standing' books of the Federal Tax Authority."
        }
      ]}
    />
  );
}
