import React from 'react';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { constructMetadata } from '@/lib/seo';

// ========================================
// Designed & Developed by CKR Creatives
// Juno BizHub Corporate Services Providers Website
// ========================================
import Hero from '@/components/home/Hero';
import ServicesTicker from '@/components/home/ServicesTicker';
import GlobalBackground from '@/components/global/GlobalBackground';

export const metadata: Metadata = constructMetadata({
  title: 'Business Setup Dubai & Corporate Services UAE | Juno BizHub',
  description:
    'Juno BizHub helps founders launch in Dubai with mainland, free zone and offshore company setup, banking support, PRO and visas, VAT and Corporate Tax services.',
  canonicalUrl: '/',
  absoluteTitle: true,
});

const ServicesOrbit = dynamic(() => import('@/components/home/ServicesOrbit'));
const PartnersMarquee = dynamic(() => import('@/components/home/PartnersMarquee'));
const TrustBadges = dynamic(() => import('@/components/home/TrustBadges'));
const About = dynamic(() => import('@/components/home/About'));
const CoreServices = dynamic(() => import('@/components/home/CoreServices'));
const VisionMission = dynamic(() => import('@/components/home/VisionMission'));
const Stats = dynamic(() => import('@/components/home/Stats'));
const ClientJourney = dynamic(() => import('@/components/home/ClientJourney'));
const WhyChooseUs = dynamic(() => import('@/components/home/WhyChooseUs'));
const Testimonials = dynamic(() => import('@/components/home/Testimonials'));
const FAQ = dynamic(() => import('@/components/home/FAQ'));
const LocationMap = dynamic(() => import('@/components/home/LocationMap'));
const StructureFinder = dynamic(() => import('@/components/home/StructureFinder'));
const FreeZoneComparison = dynamic(() => import('@/components/home/FreeZoneComparison'));
const RecommendationsHub = dynamic(() => import('@/components/home/RecommendationsHub'));
const CostCalculator = dynamic(() => import('@/components/home/CostCalculator'));
const PhotoShowcase = dynamic(() => import('@/components/home/PhotoShowcase'));
const ParallaxBand = dynamic(() => import('@/components/home/ParallaxBand'));
const EntryPopup = dynamic(() => import('@/components/global/EntryPopup'), { ssr: false });

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-transparent overflow-x-hidden relative">
      <GlobalBackground />
      <EntryPopup />
      <Hero />
      <ServicesTicker />
      <ServicesOrbit />
      <PhotoShowcase />
      <CoreServices />
      <About />
      <VisionMission />
      <ParallaxBand />
      <Stats />
      <ClientJourney />
      <WhyChooseUs />
      <TrustBadges />
      <PartnersMarquee />
      <Testimonials />
      <FAQ />
      <LocationMap />
      <StructureFinder />
      <FreeZoneComparison />
      <RecommendationsHub />
      <CostCalculator />
    </div>
  );
}
