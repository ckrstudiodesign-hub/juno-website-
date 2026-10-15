import ServicePage from '@/components/ServicePage';
import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: "UAE Will Services in Dubai",
  description:
    "Plan and register your will in the UAE. Juno BizHub coordinates drafting and registration through licensed legal partners for DIFC Courts or Dubai Courts.",
  canonicalUrl: '/uae-wills-service',
});

export default function UAEWills() {
  return (
    <ServicePage
      title="UAE Will Service"
      subtitle="Asset Protection & Asset Distribution"
      heroImage="/images/wills-service.png"
      description={[
        "In the UAE, the distribution of assets for deceased expatriates may be subject to local laws unless a legally registered Will is in place. Juno BizHub coordinates drafting and registration through licensed legal professionals.",
        "We coordinate with licensed legal partners for Muslim and Non-Muslim residents using the relevant DIFC Courts or Dubai Courts process. The licensed professionals advise on how the applicable framework affects family, property and corporate-share arrangements.",
        "Registering a Will in the UAE is not mandatory, but it is a fundamental part of responsible financial planning for anyone holding assets, including real estate, bank accounts, and company shares.",
        "Will drafting and registration are carried out by licensed legal professionals; Juno BizHub coordinates the process."
      ]}
      advantages={[
        "A structured way to record your wishes for UAE-based assets",
        "Coordination with licensed partners on applicable local-law implications",
        "Direct appointment of guardians for minor children",
        "Planning support for corporate shares and business continuity",
        "Minimized legal delays and court freezes on bank accounts",
        "DIFC Court registration for global recognition (Non-Muslims)",
        "Dubai Court registration for Sharia-compliant estate (Muslims)",
        "Drafting and registration coordinated through licensed legal partners",
        "Seamless transition of power of attorney where applicable"
      ]}
      sections={[
        {
          title: "Why a Will is Essential",
          content: [
            "A registered Will is the only legal instrument that ensures your Dubai assets are distributed according to your wishes, not local Sharia Law defaults.",
            "Without a Will, accessing assets and settling guardianship can take longer and be less certain. A Will provides the ultimate 'peace of mind' and financial security for your family."
          ]
        },
        {
          title: "Strategic Advantage",
          content: "A registered Will significantly reduces the time and cost involved in probate proceedings, allowing your beneficiaries to access assets without lengthy legal battles or uncertainty.",
          list: [
            "Recognition across all Emirates",
            "Clear guardianship clauses for peace of mind",
            "Coordination of drafting for complex corporate portfolios through licensed legal partners",
            "Integration with existing international inheritance plans"
          ]
        },
        {
          title: "The Registration Process",
          content: "Juno BizHub coordinates the process from the initial consultation through drafting by a licensed legal partner and the final appointment at the DIFC or Dubai Courts. The legal professionals handling the matter confirm the requirements for registration."
        }
      ]}
    />
  );
}
