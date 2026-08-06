/** Shared firm details - sourced from ULS approved list & public directories */
export const siteConfig = {
  name: 'McFord Advocates',
  shortName: 'McFord',
  legalName: 'McFord Advocates',
  tagline: 'Clear counsel. Confident decisions.',
  description:
    'McFord Advocates is a Kampala mineral law and corporate firm advising on gold and precious metal trade compliance, mining licences, export documentation, and commercial counsel for operators and investors in Uganda.',
  /** Longer summary for OG, schema, and LLM context */
  longDescription:
    'McFord Advocates is a partner-led law firm at AfriCourts, Plot 107 Buganda Road, Nakasero, Kampala, Uganda. Established in 2015, the firm specialises in mineral law and precious metal trade (including gold trading, mining and mineral rights licensing, export compliance, and extractives joint ventures), alongside corporate law, mergers and acquisitions, banking and finance, intellectual property, commercial law, and employment law across Uganda and East Africa.',
  /**
   * Official site only. mcfordadvocates.com was compromised / no longer controlled
   * by the firm - do not list it as sameAs or an alternate official URL.
   * Redirects from .com require control of that domain (DNS); this app cannot force them.
   */
  url: 'https://mcfordadvocates.co.ug',
  /** Display host (no protocol) for OG images and copy */
  domain: 'mcfordadvocates.co.ug',
  /** Former domain name only - for notices, not for linking as official */
  formerDomain: 'mcfordadvocates.com',
  established: 2015,
  foundingDate: '2015',

  address: {
    building: 'AfriCourts, 4th Floor',
    street: 'Plot 107, Buganda Road',
    area: 'Nakasero',
    city: 'Kampala',
    region: 'Central Region',
    country: 'Uganda',
    countryCode: 'UG',
    postal: 'P.O. Box 10363, Kampala, Uganda',
    /** Full multi-line display */
    lines: [
      'AfriCourts, 4th Floor',
      'Plot 107, Buganda Road, Nakasero',
      'Kampala, Uganda',
    ] as string[],
    short: 'AfriCourts, Plot 107 Buganda Road, Nakasero, Kampala',
    mapQuery: 'AfriCourts+Plot+107+Buganda+Road+Nakasero+Kampala',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=AfriCourts+Plot+107+Buganda+Road+Nakasero+Kampala+Uganda',
    mapsEmbed:
      'https://maps.google.com/maps?q=Plot+107+Buganda+Road+Nakasero+Kampala+Uganda&t=&z=16&ie=UTF8&iwloc=&output=embed',
    /** Approximate coordinates for LocalBusiness / geo meta (Nakasero, Kampala) */
    geo: {
      latitude: 0.3247,
      longitude: 32.5825,
    },
  },

  phones: [
    { label: 'Primary', display: '+256 772 813 229', href: 'tel:+256772813229' },
    { label: 'Secondary', display: '+256 786 262 476', href: 'tel:+256786262476' },
  ],

  email: 'info@mcfordadvocates.co.ug',
  emailHref: 'mailto:info@mcfordadvocates.co.ug',

  whatsapp: {
    display: '+256 772 813 229',
    href: 'https://wa.me/256772813229',
  },

  hours: {
    weekdays: 'Monday - Friday: 8:00 AM - 5:00 PM',
    saturday: 'Saturday: 9:00 AM - 1:00 PM',
    sunday: 'Sunday: Closed',
  },

  social: {
    linkedin: 'https://www.linkedin.com/company/mcford-advocates',
  },

  /** Primary SEO keywords (also used in schema knowsAbout) - mineral/gold weighted first */
  keywords: [
    'McFord Advocates',
    'mineral law Uganda',
    'mining lawyer Kampala',
    'gold trading lawyer Uganda',
    'gold export compliance Uganda',
    'precious metal trade Uganda',
    'mining licence Uganda lawyer',
    'mineral rights licensing Uganda',
    'gold dealer compliance Uganda',
    'extractives lawyer Kampala',
    'ASM gold legal counsel Uganda',
    'precious metals export Uganda legal',
    'mining joint venture lawyer Uganda',
    'law firm Kampala',
    'corporate lawyers Uganda',
    'commercial law firm Uganda',
    'mergers and acquisitions Uganda',
    'banking and finance lawyers Uganda',
    'advocates Nakasero',
    'AfriCourts Buganda Road',
    'East Africa mining counsel',
  ] as string[],

  areaServed: ['Uganda', 'East Africa', 'Kampala'] as string[],

  nav: [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'Our Firm' },
    { href: '/services', label: 'Practice Areas' },
    { href: '/insights', label: 'Insights' },
    { href: '/team', label: 'Our Lawyers' },
    { href: '/contact', label: 'Contact' },
  ],
} as const

