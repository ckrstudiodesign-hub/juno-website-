import ServicePage from '@/components/ServicePage';
import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: "Ajman Offshore Company Setup in the UAE",
  description:
    "Register an Ajman offshore company for holding and international activities. Juno BizHub manages incorporation, Corporate Tax registration and bank support.",
  canonicalUrl: '/ajman-offshore-company-setup',
});

export default function AjmanOffshore() {
  return (
    <ServicePage
      title="Ajman Offshore Company Setup"
      subtitle="Ajman Offshore Company Formation"
      heroImage="/images/offshore.png"
      description={[
        "Ajman Offshore Company Formation started in 2014 under the jurisdiction of Ajman Free Zone. It offers zero tax structure and complete confidentiality of information, with details of shareholders not being disclosed publicly.",
        "An Ajman offshore company is not required to own a physical office in the UAE, making it a highly cost-effective and flexible setup for international investors."
      ]}
      advantages={[
        "100% Foreign Ownership",
        "No taxation Policy (Zero taxes)",
        "Robust and fast registration (2-3 working days)",
        "Streamlined setup, with accounting and audit requirements assessed for the company",
        "Multiple bank accounts in UAE or worldwide",
        "Shares in Local Companies (Freezone and LLCs)",
        "100% repatriation of profits",
        "Right to own property anywhere in the UAE"
      ]}
      sections={[
        {
          title: "Allowed Activities",
          list: [
            "Operating as a holding company",
            "General Trading Activities",
            "Advisory and Consulting Services",
            "Shipping and Ship Management",
            "Commission Agent (Intermediary Broker)",
            "Investments and Joint Investments",
            "International Services"
          ]
        }
      ]}
    />
  );
}
