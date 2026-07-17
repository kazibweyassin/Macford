# McFord Advocates - Professional Law Firm Website

A modern, responsive website for McFord Advocates, Uganda's leading corporate law firm established in 2015.

## 🌐 Website Overview

McFord Advocates is a Kampala-based law firm specializing in corporate law, mergers & acquisitions, banking and finance, telecommunications, and infrastructure development. This website showcases their expertise and services.

## 📄 Pages

### 1. **Home** (`/`)
- Hero section with compelling headline and CTA buttons
- Firm statistics (10+ years experience, 500+ clients, 20+ experts, 98% satisfaction)
- Overview of practice areas with service cards
- Why Choose Us section highlighting firm strengths
- Call-to-action section encouraging consultations

### 2. **About** (`/about`)
- Company story and history (founded 2015)
- Mission, Vision, and Values statements
- Comprehensive expertise areas across 6 practice categories
- Key achievements and milestones
- Detailed information about the firm's credentials

### 3. **Services** (`/services`)
- Detailed breakdown of 6 major practice areas:
  - Corporate Law
  - Mergers & Acquisitions
  - Banking & Finance
  - Intellectual Property
  - Commercial Law
  - Employment Law
- Benefits of choosing McFord Advocates
- 4-step service process (Consultation → Analysis → Implementation → Follow-up)
- Each service includes specific offerings and deliverables

### 4. **Team** (`/team`)
- 8 team member profiles with:
  - Name, title, specialization
  - Years of experience
  - Professional description
- Team statistics (20+ professionals, 150+ combined years experience)
- Firm culture and values (6 core values)
- Professional development initiatives

### 5. **Contact** (`/contact`)
- Contact form with fields for:
  - Name, email, phone
  - Company name
  - Service of interest (dropdown)
  - Message
- Contact information:
  - Location: Kampala, Uganda
  - Phone, email, business hours
- FAQ section addressing common questions

## 🎨 Design

### Color Scheme
- **Primary**: Deep Navy Blue (`oklch(0.28 0.15 250)`) - Professional authority
- **Accent**: Gold/Amber (`oklch(0.72 0.2 55)`) - Premium elegance
- **Background**: Off-white (`oklch(0.98 0.001 0)`) - Clean, professional
- **Text**: Dark Navy (`oklch(0.15 0.01 220)`) - High contrast, readability

### Typography
- Clean, professional typography with Geist font family
- Hierarchical text sizing for clear information architecture
- Line heights optimized for readability (1.4-1.6)

### Layout
- Fully responsive design (mobile-first approach)
- Maximum width container for optimal readability
- Grid-based layout system
- Smooth transitions and hover effects

## 🚀 Features

✅ **Responsive Design** - Works perfectly on desktop, tablet, and mobile
✅ **Navigation Menu** - Sticky navigation with mobile hamburger menu
✅ **Forms** - Functional contact form with validation
✅ **Icons** - Lucide React icons throughout for visual clarity
✅ **Accessibility** - Semantic HTML, proper ARIA labels, SR-only text
✅ **Performance** - Optimized images, efficient CSS, fast load times
✅ **SEO** - Meta tags, proper heading structure, descriptive content

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4 with custom design tokens
- **Components**: shadcn/ui components
- **Icons**: Lucide React
- **Language**: TypeScript
- **Package Manager**: pnpm

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx              # Root layout with metadata
│   ├── page.tsx                # Home page
│   ├── about/page.tsx          # About page
│   ├── services/page.tsx       # Services page
│   ├── team/page.tsx           # Team page
│   ├── contact/page.tsx        # Contact page
│   └── globals.css             # Global styles & design tokens
├── components/
│   ├── navbar.tsx              # Navigation component
│   ├── footer.tsx              # Footer component
│   └── ui/                     # shadcn/ui components
├── lib/
│   └── utils.ts                # Utility functions
└── public/                     # Static assets
```

## 🚀 Getting Started

### Installation

1. **Install dependencies**:
   ```bash
   pnpm install
   ```

2. **Run development server**:
   ```bash
   pnpm dev
   ```

3. **Open in browser**:
   Navigate to `http://localhost:3000`

### Build for Production

```bash
pnpm build
pnpm start
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

Navigation and layout automatically adapt for each breakpoint.

## 🎯 Key Sections

### Hero Section
- Attention-grabbing headline
- Compelling value proposition
- Dual CTA buttons (primary & secondary)
- Hero illustration

### Stats Section
- Quick impact metrics
- Build trust and credibility
- 4 key statistics highlighted

### Services Grid
- 4-6 cards displaying practice areas
- Icons for visual recognition
- Hover effects for interactivity
- Descriptions and benefits

### Team Grid
- Team member cards with photos
- Specializations and experience
- Responsive layout (1-4 columns)

### Forms
- Clean, intuitive form design
- Input validation
- Success/error states
- Accessible form labels

## 🔧 Customization

### Colors
Edit design tokens in `app/globals.css`:
```css
:root {
  --primary: oklch(0.28 0.15 250);      /* Primary brand color */
  --accent: oklch(0.72 0.2 55);         /* Accent color */
  --background: oklch(0.98 0.001 0);    /* Background */
}
```

### Fonts
Modify fonts in `app/layout.tsx` by importing different Google Fonts or local fonts.

### Content
Update text content directly in component files. Dynamic content can be pulled from a CMS or database.

## ♿ Accessibility

- Semantic HTML elements (`<header>`, `<main>`, `<footer>`, `<nav>`)
- ARIA labels and roles where needed
- Alt text for all meaningful images
- Keyboard navigation support
- Focus indicators for interactive elements
- Screen reader optimized text

## 📊 SEO

- Unique title and description for each page
- Proper heading hierarchy (H1 → H6)
- Descriptive link text
- Meta tags for social sharing
- Structured content for search engines

## 🚢 Deployment

Deploy to Vercel with a single click:

1. Push code to GitHub
2. Connect repository to Vercel
3. Vercel automatically detects Next.js and deploys

Or use the v0 publish feature to deploy directly.

## 📝 License

This website is created for McFord Advocates. All rights reserved.

## 📞 Contact

**McFord Advocates**
- 📍 Kampala, Uganda
- 📧 info@mcfordadvocates.com
- 📱 +256 (0) 773 000 000

---

*Built with v0 - Modern web development made simple.*
