import ServicePage from '@/components/ServicePage';
import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: "Corporate Banking Assistance in Dubai",
  description:
    "Get help opening a corporate bank account in Dubai. Juno BizHub guides bank selection, documents and follow-ups; approval is at the bank's discretion.",
  canonicalUrl: '/bank-account-opening-dubai',
});

export default function BankAccountServices() {
  return (
    <ServicePage
      title="Corporate Banking Assistance"
      subtitle="Elite Corporate Banking Introductions"
      heroImage="/images/core_banking.jpg"
      description={[
        "In the UAE's complex regulatory landscape, opening a corporate bank account is often the most challenging step of business setup. Juno BizHub leverages two decades of leadership in the UAE banking sector to provide our clients with a significant advantage.",
        "We don't just provide a list of banks; we provide direct introductions to senior relationship managers and assist in structuring your corporate documents to meet the rigorous 'Know Your Customer' (KYC) and compliance standards of Tier-1 UAE banks.",
        "Our team specializes in navigating the requirements for multi-currency accounts, international trade facilities, and digital banking platforms, ensuring your business has the financial foundation it needs to thrive."
      ]}
      advantages={[
        "Direct introductions to relationship managers in major UAE banks",
        "Assistance with multi-currency account opening (AED, USD, EUR, etc.)",
        "Expert advisory on compliance and KYC documentation",
        "Support for both local and international business structures",
        "Zero-balance and low-minimum balance account advisory",
        "Assistance with online banking and digital transition",
        "Guidance on credit facilities and trade finance",
        "Expert guidance for complex corporate structures"
      ]}
      sections={[
        {
          title: "Our Banking Partners",
          content: "We work closely with the most reputable financial institutions in the UAE to provide seamless integration for our clients:",
          list: [
            { name: "Emirates NBD", logo: "/banks/nbd%20logo.jpeg" },
            { name: "First Abu Dhabi Bank (FAB)", logo: "/banks/fab%20logo.png" },
            { name: "Abu Dhabi Commercial Bank (ADCB)", logo: "/banks/adcb.png" },
            { name: "Mashreq", logo: "/banks/mashreq-bank.svg" },
            { name: "Dubai Islamic Bank (DIB)", logo: "/banks/Dib.jpg" },
            { name: "Emirates Islamic Bank", logo: "https://www.google.com/s2/favicons?domain=emiratesislamic.ae&sz=128" },
            { name: "Rak bank", logo: "https://www.google.com/s2/favicons?domain=rakbank.ae&sz=128" },
            { name: "HSBC UAE", logo: "https://www.google.com/s2/favicons?domain=hsbc.ae&sz=128" },
            { name: "Standard Chartered", logo: "https://www.google.com/s2/favicons?domain=sc.com&sz=128" }
          ]
        },
        {
          title: "The Compliance Journey",
          content: "Our banking experts review your business activities, source of wealth, and corporate history to ensure your application is structurally sound before it reaches the bank's compliance desk, significantly reducing the risk of rejection."
        }
      ]}
    />
  );
}
