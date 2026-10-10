/*
 * ╔═══════════════════════════════════════════════════════════════════╗
 * ║           Juno BizHub Corporate Services Providers WEBSITE                 ║
 * ║                                                                   ║
 * ║         Designed & Developed by CKR Creatives                     ║
 * ║         Full Stack Development, UI/UX Design, Performance         ║
 * ║                                                                   ║
 * ║  © 2026 Juno BizHub Corporate Services Providers. All rights reserved.    ║
 * ╚═══════════════════════════════════════════════════════════════════╝
 */

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";
import LeadModal from "@/components/LeadModal";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SchemaMarkup, { GlobalSchemas } from "@/components/seo/SchemaMarkup";
import Analytics from "@/components/Analytics";
import ScrollProgress from "@/components/global/ScrollProgress";
import DisableServiceWorker from "@/components/DisableServiceWorker";
import SuccessPopup from "@/components/global/SuccessPopup";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({ 
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.junobizhub.com";

import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AE" className="scroll-smooth">
      <body className={`${openSans.variable} font-sans antialiased bg-background text-foreground`}>
        <Analytics />
        <DisableServiceWorker />
        <SchemaMarkup type="Organization" data={GlobalSchemas.Organization} />
        <SchemaMarkup type="ProfessionalService" data={GlobalSchemas.LocalBusiness} />
        <SchemaMarkup type="WebSite" data={GlobalSchemas.WebSite} />
        <ScrollProgress />
        <Navbar />
        <MobileBottomNav />
        <WhatsAppFloat />
        <SuccessPopup />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
