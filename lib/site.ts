/** Shared firm details - sourced from ULS approved list & public directories */
export const siteConfig = {
  name: 'McFord Advocates',
  shortName: 'McFord',
  tagline: 'Clear counsel. Confident decisions.',
  description:
    'McFord Advocates is a corporate and commercial law firm in Kampala, Uganda. We advise companies, investors, and institutions on transactions, regulation, disputes, and the protection of commercial value.',
  url: 'https://mcfordadvocates.com',
  established: 2015,

  address: {
    building: 'AfriCourts, 4th Floor',
    street: 'Plot 107, Buganda Road',
    area: 'Nakasero',
    city: 'Kampala',
    country: 'Uganda',
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
  },

  phones: [
    { label: 'Primary', display: '+256 772 813 229', href: 'tel:+256772813229' },
    { label: 'Secondary', display: '+256 786 262 476', href: 'tel:+256786262476' },
  ],

  email: 'info@mcfordadvocates.com',
  emailHref: 'mailto:info@mcfordadvocates.com',

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

  nav: [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'Our Firm' },
    { href: '/services', label: 'Practice Areas' },
    { href: '/team', label: 'Our Lawyers' },
    { href: '/contact', label: 'Contact' },
  ],
} as const

export const practiceAreas = [
  {
    slug: 'corporate-commercial',
    title: 'Corporate & Commercial',
    short: 'Formation, governance, contracts, and regulatory compliance for growing businesses.',
    description:
      'End-to-end corporate counsel for companies in Uganda and across East Africa, from incorporation and governance to day-to-day commercial contracting.',
    details: [
      'Company registration and formation',
      'Corporate governance & board advisory',
      'Commercial contracts and joint ventures',
      'Regulatory compliance and licensing',
      'Company secretarial services',
      'Shareholder agreements & restructuring',
    ],
  },
  {
    slug: 'mergers-acquisitions',
    title: 'Mergers & Acquisitions',
    short: 'Structuring, due diligence, and execution of acquisitions and disposals.',
    description:
      'Practical, commercially minded advice on acquisitions, disposals, and reorganisations for local and cross-border investors.',
    details: [
      'Transaction structuring and strategy',
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
    short: 'Lending, security packages, and financial regulatory advice for banks and borrowers.',
    description:
      'We support banks, lenders, borrowers, and funds on financing structures, security perfection, and financial services regulation in Uganda.',
    details: [
      'Secured and unsecured lending',
      'Security documentation & perfection',
      'Project and trade finance',
      'Financial regulatory compliance',
      'Debt restructuring',
      'Facility agreements',
    ],
  },
  {
    slug: 'dispute-resolution',
    title: 'Dispute Resolution',
    short: 'Litigation, arbitration, and commercial dispute strategy.',
    description:
      'Clear-eyed advocacy and strategic resolution of commercial, corporate, and civil disputes before courts and arbitral tribunals.',
    details: [
      'Commercial and civil litigation',
      'Arbitration and mediation',
      'Debt recovery',
      'Injunctions and interim relief',
      'Contractual and shareholder disputes',
      'Enforcement of judgments & awards',
    ],
  },
  {
    slug: 'intellectual-property',
    title: 'Intellectual Property',
    short: 'Trademarks, copyrights, patents, and brand enforcement.',
    description:
      'Protect and commercialise your brand and innovations through registration, licensing, and enforcement of IP rights in Uganda.',
    details: [
      'Trademark registration and renewals',
      'Copyright and patent advisory',
      'IP licensing and assignments',
      'Infringement and enforcement',
      'Brand portfolio management',
      'Technology and software licensing',
    ],
  },
  {
    slug: 'employment',
    title: 'Employment & Labour',
    short: 'Workplace contracts, policies, and labour disputes.',
    description:
      'Employment counsel for employers and executives - contracts, policies, terminations, and dispute resolution under Ugandan labour law.',
    details: [
      'Employment contracts and handbooks',
      'Workplace policies and compliance',
      'Disciplinary and termination processes',
      'Labour dispute resolution',
      'Work permits coordination',
      'HR legal advisory',
    ],
  },
  {
    slug: 'real-estate',
    title: 'Real Estate & Property',
    short: 'Conveyancing, leases, and property development advice.',
    description:
      'Property transactions, leasing, and development support for investors, developers, landlords, and corporate occupiers.',
    details: [
      'Land acquisition and conveyancing',
      'Lease drafting and review',
      'Title due diligence',
      'Development and joint venture structures',
      'Mortgages and charges',
      'Property dispute resolution',
    ],
  },
  {
    slug: 'energy-infrastructure',
    title: 'Energy & Infrastructure',
    short: 'Oil & gas, power, and project support for infrastructure deals.',
    description:
      'Legal support for energy and infrastructure projects, including contracting, regulatory interfaces, and project documentation.',
    details: [
      'Project documentation review',
      'Regulatory and licensing support',
      'Joint venture and offtake arrangements',
      'Construction and EPC contracts',
      'Local content compliance',
      'Stakeholder and land access issues',
    ],
  },
] as const

/** Anonymised, representative matters (ENS-style experience highlights) */
export const selectedExperience = [
  {
    headline: 'Corporate restructure',
    sector: 'Corporate',
    text: 'Advised a Kampala trading group on group reorganisation, shareholder arrangements, and ongoing governance.',
  },
  {
    headline: 'Commercial property',
    sector: 'Real Estate',
    text: 'Acted on acquisition and conveyancing of commercial premises in Nakasero for a regional investor.',
  },
  {
    headline: 'Facility documentation',
    sector: 'Banking & Finance',
    text: 'Supported lenders and borrowers on security documentation and perfection for mid-market facilities in Uganda.',
  },
  {
    headline: 'Shareholder dispute',
    sector: 'Dispute Resolution',
    text: 'Represented a client in a commercial and shareholder dispute through negotiation and court process.',
  },
  {
    headline: 'Brand protection',
    sector: 'Intellectual Property',
    text: 'Advised on trademark filing strategy and enforcement for a consumer brand expanding in East Africa.',
  },
  {
    headline: 'Employment exit',
    sector: 'Employment',
    text: 'Guided an employer through a senior exit, documentation, and risk management under Ugandan labour law.',
  },
] as const

/** Homepage insights teaser (static until a full blog is added) */
export const insights = [
  {
    date: '2026',
    category: 'Corporate',
    title: 'Getting company registration and annual compliance right in Uganda',
    excerpt:
      'Practical points for directors and founders on formation, filings, and staying compliant as the business grows.',
  },
  {
    date: '2026',
    category: 'Real Estate',
    title: 'Title due diligence: what buyers should insist on before closing',
    excerpt:
      'Key checks on title, encumbrances, and land office processes that protect commercial property transactions.',
  },
  {
    date: '2026',
    category: 'Employment',
    title: 'Employment contracts that reduce dispute risk',
    excerpt:
      'How clear contracts, policies, and process can prevent costly labour disputes for growing employers.',
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
