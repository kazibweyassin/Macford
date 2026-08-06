# McFord Advocates Website - Page Index

## 🌐 Website Pages

### 1. Home Page
**URL:** `/`  
**Title:** McFord Advocates - Corporate Law Firm Uganda

**Sections:**
- Navigation bar (sticky)
- Hero section with value proposition
- Trust badge
- Statistics section (10+ years, 500+ clients, 20+ experts, 98% satisfaction)
- Practice areas overview (featured cards from full list of 9)
- Why Choose Us (6 key differentiators)
- Final CTA section (blue background)
- Footer

**CTAs:**
- Schedule Consultation
- View Services
- Get in Touch

---

### 2. About Page
**URL:** `/about`  
**Title:** About McFord Advocates - Leading Law Firm in Uganda

**Sections:**
- Page header with subtitle
- Our Story section (firm history, founding 2015)
- Mission, Vision & Values (3 separate cards)
- Areas of Expertise (all practice areas with links)
- Key Achievements section (6 achievement cards)

**Content Highlights:**
- Established 2015 with experienced founders
- 500+ clients served
- 98% client retention rate
- $500 million+ in M&A transactions advised

---

### 3. Services / Practice Areas
**URL:** `/services`  
**Title:** Practice Areas | McFord Advocates  
**Detail pages:** `/services/[slug]`

**Practice Areas** (source: `lib/site.ts` → `practiceAreas`):

1. **Corporate & Commercial** (`corporate-commercial`)
   - Company registration and formation
   - Corporate governance & board advisory
   - Commercial contracts and joint ventures
   - Regulatory compliance and licensing

2. **Mergers & Acquisitions** (`mergers-acquisitions`)
   - Transaction structuring and strategy
   - Legal due diligence
   - Share and asset purchase agreements
   - Buyer and seller representation

3. **Banking & Finance** (`banking-finance`)
   - Secured and unsecured lending
   - Security documentation & perfection
   - Project and trade finance
   - Financial regulatory compliance

4. **Dispute Resolution** (`dispute-resolution`)
   - Commercial and civil litigation
   - Arbitration and mediation
   - Debt recovery
   - Enforcement of judgments & awards

5. **Mineral Law** (`mineral-law`)
   - Mining and mineral rights licensing
   - Gold trading and export compliance
   - Exploration and production agreements
   - Regulatory and environmental compliance

6. **Intellectual Property** (`intellectual-property`)
   - Trademark registration and renewals
   - Copyright and patent advisory
   - IP licensing and assignments
   - Infringement and enforcement

7. **Employment & Labour** (`employment`)
   - Employment contracts and handbooks
   - Workplace policies and compliance
   - Disciplinary and termination processes
   - Labour dispute resolution

8. **Real Estate & Property** (`real-estate`)
   - Land acquisition and conveyancing
   - Lease drafting and review
   - Title due diligence
   - Development and joint venture structures

9. **Energy & Infrastructure** (`energy-infrastructure`)
   - Project documentation review
   - Regulatory and licensing support
   - Construction and EPC contracts
   - Local content compliance

**Sections:**
- Practice area cards with links to detail pages
- Why choose McFord Advocates
- Final CTA

---

### 4. Team Page
**URL:** `/team`  
**Title:** Our Team - McFord Advocates

**Team Members (8 Professionals):**

1. **Franklin McFord** - Founder & Senior Partner (15+ years)
   - Specialization: Corporate Law & M&A

2. **Grace Katende** - Partner, Commercial Law (12+ years)
   - Specialization: Commercial & Contract Law

3. **David Ssempebwa** - Partner, Finance & Banking (11+ years)
   - Specialization: Banking & Finance

4. **Eleanor Muwema** - Senior Associate, IP (8+ years)
   - Specialization: Intellectual Property

5. **Patrick Kaweesi** - Senior Associate, Corporate (7+ years)
   - Specialization: Corporate & Employment Law

6. **Sophia Nakato** - Associate, General Practice (5+ years)
   - Specialization: General Commercial Law

7. **James Otim** - Associate, Corporate (4+ years)
   - Specialization: Corporate & M&A

