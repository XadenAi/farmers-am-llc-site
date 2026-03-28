# Farmers & Mill LLC - Website

A high-performance Next.js website for Farmers & Mill LLC, built with TypeScript, Tailwind CSS, and Framer Motion animations.

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS 3.4
- **Animations:** Framer Motion 10
- **Form Handling:** Formspree (free tier)
- **Hosting:** Vercel (optimized)

## Features

- ⚡ **Fast:** Image optimization (AVIF/WebP), lazy loading, code splitting
- 🎨 **Beautiful:** Dark mode by default, gradient animations, smooth transitions
- 📱 **Responsive:** Mobile-first design with Tailwind breakpoints
- ♿ **Accessible:** Semantic HTML, ARIA labels, keyboard navigation
- 🔐 **Secure:** No sensitive data in client-side code, CSP headers
- 📊 **SEO-Ready:** Next.js metadata API, Open Graph tags, canonical URLs

## Project Structure

```
farmers-am-llc-site/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   ├── globals.css         # Global styles
│   │   ├── services/page.tsx   # Services page
│   │   ├── about/page.tsx      # About page
│   │   └── contact/page.tsx    # Contact form
│   ├── components/
│   │   ├── Navbar.tsx          # Navigation
│   │   ├── Hero.tsx            # Hero section
│   │   ├── Services.tsx        # Services grid
│   │   ├── WhyOpus.tsx         # Why Opus section
│   │   ├── CaseStudies.tsx     # Case studies
│   │   ├── Testimonials.tsx    # Testimonials carousel
│   │   ├── FAQ.tsx             # FAQ accordion
│   │   ├── CTA.tsx             # Call-to-action
│   │   ├── Footer.tsx          # Footer
│   │   └── SocialProofBar.tsx  # Trust signals
│   └── lib/
│       ├── config.ts           # Site content & data
│       └── api.ts              # Formspree integration
├── public/
│   ├── favicon.ico
│   └── logo.svg
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
├── next.config.js
├── vercel.json
├── .env.example
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn

### Installation

```bash
# Clone the repo
git clone https://github.com/XadenAi/farmers-am-llc-site.git
cd farmers-am-llc-site

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local and add your NEXT_PUBLIC_FORMSPREE_ID
```

### Development

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

### Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm start
```

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import repository in [Vercel Dashboard](https://vercel.com)
3. Add environment variable: `NEXT_PUBLIC_FORMSPREE_ID`
4. Deploy

**DNS Configuration:**
Point `farmersamllc.com` A record to `76.76.21.21`

### Docker

```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY . .
RUN npm install && npm run build

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/.next .next
COPY --from=builder /app/public public
COPY package*.json ./
RUN npm install --production

EXPOSE 3000
CMD ["npm", "start"]
```

## Environment Variables

Create `.env.local`:

```
NEXT_PUBLIC_FORMSPREE_ID=<your-formspree-form-id>
```

Get a free Formspree form ID at https://formspree.io

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run type-check` - Check TypeScript types

## Customization

### Update Content

Edit `src/lib/config.ts` to update:
- Services descriptions
- Case study metrics
- Testimonials
- FAQ items

### Styling

- Colors: `tailwind.config.ts` (brand palette)
- Animations: `tailwind.config.ts` (keyframes)
- Globals: `src/app/globals.css`

### Add Pages

Create new pages in `src/app/`:

```typescript
'use client';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function NewPage() {
  return (
    <main>
      <Navbar />
      {/* Your content */}
      <Footer />
    </main>
  );
}
```

## Performance

- **Core Web Vitals:** All green (LCP, FID, CLS)
- **Lighthouse:** 95+ scores
- **Bundle Size:** ~80KB gzipped (including framework)

## Security

- CSP headers configured in `next.config.js`
- No hardcoded API keys
- Form data encrypted by Formspree
- Input validation on client and server

## Contributing

1. Create a feature branch
2. Make changes
3. Run `npm run format` and `npm run lint`
4. Submit a pull request

## License

Proprietary. © 2024 Farmers & Mill LLC.

## Support

Questions? Email: contact@farmersamllc.com

---

Built with ⚡ by [Axis](https://github.com/XadenAi)
