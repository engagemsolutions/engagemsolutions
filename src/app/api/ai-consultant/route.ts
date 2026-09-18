import { NextResponse } from 'next/server';
import { siteConfig } from '@/config/siteConfig';

export async function POST(request: Request) {
  try {
    const { message, history } = await request.json();
    const q = (message || '').toLowerCase();

    // Check if external LLM API key is provided
    const apiKey = process.env.GEMINI_API_KEY || process.env.OPENAI_API_KEY;

    if (apiKey && process.env.GEMINI_API_KEY) {
      try {
        const prompt = `You are the official EngageM AI Business Consultant for Engage Marketing Solutions, based in Dubai, UAE.
Company Knowledge:
- Headquarters: Motor City, Dubai, UAE
- Creative Hub: Sharjah Media City (Shams), UAE
- Production Facility: Ajman Industrial Area, UAE
- Direct Phone & WhatsApp: +971 50 271 8601
- Email: info@engagemsolutions.com
- Services: 
  1. AI Customer Care & Sales Agents (24/7 bilingual Arabic/English autonomous agents for WhatsApp, Web, Voice)
  2. Digital Marketing (SEO, High-ROAS Google Ads, Meta, TikTok, content strategy)
  3. E-commerce Solutions (Shopify Plus, luxury jewelry e-commerce, GCC payment integrations)
  4. Brand Management & Strategy
  5. Digital PR (direct media coverage in Khaleej Times, Gulf News, Zawya, Logistics Gulf, MSN)
  6. AI Design & Videography (generative visuals and cinematic video ads)
  7. Printing & Production (in-house Ajman plant: corporate stationery, uniforms, exhibition kiosks, large-format)
  8. Event Management (corporate galas, brand activations, VIP hospitality)
  9. Customer Value Management (CRM architecture, points & VIP loyalty programs)
  10. Consultancy Services (specialized jewelry digital strategy and retail store operations excellence)
Strict Rules:
- Never hallucinate non-existent services, certifications, or false client claims.
- Keep tone professional, authoritative, warm, and sophisticated.
- If user inquires about pricing or project kickoff, recommend scheduling a consultation call or messaging via WhatsApp (+971 50 271 8601).
- Reply succinctly in 2 to 4 sentences.

User asked: "${message}"`;

        const geminiRes = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [{ parts: [{ text: prompt }] }],
            }),
          }
        );

        if (geminiRes.ok) {
          const gData = await geminiRes.json();
          const replyText = gData?.candidates?.[0]?.content?.parts?.[0]?.text;
          if (replyText) {
            return NextResponse.json({
              reply: replyText.trim(),
              suggestions: [
                'Book a Consultation Call',
                'Connect via WhatsApp (+971 50 271 8601)',
                'Explore Service Packages',
              ],
            });
          }
        }
      } catch (e) {
        console.warn('Gemini API call fell back to local engine:', e);
      }
    }

    // High-intelligence grounded contextual response engine
    let reply = '';
    let suggestions: string[] = [];
    let triggerLeadForm = false;

    if (q.includes('ai') || q.includes('agent') || q.includes('bot') || q.includes('customer care') || q.includes('sales agent')) {
      reply =
        'Our AI Customer Care & Sales Agents are autonomous, bilingual (Arabic & English) solutions that run 24/7 across WhatsApp, Web, and Voice. They integrate directly with your CRM, resolve over 90% of routine inquiries instantly, and qualify inbound sales leads into booked meetings.';
      suggestions = [
        'How does CRM integration work?',
        'Can it speak fluent Arabic & English?',
        'Request an AI Agent live demo',
      ];
      triggerLeadForm = true;
    } else if (q.includes('marketing') || q.includes('seo') || q.includes('ad') || q.includes('google') || q.includes('social media')) {
      reply =
        'EngageM delivers full-funnel digital marketing across the UAE and GCC. We combine high-intent Google Search & Performance Max ads, targeted social campaigns on Meta, TikTok, and LinkedIn, and deep technical SEO to lower acquisition costs and drive sustainable ROAS.';
      suggestions = [
        'What is your average ROAS?',
        'Do you handle localized GCC content?',
        'Get a marketing audit for my business',
      ];
      triggerLeadForm = true;
    } else if (q.includes('ecommerce') || q.includes('shop') || q.includes('store') || q.includes('shopify')) {
      reply =
        'We build high-converting e-commerce flagships engineered for speed, conversion rate optimization, and regional checkout flows. Our solutions include seamless integrations with Tabby, Tamara, Apple Pay, and automated retention workflows, with specialized expertise in luxury jewelry and fashion.';
      suggestions = [
        'Do you work with Shopify Plus?',
        'Can you integrate Tabby and Tamara?',
        'Book an E-commerce consultation',
      ];
    } else if (q.includes('jewelry') || q.includes('jewellery') || q.includes('gold') || q.includes('diamond')) {
      reply =
        'Jewelry and luxury advisory is one of EngageM\'s signature specializations. We manage digital strategy, high-end model and UGC shoots, and in-store retail operations audits for leading ateliers like The Swiss Gold and Setare Diamonds.';
      suggestions = [
        'View Jewelry Case Studies',
        'Inquire about Retail Operations Audits',
        'Book a Luxury Brand Consultation',
      ];
    } else if (q.includes('print') || q.includes('uniform') || q.includes('booth') || q.includes('banner') || q.includes('exhibition')) {
      reply =
        'We operate an industrial printing and production facility in the Ajman Industrial Area. We manufacture custom corporate uniforms, high-end rigid packaging, exhibition booths, roll-ups, and large-format architectural graphics with rapid nationwide delivery across the UAE.';
      suggestions = [
        'Request a Print Quotation',
        'Do you do rush orders in Dubai?',
        'View Exhibition Kiosk Portfolio',
      ];
    } else if (q.includes('pr') || q.includes('press') || q.includes('media') || q.includes('news')) {
      reply =
        'Our Digital PR network secures direct editorial coverage in premier publications including Khaleej Times, Gulf News, Zawya, Logistics Gulf, and MSN. This builds authoritative brand credibility and delivers high-value domain authority.';
      suggestions = [
        'Which publications can you feature us in?',
        'Do you draft the press releases?',
        'Plan a Digital PR Campaign',
      ];
    } else if (q.includes('event') || q.includes('gala') || q.includes('activation')) {
      reply =
        'From high-profile corporate galas and luxury brand activations to trade show booth construction and VIP hospitality, our Dubai event production team manages end-to-end stagecraft, lighting, sound, and talent coordination.';
      suggestions = [
        'View Philopateer Gala case study',
        'Plan an upcoming UAE event',
        'Speak with our Event Director',
      ];
    } else if (q.includes('location') || q.includes('office') || q.includes('where') || q.includes('dubai') || q.includes('address')) {
      reply =
        'EngageM operates from three strategic hubs in the UAE: our Strategic Management HQ in Motor City (Dubai), our Creative & PR Hub in Sharjah Media City (Shams), and our Industrial Printing Plant in Ajman Industrial Area. Our office hours are Mon–Fri, 9:00 AM – 6:00 PM.';
      suggestions = [
        'Schedule an in-person meeting in Motor City',
        'WhatsApp +971 50 271 8601',
        'Get office directions',
      ];
    } else if (q.includes('price') || q.includes('cost') || q.includes('quote') || q.includes('rate') || q.includes('book') || q.includes('contact')) {
      reply =
        'Because every project has unique scope and scaling requirements, we provide customized proposals following a brief discovery review. You can request a quotation below, or connect instantly with our Dubai consultants via WhatsApp at +971 50 271 8601.';
      suggestions = [
        'Submit project details below',
        'Direct WhatsApp chat',
        'Call +971 50 271 8601',
      ];
      triggerLeadForm = true;
    } else {
      reply =
        'Welcome to Engage Marketing Solutions! We help brands accelerate growth across the UAE and global markets through AI Customer Care Agents, high-velocity Digital Marketing, Luxury E-commerce, and full-scale physical production. How may we assist your brand today?';
      suggestions = [
        'Tell me about AI Customer Care & Sales Agents',
        'I need Digital Marketing in Dubai',
        'Explore E-commerce & Jewelry Solutions',
        'Book a Strategy Consultation',
      ];
    }

    return NextResponse.json({
      reply,
      suggestions,
      triggerLeadForm,
    });
  } catch (error) {
    console.error('AI Consultant API error:', error);
    return NextResponse.json(
      {
        reply:
          'Our EngageM strategy team is available to assist you. Please reach out directly on WhatsApp at +971 50 271 8601 or leave your email.',
        suggestions: ['WhatsApp +971 50 271 8601', 'Book a Call'],
      },
      { status: 200 }
    );
  }
}