8. **Victoria Namanya** - Associate, Commercial (3+ years)
   - Specialization: Commercial & Finance

**Sections:**
- Team statistics (20+ professionals, 150+ combined years)
- Team overview and expertise
- Individual member profile cards
- Culture & Values (6 core values)
- Professional Development initiatives

---

### 5. Contact Page
**URL:** `/contact`  
**Title:** Contact Us - McFord Advocates

**Contact Form Fields:**
- Full Name (required)
- Email Address (required)
- Phone Number (optional)
- Company Name (optional)
- Service of Interest (dropdown)
- Message (required)

**Service Options in Dropdown:** (from `practiceAreas` in `lib/site.ts`)
- Corporate & Commercial
- Mergers & Acquisitions
- Banking & Finance
- Dispute Resolution
- Mineral Law
- Intellectual Property
- Employment & Labour
- Real Estate & Property
- Energy & Infrastructure

**Contact Information:**
- **Address:** Kampala, Uganda, East Africa
- **Phone:** +256 (0) 773 000 000
- **Email:** info@mcfordadvocates.co.ug
- **Hours:** Mon-Fri 8AM-5PM, Sat 9AM-1PM

**Sections:**
- Contact form (left side)
- Contact information cards (right side)
- FAQ section (4 common questions)

**FAQs:**
1. How long does a typical legal matter take?
2. What are your fees?
3. Do you handle matters outside Uganda?
4. Can I schedule a consultation?

---

## 🔗 Navigation Structure

```
Home (/)
├── Our Firm (/about)
├── Practice Areas (/services)
│   ├── Corporate & Commercial
│   ├── Mergers & Acquisitions
│   ├── Banking & Finance
│   ├── Dispute Resolution
│   ├── Mineral Law
│   ├── Intellectual Property
│   ├── Employment & Labour
│   ├── Real Estate & Property
│   └── Energy & Infrastructure
├── Our Lawyers (/team)
└── Contact (/contact)
```

All pages have:
- Sticky navigation bar with logo
- Mobile hamburger menu
- "Get Legal Help" CTA button (top right)
- Footer with quick links

---

## 📱 Responsive Behavior

### Mobile (< 640px)
- Hamburger navigation menu
- Single column layout
- Stacked form fields
- Touch-friendly buttons

### Tablet (640px - 1024px)
- Horizontal navigation
- 2-column grid layouts
- Adjusted typography
- Optimized spacing

### Desktop (> 1024px)
- Full navigation bar
- Multi-column layouts
- Full-width hero sections
- Side-by-side content

---

## 🎨 Visual Elements on Each Page

### Icons Used
- Scale (Justice/Law)
- Users (Team)
- Award (Quality)
- Briefcase (Corporate)
- Mail, Phone, MapPin (Contact)
- Clock (Hours)

### Backgrounds
- White (#ffffff)
- Light Gray (#f9fafb)
- Dark Blue (Primary)
- Gold/Amber (Accents)

### Interactive Elements
- Buttons (Primary & Secondary)
- Form fields
- Dropdown selects
- Clickable cards with hover effects
- Links with color transitions

---

## ✅ Functionality Checklist

- [x] All pages load correctly
- [x] Navigation works on all pages
- [x] Mobile menu toggles
- [x] Contact form validates
- [x] Buttons navigate correctly
- [x] Links are functional
- [x] Responsive on all screen sizes
- [x] Colors display correctly
- [x] Typography is readable
- [x] Forms are accessible
- [x] Page titles are accurate
- [x] Meta descriptions are present

---

## 📊 Content Statistics

- **Total Pages:** 5 main + 9 practice detail pages
- **Total Sections:** 20+
- **Team Members:** 4 (public profiles; see live team page)
- **Practice Areas:** 9
- **Services Detailed:** 50+ offerings across practices
- **FAQs:** 4
- **CTAs:** 10+
- **Images/Icons:** 30+

---

## 🚀 Ready to Deploy

The website is production-ready and can be deployed to:
- Vercel (recommended)
- Netlify
- Self-hosted server
- Docker container

All files are optimized and no external dependencies are missing.

---

**Last Updated:** 2026-07-17  
**Status:** ✅ Complete & Tested
