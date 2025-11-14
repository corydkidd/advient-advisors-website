# Advient Advisors Website

Premium single-page website for Dr. Cory Kidd's independent AI consulting practice.

## 🚀 Quick Start

### Development
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production
```bash
npm run build
npm start
```

## 📋 Features

- **Hero Section** - Full-screen hero with particle background animation and professional headshot
- **Credentials Bar** - MIT PhD, 25+ years in AI, CEO experience, published researcher
- **Services Section** - AI Strategy, Proof of Concept, Enterprise Integration
- **Case Studies** - 4 detailed project case studies showcasing real work
- **Industry Focus** - Pharmaceutical & Biotech, Maritime & Industrial, Healthcare Technology
- **Differentiation** - Comparison with traditional consulting approaches
- **Final CTA** - Call-to-action to schedule consultation
- **Footer** - Contact information and social links

## 🎨 Design System

### Colors
- **Navy Deep** (#0A1628) - Main background
- **Cyan Primary** (#00D9FF) - Accent color for CTAs and highlights
- **Gold Accent** (#FFB800) - Premium touches
- **Charcoal** (#1E2530) - Card backgrounds

### Typography
- **Headings**: Space Grotesk
- **Body**: Inter
- **Code**: JetBrains Mono

### Animations
- Framer Motion for scroll-triggered animations
- Custom particle background with mouse interaction
- Smooth hover effects and transitions

## 📱 Responsive Design

Fully responsive design with breakpoints:
- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+
- Large Desktop: 1440px+

## 🔧 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Space Grotesk + Inter)

## 📁 Project Structure

```
/
├── app/
│   ├── globals.css          # Global styles and CSS variables
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page integrating all sections
├── components/
│   ├── ParticleBackground.tsx
│   ├── Hero.tsx
│   ├── CredentialsBar.tsx
│   ├── Services.tsx
│   ├── CaseStudies.tsx
│   ├── Industries.tsx
│   ├── Differentiation.tsx
│   ├── FinalCTA.tsx
│   └── Footer.tsx
├── public/
│   └── images/
│       └── cory-kidd-headshot.jpg
└── package.json
```

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Other Platforms
The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- CloudFlare Pages
- Digital Ocean

## ⚙️ Configuration

### Environment Variables
No environment variables required for basic deployment.

### Meta Tags
All SEO meta tags are configured in `app/layout.tsx`:
- Title
- Description
- Keywords
- Open Graph tags
- Twitter Card tags

## 📝 Content Updates

To update content, edit the respective component files in the `components/` directory:

- **Hero text**: `components/Hero.tsx`
- **Services**: `components/Services.tsx`
- **Case studies**: `components/CaseStudies.tsx`
- **Industries**: `components/Industries.tsx`
- **Contact info**: `components/Footer.tsx`

## 🎯 Primary Goal

Drive consultation bookings through:
- **Calendar Link**: https://calendar.app.google/BrtTXrLKioutTtf77

## 📧 Contact

**Dr. Cory Kidd**
Advient Advisors LLC
Berkeley, CA
[cory@advientadvisors.com](mailto:cory@advientadvisors.com)
[LinkedIn](https://www.linkedin.com/in/coryk)

## 📄 License

© 2025 Advient Advisors LLC. All rights reserved.