export const practiceAreas = [
  {
    slug: 'mineral-law',
    title: 'Mineral Law & Precious Metal Trade',
    short:
      'Mining licences, gold and precious metal trade, export compliance, and extractives regulation in Uganda.',
    description:
      'Mineral law and precious metal trade counsel for mining companies, gold traders, exporters, investors, and operators in Uganda. We advise on mining and mineral rights licensing, gold trading compliance, export documentation, responsible-sourcing expectations, exploration and production agreements, and extractives joint ventures, with a focus on gold as a cornerstone of Uganda’s export economy.',
    details: [
      'Mining and mineral rights licensing in Uganda',
      'Gold and precious metal trading compliance',
      'Gold export documentation and regulatory filings',
      'Dealer, trader, and exporter licensing support',
      'Exploration and production agreements',
      'Joint ventures, farm-ins, and offtake arrangements',
      'Chain-of-custody and responsible-sourcing documentation',
      'Environmental, community, land access, and local content',
    ],
  },
  {
    slug: 'corporate-law',
    title: 'Corporate Law',
    short: 'Business formation, governance, and regulatory compliance for companies.',
    description:
      'End-to-end corporate counsel for businesses in Uganda and across East Africa - from company formation and governance to ongoing compliance and restructuring.',
    details: [
      'Business formation and company registration',
      'Corporate governance and board advisory',
      'Regulatory compliance and licensing',
      'Company secretarial services',
      'Shareholder agreements and restructuring',
      'Corporate filings and annual compliance',
    ],
  },
  {
    slug: 'mergers-acquisitions',
    title: 'Mergers & Acquisitions',
    short: 'Structuring, due diligence, and execution of acquisitions and disposals.',
    description:
      'Practical, commercially minded advice on mergers, acquisitions, disposals, and reorganisations for local and cross-border investors.',
    details: [
      'M&A structuring and strategy',
      'Legal due diligence',
      'Share and asset purchase agreements',
      'Buyer and seller representation',
      'Post-deal integration support',
      'Management buyouts',
    ],
  },
  {
    slug: 'banking-finance',
    title: 'Banking & Finance',
    short: 'Lending transactions, securities documentation, and project finance.',
    description:
      'We support banks, lenders, borrowers, and funds on financing structures, security packages, and financial services regulation in Uganda.',
    details: [
      'Lending transactions',
      'Securities documentation and perfection',
      'Project and trade finance',
      'Facility agreements',
      'Financial regulatory compliance',
      'Debt restructuring',
    ],
  },
  {
    slug: 'intellectual-property',
    title: 'Intellectual Property',
    short: 'Trademark registration, patent protection, and copyright enforcement.',
    description:
      'Protect and commercialise your brand and innovations through registration, licensing, and enforcement of intellectual property rights in Uganda.',
    details: [
      'Trademark registration and renewals',
      'Patent protection advisory',
      'Copyright registration and enforcement',
      'IP licensing and assignments',
      'Infringement and brand enforcement',
      'Brand portfolio management',
    ],
  },
  {
    slug: 'commercial-law',
    title: 'Commercial Law',
    short: 'Contract drafting, dispute resolution, and international trade support.',
    description:
      'Day-to-day commercial counsel for businesses - contracts, trade arrangements, and strategic resolution of commercial disputes.',
    details: [
      'Contract drafting and review',
      'Commercial dispute resolution',
      'International trade and distribution',
      'Joint ventures and partnerships',
      'Supply and services agreements',
      'Negotiations and commercial risk management',
    ],
  },
  {
    slug: 'employment-law',
    title: 'Employment Law',
    short: 'Employment contracts, workplace policies, and labour compliance.',
    description:
      'Employment counsel for employers and executives - contracts, workplace policies, terminations, and labour compliance under Ugandan law.',
    details: [
      'Employment contracts and handbooks',
      'Workplace policies and procedures',
      'Labour law compliance',
      'Disciplinary and termination processes',
      'Labour dispute resolution',
      'HR legal advisory',
    ],
  },
] as const

