export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: "Client Portfolio" | "SaaS & CRM" | "AI & Enterprise" | "POS & Web App";
  description: string;
  fullOverview: string;
  tags: string[];
  metrics?: { label: string; value: string }[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  accentColor: string;
  features: string[];
}

export const PERSONAL_INFO = {
  name: "Nabeel Zaidi",
  role: "Full-Stack Web Developer & UI Engineer",
  tagline: "Engineering high-performance portfolio websites and modern web applications with enterprise-grade reliability and conversion-focused design.",
  location: "Navi Mumbai, India • Available for Global Remote Contracts",
  email: "nabeel15jan@gmail.com",
  phone: "+91 9125023199",
  github: "https://github.com/zaidinabeel",
  linkedin: "https://www.linkedin.com/in/syed-nabeel-haider-zaidi-420b4715a",
  experienceYears: "2+ Years",
  enterpriseTrackRecord: "Jio Platforms Ltd.",
  completedProjects: "15+",
  satisfactionRate: "100%",
};

export const PROJECTS: Project[] = [
  {
    id: "shajer-portfolio",
    title: "Shajer Zaidi — Brand Portfolio",
    tagline: "High-converting personal brand & consultant portfolio website",
    category: "Client Portfolio",
    description: "A tailored, modern portfolio built for a digital marketing consultant featuring fluid animations, responsive storytelling, service grids, and lead capture CTAs.",
    fullOverview: "Designed and engineered to establish high authority. Built with a mobile-first philosophy, ultra-fast asset optimization, and intuitive navigation.",
    tags: ["React", "JavaScript", "Tailwind CSS", "Responsive Design", "SEO Optimized", "Vercel"],
    metrics: [
      { label: "Performance", value: "99/100" },
      { label: "Mobile UX", value: "100%" },
      { label: "Load Time", value: "< 0.8s" }
    ],
    liveUrl: "https://shajer-updated-portfolio.vercel.app",
    githubUrl: "https://github.com/zaidinabeel/shajer_updated_portfolio",
    featured: true,
    accentColor: "from-blue-600/10 to-indigo-600/10 border-blue-200",
    features: [
      "Custom responsive hero section with dynamic typography",
      "Service & skill breakdown with visual cards",
      "Interactive project showcases with external routing",
      "Direct contact capture & social channels integration"
    ]
  },
  {
    id: "dubai-crm",
    title: "Dubai Real Estate CRM",
    tagline: "Commercial real estate platform with advanced filtering & lead management",
    category: "SaaS & CRM",
    description: "A full-scale real estate CRM and property showcase platform built to manage luxury property listings, filter by location/price, and track prospective buyer leads.",
    fullOverview: "Engineered with high aesthetic standards matching the luxury real estate market. Includes property catalog search, detailed previews, and seamless client-side state handling.",
    tags: ["React", "JavaScript", "Tailwind CSS", "REST API", "State Management", "Vercel"],
    metrics: [
      { label: "Filter Speed", value: "Instant" },
      { label: "Architecture", value: "Modular Components" }
    ],
    liveUrl: "https://dubai-real-estate-crm-nine.vercel.app",
    githubUrl: "https://github.com/zaidinabeel/dubai-real-estate-crm",
    featured: true,
    accentColor: "from-emerald-600/10 to-teal-600/10 border-emerald-200",
    features: [
      "Luxury modern aesthetic with clean typography and balanced spacing",
      "Interactive property search and dynamic price/type filters",
      "Detailed listing cards with property highlights & amenity badges",
      "Lead conversion flows and agent contact modals"
    ]
  },
  {
    id: "vigil-ai-soc",
    title: "VIGIL — AI SOC & Security Intelligence",
    tagline: "Enterprise Tier-1 SOC Analyst interface with real-time telemetry",
    category: "AI & Enterprise",
    description: "An AI-powered cybersecurity defense platform designed for automated threat detection, incident triage, and real-time security alerting for critical systems.",
    fullOverview: "A high-complexity data application featuring incident triage feeds, real-time threat analysis visualizations, rule-based alerts, and TypeScript state architecture.",
    tags: ["TypeScript", "Next.js", "AI Integration", "Elastic SIEM", "Tailwind CSS", "Data Analytics"],
    metrics: [
      { label: "Tech Stack", value: "TypeScript & React" },
      { label: "Domain", value: "AI & Cybersecurity" }
    ],
    liveUrl: "https://frontend-one-navy-24.vercel.app",
    githubUrl: "https://github.com/zaidinabeel/vigil-elastic-soc",
    featured: true,
    accentColor: "from-indigo-600/10 to-violet-600/10 border-indigo-200",
    features: [
      "Real-time threat monitoring dashboard with dynamic incident streams",
      "AI-driven alert triage and automated investigation workflows",
      "Data-dense security HUD layout with optimized rendering",
      "Strict TypeScript typing across complex telemetry events"
    ]
  },
  {
    id: "kirana-pos",
    title: "Kirana Store — POS & Retail Platform",
    tagline: "Offline-first retail POS engine with Khatabook ledger & barcode scanner",
    category: "POS & Web App",
    description: "A full-featured retail management & POS billing application featuring barcode scanner integration, customer credit ledgers (खाता), tax invoice calculations, and local database sync.",
    fullOverview: "Engineered with offline-first SQLite/WASM architecture, arbitrary-precision decimal financial math, and bilingual English/Hindi localization.",
    tags: ["Flutter/Web", "SQLite (Drift)", "WASM", "Riverpod", "Barcode Scanner", "OpenFoodFacts API"],
    metrics: [
      { label: "Database", value: "Offline SQLite/WASM" },
      { label: "Math Precision", value: "Zero-error Decimal" },
      { label: "Barcode Lookup", value: "Real-time" }
    ],
    githubUrl: "https://github.com/zaidinabeel/kirana-store",
    featured: true,
    accentColor: "from-amber-600/10 to-orange-600/10 border-amber-200",
    features: [
      "High-speed barcode POS billing with reverse weight calculations",
      "Customer ledger with running balance and WhatsApp statement sharing",
      "Smart inventory tracker with low-stock alerts and OpenFoodFacts API",
      "Defensive architecture with comprehensive unit & math precision test suites"
    ]
  }
];

