# HS Web Studio — Modern Digital Agency & Web Development Platform

> **Live Production Website:** [https://hswebstudio.site/](https://hswebstudio.site/)  
> **Location:** Karachi, Pakistan  
> **Contact / WhatsApp:** [+92 331 2901930](https://wa.me/923312901930)  
> **Email:** [hswebstudio3@gmail.com](mailto:hswebstudio3@gmail.com)  
> **Instagram:** [@has_sanwebstudio](https://www.instagram.com/has_sanwebstudio/)

---

## 1. Project Overview

HS Web Studio has been completely migrated and upgraded from vanilla HTML/CSS/JS into a modern, high-performance, responsive React application built with **React**, **Vite**, **React Router**, **Lucide React**, and **Framer Motion**.

The platform is designed to establish authority as an established digital studio, showcasing our technical capabilities across:
- **Business Website Development**
- **E-Commerce & Shopify Store Development**
- **Custom Web Applications & RESTful APIs**
- **Retail Point of Sale (POS) Systems**
- **Website Redesign & Modernization**
- **Website Maintenance & Technical Support**

---

## 2. Technology Stack

- **Frontend Core:** React 19, Vite 6, JavaScript (ES6+)
- **Routing:** React Router v7 (with SPA GitHub Pages redirect handling)
- **Icons:** Lucide React
- **Motion & Micro-interactions:** Framer Motion & CSS keyframe transitions
- **Styling:** Modular CSS Design System (`src/styles/index.css`) featuring custom CSS properties, responsive clamp typography, and dark-mode elevation
- **SEO & Structured Data:** Semantic HTML5, Schema.org `ProfessionalService` JSON-LD, OpenGraph, dynamic title & meta updates
- **Deployment:** GitHub Pages with Custom Domain (`CNAME`), automated via GitHub Actions

---

## 3. Project Structure

```
├── .github/
│   └── workflows/
│       └── deploy.yml            # Automated GitHub Actions deployment to Pages
├── public/
│   ├── assets/images/           # Preserved static image assets & screenshots
│   ├── 404.html                 # SPA redirect fallback script for GitHub Pages
│   ├── CNAME                    # Custom domain mapping (hswebstudio.site)
│   ├── robots.txt               # Search crawler permissions
│   └── sitemap.xml              # Complete search engine sitemap
├── src/
│   ├── assets/images/           # Source imagery and brand logos
│   ├── components/
│   │   ├── Button.jsx           # Button primitives (primary, ghost, whatsapp)
│   │   ├── ContactForm.jsx      # Validated inquiry form with spam honeypot
│   │   ├── CostEstimator.jsx    # Interactive Budget & Timeline Calculator
│   │   ├── FAQAccordion.jsx     # Accessible ARIA accordion
│   │   ├── Footer.jsx           # Global studio footer with verified details
│   │   ├── MultiStepInquiryModal.jsx # 5-Step interactive project inquiry modal
│   │   ├── Navbar.jsx           # Sticky nav with dropdown & mobile drawer
│   │   ├── ProjectCard.jsx      # Portfolio card with live/concept badges
│   │   ├── ScrollToTop.jsx      # Floating scroll button & route reset
│   │   ├── SectionHeading.jsx   # Reusable section headers with badges
│   │   ├── SEO.jsx              # Head metadata & Schema.org JSON-LD
│   │   ├── ServiceCard.jsx      # Reusable capability cards
│   │   └── WhatsAppButton.jsx   # Floating WhatsApp button (+92 331 2901930)
│   ├── data/
│   │   ├── faqs.js              # Comprehensive business & tech FAQs
│   │   ├── pricing.js           # Starter, Professional, Custom tiers
│   │   ├── projects.js          # All 11 client & concept projects
│   │   ├── services.js          # All 8 core service definitions
│   │   ├── technologies.js      # Verified tech stack categorization
│   │   └── testimonials.js      # Genuine client feedback configuration
│   ├── pages/
│   │   ├── AboutPage.jsx        # Studio story, founder note, ethos
│   │   ├── BusinessWebsitePage.jsx # Business websites service page
│   │   ├── ContactPage.jsx      # Dedicated contact & inquiry page
│   │   ├── CustomDevelopmentPage.jsx # Custom web apps & APIs service page
│   │   ├── EcommercePage.jsx    # Custom E-commerce service page
│   │   ├── EstimatorPage.jsx    # Dedicated interactive calculator page
│   │   ├── Home.jsx             # Comprehensive agency homepage
│   │   ├── MaintenancePage.jsx  # Website maintenance & support page
│   │   ├── NotFound.jsx         # Branded 404 error page
│   │   ├── PortfolioPage.jsx    # Filterable project gallery with search
│   │   ├── POSSystemsPage.jsx   # Retail POS systems service page
│   │   ├── ProjectDetails.jsx   # Dynamic project case study template
│   │   ├── ServiceDetailTemplate.jsx # Reusable detailed service layout
│   │   ├── ServicesPage.jsx     # Overview of all 8 core services
│   │   ├── ShopifyPage.jsx      # Shopify store development page
│   │   └── WebsiteRedesignPage.jsx # Website redesign & speed page
│   ├── styles/
│   │   └── index.css            # Studio design system & global CSS
│   ├── App.jsx                  # Main application router & modal context
│   └── main.jsx                 # Vite application mount point
├── index.html                   # HTML entry with font preconnects & SPA script
├── package.json                 # Project dependencies and build scripts
└── vite.config.js               # Vite build configuration with chunking
```

---

## 4. Key Interactive Features

### 1. Interactive Project Cost & Timeline Estimator
- Allows clients to choose website type (Business Website, Shopify Store, Custom Web App, POS System, Redesign).
- Choose scale (1–3 pages up to 15+ pages).
- Select optional features (WhatsApp integration, Payment gateways, Variant matrices, Multi-language, SEO suite, CMS).
- Toggle between **PKR (₨)** and **USD ($)**.
- Produces an indicative budget range and estimated development timeline.
- One-click **"Send This Estimate via WhatsApp"** generates a prefilled message directly to `+92 331 2901930`.

### 2. 5-Step Project Discovery Inquiry Modal
- Step 1: Select project type.
- Step 2: Describe project goals and requirements.
- Step 3: Choose investment budget range and target timeline.
- Step 4: Provide client contact details (Name, Business, Phone/WhatsApp, Email).
- Step 5: Review brief and submit directly via WhatsApp or Email.

### 3. Retail POS System Interactive Showcase
- Demonstrates HS Web Studio's retail POS software designed for clothing and apparel stores requiring color/size variant tracking, cashier shift balancing, and thermal receipt printing.

### 4. Direct WhatsApp Integration
- Floating WhatsApp trigger button with live online status badge.
- Inquiry forms generate formatted WhatsApp messages to ensure no lost leads.

---

## 5. Verified Portfolio & Demos

All existing demo projects and real client assets have been preserved:
- **Ziphyer:** [https://www.ziphyer.com/](https://www.ziphyer.com/) *(Live Client Shopify Store)*
- **Aurelia Home:** [https://homedecor.hswebstudio.site/](https://homedecor.hswebstudio.site/) *(Home Décor Concept)*
- **Nestora:** [https://furniture.hswebstudio.site/](https://furniture.hswebstudio.site/) *(Furniture Concept)*
- **Élan Dental:** [https://dental.hswebstudio.site/](https://dental.hswebstudio.site/) *(Healthcare / Dental Concept)*
- **Ember & Olive:** [https://restaurant.hswebstudio.site/](https://restaurant.hswebstudio.site/) *(Restaurant & Bistro Concept)*
- **ZARÉ GOLD:** [https://jewellery.hswebstudio.site/](https://jewellery.hswebstudio.site/) *(Luxury Jewellery Concept)*
- **Atelier Noir:** [https://interiordesign.hswebstudio.site/](https://interiordesign.hswebstudio.site/) *(Interior Design Concept)*
- **Home Nursing Care:** [https://nursinghome.hswebstudio.site/](https://nursinghome.hswebstudio.site/) *(In-Home Healthcare Concept)*
- **Willowmere Guest House:** [https://guesthouse.hswebstudio.site/](https://guesthouse.hswebstudio.site/) *(Hospitality Concept)*
- **Institute of Digital Dental Sciences:** [https://dentaleducation.hswebstudio.site/](https://dentaleducation.hswebstudio.site/) *(Dental Education Concept)*
- **HS Retail POS Engine:** Business management solution showcase.

---

## 6. Local Development Instructions

To run the project locally on your machine:

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev
```

Visit `http://localhost:5173/` in your browser.

---

## 7. Production Build Instructions

To generate the production-ready static assets:

```bash
npm run build
```

The output bundle is generated in the `dist/` directory, including:
- Optimized and minified JavaScript chunks (`vendor`, `icons`, `animations`, `index`)
- Minified CSS with auto-prefixed properties
- Preserved `CNAME` (`hswebstudio.site`)
- SPA 404 fallback (`404.html`)
- Pre-rendered `sitemap.xml` and `robots.txt`
- Complete asset imagery in `dist/assets/images/`

To preview the production build locally:

```bash
npm run preview
```

---

## 8. Deployment Workflow (GitHub Pages)

The repository is configured for automated deployment to GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`).

1. Ensure GitHub Pages is enabled in your repository:
   - Go to **Settings > Pages** on GitHub.
   - Under **Build and deployment > Source**, select **GitHub Actions**.
   - Custom domain should be set to `hswebstudio.site` with **Enforce HTTPS** checked.
2. Whenever changes are pushed to the `main` branch, the workflow will automatically build and publish the site.
3. The custom domain is preserved via `public/CNAME`.
4. Direct deep-link navigation (e.g. `/services/shopify`, `/about`) is guaranteed to work without 404 errors due to the included SPA redirect handler (`public/404.html` and `index.html`).

---

## 9. External Configuration (Optional)

### Contact Form Backend Integration
By default, the contact form dispatches via WhatsApp or opens the visitor's email client (`mailto:`).  
If you wish to receive form submissions via a headless form service (such as Formspree or Web3Forms), create a `.env.local` file:

```env
VITE_CONTACT_API=https://formspree.io/f/YOUR_FORM_ID
```

---

© 2026 HS Web Studio. All rights reserved.