/** Anonymised, representative matters (ENS-style experience highlights) */
export const selectedExperience = [
  {
    headline: 'Gold export compliance',
    sector: 'Mineral Law',
    text: 'Advised a precious metal trader on licensing, export documentation, and regulatory compliance for gold trade out of Uganda.',
  },
  {
    headline: 'Mining licence support',
    sector: 'Mineral Law',
    text: 'Supported an operator on mineral rights licensing, joint venture terms, and ongoing extractives compliance.',
  },
  {
    headline: 'Corporate restructure',
    sector: 'Corporate Law',
    text: 'Advised a Kampala trading group on group reorganisation, shareholder arrangements, and ongoing governance.',
  },
  {
    headline: 'Cross-border acquisition',
    sector: 'Mergers & Acquisitions',
    text: 'Supported a regional investor on due diligence and share purchase documentation for a Ugandan target.',
  },
  {
    headline: 'Facility documentation',
    sector: 'Banking & Finance',
    text: 'Supported lenders and borrowers on security documentation and perfection for mid-market facilities in Uganda.',
  },
  {
    headline: 'Brand protection',
    sector: 'Intellectual Property',
    text: 'Advised on trademark filing strategy and enforcement for a consumer brand expanding in East Africa.',
  },
] as const

export const firmValues = [
  {
    title: 'Client focus',
    description:
      'Your commercial objectives come first. We shape advice that is practical, timely, and easy to act on.',
  },
  {
    title: 'Integrity',
    description:
      'Ethical practice, strict confidentiality, and honest counsel, including when the answer is difficult.',
  },
  {
    title: 'Excellence',
    description:
      'Meticulous work product, rigorous research, and professional standards you can rely on in every matter.',
  },
  {
    title: 'Collaboration',
    description:
      'Partners and associates work as one team so you benefit from the full depth of the firm on complex issues.',
  },
  {
    title: 'Commercial judgment',
    description:
      'We speak business as fluently as law. Risk, cost, timeline, and deal certainty stay front of mind.',
  },
  {
    title: 'Responsiveness',
    description:
      'Clear communication and fast turnaround. You always know where your matter stands and what happens next.',
  },
] as const

export const teamMembers = [
  {
    name: 'Ampaire Tumwebaze',
    title: 'Managing Partner',
    specialization: 'Corporate, Commercial & Strategy',
    experience: 'Senior counsel',
    image: '/team/ampaire-tumwebaze.jpg',
    description:
      'Leads the firm with a focus on corporate advisory, commercial transactions, and building lasting client relationships across Uganda and the region.',
  },
  {
    name: 'Mwesigye Christopher',
    title: 'Advocate',
    specialization: 'Litigation & Commercial Law',
    experience: 'Advocate',
    image: '/team/mwesigye-christopher.jpg',
    description:
      'Handles commercial disputes and day-to-day client advisory with a practical, results-oriented approach.',
  },
  {
    name: 'Teddy Namukwaya',
    title: 'Legal Associate',
    specialization: 'Corporate & General Practice',
    experience: 'Associate',
    image: '/team/teddy-namukwaya.jpg',
    description:
      'Supports corporate and commercial matters with careful research, documentation, and client coordination.',
  },
  {
    name: 'Advocate',
    title: 'Managing Partner',
    specialization: 'Real Estate & Commercial',
    experience: 'Managing Partner',
    image: '/team/advocate-01.jpg',
    description:
      'Managing Partner focusing on real estate and commercial law - property transactions, conveyancing, leases, and commercial contracts.',
  },
] as const
