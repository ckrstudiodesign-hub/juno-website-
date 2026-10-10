const fs = require('fs');
const path = require('path');

const categories = [
  { id: 'consultancies-tech', title: 'Starting a Consultancy or Tech Company in Dubai', cat: 'Consultancies & Tech', tags: ['Consultancy', 'Technology', 'Dubai Setup'], img: '/images/mainland.png' },
  { id: 'trading-ecommerce', title: 'The Ultimate Guide to Trading and E-Commerce in the UAE', cat: 'Trading & E-Commerce', tags: ['Trading', 'E-Commerce', 'Import Export'], img: '/images/mainland.png' },
  { id: 'food-beverage', title: 'Setting up a Food & Beverage (F&B) Business in Dubai', cat: 'Food & Beverage', tags: ['F&B', 'Restaurant', 'Cafe'], img: '/images/mainland.png' },
  { id: 'healthcare-beauty', title: 'Navigating Healthcare, Beauty & Wellness Setup in the UAE', cat: 'Healthcare & Beauty', tags: ['Healthcare', 'Beauty', 'Wellness'], img: '/images/mainland.png' },
  { id: 'contracting-realestate', title: 'Contracting & Real Estate Business Formation in Dubai', cat: 'Contracting & Real Estate', tags: ['Real Estate', 'Contracting', 'Construction'], img: '/images/mainland.png' },
  { id: 'industrial-manufacturing', title: 'Establishing Industrial & Manufacturing Facilities in the UAE', cat: 'Industrial & Manufacturing', tags: ['Industrial', 'Manufacturing', 'Factory'], img: '/images/mainland.png' },
  { id: 'financial-crypto', title: 'Financial Services, Crypto & Holding Companies in Dubai', cat: 'Financial & Crypto', tags: ['Finance', 'Crypto', 'Holding Company'], img: '/images/mainland.png' },
  { id: 'tourism-media', title: 'Launching Tourism, Media & Events Companies in the UAE', cat: 'Tourism & Media', tags: ['Tourism', 'Media', 'Events'], img: '/images/mainland.png' }
];

const template = (c) => `---
title: "${c.title}"
excerpt: "Learn everything you need to know about setting up a ${c.cat} business in Dubai and the UAE. Discover the best jurisdictions, licensing options, and key requirements."
date: "2026-06-25"
category: "${c.cat}"
author:
  name: "Juno BizHub Experts"
  role: "Corporate Advisors"
  image: "/golden-logo.png"
image: "${c.img}"
keywords: ["${c.cat} Setup Dubai", "Business Setup UAE", "Juno BizHub"]
tags: ${JSON.stringify(c.tags)}
---

# ${c.title}

Dubai continues to attract global entrepreneurs looking to establish a presence in the **${c.cat}** sector. With its strategic location, tax advantages, and world-class infrastructure, the UAE provides an unmatched ecosystem for growth.

## Why Setup in Dubai?

1. **Strategic Location:** Access markets across the Middle East, Africa, and Asia.
2. **Business-Friendly Policies:** Benefit from 100% foreign ownership and zero corporate tax for qualifying free zone incomes.
3. **World-Class Infrastructure:** State-of-the-art facilities tailored for the ${c.cat} industry.

## Key Considerations for ${c.cat}

When setting up your business, you need to consider the appropriate jurisdiction. Depending on your target market, you may choose between a **Mainland** or **Free Zone** setup. 

- **Mainland:** Ideal if you want to trade directly within the local UAE market and take on government contracts.
- **Free Zone:** Perfect for 100% foreign ownership, zero import/export duties, and a fast setup process, though trading locally often requires a local distributor.

## The Setup Process

1. **Select the Right Jurisdiction:** Compare Free Zones and Mainland options to see which aligns with your ${c.cat} business model.
2. **Choose Your Business Activity:** Ensure your specific activities are accurately selected for your trade license.
3. **Apply for the License:** Submit your documentation and pay the necessary fees.
4. **Visa and Banking:** Process your residency visas and open a corporate bank account.

> **Need assistance?** At Juno BizHub, we specialize in helping ${c.cat} businesses launch successfully in the UAE. Contact us today for a free consultation.
`;

categories.forEach(c => {
  const filePath = path.join('c:/Users/kesha/OneDrive/Desktop/juno website final draft/juno-website-/content/posts', c.id + '.mdx');
  fs.writeFileSync(filePath, template(c));
  console.log('Created ' + c.id + '.mdx');
});
