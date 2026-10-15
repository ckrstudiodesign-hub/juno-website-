import ServicePage from '@/components/ServicePage';
import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: "RAK Offshore Company Formation in the UAE",
  description:
    "Register a RAK ICC offshore company for holding and international business. Juno BizHub handles incorporation, Corporate Tax registration and compliance.",
  canonicalUrl: '/rak-offshore-company-formation',
});

export default function RAKOffshore() {
  return (
    <ServicePage
      title="RAK Offshore Company Formation"
      subtitle="RAK International Corporate Centre (RAKICC)"
      heroImage="/images/offshore.png"
      description={[
        "RAK International Corporate Centre (RAK ICC) is a corporate registry in Ras Al Khaimah, used by international entrepreneurs and families to set up holding and international business companies. A RAK ICC company offers a well-regarded legal framework, a straightforward setup process, and privacy for shareholders.",
        "RAK ICC companies cannot trade inside the UAE or sponsor residence visas. Like every UAE company, they must register for Corporate Tax with the Federal Tax Authority."
      ]}
      advantages={[
        "100% foreign ownership",
        "Can hold shares in UAE free zone and mainland companies",
        "Can apply for UAE corporate bank accounts (subject to bank approval)",
        "Typically quick incorporation once documents are complete",
        "Repatriation of capital and profits",
        "Shareholder details kept off public registers",
        "Corporate Tax registration and annual compliance handled by Juno BizHub"
      ]}
      sections={[
        {
          title: "Common uses",
          list: [
            "Holding shares in UAE or foreign companies",
            "Holding intellectual property or investments",
            "Holding real estate in approved areas, subject to the relevant land department's rules",
            "International trading and consulting outside the UAE"
          ]
        }
      ]}
    />
  );
}
