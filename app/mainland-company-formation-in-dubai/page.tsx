import ServicePage from '@/components/ServicePage';
import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: "Mainland Company Formation in Dubai",
  description:
    "Set up a Dubai mainland company licensed by DET, with 100% foreign ownership for most activities. Juno BizHub handles licensing, visas and bank support.",
  canonicalUrl: '/mainland-company-formation-in-dubai',
});

export default function MainlandOverview() {
  return (
    <ServicePage
      title="Mainland Company Formation in Dubai"
      subtitle="Overview of Dubai Mainland Company Formation Services"
      heroImage="/images/mainland.png"
      description={[
        "A mainland company is licensed by the emirate's economic department – in Dubai, the Department of Economy and Tourism (DET). It can trade directly with customers anywhere in the UAE and abroad, without the location limits that apply to free zone companies.",
        "Most commercial and industrial activities now allow 100% foreign ownership. Some activities still need a local partner or a Local Service Agent, so we check your activity before you apply.",
        "Juno BizHub handles the full process, from activity selection and trade name approval to office lease, licence issue, visas and bank account support."
      ]}
      advantages={[
        "No fixed minimum share capital for most activities",
        "Visa quota linked to office size",
        "Trade freely across the UAE and with government entities",
        "Credibility with banks and larger clients",
        "Room to add activities and branches as you grow",
        "100% foreign ownership for most activities"
      ]}
      executiveSummary={{
        summary: "A Dubai mainland company is licensed by the Department of Economy and Tourism (DET). It can trade anywhere in the UAE and internationally, and can bid for government contracts. It is subject to UAE Corporate Tax and VAT rules like any other UAE business.",
        keyFacts: [
          "0% Corporate Tax on taxable income up to AED 375,000; 9% above",
          "100% Foreign Ownership allowed in most sectors",
          "No currency restrictions",
          "Can bid for government contracts"
        ]
      }}
      decisionTable={{
        title: "Mainland vs Free Zone",
        option1Name: "Mainland (DET)",
        option2Name: "Free Zone",
        features: [
          { name: "Trading Scope", option1: "Anywhere in UAE & Global", option2: "Within the free zone and internationally; UAE mainland trade usually needs a distributor or extra permit" },
          { name: "Government Contracts", option1: true, option2: false },
          { name: "Office Requirement", option1: "Physical office mandatory", option2: "Flexi-desk allowed" },
          { name: "Foreign Ownership", option1: "100% (for most activities)", option2: "100%" }
        ]
      }}
      stepByStep={{
        title: "Mainland Setup Process",
        steps: [
          { title: "Initial Approval", description: "Select your business activity and reserve a trade name with the DET." },
          { title: "Legal Drafting", description: "Draft the Memorandum of Association (MOA) and Local Service Agent agreement if required." },
          { title: "Office Lease", description: "Sign a tenancy contract (Ejari) for your physical office space in Dubai." },
          { title: "Final License", description: "Submit all documents to the DET and obtain your official Trade License." }
        ]
      }}
      faqs={[
        {
          question: "Do I need a local sponsor for a Dubai Mainland company?",
          answer: "Recent legislative changes allow 100% foreign ownership for most commercial and industrial activities. A Local Service Agent (LSA) may only be required for specific professional licenses."
        },
        {
          question: "What is the minimum capital requirement for an LLC?",
          answer: "There is no statutory minimum share capital requirement for a standard LLC in Dubai Mainland, though it should be sufficient to achieve the purpose of incorporation. Some activities and banks expect a set capital amount, so we confirm this for your activity."
        }
      ]}
      sections={[
        {
          title: "Types of Licenses Issued by DET",
          content: "You are free to choose the license that fits your business model:",
          list: [
            "Professional License – For service-oriented businesses",
            "Commercial License – For physical services or trading activities",
            "Branch or Representative Office – Legal extension of a parent company"
          ]
        }
      ]}
      hallmarks={[
        {
          title: "Best Value",
          description: "We have got you covered for the entire Dubai Mainland company formation process. Our end-to-end service will prepare and file all the mandatory documents with the authorities."
        },
        {
          title: "Expert Guidance",
          description: "Our consultants are well versed in every fundamental of the process and can handle it perfectly. Further, we offer live customer support throughout the process."
        },
        {
          title: "Robust process",
          description: "We use clear checklists and digital tracking so you always know the status of your application."
        },
        {
          title: "Transparency",
          description: "Our fair business practices and principles of transparency allow us to disclose complete information. We provide upfront prices to you in the absence of any hidden fees."
        }
      ]}
    />
  );
}
