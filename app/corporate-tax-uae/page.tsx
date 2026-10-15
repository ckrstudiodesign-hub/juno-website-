import ServicePage from '@/components/ServicePage';
import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: "Corporate Tax Services in Dubai",
  description:
    "UAE Corporate Tax registration, filing and advice in Dubai: 0% up to AED 375,000 and 9% above. Juno BizHub helps you register with the FTA and file on time.",
  canonicalUrl: '/corporate-tax-uae',
});

export default function CorporateTax() {
  return (
    <ServicePage
      title="Corporate Tax UAE"
      subtitle="Navigating the New Era of UAE Taxation"
      heroImage="/images/core_compliance.jpg"
      description={[
        "The UAE has introduced a federal Corporate Tax (CT) regime to further solidify its position as a transparent and competitive global business hub. It applies to financial years starting on or after 1 June 2023, with a 0% rate on taxable income up to AED 375,000 and 9% above that (Federal Decree-Law No. 47 of 2022).",
        "Juno BizHub provides specialized Corporate Tax advisory to help you understand how this new regime impacts your specific business structure—whether you are a Mainland entity, a Free Zone company, or a multinational group. We support registration, filing and practical compliance planning.",
        "Our experts guide you through the complexities of 'Qualifying Income' for Free Zone companies and help you architect your inter-company transactions in alignment with Transfer Pricing regulations."
      ]}
      advantages={[
        "Comprehensive registration for Corporate Tax with the FTA",
        "Strategic assessment of 'Qualifying Free Zone Person' status",
        "Transfer Pricing advisory to ensure arm's length transactions",
        "Guidance on taxable income calculations and deductible expenses",
        "Advice on forming Tax Groups for optimized group-level filing",
        "Assistance with annual Corporate Tax return preparation and filing",
        "Clarity on exemptions for government and charitable entities",
        "Strategic advice on Small Business Relief (SBR) eligibility",
        "Deadline tracking to help avoid late filing and registration penalties",
        "Long-term tax planning to protect corporate profitability"
      ]}
      executiveSummary={{
        summary: "UAE Corporate Tax is 0% on taxable income up to AED 375,000 and 9% above it. It applies to UAE companies, including free zone and offshore companies, and to certain foreign businesses with a UAE presence. Some businesses, such as certain natural resource and government entities, may be exempt if they meet specific conditions.",
        keyFacts: [
          "0% on taxable income up to AED 375,000; 9% above",
          "Small Business Relief for revenue up to AED 3 million, for tax periods ending on or before 31 December 2026",
          "Qualifying Free Zone Persons may pay 0% on Qualifying Income, subject to conditions",
          "Registration with the FTA is mandatory, even if no tax is payable"
        ]
      }}
      decisionTable={{
        title: "Mainland vs Free Zone Tax Impact",
        option1Name: "Mainland Entity",
        option2Name: "Qualifying Free Zone",
        features: [
          { name: "Standard Tax Rate", option1: "9% (above AED 375k)", option2: "0% on Qualifying Income" },
          { name: "Registration Required", option1: "Yes", option2: "Yes" },
          { name: "Audited Financials", option1: "Required if revenue exceeds AED 50M or the company is in a Tax Group", option2: "Always required" },
          { name: "Transfer Pricing Rules", option1: "Applicable", option2: "Applicable" }
        ]
      }}
      stepByStep={{
        title: "Your Corporate Tax Journey",
        steps: [
          { title: "Impact Assessment", description: "Evaluate how the CT law affects your specific corporate structure and revenue streams." },
          { title: "FTA Registration", description: "Register your business with the Federal Tax Authority (FTA) and obtain a Tax Registration Number (TRN)." },
          { title: "Accounting Alignment", description: "Upgrade your bookkeeping to ensure compliance with International Financial Reporting Standards (IFRS)." },
          { title: "Tax Filing", description: "Submit your annual Corporate Tax return and pay any applicable liabilities within 9 months of the financial year-end." }
        ]
      }}
      faqs={[
        {
          question: "Do Free Zone companies have to pay Corporate Tax?",
          answer: "Free Zone companies must register for Corporate Tax. However, they may benefit from a 0% tax rate strictly on 'Qualifying Income' if they meet substance requirements and maintain audited financial statements. If any condition is not met, the company is taxed at standard rates for that period and the next four."
        },
        {
          question: "What is Small Business Relief?",
          answer: "Resident businesses with revenue of AED 3 million or less in the current and every previous tax period can elect to be treated as having no taxable income. The relief covers tax periods ending on or before 31 December 2026. It is not available to Qualifying Free Zone Persons or members of large multinational groups. You still need to register and file a return. The Ministry of Finance has not yet announced rules for later periods; we will update this page when it does."
        }
      ]}
      sections={[
        {
          title: "Strategic Advantage",
          content: "Businesses that proactively structure their operations for Corporate Tax gain a competitive edge by minimizing tax leakages and maximizing legally available reliefs.",
          list: [
            "Assessment of Qualifying Free Zone Person status",
            "Expert Transfer Pricing documentation (Master File/Local File)",
            "Advice on foreign tax credit utilization",
            "Restructuring for tax-efficient group operations"
          ]
        }
      ]}
    />
  );
}
