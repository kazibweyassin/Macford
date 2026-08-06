/**
 * Legal insights hub content - Dillon Eustace-style knowledge base.
 * Educational only; not formal legal advice for a specific matter.
 */

export type InsightType = 'Insight' | 'Legal Update' | 'Guide'

export type Insight = {
  slug: string
  title: string
  excerpt: string
  /** Display type (filter chip) */
  type: InsightType
  /** Practice area slug from lib/site practiceAreas */
  practiceSlug: string
  /** ISO date YYYY-MM-DD */
  date: string
  /** Human-readable date */
  dateLabel: string
  readTime: string
  /** Optional hero image */
  image?: string
  /** Article body: sections with optional heading + paragraphs */
  sections: {
    heading?: string
    paragraphs: string[]
  }[]
  /** Key takeaways shown in a sidebar panel */
  takeaways?: string[]
}

export const insightTypes: InsightType[] = ['Insight', 'Legal Update', 'Guide']

export const insights: Insight[] = [
  {
    slug: 'gold-trading-compliance-uganda',
    title: 'Gold trading compliance: what operators should get right early',
    excerpt:
      'Licensing, documentation, and export controls that protect precious metal traders operating in Uganda - a fuller checklist before the first shipment.',
    type: 'Guide',
    practiceSlug: 'mineral-law',
    date: '2026-06-15',
    dateLabel: '15 June 2026',
    readTime: '12 min read',
    image:
      'https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=1400&q=80',
    takeaways: [
      'Map every actor in the chain to the correct licence category',
      'Treat origin and chain-of-custody documents as deal conditions',
      'Build export clearance and delay risk into commercial contracts',
      'Expect banks and foreign buyers to impose extra KYC layers',
      'Review compliance continuously, not only at first shipment',
    ],
    sections: [
      {
        paragraphs: [
          'Gold remains a major export for Uganda. That commercial opportunity sits inside a tightly regulated framework. Operators, traders, refiners, and exporters who treat gold trade as a purely commercial arrangement often discover, too late, that the real bottleneck is licensing, documentation, or export clearance.',
          'This guide is written for decision-makers who want a practical map of issues counsel typically stress-test before money moves or metal leaves the country. It is not a substitute for advice on a specific transaction. The aim is to help you ask the right questions early - when answers are still cheap.',
          'In practice, problems cluster around four themes: who is authorised to do what; whether the paper trail matches the metal; how export and banking counterparties will react; and whether contracts allocate risk when something fails. Each theme is addressed below.',
        ],
      },
      {
        heading: 'Map the role before you map the deal',
        paragraphs: [
          'Not every participant needs the same authorisations. A holder of mineral rights, a licensed trader, a logistics agent, and an exporter may sit in different regulatory categories even when they work on the same parcel. Starting with a role map - who owns, who buys, who stores, who exports - prevents the common error of drafting a supply agreement that assumes a licence the counterparty does not hold.',
          'Ask, in writing, which licences each party relies on, when they expire, whether they are transferable, and whether any conditions or suspensions apply. A warranty that a party is “duly licensed” is weaker than a schedule that lists licence numbers, issuing authorities, and renewal dates, with an obligation to notify material changes.',
          'Where a special purpose vehicle sits in the middle of the chain, look at both the company’s corporate standing and the licences it holds. Share transfers, charges over shares, and changes of control can trigger consent requirements that delay closing if ignored until the last week.',
        ],
      },
      {
        heading: 'Start with the right licences',
        paragraphs: [
          'Trading and exporting precious metals is not open-ended commercial activity. Depending on the role - miner, trader, refiner, or exporter - different authorisations may apply. Confirming the correct category early avoids expensive mid-transaction corrections.',
          'Operators should map who holds which rights (mineral rights, trading licences, export permits) and ensure contracts match that reality. A well-drafted supply agreement cannot cure a missing licence. If a party is still “in process” for an authorisation, treat that as a condition precedent with a long-stop date, not as background colour.',
          'Cross-border structures add another layer. If metal is sold f.o.b. Uganda but paid for offshore, or if title passes in a bonded warehouse, ask counsel where the regulated act is treated as occurring. Ambiguity about place of trade can create surprises for both licensing and tax analysis.',
        ],
      },
      {
        heading: 'Documentation, origin, and chain of custody',
        paragraphs: [
          'Buyers, banks, and regulators increasingly expect a clear paper trail: source of origin, chain of custody, and consistency between commercial invoices and regulatory filings. Incomplete or inconsistent documents are a common reason shipments are delayed or payments are held.',
          'Build a document checklist into operating procedures and into contracts with upstream suppliers. Responsibility for paperwork should be explicit: who prepares export forms, who obtains assay certificates, who maintains warehouse receipts, and who carries the cost of rework if documents are rejected.',
          'Inconsistent weights, grades, or counterpart names across invoices, packing lists, and declarations are frequent red flags. Align internal systems so that commercial and compliance teams use the same data. Where artisanal or multi-source supply is involved, expect deeper questions about origin; plan how you will answer them before the buyer’s compliance desk asks.',
        ],
      },
      {
        heading: 'Export controls and banking counterparties',
        paragraphs: [
          'Export of gold and other precious metals engages customs, mineral-sector regulators, and often foreign buyer due diligence. International refiners and banks may impose their own KYC and responsible-sourcing standards on top of local law. Meeting Ugandan formalities is necessary but not always sufficient for payment to clear.',
          'Commercial terms should allocate who obtains which clearances, who bears delay risk, and what happens if a regulator or bank rejects a shipment. Force majeure clauses that ignore regulatory refusal, or payment terms that assume instant clearance, create avoidable disputes.',
          'Letters of credit and trade finance instruments add documentary conditions of their own. Coordinate the letter of credit wording with the export document pack so that the bank’s checklist and the regulator’s checklist do not conflict. Involve trade finance counsel early when facilities are large or multi-jurisdictional.',
        ],
      },
      {
        heading: 'Contract architecture that survives stress',
        paragraphs: [
          'A gold trade agreement should do more than set price and quantity. Useful clauses address assay and quality disputes, title and risk transfer points, storage and insurance, confidentiality of commercial terms, audit rights for origin documentation, and termination if a licence is suspended.',
          'Dispute resolution clauses deserve care. Parties often need urgent interim relief (injunctions, delivery orders) as well as a final forum for damages. Agreeing only to a slow foreign arbitration without interim court access can leave a party exposed when metal is about to move.',
          'If the relationship is long-term, consider a framework agreement with call-off orders rather than one-off contracts that reinvent the compliance schedule every time. Consistency reduces operational error.',
        ],
      },
      {
        heading: 'Ongoing compliance, not a one-off checklist',
        paragraphs: [
          'Licences expire, key staff leave, and counterparties change. Compliance is an operating system, not a closing binder. Boards and owners should assign ownership of regulatory calendars, document retention, and training for warehouse and export teams.',
          'When something goes wrong - a delayed shipment, a suspended licence, a buyer’s adverse media finding - document the facts and take advice quickly. Partial “fixes” without legal review can compound risk, especially where false or incomplete declarations are involved.',
        ],
      },
      {
        heading: 'How McFord can help',
        paragraphs: [
          'Our mineral law and precious metal trade practice advises operators, traders, and investors on licensing, export compliance, joint ventures, and regulatory interfaces in Uganda. We work with commercial teams to align contracts, document packs, and engagement sequencing so that trade can move with fewer surprises.',
          'If you are structuring a new trade flow, onboarding a foreign buyer, or reviewing an existing arrangement after a delay or compliance query, early legal review is usually cheaper than remediation after a problem surfaces. Contact the firm for a confidential discussion of your structure.',
        ],
      },
    ],
  },
  {
    slug: 'mining-licences-uganda-practical-overview',
    title: 'Mining licences in Uganda: a practical overview for investors',
    excerpt:
      'Licence categories, diligence themes, farm-in structures, and land and community issues investors should understand before committing capital.',
    type: 'Insight',
    practiceSlug: 'mineral-law',
    date: '2026-05-20',
    dateLabel: '20 May 2026',
    readTime: '13 min read',
    image:
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1400&q=80',
    takeaways: [
      'Verify title and licence status; never assume from a brochure',
      'Separate corporate SPV risk from mineral title risk',
      'Farm-ins need clear work programmes, operatorship, and exit paths',
      'Land access and community issues drive timeline as much as geology',
      'Build regulatory consents into conditions precedent and long-stops',
    ],
    sections: [
      {
        paragraphs: [
          'Investors entering Uganda’s extractive sector need more than a geological report. Mineral rights sit in a regulated framework: licences can be limited in area, purpose, and duration; transfers and farm-ins often need approval; and environmental and community obligations can affect both cost and schedule.',
          'This overview is written for sponsors, private equity teams, and strategic buyers who want a counsel-level checklist of issues that typically appear in diligence and deal documentation. It is educational and general; project-specific advice depends on the licence, the parties, and the stage of development.',
          'A useful way to organise analysis is in layers: the mineral right itself; the corporate vehicle that holds it; the commercial contracts around it; and the surface, community, and environmental interfaces that determine whether the project can operate in practice.',
        ],
      },
      {
        heading: 'Know what right you are buying or farming into',
        paragraphs: [
          'Exploration, mining, and related rights are not interchangeable. Diligence should confirm the category of licence, remaining term, work commitments, area boundaries, and any conditions or pending applications that could affect value.',
          'Request certified copies of the instrument, correspondence on renewals or extensions, and evidence of compliance with reporting and fee obligations. Gaps in the paper trail are not mere housekeeping; they can become leverage for a regulator or a rival claimant later.',
          'Overlay maps of licence boundaries against the area the operator actually uses. Encroachment, overlapping applications, or informal arrangements with neighbours should be identified before valuation models assume clean exclusive rights.',
        ],
      },
      {
        heading: 'Corporate vehicles and capital structure',
        paragraphs: [
          'Where rights sit in a special purpose vehicle, corporate diligence (shareholding, charges, litigation, intercompany debt) sits alongside mineral-title diligence. Both layers matter. A clean licence held by a company with undisclosed encumbrances or minority disputes is still a problem asset.',
          'Review constitutional documents for pre-emption rights, reserved matters, and transfer restrictions that could block a share deal. Confirm that historic share issuances and transfers were properly authorised and recorded.',
          'If sellers propose an asset deal rather than a share deal, model the consent, assignment, and tax consequences of moving the mineral right. Asset deals are not always simpler; they can multiply regulatory touchpoints.',
        ],
      },
      {
        heading: 'Joint ventures and farm-in structures',
        paragraphs: [
          'Farm-ins and joint ventures are common ways to share capital and risk. Documentation should address who funds work programmes, how operatorship is decided, dilution mechanics, default remedies, and exit or offtake rights.',
          'Regulatory consent requirements for assignment or change of control should be built into long-stop dates and conditions precedent - not left as an afterthought. A farm-in that “closes” commercially but cannot be recognised for regulatory purposes leaves both parties exposed.',
          'Work programmes should be specific enough to measure performance, with cure periods and step-in rights that match the technical reality of the project. Vague obligations to “develop the project diligently” invite deadlock when budgets tighten.',
          'Offtake, marketing, and streaming arrangements, if contemplated, should be coordinated with the JV so that exclusivity and pricing terms do not conflict with operator duties or local content expectations.',
        ],
      },
      {
        heading: 'Land, community, and local content',
        paragraphs: [
          'Surface access, community engagement, and local content expectations can determine whether a project advances on time. These are legal and commercial issues: agreements, compensation frameworks, and compliance programmes should be planned alongside the mining title itself.',
          'Diligence should identify existing surface rights, informal occupation, and any historic grievance processes. Buying a mineral right without a realistic plan for land access is buying delay.',
          'Environmental and social obligations - whether statutory or imposed as licence conditions - should be costed into the investment case. Remediation, monitoring, and reporting are not optional extras; they are part of the asset’s operating cost.',
        ],
      },
      {
        heading: 'Financing and security over extractive assets',
        paragraphs: [
          'Lenders to mining projects care about the same title questions as equity investors, plus perfection of security and step-in rights if the borrower defaults. Early coordination between project counsel and finance counsel reduces the risk that a term sheet promises a security package the licence regime cannot support.',
          'Intercreditor and offtake financing structures add complexity. Ensure that the mineral title, the SPV shares, and key project contracts can be charged or assigned in the way the term sheet assumes.',
        ],
      },
      {
        heading: 'How McFord can help',
        paragraphs: [
          'McFord Advocates advises investors, operators, and joint-venture parties on mineral rights, licensing, farm-ins, and related commercial documentation in Uganda. We support diligence processes, regulatory engagement planning, and deal structures that align legal risk with commercial timelines.',
          'If you are evaluating a licence, negotiating a farm-in, or preparing a financing that depends on extractive title, contact the firm for a confidential discussion.',
        ],
      },
    ],
  },
  {
    slug: 'company-registration-compliance-uganda',
    title: 'Getting company registration and annual compliance right in Uganda',
    excerpt:
      'Formation choices, statutory filings, shareholder arrangements, and banking alignment for companies that intend to grow and raise capital.',
    type: 'Guide',
    practiceSlug: 'corporate-law',
    date: '2026-04-10',
    dateLabel: '10 April 2026',
    readTime: '11 min read',
    image:
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=80',
    takeaways: [
      'Choose a structure that fits ownership and funding plans',
      'Keep statutory books and filings current year-round',
      'Document shareholder arrangements before conflict arises',
      'Align banking, contracts, and tax registrations with the legal entity',
      'Treat governance as an operating discipline, not a closing task',
    ],
    sections: [
      {
        paragraphs: [
          'Incorporating a company in Uganda is often the easy part. Staying compliant - and keeping governance aligned with how the business actually runs - is where founders and boards most often need structured support.',
          'This guide covers issues we see frequently when advising growing companies and their investors: formation choices that age poorly, filings that drift out of date, and informal ownership arrangements that become expensive disputes.',
          'Whether you are a first-time founder, a foreign investor setting up a local subsidiary, or a board professional inheriting messy records, the same principle applies: the statutory picture and the commercial picture should match.',
        ],
      },
      {
        heading: 'Formation with the end in mind',
        paragraphs: [
          'Name reservation, constitutional documents, and first directors set the legal skeleton of the business. Think ahead: will you take investment? Have foreign shareholders? Operate regulated activities? Those choices affect share classes, reserved matters, and licensing pathways.',
          'A constitution drafted only for a two-founder lifestyle business may frustrate a later series investment. Conversely, over-engineered documents can slow ordinary decisions. Aim for a structure that matches the next two to three years of capital and control plans, with a path to amend as the company grows.',
          'Director and company secretary appointments should be real, not placeholders. Banks and regulators may require identification and, in some cases, local presence or capacity that informal arrangements cannot satisfy.',
        ],
      },
      {
        heading: 'Share capital, ownership, and early equity deals',
        paragraphs: [
          'Record every share issue and transfer properly. Verbal promises of equity, option arrangements written only in chat messages, and unpaid share subscriptions create diligence problems later. When investors arrive, they will reconstruct the cap table from documents - not from memory.',
          'If employee equity or advisor shares are contemplated, put the terms in writing and align them with the constitution. Unclear vesting or repurchase rights are a common source of founder conflict when someone leaves.',
          'Foreign ownership, sector restrictions, and exchange-control or investment-registration issues (where applicable) should be checked before money lands, not after a bank freezes a transfer for incomplete paperwork.',
        ],
      },
      {
        heading: 'Annual compliance is not optional admin',
        paragraphs: [
          'Returns, registers, and changes of directors or address must be kept current. Banks, counterparties, and diligence teams treat incomplete filings as a red flag. A simple compliance calendar for the board secretary or finance lead prevents expensive catch-up work later.',
          'Maintain up-to-date registers of members and directors, minute books for board and shareholder decisions, and copies of filed returns. When a facility, acquisition, or investment is urgent, there is rarely time to rebuild years of records.',
          'Changes that feel internal - a new office, a resigning director, a share transfer among family - often have filing consequences. Assign one person responsibility for flagging changes to counsel or the company secretary promptly.',
        ],
      },
      {
        heading: 'Shareholder agreements',
        paragraphs: [
          'Even among friends or family co-founders, a clear shareholders’ agreement reduces dispute risk: decision-making, capital calls, transfer restrictions, and exit mechanics should be agreed while relationships are strong.',
          'Align the shareholders’ agreement with the company’s constitution so the two documents do not contradict each other. Conflicts between them create uncertainty precisely when certainty is needed.',
          'Investors will often require reserved matters, information rights, and anti-dilution or pre-emption protections. Understanding these tools before the term sheet stage helps founders negotiate without surprise.',
        ],
      },
      {
        heading: 'Banking, contracts, and day-to-day use of the entity',
        paragraphs: [
          'Open and use bank accounts in the company’s correct legal name. Contracts should be signed by authorised officers under proper authority. Mixing personal and company funds, or trading under a trading name that is not linked to the registered entity, creates liability and tax confusion.',
          'When the business grows into new lines or regulated activities, check whether additional licences or registrations are required. Expansion is a legal event as well as a commercial one.',
        ],
      },
      {
        heading: 'How McFord can help',
        paragraphs: [
          'Our corporate practice supports company formation, ongoing secretarial compliance, shareholder arrangements, and governance for businesses operating in Uganda. We help founders and boards keep the legal foundation clean so that financing, contracting, and exits are easier when opportunities arise.',
          'If you are incorporating, cleaning up historic filings, or preparing for investment, contact McFord Advocates for practical, partner-led advice.',
        ],
      },
    ],
  },
  {
    slug: 'contract-essentials-growing-businesses',
    title: 'Contract essentials for growing businesses in Uganda',
    excerpt:
      'Scope, payment, liability, change control, and dispute clauses that protect commercial relationships before problems escalate.',
    type: 'Insight',
    practiceSlug: 'commercial-law',
    date: '2026-03-18',
    dateLabel: '18 March 2026',
    readTime: '11 min read',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80',
    takeaways: [
      'Define scope, price, and change control in writing',
      'Allocate delay, quality, and payment risk expressly',
      'Match liability caps to deal economics',
      'Choose dispute forums that work for both interim and final relief',
      'Localise foreign templates before signing',
    ],
    sections: [
      {
        paragraphs: [
          'Many commercial disputes start as “we thought we agreed.” As businesses grow - more suppliers, distributors, and service providers - informal deals stop being enough. Well-structured contracts reduce ambiguity without slowing commercial momentum.',
          'This insight focuses on the clauses that most often determine outcomes when relationships fray: scope, money, risk, change, and disputes. It is written for managers who sign contracts regularly and want a counsel-informed checklist, not a textbook on contract theory.',
          'Good contracts are not about distrust. They are about shared clarity: each side knows what “done,” “paid,” and “in default” mean before pressure arrives.',
        ],
      },
      {
        heading: 'Scope, price, and change',
        paragraphs: [
          'State what is included, what is excluded, how price is calculated, and how variations are approved. Verbal change orders are a leading source of invoice disputes. A simple change-control process protects both sides.',
          'For services, attach a statement of work with deliverables, acceptance criteria, and timelines. For goods, specify specifications, packaging, delivery terms (including Incoterms where cross-border), and inspection windows.',
          'Price mechanisms should address taxes, currency, late payment interest, and set-off. If the commercial team expects “net 30,” the contract should say so - and should explain what happens when invoices are disputed in part.',
        ],
      },
      {
        heading: 'Performance, delay, and quality',
        paragraphs: [
          'Milestones, liquidated damages, service credits, and cure periods should match how the business actually measures performance. Clauses copied from another industry often punish the wrong behaviour or are unenforceable as penalties if poorly designed.',
          'Force majeure and hardship clauses deserve a second look after recent years of supply disruption. List the events you care about, the notice requirements, and whether the contract can be terminated if delay continues beyond a defined period.',
          'Warranty language should be specific about duration, remedies (repair, replace, refund), and exclusions. Open-ended warranties create open-ended pricing risk.',
        ],
      },
      {
        heading: 'Risk allocation',
        paragraphs: [
          'Limitation of liability, indemnities, warranties, and insurance requirements should match the deal economics. A supplier of low-margin goods may reasonably cap liability at fees paid; a mission-critical systems provider may face higher expectations.',
          'Copy-pasting foreign standard terms without local review can leave gaps under Ugandan law or create unenforceable provisions. Indemnities for intellectual property infringement, personal injury, or third-party claims should be read carefully against local mandatory rules and insurance cover.',
          'Confidentiality and data-handling clauses matter more as businesses digitise. Identify what is confidential, how long protection lasts, and what happens on termination (return or destruction of materials).',
        ],
      },
      {
        heading: 'Disputes and governing law',
        paragraphs: [
          'Agree where disputes will be resolved (courts or arbitration), in which language, and under which law. For cross-border supply chains, enforcement of judgments or awards should be considered at the drafting stage.',
          'Parties often need interim court relief even when they prefer arbitration for the merits. Drafting that blocks all court access can be commercially unwise when goods, IP, or urgent injunctions are at stake.',
          'Escalation clauses (negotiation, then mediation, then formal proceedings) can preserve relationships if timelines are short and clear. Endless pre-action procedures, by contrast, become tools for delay.',
        ],
      },
      {
        heading: 'Templates, authority, and execution',
        paragraphs: [
          'Maintain a small set of approved templates for common deals, with a process for non-standard terms to be escalated to counsel. Letting every salesperson invent a new form multiplies risk.',
          'Confirm signing authority. A contract signed by someone without authority, or on behalf of the wrong group company, can be worthless when collection time comes. Use consistent entity names matching registration documents.',
        ],
      },
      {
        heading: 'How McFord can help',
        paragraphs: [
          'Our commercial practice drafts and reviews supply, distribution, services, and joint-venture contracts for businesses operating in Uganda. We help commercial teams close deals with clearer risk allocation and fewer surprises in performance or payment.',
          'If you are standardising templates, renegotiating a key supplier, or resolving a live contractual dispute, contact McFord Advocates.',
        ],
      },
    ],
  },
  {
    slug: 'ma-due-diligence-uganda-checklist',
    title: 'M&A due diligence in Uganda: a buyer’s checklist',
    excerpt:
      'A deeper buyer-side map of corporate title, contracts, licences, employment, disputes, and how diligence findings should change price and structure.',
    type: 'Guide',
    practiceSlug: 'mergers-acquisitions',
    date: '2026-02-25',
    dateLabel: '25 February 2026',
    readTime: '12 min read',
    image:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1400&q=80',
    takeaways: [
      'Verify ownership chain and encumbrances on shares',
      'Map material contracts and change-of-control clauses',
      'Check licences match the business actually operated',
      'Price risk through warranties, indemnities, and holdbacks',
      'Plan integration issues before signing, not after',
    ],
    sections: [
      {
        paragraphs: [
          'Buying a business in Uganda rewards buyers who treat diligence as decision support, not a formality. The goal is not a perfect company - it is a clear picture of risk, so price, structure, and post-deal integration can be set intelligently.',
          'This guide is written for buyers, investment committees, and in-house counsel coordinating local advisers. It outlines legal themes that commonly move the needle on valuation or deal structure. Financial, tax, and technical diligence sit alongside this work and should be coordinated, not siloed.',
          'A practical approach is to rank findings as deal-breakers, price chips, or post-closing clean-up items - and to assign each finding an owner before negotiations accelerate.',
        ],
      },
      {
        heading: 'Corporate title and structure',
        paragraphs: [
          'Confirm the target’s share capital, shareholders, options, charges, and any informal arrangements that might not appear in the statutory books. Group charts and intercompany balances often hide leakage or related-party risk.',
          'Trace the chain of title for shares back through historic transfers. Missing board minutes, unstamped instruments (where relevant), or incomplete filings can undermine a buyer’s confidence that it will own what it is paying for.',
          'Identify subsidiaries, branches, and dormant entities. Orphan companies and forgotten joint ventures create liability that does not show up in a simple headcount of “the operating business.”',
        ],
      },
      {
        heading: 'Contracts, licences, and key relationships',
        paragraphs: [
          'Material customer and supplier contracts should be reviewed for change-of-control, termination, exclusivity, and liability. A deal that looks strong on revenue can weaken if key contracts terminate on sale.',
          'Operating licences must match the activities actually carried on - especially in regulated sectors such as finance, mining, or telecoms. Operating beyond the scope of a licence is a classic diligence finding that affects both value and buyer risk appetite.',
          'Real estate and equipment leases, IP licences, and IT contracts often contain assignment restrictions. Map which consents are needed and build them into the timeline and conditions precedent.',
        ],
      },
      {
        heading: 'Employment and disputes',
        paragraphs: [
          'Key employees, unpaid statutory obligations, and ongoing litigation or arbitration can change deal economics. Early identification allows for specific indemnities or price adjustments rather than last-minute renegotiation.',
          'Review employment contracts for change-of-control bonuses, restrictive covenants, and notice periods. Culture and retention are commercial issues; the legal documents still need to match the retention plan.',
          'Litigation schedules should include threatened claims, regulatory investigations, and tax disputes, not only filed court cases. Settlements with continuing obligations can bind the buyer after closing.',
        ],
      },
      {
        heading: 'Translating findings into deal terms',
        paragraphs: [
          'Diligence without negotiation impact is wasted cost. Findings should feed warranties and indemnities, disclosure letter strategy, price chips, escrow or holdback amounts, and sometimes a decision to switch from share deal to asset deal (or the reverse).',
          'Material adverse change clauses, conduct-of-business covenants between signing and closing, and interim operating restrictions protect the buyer if the business drifts during a long conditionality period.',
          'Integration planning - systems, brands, employment terms, and customer communications - should start before signing. Legal closing is not operational closing.',
        ],
      },
      {
        heading: 'Process tips for buyers',
        paragraphs: [
          'Use a structured data room index and track outstanding questions. Sellers respond better to organised requests than to scattered emails.',
          'Coordinate local counsel with any international firm so that Ugandan law issues are not underweighted in a global report. Local enforceability and regulatory practice often matter more than generic checklists.',
        ],
      },
      {
        heading: 'How McFord can help',
        paragraphs: [
          'McFord Advocates supports buyers and sellers on mergers, acquisitions, and investments involving Ugandan entities. We run legal diligence, draft and negotiate transaction documents, and help structure conditions that match how deals actually close in Uganda.',
          'If you are evaluating a target or preparing a process letter, contact the firm for partner-led support.',
        ],
      },
    ],
  },
  {
    slug: 'security-perfection-lending-uganda',
    title: 'Security perfection in Uganda: notes for lenders and borrowers',
    excerpt:
      'How security packages are built, perfected, and sequenced in mid-market lending - practical points for both sides of the facility.',
    type: 'Legal Update',
    practiceSlug: 'banking-finance',
    date: '2026-01-30',
    dateLabel: '30 January 2026',
    readTime: '12 min read',
    image:
      'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&w=1400&q=80',
    takeaways: [
      'Unperfected security may leave lenders exposed on insolvency',
      'Match security type to asset class and registration route',
      'Coordinate corporate authorities with filing timelines',
      'Borrowers should negotiate clear release and partial-release mechanics',
      'Conditions precedent should sequence KYC, valuation, and perfection',
    ],
    sections: [
      {
        paragraphs: [
          'For lenders, a facility is only as strong as the security package behind it. For borrowers, understanding perfection requirements helps negotiate realistic timelines and avoid surprises at drawdown. Ugandan practice typically involves a combination of corporate authorities, security documents, and registration or filing steps depending on the asset class.',
          'This note is aimed at credit teams, CFOs, and in-house counsel who want a fuller picture of how security is commonly structured and perfected for mid-market facilities. It is general guidance, not a substitute for advice on a specific financing.',
          'The recurring theme is sequencing: documents signed without the supporting authorities, valuations, or filings can create a false sense of completion while priority remains imperfect.',
        ],
      },
      {
        heading: 'Why perfection matters',
        paragraphs: [
          'Creating a security interest in a document is not always enough. Perfection - the steps that put third parties on notice or complete statutory formalities - often determines priority against other creditors and effectiveness in insolvency.',
          'Lenders who fund against “signed but unregistered” packages take a calculated risk. Borrowers who treat registration as the bank’s problem alone can still face delayed drawdown, higher pricing, or default if conditions precedent are not met.',
          'Understanding which assets require which formalities allows both sides to build a realistic critical path from term sheet to first utilisation.',
        ],
      },
      {
        heading: 'Common security elements',
        paragraphs: [
          'Packages may include charges over assets, mortgages over land, pledges, guarantees, assignments of receivables, and share charges over subsidiaries. Each instrument has different formalities and different enforcement profiles.',
          'Using the wrong instrument for the asset class can undermine priority. For example, treating a land interest as if it were ordinary movable property, or failing to perfect a share charge when the lender’s real comfort is ownership of the operating company, are classic structuring mistakes.',
          'Guarantees from parent companies or sponsors are common but are only as strong as the guarantor’s own balance sheet and the enforceability of the guarantee terms (including any limitations required for corporate benefit or financial assistance analysis).',
          'All-asset debentures and fixed-and-floating charge structures should be reviewed against the borrower’s actual asset base. A floating charge over assets that are already encumbered or operationally essential may deliver less recovery than the term sheet implies.',
        ],
      },
      {
        heading: 'Corporate authorities and capacity',
        paragraphs: [
          'Boards and, where required, shareholders must authorise borrowing and security. Constitutions may impose borrowing limits or require special resolutions for charges over undertaking.',
          'Lenders typically require certified board minutes, specimen signatures, and sometimes legal opinions on capacity and authority. Borrowers should prepare these in parallel with negotiation of the facility agreement, not after signature when the clock is running on a commercial deadline.',
          'Group structures add complexity: upstream and cross guarantees need careful analysis so that each guarantor has genuine corporate benefit and proper authorisation.',
        ],
      },
      {
        heading: 'Process and sequencing',
        paragraphs: [
          'Board and shareholder approvals, KYC, valuation, insurance, and registration should be sequenced in the conditions precedent. Parallel workstreams reduce the gap between signing and first drawdown.',
          'A practical checklist often includes: final form facility and security documents; evidence of authority; perfection steps completed or committed with undertakings; conditions on equity contributions or intercreditor arrangements; and evidence that no default exists at utilisation.',
          'Where third-party consents are needed (landlords, prior lenders, regulators), identify them at term-sheet stage. Consent timelines frequently determine whether a “four-week close” is realistic.',
        ],
      },
      {
        heading: 'Points borrowers should negotiate',
        paragraphs: [
          'Release mechanics matter. Borrowers should know how security is released on full repayment, and whether partial releases are available when assets are sold in the ordinary course or when a facility is prepaid in part.',
          'Negative pledge, cash dominion, and consent thresholds for further debt can constrain growth. Align these with the business plan so that ordinary expansion does not require constant lender waivers.',
          'Costs of perfection, stamp or registration fees (where applicable), and lender legal fees should be transparent in the term sheet to avoid closing friction.',
        ],
      },
      {
        heading: 'Enforcement awareness (without waiting for default)',
        paragraphs: [
          'Even at origination, both sides should understand how enforcement would work: notice requirements, power of sale, appointment of receivers, and practical obstacles such as occupied premises or regulated assets.',
          'Intercreditor arrangements among multiple lenders should be agreed before funds flow. Fighting over priority after default is far more expensive than documenting it at the start.',
        ],
      },
      {
        heading: 'How McFord can help',
        paragraphs: [
          'Our banking and finance practice supports lenders and borrowers on facility documentation, security packages, perfection formalities, and restructuring of existing facilities in Uganda.',
          'If you are preparing a new facility, refinancing, or reviewing whether an existing security package is complete, contact McFord Advocates for clear, commercially minded advice.',
        ],
      },
    ],
  },
  {
    slug: 'trademark-protection-east-africa',
    title: 'Protecting your brand: trademarks in Uganda and the region',
    excerpt:
      'Filing strategy, regional expansion, licensing, monitoring, and enforcement for brands that want durable protection in Uganda and East Africa.',
    type: 'Insight',
    practiceSlug: 'intellectual-property',
    date: '2025-12-12',
    dateLabel: '12 December 2025',
    readTime: '10 min read',
    image:
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1400&q=80',
    takeaways: [
      'File early in classes that match real use and expansion plans',
      'Search before you invest in packaging and campaigns',
      'Monitor lookalikes before they gain market share',
      'Licence IP with quality and territory controls',
      'Enforcement is easier when registration and evidence are ready',
    ],
    sections: [
      {
        paragraphs: [
          'Brand value often outlasts any single product cycle. Yet many growing businesses delay trademark registration until a dispute appears - by which time options are narrower and more expensive.',
          'This insight is for founders, marketing leaders, and general managers expanding brands in Uganda and across East Africa. It covers filing strategy, licensing, watching the market, and enforcement posture - in plain commercial language.',
          'Trademarks are not only logos. Names, slogans, and sometimes distinctive packaging elements can all form part of a protection strategy when used as badges of origin.',
        ],
      },
      {
        heading: 'Search before you spend',
        paragraphs: [
          'Before launching a new name or rebrand, commission clearance searches in relevant classes and markets. Discovering a conflicting mark after you print packaging is a costly way to learn about prior rights.',
          'Searches are not guarantees, but they reduce the risk of obvious conflicts and inform whether to rebrand early, coexist, or negotiate a consent.',
        ],
      },
      {
        heading: 'Filing strategy',
        paragraphs: [
          'Identify the marks (names, logos, slogans) that customers associate with your business, and the goods or services classes that match current use and near-term expansion. Filing too narrowly leaves gaps; filing too broadly without intent to use can create its own problems over time.',
          'Regional expansion plans should inform whether filings in neighbouring markets are needed now or staged. A brand that launches in Kampala but sells into the region through distributors may need protection beyond Uganda earlier than founders expect.',
          'House marks versus product marks: some businesses protect the company name and key product brands separately. Portfolio design should match how consumers actually recognise you.',
        ],
      },
      {
        heading: 'Use, evidence, and maintenance',
        paragraphs: [
          'Registration is stronger when supported by genuine use as a trademark in commerce. Keep specimens of packaging, advertising, and invoices that show the mark as used.',
          'Diary renewals and watch deadlines. Lapsed registrations are an open invitation for opportunistic third-party filings.',
          'If the brand evolves (new logo stylisation, new tagline), ask whether a fresh filing is needed or whether the existing registration still covers the form in use.',
        ],
      },
      {
        heading: 'Licensing and distribution',
        paragraphs: [
          'If distributors or franchisees use your brand, written licences should set quality standards, territory, and termination rights. Uncontrolled use can dilute distinctiveness and complicate enforcement against true infringers.',
          'Recordal of licences, where available and useful, can support third-party effectiveness. Even without recordal, a clear contract is essential between brand owner and user.',
          'Online marketplaces and social media sellers create new infringement channels. Contracts with distributors should address online sales channels and brand presentation rules.',
        ],
      },
      {
        heading: 'Monitoring and enforcement',
        paragraphs: [
          'Watch services, marketplace scans, and customer reports help you spot lookalikes early. Acting while confusion is limited is usually cheaper than waiting until a rival brand is entrenched.',
          'Enforcement options may include cease-and-desist correspondence, customs recordal where available, civil claims, and, in appropriate cases, criminal or administrative routes. Strategy depends on the severity of the infringement and the commercial importance of the market.',
          'Registration strengthens your hand but evidence of reputation and confusion still matters in many disputes. Prepare a factual file, not only a registration certificate.',
        ],
      },
      {
        heading: 'How McFord can help',
        paragraphs: [
          'Our intellectual property practice advises on trademark filing strategy, portfolio management, licensing, and enforcement for businesses building brands in Uganda and the region.',
          'If you are launching a brand, expanding regionally, or facing a lookalike product, contact McFord Advocates for practical guidance.',
        ],
      },
    ],
  },
  {
    slug: 'employment-contracts-reduce-dispute-risk',
    title: 'Employment contracts that reduce dispute risk',
    excerpt:
      'Contracts, policies, disciplinary process, and senior exits - a fuller employer guide to reducing labour disputes under Ugandan practice.',
    type: 'Guide',
    practiceSlug: 'employment-law',
    date: '2025-11-05',
    dateLabel: '5 November 2025',
    readTime: '11 min read',
    image:
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1400&q=80',
    takeaways: [
      'Put role, pay, and notice in clear written terms',
      'Policies only help if applied consistently',
      'Document disciplinary steps before termination',
      'Senior exits need tailored documentation and releases',
      'Train managers; most disputes start on the shop floor',
    ],
    sections: [
      {
        paragraphs: [
          'Labour disputes are expensive in management time as well as legal cost. Many can be avoided - or narrowed - by clear contracts, sensible policies, and fair process when things go wrong.',
          'This guide is for employers and HR leads who want a practical framework: what belongs in the contract, what belongs in the handbook, and how process protects both fairness and the business when performance or conduct issues arise.',
          'Ugandan labour law and good industrial practice both reward documentation. Memory is a poor witness months after a heated exit.',
        ],
      },
      {
        heading: 'Contracts that match reality',
        paragraphs: [
          'Job title, duties, remuneration, working hours, place of work, confidentiality, and notice periods should reflect how the role actually works. Template contracts imported from other jurisdictions often miss local mandatory requirements or create unenforceable clauses.',
          'Probation periods, if used, should be clearly defined with evaluation milestones. Letting probation drift without feedback creates both legal and cultural problems.',
          'Variable pay, commissions, and benefits should be documented with clear eligibility rules. Ambiguous bonus language is a frequent source of claims after resignation or dismissal.',
          'Restrictive covenants (non-compete, non-solicit) must be reasonable in scope, geography, and duration to have a realistic chance of enforcement. Overreaching clauses can fail entirely.',
        ],
      },
      {
        heading: 'Policies and handbooks',
        paragraphs: [
          'Handbooks should cover grievance, discipline, anti-harassment, IT and data use, and health and safety at a level employees can understand. Policies that exist only in a shared drive nobody reads do not help in a dispute.',
          'Consistency matters. Applying a policy strictly to one employee and loosely to another undermines both fairness arguments and managerial authority.',
          'Update policies when the business model changes (remote work, new tools, new shifts). Old rules that contradict new practice confuse managers and staff alike.',
        ],
      },
      {
        heading: 'Process before termination',
        paragraphs: [
          'Disciplinary and performance processes should be documented: allegations, opportunity to respond, investigation notes, hearing outcomes, and appeal rights where appropriate. Skipping steps invites challenges even where the substantive reason for exit is sound.',
          'Performance management should include clear targets, support or training where relevant, and written warnings before dismissal for capability - unless the situation genuinely justifies a shorter path.',
          'For misconduct, distinguish between gross misconduct and lesser offences. Immediate dismissal without process is high risk unless the facts and law truly support it.',
        ],
      },
      {
        heading: 'Senior exits and settlements',
        paragraphs: [
          'Senior exits need tailored documentation: negotiated settlements, release wording, return of property, ongoing confidentiality, and reference protocols. A standard junior template is rarely enough for a C-suite departure.',
          'Garden leave, accelerated vesting, and bonus treatment should be addressed expressly. Silence creates leverage for the departing executive.',
          'Communications to the market, staff, and clients should be aligned with the legal documents so that public statements do not contradict settlement terms.',
        ],
      },
      {
        heading: 'Manager capability',
        paragraphs: [
          'Most employment claims begin with a managerial conversation that went poorly. Training line managers on documentation, bias awareness, and when to escalate to HR or counsel is one of the highest-return investments an employer can make.',
          'Create a simple internal escalation path so that managers are not left to invent process under pressure.',
        ],
      },
      {
        heading: 'How McFord can help',
        paragraphs: [
          'Our employment practice advises employers on contracts, policies, restructuring, disciplinary processes, and senior exits under Ugandan labour law. We help HR and leadership teams reduce dispute risk without losing commercial flexibility.',
          'If you are updating templates, managing a difficult exit, or responding to a labour claim, contact McFord Advocates.',
        ],
      },
    ],
  },
  {
    slug: 'shareholder-agreements-private-companies',
    title: 'Shareholder agreements for private companies: why they matter',
    excerpt:
      'Control, capital, transfers, deadlock, and exits - a fuller guide to shareholders’ agreements that keep private companies investable.',
    type: 'Insight',
    practiceSlug: 'corporate-law',
    date: '2025-10-08',
    dateLabel: '8 October 2025',
    readTime: '11 min read',
    image:
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=80',
    takeaways: [
      'Agree reserved matters before capital is raised',
      'Transfer restrictions protect against unwanted owners',
      'Deadlock clauses need a real, affordable exit path',
      'Align the constitution with the shareholders’ agreement',
      'Information rights and budgets prevent surprise disputes',
    ],
    sections: [
      {
        paragraphs: [
          'When ownership is concentrated among a few people, informal understanding works - until it does not. A shareholders’ agreement is the commercial constitution of a private company: it sets who decides what, how money and control move, and what happens when owners disagree.',
          'This insight is for founders, family businesses, and early-stage investors who want more than a one-page “we will be fair” promise. It walks through the clauses that typically matter most when relationships are tested by growth, capital needs, or exit.',
          'A shareholders’ agreement does not replace good faith among partners. It provides a map when good faith is under strain.',
        ],
      },
      {
        heading: 'Reserved matters and control',
        paragraphs: [
          'Boards run the business day to day; certain decisions (new debt, new shares, related-party deals, sale of the business, major litigation, changing the business line) often need shareholder consent. Getting that list right balances speed with protection for minority investors.',
          'Too many reserved matters paralyse management. Too few leave minorities exposed to dilution or asset stripping. Calibrate to the company’s stage: seed-stage companies may accept founder control with limited investor vetoes; growth-stage companies often expand investor protections.',
          'Board composition, quorum, and chair casting votes should be documented. Deadlock at board level is as common as deadlock at shareholder level.',
        ],
      },
      {
        heading: 'Capital, dilution, and information',
        paragraphs: [
          'Pre-emption rights on new issues protect against surprise dilution. Procedures for offering shares, timelines for acceptance, and what happens if a shareholder cannot follow on should be clear.',
          'Capital call mechanisms, if used, need consequences for default (dilution, forced transfer, or loan conversion) that parties accept before cash is tight.',
          'Information rights - management accounts, annual budgets, audit access - reduce suspicion. Investors who feel uninformed often become litigious investors.',
        ],
      },
      {
        heading: 'Transfer restrictions',
        paragraphs: [
          'Private companies usually restrict free transfer of shares. Right of first refusal, board consent, and permitted transfers (to family trusts or affiliates) keep the cap table intentional.',
          'Tag-along rights protect minorities when a majority sells. Drag-along rights allow a sufficient majority to deliver the whole company to a buyer. Both need carefully drafted thresholds and price-matching rules.',
          'Valuation methodology for forced sales or leaver provisions should be agreed in advance. “Fair value” without a process is an invitation to expert battles.',
        ],
      },
      {
        heading: 'Exit and deadlock',
        paragraphs: [
          'Drag-along, tag-along, pre-emption, and put/call options give structure to exits. Deadlock mechanisms (mediation, buy-sell, Russian roulette, Texas shoot-out) should be realistic for the company’s size - a clause no one can afford to use is not a solution.',
          'Leaver provisions for founder-employees (good leaver / bad leaver) align equity with continued contribution. These clauses are sensitive and should be negotiated openly, not buried.',
          'IPO or trade-sale preparation clauses (cooperation, lock-ups, reorganisation) help when a liquidity event becomes real rather than theoretical.',
        ],
      },
      {
        heading: 'Consistency with the constitution and other documents',
        paragraphs: [
          'Align the shareholders’ agreement with the company’s constitution so the two documents do not contradict each other. Where they conflict, parties waste time arguing which prevails.',
          'Employment contracts, IP assignment agreements, and loan notes with shareholders should be consistent with the equity story. A founder who owns shares but never assigned IP to the company creates a diligence problem later.',
        ],
      },
      {
        heading: 'How McFord can help',
        paragraphs: [
          'Our corporate practice drafts and negotiates shareholders’ agreements, constitutions, and related equity documents for private companies in Uganda. We help founders and investors document control and exit terms that match how they actually intend to run the business.',
          'If you are forming a company with co-founders, bringing in an investor, or resolving a shareholder dispute, contact McFord Advocates for clear, practical counsel.',
        ],
      },
    ],
  },
]

export function getInsight(slug: string) {
  return insights.find((item) => item.slug === slug)
}

export function getInsightsByPractice(practiceSlug: string) {
  return insights.filter((item) => item.practiceSlug === practiceSlug)
}

export function getInsightsByType(type: InsightType) {
  return insights.filter((item) => item.type === type)
}

export function getRelatedInsights(slug: string, limit = 3) {
  const current = getInsight(slug)
  if (!current) return insights.slice(0, limit)
  return insights
    .filter(
      (item) =>
        item.slug !== slug &&
        (item.practiceSlug === current.practiceSlug || item.type === current.type)
    )
    .slice(0, limit)
}

/** Newest first */
export function getInsightsSorted() {
  return [...insights].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}
