# Minimalism Tours Georgia

Official website for **Minimalism Tours Georgia** — *"Break Your Routine · Georgia, Beyond the Postcard"*, built with **Astro** for ultra-fast static hosting, 100% free deployment on **GitHub Pages**, and complete SEO readiness.

## Key Capabilities
- **100% Free Static Hosting**: Automatically builds and deploys on every GitHub Desktop push via `.github/workflows/deploy.yml` with zero server or database fees.
- **Subpath & Custom-Domain Ready**: Dynamically resolves `SITE_URL` and `BASE_PATH` from GitHub Pages so the same codebase works seamlessly at `https://<username>.github.io/minimalismtoursgeorgia/` today and at `https://minimalismtoursgeorgia.com/` whenever you connect a custom domain.
- **Full Technical SEO**: Canonical tags, `hreflang` alternates (`en` / `ka`), Open Graph & Twitter meta cards, XML `sitemap.xml`, `robots.txt`, semantic landmarks, and Schema.org `TravelAgency`, `TouristTrip`, `FAQPage`, and `BreadcrumbList` structured data.
- **Modern Interactive Tour Features**:
  - Live multi-facet tour filtering & sorting (`/tours/`)
  - Interactive Group Price Estimator (`1–16` travelers + Child 75% rate + live `EUR € / USD $ / GEL ₾` estimates)
  - Interactive SVG Destinations Explorer across Adjara, Kolkheti, Svaneti, and Kazbegi
  - Four Seasons Planner, Photo Gallery Lightbox (`<dialog>`), Accessible FAQ Accordions (`<details>`), and instant WhatsApp + Email booking links
  - Dedicated Georgian-language landing page (`/ka/`)

## Local Commands
```bash
npm install      # Install dependencies
npm run dev      # Start local dev server at http://localhost:4321
npm run build    # Type-check and build production static HTML into ./dist
npm run preview  # Preview the built ./dist site locally
```

## Editing Tours & Pricing
- Brand info, pickup points, vehicles, and certifications: `src/data/site.ts`
- Tour catalog, itineraries, FAQs, and 5-tier pricing: `src/data/tours.ts`
- Destination showcase data: `src/data/destinations.ts`
- Georgian (`/ka/`) landing content: `src/data/i18n-ka.ts`

For step-by-step publishing instructions with **GitHub Desktop**, read [`GITHUB_SETUP.md`](./GITHUB_SETUP.md).
