import ServicePage from '@/components/ServicePage';
import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: "IFZA Business Setup in Dubai",
  description:
    "Set up your company in IFZA (International Free Zone Authority) Dubai. Juno BizHub handles activity selection, licensing, visas and bank account support.",
  canonicalUrl: '/ifza-dubai-business-set-up',
});

export default function IFZASetup() {
  return (
    <ServicePage
      title="IFZA Dubai Business Set Up"
      subtitle="International Free Zone Authority (IFZA)"
      heroImage="/images/freezone.png"
      description={[
        "The International Free Zone Authority (IFZA) has rapidly emerged as one of the most dynamic and fastest-growing business hubs in the UAE. Strategically headquartered in Dubai, IFZA offers a highly competitive and flexible platform for international investors, SMEs, and large corporations. Through its partnership with the Dubai Silicon Oasis Authority, IFZA provides a world-class regulatory environment that simplifies the path to entrepreneurship.",
        "IFZA is renowned for its vast array of over 1,000 business activities, ranging from professional consultancy and commercial trading to specialized industrial sectors. This diversity allows entrepreneurs to bundle multiple activities under a single license, providing unmatched versatility in business operations.",
        "At Juno BizHub, we specialize in navigating the IFZA ecosystem, ensuring that your company formation is not only fast but also structurally optimized for long-term growth and seamless corporate banking integration."
      ]}
      advantages={[
        "100% Foreign Ownership and full management control",
        "Possible 0% Corporate Tax on Qualifying Income, subject to conditions; no personal income tax",
        "Most cost-effective and efficient company incorporation in Dubai",
        "No requirement for physical presence during the setup process",
        "Wide range of office solutions: from Flexi-desks to private executive offices",
        "No requirement for paid-up share capital guarantee",
        "Ability to combine Professional, Commercial, and Industrial activities on one license",
        "Seamless residency visa processing for shareholders and employees",
        "Audit requirements depend on the activity, authority rules and applicable UAE requirements",
        "Access to a global network of partners and business support services"
      ]}
      sections={[
        {
          title: "Why Choose IFZA?",
          content: [
            "IFZA has rapidly emerged as one of the most dynamic and fastest-growing business hubs in the UAE, offering a highly competitive and flexible platform for international investors and SMEs.",
            "Choosing IFZA means benefiting from a world-class regulatory environment through its partnership with Dubai Silicon Oasis, simplifying the path to global entrepreneurship."
          ]
        },
        {
          title: "Strategic Location",
          content: "Strategically headquartered in Dubai, IFZA provides excellent connectivity to the city's major commercial centers and logistics hubs, making it an ideal base for companies with a global reach.",
          list: [
            "Access to world-class ICT infrastructure",
            "Proximity to major Dubai business districts",
            "High-bandwidth connectivity for digital businesses",
            "Vibrant executive community and talent pool"
          ]
        },
        {
          title: "Strategic Business Structures",
          content: "IFZA provides robust legal frameworks to suit various investment scales and operational requirements:",
          list: [
            "Free Zone Company (FZCO): Ideal for individual and corporate shareholders.",
            "Branch of a Foreign Company: For existing international firms establishing a presence.",
            "Branch of a UAE Company: For expansion within the IFZA ecosystem."
          ]
        },
        {
          title: "Streamlined Setup Journey",
          content: "We transform the complex registration process into a simple, time-bound workflow:",
          list: [
            "Consultation & Activity Selection: Identifying the best license mix for your goals.",
            "Digital Document Submission: Remote submission of passports and KYC forms.",
            "License Issuance: Electronic delivery of your corporate documents and establishment card.",
            "Visa & Banking: Accelerated processing for Emirates ID and corporate account opening."
          ]
        },
        {
          title: "The IFZA Ecosystem",
          content: "Beyond just a license, IFZA offers a vibrant community. Located near major logistics hubs, it provides companies with high-bandwidth connectivity and access to a massive talent pool. Whether you are in E-commerce, Marketing, or Logistics, IFZA provides the tools required for a global reach from a Dubai base."
        }
      ]}
    />
  );
}
