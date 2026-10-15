import ServicePage from '@/components/ServicePage';
import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: "Offshore Company Formation in Dubai",
  description:
    "Register a UAE offshore company with RAK ICC, JAFZA or Ajman for holding and international activities, with Corporate Tax registration handled for you.",
  canonicalUrl: '/offshore-company-formation-in-dubai',
});

export default function OffshoreOverview() {
  return (
    <ServicePage
      title="Offshore Company Formation in Dubai"
      subtitle="Overview of Offshore Company Setup"
      heroImage="/images/offshore.png"
      description={[
        "An offshore company in the UAE is a company registered with RAK ICC, JAFZA Offshore or Ajman Offshore. It is typically used to hold shares, intellectual property, investments or approved real estate, and to run international business that does not trade inside the UAE.",
        "Offshore companies are recognised as juridical persons under UAE Corporate Tax law. They must register with the Federal Tax Authority and meet ongoing filing obligations. Juno BizHub helps you choose the right registry, set up the company, and stay compliant from day one.",
        "UAE has three major offshore jurisdictions: RAK (RAKICC), JAFZA, and Ajman."
      ]}
      advantages={[
        "Quick, document-light setup",
        "100% foreign ownership",
        "Suited to holding shares, IP and international investments",
        "No physical office required",
        "Shareholder details kept off public registers",
        "Repatriation of capital and profits",
        "Bank account support (subject to bank approval)",
        "Corporate Tax registration handled for you"
      ]}
      executiveSummary={{
        summary: "A UAE offshore company is a legal entity registered with an offshore registry (RAK ICC, JAFZA or Ajman). It cannot trade within the UAE, cannot sponsor residence visas, and is mainly used for holding and international activities. It must register for UAE Corporate Tax.",
        keyFacts: [
          "100% foreign ownership",
          "Must register for UAE Corporate Tax with the FTA",
          "Shareholder details held by the registry and the UBO register, not publicly listed",
          "Cannot trade within the UAE or sponsor residence visas"
        ]
      }}
      decisionTable={{
        title: "Offshore vs Free Zone",
        option1Name: "Offshore Entity",
        option2Name: "Free Zone Entity",
        features: [
          { name: "Residency Visas", option1: "Not Eligible", option2: "Eligible" },
          { name: "Physical Office", option1: "Not Allowed (Registered Address only)", option2: "Allowed & Required for Visas" },
          { name: "Local Trading", option1: "Strictly Prohibited", option2: "Prohibited without distributor" },
          { name: "Primary Purpose", option1: "Holding and international activities", option2: "Active Business Operations" }
        ]
      }}
      stepByStep={{
        title: "Offshore Setup Process",
        steps: [
          { title: "Select Jurisdiction", description: "Choose between JAFZA, RAKICC, or Ajman Offshore based on your needs (e.g., JAFZA is required to own Dubai property)." },
          { title: "Document Collation", description: "Gather passport copies, utility bills, CVs, and a bank reference letter for the shareholders." },
          { title: "Application & Due Diligence", description: "Submit the application through Juno BizHub as your registered agent." },
          { title: "Incorporation", description: "Receive your Certificate of Incorporation, register for Corporate Tax, and apply for a bank account with our support (approval is at the bank's discretion)." }
        ]
      }}
      faqs={[
        {
          question: "Can an offshore company buy property in Dubai?",
          answer: "Offshore companies from approved registries can hold freehold property in designated areas, subject to Dubai Land Department rules. JAFZA Offshore is commonly used for Dubai property. Confirm eligibility with us before purchase, as rules can change."
        },
        {
          question: "Does an offshore company pay Corporate Tax?",
          answer: "It must register for Corporate Tax with the FTA. How much tax applies depends on its income, where it is managed and controlled, and its activities. We assess this before setup."
        },
        {
          question: "Can I get a UAE residence visa with an offshore company?",
          answer: "No, offshore companies do not entitle the shareholders or directors to UAE residency visas. For visas, you must setup a Free Zone or Mainland company."
        }
      ]}
      sections={[
        {
          title: "Documents Required",
          list: [
            "Business plan (Optional, usually 3 years)",
            "Original Bank reference letter or 6-months statements",
            "Proof of Address (Utility bills, etc.)",
            "CV of shareholders",
            "Passport copies of shareholders",
            "3 options for name reservation",
            "Description of Business Activity"
          ]
        }
      ]}
    />
  );
}
