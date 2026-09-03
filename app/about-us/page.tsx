"use client";

import React from 'react';
import AboutHero from '@/components/about/AboutHero';
import Narrative from '@/components/about/Narrative';
import Values from '@/components/about/Values';
import AboutVision from '@/components/about/AboutVision';
import AboutStats from '@/components/about/AboutStats';
import AboutCTA from '@/components/about/AboutCTA';

export default function AboutUs() {
  return (
    <div className="flex flex-col w-full bg-white overflow-x-hidden">
      <AboutHero />

      <Narrative />
      <Values />
      <AboutVision />
      <AboutStats />
      <AboutCTA />
    </div>
  );
}