export const CREDENTIALS = [
  {
    label: "Enterprise Background",
    value: "Jio Platforms Ltd.",
    description: "Built & scaled high-reliability production systems with 99.9% uptime."
  },
  {
    label: "Problem Solving",
    value: "3rd Rank — Code Chanakya",
    description: "Proven speed in data structures, algorithms, and logic."
  },
  {
    label: "Innovation",
    value: "Top 10 — IBM SkillsBuild",
    description: "Recognized in national entrepreneurship and tech camp."
  }
];

export const SKILL_CATEGORIES = [
  {
    title: "Portfolio & Frontend Engineering",
    description: "Pixel-perfect, accessible, and ultra-fast client-side applications.",
    skills: ["React 19", "Next.js 15 (App Router)", "TypeScript", "Tailwind CSS", "JavaScript (ES6+)", "HTML5 / Semantic Web", "Framer Motion"]
  },
  {
    title: "Full-Stack & Backend Systems",
    description: "Robust data architecture, APIs, and scalable integrations.",
    skills: ["Node.js", "RESTful APIs", "MongoDB & Databases", "Authentication & Security", "Git & CI/CD", "Vercel / Cloud Deployments"]
  },
  {
    title: "UI/UX & Web Performance",
    description: "Creating experiences that users love and search engines rank high.",
    skills: ["Mobile-First Design", "Responsive Layouts", "Core Web Vitals Optimization", "Design Systems", "SEO Best Practices", "Micro-Interactions"]
  },
  {
    title: "Modern Integrations & AI",
    description: "Connecting modern LLMs, APIs, and real-time features.",
    skills: ["AI API Integrations", "Chatbot Interfaces", "Dashboard Analytics", "Elasticsearch UI", "Third-Party Webhooks"]
  }
];

export const SERVICES = [
  {
    title: "Custom Portfolio Websites",
    description: "Bespoke, award-worthy personal and agency portfolios designed to establish undeniable authority and convert visitors into clients.",
    deliverables: ["Tailored Design & Smooth Motion", "SEO & Meta Tag Setup", "100% Mobile Optimization", "Direct Lead Capture Forms"]
  },
  {
    title: "High-Converting Landing Pages",
    description: "Fast, persuasive landing pages crafted for startups, freelancers, and businesses looking to maximize signups and sales.",
    deliverables: ["Compelling Visual Hierarchy", "Lightning Fast Load Times", "Call-to-Action Optimization", "Analytics & Form Wiring"]
  },
  {
    title: "Full-Stack Web Applications",
    description: "Scalable web applications built with Next.js & React, featuring clean component hierarchies, robust state management, and reliable APIs.",
    deliverables: ["Modern Architecture", "Fast API Integrations", "Secure Authentication", "Component Reusability"]
  },
  {
    title: "Website Speed & UI Modernization",
    description: "Refactoring legacy websites into lightning-fast, modern web experiences with 95+ Google Lighthouse scores.",
    deliverables: ["Performance Audits", "Tailwind CSS Migration", "Mobile Responsiveness", "Animation Refinements"]
  }
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description: "Understanding your vision, target audience, design preferences, and goals to plan the highest-converting site structure."
  },
  {
    step: "02",
    title: "UI/UX Architecture",
    description: "Crafting clean visual layouts with modern typography, refined palettes, and intuitive component interactions."
  },
  {
    step: "03",
    title: "Development & Polish",
    description: "Writing clean, modular Next.js & Tailwind CSS code with smooth micro-interactions, full responsiveness, and fast load speeds."
  },
  {
    step: "04",
    title: "Deployment & Launch",
    description: "Deploying to production with custom domain setup, automated CI/CD pipelines, and comprehensive mobile testing."
  }
];
