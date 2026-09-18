export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  featured?: boolean;
  tagline: string;
  features: string[];
  deliverables: string[];
  stats?: { value: string; label: string }[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  category: 'Jewellery' | 'Corporate' | 'Retail' | 'Digital Marketing' | 'Events';
  image: string;
  description: string;
  highlights: string[];
  metrics: { value: string; label: string }[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  readTime: string;
  category: string;
  content: string[];
}

export interface LocationInfo {
  name: string;
  city: string;
  address: string;
  type: string;
  hours: string;
}

export const siteConfig = {
  company: {
    name: "Engage Marketing Solutions",
    shortName: "EngageM",
    brandWord: "engage.",
    slogan: "Connecting Brands",
    tagline: "Marketing Solutions & Communications Agency",
    description: "Welcome to Engage, your premier partner in building connections between brands and their target consumers. Located in the bustling heart of Dubai, UAE. Engage is dedicated to providing comprehensive solutions that elevate brands and foster meaningful relationships with their audiences across the Gulf and global markets.",
    phone: "+971 50 271 8601",
    rawPhone: "971502718601",
    email: "info@engagemsolutions.com",
    whatsappUrl: "https://wa.me/971502718601?text=Hello%20EngageM%2C%20I%20would%20like%20to%20inquire%20about%20your%20services.",
    stats: [
      { value: "10+", label: "Years of GCC Excellence" },
      { value: "150+", label: "Successful Campaigns" },
      { value: "50+", label: "Enterprise Brands" },
      { value: "3", label: "Strategic UAE Hubs" },
    ],
  },
  locations: [
    {
      name: "Dubai Headquarters",
      city: "Dubai, UAE",
      address: "Motor City, Dubai, United Arab Emirates",
      type: "Strategic & Management HQ",
      hours: "Monday - Friday: 9:00 AM - 6:00 PM",
    },
    {
      name: "Sharjah Creative Hub",
      city: "Sharjah, UAE",
      address: "Sharjah Media City (Shams), Sharjah, UAE",
      type: "Digital PR & Media Production",
      hours: "Monday - Friday: 9:00 AM - 6:00 PM",
    },
    {
      name: "Ajman Production Facility",
      city: "Ajman, UAE",
      address: "Ajman Industrial Area, Ajman, UAE",
      type: "Industrial Printing & Large Format",
      hours: "Monday - Saturday: 8:00 AM - 7:00 PM",
    },
  ] as LocationInfo[],

  navigation: [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    {
      name: "Services",
      href: "/services",
      dropdown: [
        { name: "AI Customer Care & Sales Agents", href: "/services/ai-agents", badge: "AI Powered" },
        { name: "Digital Marketing", href: "/services/digital-marketing" },
        { name: "E-commerce Solutions", href: "/services/ecommerce", badge: "High ROI" },
        { name: "Brand Management", href: "/services/brand-management" },
        { name: "Digital PR", href: "/services/digital-pr" },
        { name: "AI Design & Videography", href: "/services/ai-designs", badge: "Next-Gen" },
        { name: "Printing & Production", href: "/services/printing-production" },
        { name: "Event Management", href: "/services/event-management" },
        { name: "Customer Value Management", href: "/services/customer-value-management" },
        { name: "Consultancy Services", href: "/services/consultancy" },
      ],
    },
    {
      name: "Our Work",
      href: "/work",
      dropdown: [
        { name: "Our Latest Work", href: "/work" },
        { name: "Our Clients", href: "/clients" },
      ],
    },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact Us", href: "/contact" },
  ],

  services: [
    {
      id: "ai-agents",
      title: "AI Customer Care & Sales Agents",
      slug: "ai-agents",
      featured: true,
      tagline: "Autonomous 24/7 Conversational AI That Converts Visitors into Revenue",
      shortDescription: "Deploy intelligent, bilingual AI agents across WhatsApp, Web, and Voice that qualify leads, resolve customer queries in seconds, and close sales around the clock.",
      fullDescription: "EngageM's AI Customer Care & Sales Agents transform your customer touchpoints into high-performing revenue engines. Built on fine-tuned enterprise LLMs and integrated seamlessly with your CRM and WhatsApp Business API, our autonomous agents understand regional nuances (Arabic & English), deliver instant personalized support, and qualify leads with human-grade empathy and machine precision.",
      iconName: "Bot",
      features: [
        "24/7 Real-Time Multilingual Support (Fluent Arabic & English)",
        "Automated Inbound Lead Qualification & Meeting Booking",
        "Deep CRM & ERP Integration (HubSpot, Salesforce, Zoho, Shopify)",
        "WhatsApp Business Cloud API Native Automation",
        "Human-in-the-Loop Smooth Escalation Protocol",
        "Predictive Sentiment Analysis & Real-Time Performance Analytics"
      ],
      deliverables: [
        "Custom Trained Enterprise AI Model Grounded on Your Knowledge Base",
        "Omnichannel Deployment (Web Widget, WhatsApp, Instagram DM, Voice)",
        "Automated CRM Lead Pipeline & Instant Slack/Email Notifications",
        "Comprehensive Compliance & Data Privacy Guardrails (UAE/GCC standards)"
      ],
      stats: [
        { value: "92%", label: "First Contact Resolution" },
        { value: "< 2 sec", label: "Average Response Time" },
        { value: "3.4x", label: "Lead Conversion Increase" },
        { value: "65%", label: "Operational Cost Reduction" },
      ]
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      slug: "digital-marketing",
      featured: true,
      tagline: "High-Velocity Performance Marketing, SEO, and Social Campaigns",
      shortDescription: "Strengthen your brand's online presence with tailored digital marketing strategies, including SEO, social media management, Google Ads, and website development designed to drive measurable results.",
      fullDescription: "In a fast-evolving digital landscape, Engage Marketing Solutions provides performance-driven marketing systems engineered for measurable growth. From precision Google Ads and Meta campaigns to search engine dominance (SEO & Generative Engine Optimization), our data-driven frameworks ensure your brand captures market share, lowers customer acquisition costs, and scales revenue sustainably.",
      iconName: "TrendingUp",
      features: [
        "Advanced SEO & Local UAE Search Domination",
        "High-ROAS Google Search, Display, & Performance Max Campaigns",
        "Paid Social Advertising (Meta, TikTok, LinkedIn, Snapchat)",
        "Full-Funnel Content Marketing & Creative Strategy",
        "Conversion Rate Optimization (CRO) & A/B Testing",
        "Custom Analytics Dashboards & Multi-Touch Attribution"
      ],
      deliverables: [
        "Bi-weekly Performance Reports & ROAS Tracking",
        "Omnichannel Paid Ads Setup & Daily Campaign Management",
        "High-Impact Creative Ad Sets & Copywriting",
        "Technical SEO Audits & Ongoing Keyword Positioning"
      ],
      stats: [
        { value: "+340%", label: "Average Organic Traffic Growth" },
        { value: "4.8x", label: "Average Return on Ad Spend (ROAS)" },
        { value: "-38%", label: "Reduction in Cost Per Acquisition" },
        { value: "100%", label: "Transparent Performance Reporting" },
      ]
    },
    {
      id: "ecommerce",
      title: "E-commerce Solutions",
      slug: "ecommerce",
      featured: true,
      tagline: "Scalable Online Flagships Tailored for Luxury, Retail & High-Volume Sales",
      shortDescription: "End-to-end e-commerce development, conversion optimization, payment gateway integration, and customer retention systems specialized for luxury jewelry, fashion, and retail brands.",
      fullDescription: "We build digital storefronts that captivate audiences and maximize checkout completions. From custom Shopify Plus architectures to headless e-commerce builds, our team combines exquisite luxury UI/UX design with technical speed, frictionless regional payment gateways (Tabby, Tamara, Telr, Apple Pay), and automated loyalty workflows that foster lasting customer lifetime value.",
      iconName: "ShoppingBag",
      features: [
        "Bespoke Shopify Plus, WooCommerce & Headless E-commerce Builds",
        "Seamless GCC Payment Gateways (Apple Pay, Tabby, Tamara, Network)",
        "Mobile-First Responsive UX Engineered for Ultra-Fast Checkout",
        "Automated Cart Recovery & Post-Purchase WhatsApp Sequences",
        "ERP, Warehouse, & Inventory Management Integrations",
        "High-Ticket Product Showcases & 3D Interactive Viewers"
      ],
      deliverables: [
        "Full Turnkey E-commerce Store Architecture & Development",
        "Payment, Shipping, & Tax Compliance Configuration for GCC",
        "Speed Optimization (Sub-2s Load Times for High Core Web Vitals)",
        "Staff Training & Ongoing Store Maintenance"
      ],
      stats: [
        { value: "3.8%", label: "Target Checkout Conversion Rate" },
        { value: "+65%", label: "Repeat Purchase Rate with Loyalty" },
        { value: "< 1.5s", label: "Mobile Page Load Speed" },
        { value: "99.9%", label: "Store Uptime & Scalability" },
      ]
    },
    {
      id: "brand-management",
      title: "Brand Management",
      slug: "brand-management",
      tagline: "Shaping Brand Identities That Command Authority and Inspire Loyalty",
      shortDescription: "Strategic brand positioning, corporate identity systems, brand messaging, and reputation management that ensure your company stands out and connects emotionally with your audience.",
      fullDescription: "Your brand is your most valuable business asset. At Engage, we help brands carve out undeniable market leadership through rigorous strategic positioning, distinct visual identity systems, persuasive brand storytelling, and ongoing brand governance across every digital and physical touchpoint.",
      iconName: "ShieldCheck",
      features: [
        "Comprehensive Brand Strategy & Market Positioning",
        "Visual Identity Systems (Logos, Color Palettes, Typography, Guidelines)",
        "Corporate Tone of Voice & Strategic Messaging Frameworks",
        "Brand Governance, Asset Toolkits, and Collateral Design",
        "Brand Repositioning & Rebranding Transformations",
        "Executive Personal Branding for Founders and CEOs"
      ],
      deliverables: [
        "Comprehensive 80+ Page Brand Identity Playbook",
        "Vector Brand Assets, Typography & Iconography Libraries",
        "Stationery, Presentation Decks, & Social Media Kits",
        "Brand Governance and Collateral Design",
        "Brand Rollout Strategy & Launch Campaign"
      ],
      stats: [
        { value: "100%", label: "Brand Equity Growth" },
        { value: "10+ Yrs", label: "Agency Leadership" },
      ]
    },
    {
      id: "digital-pr",
      title: "Digital PR",
      slug: "digital-pr",
      tagline: "Building Unshakable Media Credibility Across the GCC and Global Outlets",
      shortDescription: "Connect your brand with premier publications, authoritative media, and high-impact industry influencers to build lasting credibility and authoritative backlinks.",
      fullDescription: "Engage Marketing Solutions delivers high-impact Digital PR across the Gulf and international press. We place your brand directly in respected news outlets such as Khaleej Times, Gulf News, Zawya, Logistics Gulf, Mid East Information, and MSN, securing credibility that elevates search authority and customer trust.",
      iconName: "Megaphone",
      features: [
        "Press Release Writing & Multi-Tier GCC Media Distribution",
        "Direct Editorial Placements in Tier-1 Middle East Publications",
        "Executive Thought Leadership & Op-Ed Articles",
        "Crisis Communications & Reputation Defense Strategies",
        "High-Authority Backlink Acquisition for SEO Dominance",
        "Strategic Influencer & Key Opinion Leader (KOL) Collaborations"
      ],
      deliverables: [
        "Guaranteed Media Coverage in Leading Regional Portals",
        "Comprehensive PR Coverage Reports with Reach & Sentiment Metrics",
        "Bilingual Press Kits & Journalist Outreach Packages"
      ],
      stats: [
        { value: "50M+", label: "Regional Media Impressions" },
        { value: "Tier 1", label: "Direct Publisher Network" },
      ]
    },
    {
      id: "ai-designs",
      title: "AI Design & Videography",
      slug: "ai-designs",
      tagline: "Pioneering Generative Visuals & High-Speed Creative Production",
      shortDescription: "Combine artificial intelligence with world-class creative direction to produce hyper-realistic visuals, AI-generated campaign videos, and high-impact social assets at unprecedented speed.",
      fullDescription: "Step into the future of creative production with Engage Marketing Solutions. By leveraging cutting-edge generative AI models directed by seasoned art directors, we craft breathtaking cinematic imagery, campaign video assets, and product visualizations in record time—saving 70% of traditional shoot costs while unlocking infinite creative freedom.",
      iconName: "Sparkles",
      features: [
        "Photorealistic Generative Product & Lifestyle Visuals",
        "AI-Generated Social Media Video Ads & Motion Assets",
        "Rapid Creative Prototyping for High-Velocity Marketing Campaigns",
        "AI Virtual Models & Bespoke Commercial Photoshoots",
        "Cost-Effective Content Scaling for Multi-Platform Publishing",
        "High-Resolution 4K Upscaling & Cinema-Grade Color Grading"
      ],
      deliverables: [
        "Campaign-Ready High-Res Image Packs & Social Formats",
        "Short-Form Video Ads (Reels, TikTok, YouTube Shorts)",
        "Prompt Libraries & Consistent Brand Visual Embeddings"
      ],
      stats: [
        { value: "70%", label: "Cost Savings vs Traditional Shoots" },
        { value: "5x", label: "Faster Production Timelines" },
      ]
    },
    {
      id: "printing-production",
      title: "Printing & Production",
      slug: "printing-production",
      tagline: "Industrial-Grade Physical Branding, Large-Format Displays & Uniforms",
      shortDescription: "Full-scale corporate printing from premium stationery and custom corporate uniforms to exhibition kiosks, banners, and large-format architectural displays manufactured in our UAE facility.",
      fullDescription: "Through our dedicated production facility in the Ajman Industrial Area, Engage provides turnkey physical branding solutions for enterprises, luxury retailers, and government entities across the UAE. We guarantee precision color reproduction, premium materials, and flawless installation for exhibitions, retail spaces, and corporate environments.",
      iconName: "Printer",
      features: [
        "Corporate Identity Printing (Business Cards, Letterheads, Envelopes, Folders)",
        "Bespoke Corporate Uniforms & High-End Embroidered Apparel",
        "Large-Format Printing (Billboards, Building Wraps, Vehicle Fleet Graphics)",
        "Custom Exhibition Kiosks, Pop-Up Displays & Roll-Up Banners",
        "Luxury Packaging, Rigid Gift Boxes & Custom Shopping Bags",
        "On-Site Installation & Nationwide Logistics Across the UAE"
      ],
      deliverables: [
        "Physical Material Proofs & Color Calibration Samples",
        "Volume Production with Guaranteed On-Time Delivery",
        "Full Turnkey Assembly and De-installation Services"
      ],
      stats: [
        { value: "10,000+", label: "Print Jobs Executed Annually" },
        { value: "100%", label: "In-House Quality Control" },
      ]
    },
    {
      id: "event-management",
      title: "Event Management",
      slug: "event-management",
      tagline: "Memorable Corporate Galas, Brand Activations & VIP Experiences",
      shortDescription: "Full-scale event production across the Gulf, from high-profile corporate galas and luxury brand activations to international exhibition management and talent coordination.",
      fullDescription: "We design and execute memorable corporate events that foster genuine human connection. From intimate VIP gatherings and jewelry showcase galas to large-scale trade show booths and brand activations across Dubai and the Gulf, Engage handles concept design, stage engineering, audio-visual production, catering, and talent curation.",
      iconName: "CalendarDays",
      features: [
        "End-to-End Corporate Gala & Conference Management",
        "Experiential Brand Activations & Pop-Up Retail Experiences",
        "Exhibition Booth Architectural Design, Construction & Lighting",
        "VIP Guest Management, RSVP Systems & Red Carpet Protocol",
        "State-of-the-Art Sound, Intelligent Lighting, & Stage Production",
        "High-Profile Host, Celebrity, and Performer Talent Management"
      ],
      deliverables: [
        "3D Spatial Event Renders & Floorplans",
        "Run-of-Show Minute-by-Minute Production Itinerary",
        "Full Event Photography, Videography & Post-Event Highlight Reel"
      ],
      stats: [
        { value: "100+", label: "Corporate Galas & Activations" },
        { value: "10,000+", label: "VIP Guests Hosted" },
      ]
    },
    {
      id: "customer-value-management",
      title: "Customer Value Management (CRM & Loyalty)",
      slug: "customer-value-management",
      tagline: "Maximizing Customer Lifetime Value Through Intelligent Retention",
      shortDescription: "Comprehensive Customer Value Management (CVM), CRM architectures, and tailored loyalty programs designed to strengthen relationships, drive retention, and maximize lifetime spend.",
      fullDescription: "At Engage, we understand that customer retention is the true engine of sustainable profitability. Our CVM practice designs intelligent CRM data structures, points-based and VIP loyalty programs, and automated predictive re-engagement flows that turn one-off buyers into passionate lifelong brand advocates.",
      iconName: "HeartHandshake",
      features: [
        "Customer Value Segmentation & RFM (Recency, Frequency, Monetary) Modeling",
        "Omnichannel CRM Architecture & Data Cleansing (HubSpot, Salesforce, Klaviyo)",
        "Tiered VIP & Points-Based Customer Loyalty Program Design",
        "Predictive Churn Prevention & Automated Win-Back Sequences",
        "Personalized WhatsApp & Email Marketing Automation",
        "Customer Lifetime Value (CLV) Benchmarking & Reporting"
      ],
      deliverables: [
        "End-to-End Loyalty Program Architecture & Rules Engine",
        "Configured Lifecycle Marketing Automation Workflows",
        "Customer Intelligence Dashboard & Executive Retention Metrics"
      ],
      stats: [
        { value: "+45%", label: "Average Increase in Repeat Orders" },
        { value: "2.8x", label: "Higher Customer Lifetime Value" },
      ]
    },
    {
      id: "consultancy",
      title: "Consultancy Services",
      slug: "consultancy",
      tagline: "Specialized Luxury Jewelry Advisory & Retail Operations Excellence",
      shortDescription: "Specialized consultancy for luxury jewelry brands and retail chains covering digital strategy, store operations audits, employee training, and retail performance optimization.",
      fullDescription: "Engage delivers deep industry consultancy tailored specifically for jewelry brands, luxury retailers, and commercial enterprises across the GCC. We provide comprehensive operational audits, staff training on high-touch clienteling, UGC and high-end model shoots, and digital transformation blueprints that translate into measurable retail profitability.",
      iconName: "Briefcase",
      features: [
        "Luxury Jewelry Digital Footprint Development & Model Shoots",
        "User-Generated Content (UGC) Strategy & Influencer Gifting Protocols",
        "Retail Store Operations Excellence Audits & Mystery Shopping",
        "Employee & Sales Staff High-Touch Customer Service Training",
        "Inventory Turnover Analysis & Merchandising Optimization",
        "GCC Market Entry Strategy & Expansion Advisory"
      ],
      deliverables: [
        "Retail Operational Performance Audit & Gap Analysis Report",
        "Customized Jewelry Digital Playbook & Model Lookbooks",
        "Frontline Sales Team Training Workshops & Certification"
      ],
      stats: [
        { value: "+28%", label: "In-Store Sales Conversion Lift" },
        { value: "100%", label: "Tailored Retail Roadmaps" },
      ]
    }
  ] as ServiceItem[],

  mediaLogos: [
    { name: "Khaleej Times", file: "/images/brands/khaleej-times.svg", alt: "Khaleej Times" },
    { name: "Gulf News", file: "/images/brands/gulf-news.jpg", alt: "Gulf News" },
    { name: "Logistics Gulf", file: "/images/brands/logistics-gulf.png", alt: "Logistics Gulf" },
    { name: "Zawya by LSEG", text: "ZAWYA BY LSEG", alt: "Zawya" },
    { name: "Mid East Information", file: "/images/brands/mideast-info.jpg", alt: "Mid East Information" },
    { name: "Business News", file: "/images/brands/business-news.jpg", alt: "Business News" },
    { name: "UAE News 24/7", text: "UAE NEWS 24/7", alt: "UAE News 24/7" },
    { name: "MSN", file: "/images/brands/msn.png", alt: "MSN" },
  ],

  portfolio: [
    {
      id: "the-swiss-gold",
      title: "The Swiss Gold",
      client: "The Swiss Gold International",
      category: "Jewellery",
      image: "https://images.unsplash.com/photo-1611591475881-c05bc2f2cbca?w=800&auto=format&fit=crop&q=80",
      description: "Elevating a premier Swiss bullion and precious metals brand with an international digital experience, multi-currency live pricing charts, and ultra-secure investor onboarding.",
      highlights: ["Luxury UI/UX Design", "Live Bullion API Integration", "Global Investor Acquisition"],
      metrics: [
        { value: "+280%", label: "High-Net-Worth Inquiries" },
        { value: "0.9s", label: "Page Load Speed" },
      ]
    },
    {
      id: "excelltra",
      title: "Excelltra",
      client: "Excelltra Corporate Solutions",
      category: "Corporate",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80",
      description: "Complete corporate brand refresh, digital PR distribution, and enterprise B2B lead generation across the UAE and broader GCC financial sector.",
      highlights: ["Strategic Rebranding", "Tier-1 Digital PR Placements", "B2B Lead Funnel"],
      metrics: [
        { value: "4.2x", label: "Qualified Pipeline Growth" },
        { value: "15+", label: "Regional Press Features" },
      ]
    },
    {
      id: "the-artful-hands",
      title: "The Artful Hands",
      client: "The Artful Hands Studio",
      category: "Digital Marketing",
      image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&auto=format&fit=crop&q=80",
      description: "Artisan storytelling and high-ROAS social media marketing for luxury handmade homeware and artisanal creations, scaling direct-to-consumer sales.",
      highlights: ["Visual Content Creation", "Meta Ad Scaling", "Community Growth"],
      metrics: [
        { value: "5.1x", label: "Average ROAS" },
        { value: "+320%", label: "Social Engagement Lift" },
      ]
    },
    {
      id: "setare-diamonds",
      title: "Setare Diamonds",
      client: "Setare High Jewellery",
      category: "Jewellery",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&auto=format&fit=crop&q=80",
      description: "Comprehensive luxury jewelry consultancy, fine diamond photoshoots, digital marketing campaigns, and VIP private client appointment booking.",
      highlights: ["High-End Jewellery Photography", "VIP Appointment Funnel", "Influencer Gifting"],
      metrics: [
        { value: "+410%", label: "Private Showroom Bookings" },
        { value: "+85%", label: "Average Order Value" },
      ]
    },
    {
      id: "philopateer-gala",
      title: "Philopateer Luxury Gala",
      client: "Philopateer Watch & Jewelry",
      category: "Events",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&auto=format&fit=crop&q=80",
      description: "Flawless end-to-end production of a VIP luxury gala in Dubai, featuring state-of-the-art stage engineering, celebrity attendees, and international media coverage.",
      highlights: ["Luxury Event Production", "Red Carpet Coordination", "Post-Event PR"],
      metrics: [
        { value: "450+", label: "VIP Attendees" },
        { value: "100%", label: "Media Sentiment Rating" },
      ]
    }
  ] as PortfolioItem[],

  clientCategories: [
    {
      category: "FOOD & BEVERAGE",
      description: "Leading culinary establishments, gourmet brands, and regional hospitality groups.",
      brands: ["Artisan Kitchen", "Gulf Flavours", "The Roast & Co.", "Bistro 88", "Urban Spice Co."]
    },
    {
      category: "JEWELLERY & LUXURY",
      description: "Haute horlogerie, bullion dealers, diamond ateliers, and fine jewelry houses.",
      brands: ["The Swiss Gold", "Setare Diamonds", "Philopateer Watch & Jewelry", "L'Or Éternel", "Al Diwan Fine Gems"]
    },
    {
      category: "RETAIL & SERVICE SECTOR",
      description: "Enterprise service providers, retail powerhouses, real estate developers, and logistics leaders.",
      brands: ["Excelltra Solutions", "Logistics Gulf Network", "Apex Properties Dubai", "The Artful Hands", "Horizon Logistics"]
    }
  ],

  blogs: [
    {
      slug: "why-your-brand-needs-a-story",
      title: "Why Your Brand Needs a Story: Connecting Emotionally in a Digital Age",
      excerpt: "In a crowded marketplace where features and prices are easily replicated, your brand story is the single most powerful moat your business can build.",
      coverImage: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&auto=format&fit=crop&q=80",
      date: "November 19, 2024",
      readTime: "4 min read",
      category: "Brand Strategy",
      content: [
        "In today's hyper-competitive GCC marketplace, consumers are bombarded with thousands of marketing messages every single day. The brands that stand out and survive are not merely those with the loudest ad spend—they are the ones that forge authentic emotional connections through compelling storytelling.",
        "A true brand story is not just an 'About Us' paragraph written for a corporate brochure. It is the narrative thread that ties together your company's purpose, the struggle of your customers, the values you refuse to compromise on, and the transformative future you invite your clients to participate in.",
        "When Engage crafts a brand narrative, we focus on three core pillars: Authenticity, Empathy, and Transformation. When customers see their own aspirations reflected in your brand's voice, price becomes secondary to relationship, and retention naturally skyrockets."
      ]
    },
    {
      slug: "jewelry-consulting-services",
      title: "Jewelry Consulting Services: How to Build Your Brand in the Digital Age",
      excerpt: "From virtual try-ons and high-touch UGC to seamless e-commerce checkout, discover how luxury jewelry brands are commanding premium valuations.",
      coverImage: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&auto=format&fit=crop&q=80",
      date: "November 4, 2024",
      readTime: "5 min read",
      category: "Jewelry Consultancy",
      content: [
        "The luxury jewelry industry in Dubai and the Gulf has witnessed an unprecedented transformation over recent years. While physical touch and the showroom experience remain irreplaceable, modern high-net-worth consumers increasingly initiate their purchase journeys online.",
        "A successful modern jewelry brand requires a digital footprint that matches the uncompromising luxury of its physical pieces. This demands bespoke macro-photography, cinema-grade lighting, authentic user-generated content (UGC) that showcases how pieces look on real clients, and seamless mobile concierge systems.",
        "Engage Marketing Solutions specializes in bridging the gap between high-touch boutique service and cutting-edge digital marketing, empowering jewelers to expand from local favorites into internationally sought-after ateliers."
      ]
    },
    {
      slug: "how-to-create-an-effective-marketing-strategy-for-your-business",
      title: "How to Create an Effective Marketing Strategy for Your Business in the UAE",
      excerpt: "A step-by-step roadmap to developing a comprehensive marketing strategy that drives sustainable customer acquisition and high ROAS in the Middle East.",
      coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
      date: "January 16, 2024",
      readTime: "6 min read",
      category: "Marketing Strategy",
      content: [
        "Building a winning marketing strategy in Dubai and the UAE requires a deep understanding of the region's unique demographics, high mobile penetration, and cultural nuances. A generic playbook copy-pasted from Western markets almost always fails to achieve expected ROAS.",
        "Step 1: Define Precise Buyer Personas. Understand whether you are targeting local Emirati consumers, long-term expatriates, or transient corporate decision-makers. Each segment utilizes distinct digital channels and responds to specific cultural tones.",
        "Step 2: Omnichannel Funnel Architecture. Don't rely solely on one channel. Combine top-of-funnel Digital PR and TikTok/Instagram awareness with bottom-of-funnel Google Search and automated WhatsApp conversational agents to capture intent instantly.",
        "Step 3: Relentless Attribution and Data Auditing. Track metrics that matter—not vanity impressions, but qualified lead velocity, customer acquisition cost (CAC), and customer lifetime value (CLV)."
      ]
    },
    {
      slug: "emirati-womens-day-celebrating-entrepreneurs",
      title: "Emirati Women's Day: Celebrating Empowerment and Achievements of Women Entrepreneurs",
      excerpt: "Honoring the visionary leadership, innovation, and unstoppable drive of Emirati women shaping the future of commerce and culture in the UAE.",
      coverImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80",
      date: "August 29, 2024",
      readTime: "3 min read",
      category: "Culture & Insights",
      content: [
        "On Emirati Women's Day, Engage Marketing Solutions proudly celebrates the remarkable contributions of Emirati women leaders, innovators, and entrepreneurs who continue to redefine industries across the nation.",
        "From groundbreaking tech ventures and luxury fashion houses to sustainable food brands and corporate leadership, Emirati women are at the forefront of the UAE's knowledge-based economic vision.",
        "As an agency based in Dubai, we are privileged to collaborate with inspiring female founders, providing the strategic communications and digital platforms that amplify their impactful stories across regional and international stages."
      ]
    },
    {
      slug: "engage-your-business-with-our-marketing-and-communications-services",
      title: "Engage Your Business with Modern Marketing and Communications Services",
      excerpt: "Explore how integrating AI customer care, creative design, digital PR, and industrial printing creates an unstoppable competitive advantage.",
      coverImage: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&auto=format&fit=crop&q=80",
      date: "August 28, 2024",
      readTime: "4 min read",
      category: "Agency Insights",
      content: [
        "The modern enterprise no longer has the luxury of working with fragmented agencies—one for digital ads, one for PR, another for event production, and another for print. This fragmentation dilutes brand consistency and inflates overhead.",
        "Engage Marketing Solutions was established to provide an integrated 360-degree ecosystem. We fuse human creative strategy with artificial intelligence, media authority, and physical production capability under one cohesive roof.",
        "Discover how our integrated model drives faster turnaround, sharper messaging, and significantly higher return on investment for ambitious brands across the Gulf."
      ]
    }
  ] as BlogPost[],

  aiConsultantKnowledge: {
    welcomeMessage: "Hello! I am your EngageM AI Business Consultant. How can I assist you today? I can help evaluate your project requirements, calculate recommended marketing strategies, or book a consultation with our Dubai leadership team.",
    suggestedPrompts: [
      "Tell me about your AI Sales & Customer Care Agents",
      "I need a Digital Marketing strategy in Dubai",
      "How do your E-commerce solutions work for Luxury/Jewelry?",
      "Can you print uniforms & exhibition booths in the UAE?",
      "Book a strategy consultation with EngageM"
    ],
    agencyHighlights: [
      "Headquartered in Motor City, Dubai with creative facilities in Sharjah and production hub in Ajman.",
      "Over a decade of GCC market expertise with 150+ successful campaigns.",
      "Flagship solutions: AI Autonomous Agents, Full-Funnel Digital Marketing, Luxury & Retail E-commerce.",
      "Verified media coverage in Khaleej Times, Gulf News, Zawya, Logistics Gulf, and MSN.",
      "Direct phone and WhatsApp support at +971 50 271 8601."
    ]
  }
};
