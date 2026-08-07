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

/**
 * Team profiles. Bios expand public LinkedIn role cues (where available)
 * with firm-aligned practice narrative. Update names/photos in /public/team.
 */
export const teamMembers = [
  {
    name: 'Anan Mutabazi',
    title: 'Founding Partner',
    specialization: 'Corporate Finance, M&A & Project Finance',
    experience: '14+ years · Uganda, Kenya, Rwanda & Tanzania',
    image: '/team/anan.jpeg',
    description:
      'Founding Partner with more than 14 years of experience advising governments, multinational corporations, financial institutions, and investors on complex corporate finance, project finance, M&A, and cross-border commercial transactions across East Africa.',
    bio: [
      'Anan Mutabazi is the Founding Partner of McFord Advocates. He has more than 14 years of experience advising governments, multinational corporations, financial institutions, investors, and private companies on complex transactions across East Africa.',
      'His practice focuses on corporate finance, banking and finance, project finance, mergers and acquisitions, infrastructure, energy, private equity, and cross-border commercial transactions. He combines extensive legal knowledge with strong financial and commercial insight to deliver practical, business-focused solutions.',
      'Qualified to practise in Uganda, Kenya, Rwanda, and Tanzania, Anan provides coordinated cross-border legal counsel on transactions involving multiple East African jurisdictions.',
    ],
    focus: [
      'Mergers & acquisitions',
      'Corporate finance & banking',
      'Project finance & infrastructure',
      'Energy & power',
      'Private equity',
      'Cross-border commercial transactions',
    ],
    representativeExperience: [
      {
        category: 'Mergers & Acquisitions',
        matters: [
          'Advised Old Mutual on its acquisition of UAP Insurance.',
          'Advised Atlas Mara Co-Invest on the acquisition of Banque Populaire du Rwanda (BPR).',
          'Advised Broad Band Service Corporation on the acquisition of R-Switch.',
        ],
      },
      {
        category: 'Telecommunications & Market Entry',
        matters: [
          'Advised Africa Olley Services on the establishment of Korea Telecom operations in Rwanda and Zambia.',
        ],
      },
      {
        category: 'Infrastructure & Project Finance',
        matters: [
          'Advised on the pre-financing and off-take arrangements for the Standard Gauge Railway, one of East Africa’s flagship infrastructure projects.',
        ],
      },
      {
        category: 'Energy & Power',
        matters: [
          'Acted as legal counsel to Symbion Power Africa.',
          'Acted as legal counsel to the Global Village Energy Partnership (GVEP).',
        ],
      },
    ],
    jurisdictions: ['Uganda', 'Kenya', 'Rwanda', 'Tanzania'],
    education:
      'LL.M., University of London; Master’s Degree in Corporate Finance, State University of New York; Postgraduate Diploma in Legal Practice, Kenya School of Law; law degrees from Uganda and Kenya',
    profilePdf: '/team/anan-mutabazi-profile.pdf',
  },
  {
    name: 'Ampaire Tumwebaze',
    title: 'Founding Partner',
    specialization: 'Corporate, Commercial & Strategy',
    experience: 'Founding Partner since 2016',
    image: '/team/ampaire.jpeg',
    description:
      'Leads McFord Advocates with a focus on corporate advisory, commercial transactions, and lasting client relationships across Uganda and the region.',
    bio: [
      'Ampaire Tumwebaze is Managing Partner of McFord Advocates. He has led the firm since 2016, building a partner-led practice that combines commercial judgment with rigorous legal work for companies, investors, and institutions.',
      'His work centres on corporate and commercial strategy: company structures, transactions, governance, and the practical decisions clients face when growing, financing, or reorganising a business in Uganda.',
      'Clients value his accessibility, clear advice, and insistence that every matter has a senior owner from first instruction through to closing or resolution. He is based at the firm’s chambers at AfriCourts, Buganda Road, Kampala.',
    ],
    focus: [
      'Corporate advisory & governance',
      'Commercial transactions',
      'Client strategy & firm leadership',
      'Cross-border commercial matters',
    ],
    education:
      'LL.B., Makerere University; Diploma in Legal Practice, Law Development Centre; LL.M., University of Abidjan; Advocate of the High Court of Uganda',
    linkedin: 'https://ug.linkedin.com/in/ampaire-tumwebaze-61b300141',
  },
  {
    name: 'Mahad Kakooza',
    title: 'Interim Managing Partner',
    specialization: 'Land & Conveyancing',
    experience: 'Interim Managing Partner · Head, Land & Conveyancing Practice',
    image: '/team/mahad.jpeg',
    description:
      'Interim Managing Partner and head of the firm’s Land and Conveyancing Practice, advising on property transactions and conveyancing matters.',
    bio: [
      'Mahad Kakooza is the Interim Managing Partner of the firm and heads its Land and Conveyancing Practice. He specialises in advising individuals, businesses, financial institutions, and property developers on all aspects of land transactions, including acquisitions and disposals, due diligence, title verification, leasing, property financing, and the preparation and registration of conveyancing instruments.',
      'With a meticulous approach to legal practice and a strong understanding of Uganda’s land law regime, Mahad is committed to delivering practical, commercially sound, and legally secure solutions that protect clients’ interests and facilitate seamless property transactions.',
      'Beyond his core practice, Mahad has a broad understanding of Islamic finance and Sharia family law, enabling him to advise clients on matters requiring both legal expertise and sensitivity to Islamic legal principles. He is recognised for his professionalism, strategic thinking, and unwavering commitment to delivering exceptional client service.',
    ],
    focus: [
      'Land transactions & conveyancing',
      'Property due diligence & title verification',
      'Leasing & property financing',
      'Islamic finance & Sharia family law',
    ],
    education: 'Legal professional',
  },
  {
    name: 'Christopher Mwesigye',
    title: 'Associate Partner',
    specialization: 'Litigation & Dispute Resolution',
    experience: 'Head of Litigation & Administration',
    image: '/chris.jpg',
    description:
      'Associate Partner and head of Litigation and Dispute Resolution, with a practice focused on civil, commercial, and land litigation, plus regulatory compliance.',
    bio: [
      'Christopher Mwesigye is an Associate Partner at McFord Advocates. He is the head of the firm’s Litigation and Dispute Resolution Department as well as Administration. His practice focuses mainly on civil, commercial, and land litigation. Beyond litigation, Christopher advises on statutory and regulatory compliance with key government institutions including URA and URSB.',
      'Christopher brings significant litigation experience before the Courts of Judicature and various tribunals, and is committed to early resolution through mediation and ADR wherever that serves the client’s objectives.',
      'He holds an LL.B (Hons) from Uganda Christian University and a Postgraduate Diploma in Legal Practice from the Law Development Centre. He also holds a Certificate in the Leaders’ Mentorship Program from the Africa Leadership Institute. He is an Advocate of the High Court of Uganda and a member of the Uganda Law Society and the East Africa Law Society.',
    ],
    focus: [
      'Corporate and commercial law',
      'Land and civil law',
      'Litigation and dispute resolution',
      'URA & URSB compliance advisory',
      'Mediation & ADR',
    ],
    education:
      'LL.B (Hons), Uganda Christian University; Postgraduate Diploma in Legal Practice, Law Development Centre',
    linkedin: 'https://ug.linkedin.com/in/mwesigye-christopher-aaab20187',
  },
  {
    name: 'Teddy Namukwaya',
    title: 'Legal Associate',
    specialization: 'Corporate & General Practice',
    experience: 'Legal Associate',
    image: '/team/teddy-namukwaya.jpg',
    description:
      'Legal Associate supporting corporate and commercial matters with careful research, documentation, and client coordination.',
    bio: [
      'Teddy Namukwaya is a Legal Associate at McFord Advocates. She supports corporate and general practice work with meticulous research, drafting, and coordination across client matters.',
      'Her day-to-day role includes company and commercial documentation, due diligence support, compliance filings, and preparing materials that help senior counsel move transactions and advisory work forward with precision.',
      'She trained at the Law Development Centre and is committed to clear communication and disciplined file management so clients receive timely, well-organised support from the team.',
    ],
    focus: [
      'Corporate documentation',
      'Commercial research & drafting',
      'Due diligence support',
      'Client coordination',
    ],
    education: 'Law Development Centre',
    linkedin: 'https://ug.linkedin.com/in/teddy-namukwaya-4710b525b',
  },
  {
    name: 'Mwesigwa Joshua Warren',
    title: 'Junior Associate',
    specialization: 'Corporate, Commercial & Regulatory',
    experience: 'Legal Associate',
    image: '/team/warren.jpeg',
    description:
      'Legal Associate spanning drafting, compliance review, contract analysis, and advisory work across corporate, commercial, and regulatory matters.',
    bio: [
      'Mwesigwa Joshua Warren is a Legal Associate at McFord Advocates, where his practice spans legal drafting, compliance review, contract analysis, and advisory work for a diverse client base across corporate, commercial, and regulatory matters. He conducts in-depth legal research and due diligence for mergers, acquisitions, joint ventures, and other commercial transactions, and regularly advises clients on their legal rights, obligations, and risk exposure, translating complex statutory and case law analysis into practical, actionable guidance.',
      'He drafts and reviews a wide range of legal instruments, including commercial contracts, pleadings, motions, board resolutions, and formal legal opinions, and has particular experience navigating land and property law, regulatory licensing, and multi-jurisdictional transactions. Warren is known for his meticulous attention to detail, his ability to work effectively under pressure, and his commitment to delivering accurate, well-reasoned legal solutions within tight deadlines.',
      'Before joining McFord Advocates, he worked as a Legal Research Assistant at Karungi and Partners Advocates and Solicitors in Kampala. He holds a Bachelor of Laws (LL.B Hons) from Uganda Christian University, Mukono.',
    ],
    focus: [
      'Legal research & analysis',
      'Contract drafting & review',
      'Due diligence',
      'Regulatory compliance',
      'Litigation support',
      'Negotiation & dispute resolution',
    ],
    education: 'LL.B (Hons), Uganda Christian University, Mukono',
  },
  {
    name: 'Legal Associate',
    title: 'Legal Associate',
    specialization: 'Corporate Support',
    experience: 'Associate',
    image: '/team/advocate-02.jpg',
    description:
      'Supports the firm’s corporate and commercial practice with research, drafting, and matter coordination.',
    bio: [
      'A Legal Associate at McFord Advocates supporting the corporate and commercial practice with research, drafting, and matter coordination under partner supervision.',
      'Work includes assisting on company documentation, commercial agreements, and the preparation of materials for client meetings, filings, and transactions.',
      'Please contact the firm for a matter-specific introduction to the right lawyer on your file. Full profile details can be updated by the firm as biographies are finalised.',
    ],
    focus: [
      'Corporate support',
      'Commercial drafting assistance',
      'Research & documentation',
    ],
    education: 'Legal professional',
  },
  {
    name: 'Rwangoga Enoth',
    title: 'Corporate Support',
    specialization: 'Corporate Support',
    experience: 'Junior Associate',
    image: '/team/enoth.jpeg',
    description:
      'Rwangoga Enoth is a commercially focused legal practitioner supporting the firm’s corporate and transactional matters.',
    bio: [
      'Rwangoga Enoth is a commercially focused legal practitioner and Junior Associate at McFord Advocates, where he advises on a range of complex legal and transactional matters with particular emphasis on delivering strategic, business-oriented solutions.',
      'Enoth holds a Postgraduate Diploma in Legal Practice from the Law Development Centre and a Bachelor of Laws (LL.B) from Nkumba University. His academic and professional training equips him with a strong grounding in legal analysis, regulatory interpretation, and dispute management within both domestic and evolving cross-border contexts.',
      'His practice spans corporate and commercial law, real estate and conveyancing, infrastructure and telecommunications, and alternative dispute resolution. He regularly supports clients in structuring transactions, conducting legal due diligence, and navigating regulatory frameworks, with a clear focus on risk allocation, compliance, and value preservation. He approaches legal challenges with a strong appreciation of commercial realities, ensuring that legal strategies are aligned with clients’ broader business objectives.',
      'He has a developing interest in infrastructure development and telecommunications law, particularly in the context of emerging markets, where legal frameworks intersect with investment, technology, and public-private partnerships. His work reflects a commitment to facilitating sustainable development and enabling efficient capital deployment.',
    ],
    focus: [
      'Corporate & commercial transactions',
      'Due diligence & compliance',
      'Real estate & conveyancing',
    ],
    education: 'LL.B, Nkumba University; Postgraduate Diploma in Legal Practice, Law Development Centre',
  },
] as const
