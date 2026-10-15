import React from 'react';
import { teamMembers } from '@/lib/team-data';
import TeamMemberClient from '@/components/about/TeamMemberClient';
import Link from 'next/link';
import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';

export async function generateStaticParams() {
  return teamMembers.map((member) => ({
    slug: member.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const member = teamMembers.find((m) => m.slug === params.slug);
  if (!member) return {};
  return constructMetadata({
    title: `${member.name}, ${member.role}`,
    description: `${member.name} is ${member.role} at Juno BizHub, a Dubai corporate services provider for business setup, banking, visas, tax and compliance.`,
    canonicalUrl: `/team/${member.slug}`,
    type: 'profile',
  });
}

export default function Page({ params }: { params: { slug: string } }) {
  const member = teamMembers.find((m) => m.slug === params.slug);

  if (!member) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center text-deep-navy">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Member Not Found</h1>
          <Link href="/about-us" className="text-electric-sapphire hover:underline">Return to About Us</Link>
        </div>
      </div>
    );
  }

  return <TeamMemberClient member={member} />;
}
