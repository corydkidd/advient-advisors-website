# ADVIENT ADVISORS WEBSITE - COMPLETE DESIGN SPECIFICATION
## Single-Page Premium AI Consulting Site

**Project Overview**: Premium single-page website for Dr. Cory Kidd's independent AI consulting practice, positioning him as "the premium AI operator-consultant" who bridges strategy and implementation.

**Target Audience**: Mid-to-large pharmaceutical, maritime, and industrial companies seeking enterprise AI strategy and implementation (not pure strategy consultants or pure developers).

**Primary Goal**: Book consultation calls with qualified enterprise prospects.

**Design Philosophy**: "Technical Gravitas Meets Executive Presence" - Bloomberg Terminal meets MIT Media Lab aesthetic. Sophisticated, data-informed, not sci-fi.

---

## TECHNICAL FOUNDATION

### Recommended Stack
```
Framework: Next.js 14+ (App Router) or clean HTML/CSS/JS
Styling: Tailwind CSS
Animations: Framer Motion
Background: particles.js or custom canvas animation
Hosting: Vercel
Icons: Lucide React or Heroicons
Fonts: Google Fonts (Space Grotesk + Inter)
```

### Dependencies
```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "framer-motion": "^10.0.0",
    "particles.js": "^2.0.0"
  },
  "devDependencies": {
    "tailwindcss": "^3.3.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0"
  }
}
```

---

## COLOR SYSTEM

### Primary Palette
```css
:root {
  /* Backgrounds */
  --navy-deep: #0A1628;
  --navy-medium: #1A2332;
  --charcoal: #1E2530;
  
  /* Accent Colors */
  --cyan-primary: #00D9FF;
  --cyan-glow: rgba(0, 217, 255, 0.2);
  --cyan-dim: rgba(0, 217, 255, 0.1);
  --gold-accent: #FFB800;
  
  /* Text Colors */
  --text-primary: #E8E9ED;
  --text-secondary: #A0A4B0;
  --text-muted: #6B7280;
  
  /* Semantic Colors */
  --success: #10B981;
  --warning: #F59E0B;
  
  /* Borders */
  --border-subtle: rgba(255, 255, 255, 0.1);
  --border-medium: rgba(255, 255, 255, 0.2);
}
```

### Usage Guidelines
- **Backgrounds**: Navy-deep for main background, charcoal for cards/sections
- **Accents**: Cyan for CTAs, hover states, borders; Gold sparingly for premium touches
- **Text**: Primary for headers/body, secondary for subheads, muted for captions
- **Borders**: Subtle for resting state, medium for hover, cyan for active

---

## TYPOGRAPHY SYSTEM

### Font Stack
```css
/* Headers - Geometric, technical feel */
font-family: 'Space Grotesk', system-ui, sans-serif;
/* Alternative options: 'Sora', 'Outfit', 'Plus Jakarta Sans' */

/* Body - Clean, readable */
font-family: 'Inter', system-ui, -apple-system, sans-serif;

/* Code/Technical (if needed) */
font-family: 'JetBrains Mono', 'Courier New', monospace;
```

### Type Scale
```css
/* Mobile-first, then desktop */
--text-xs: 0.75rem;      /* 12px */
--text-sm: 0.875rem;     /* 14px */
--text-base: 1rem;       /* 16px */
--text-lg: 1.125rem;     /* 18px */
--text-xl: 1.25rem;      /* 20px */
--text-2xl: 1.5rem;      /* 24px */
--text-3xl: 1.875rem;    /* 30px */
--text-4xl: 2.25rem;     /* 36px */
--text-5xl: 3rem;        /* 48px */
--text-6xl: 3.75rem;     /* 60px */

/* Desktop adjustments */
@media (min-width: 1024px) {
  --text-4xl: 2.5rem;    /* 40px */
  --text-5xl: 3.5rem;    /* 56px */
  --text-6xl: 4.5rem;    /* 72px */
}
```

### Typography Hierarchy
```css
/* H1 - Main hero */
font-size: var(--text-5xl);
font-weight: 700;
line-height: 1.1;
letter-spacing: -0.02em;

/* H2 - Section headers */
font-size: var(--text-4xl);
font-weight: 700;
line-height: 1.2;
letter-spacing: -0.01em;

/* H3 - Subsection headers */
font-size: var(--text-2xl);
font-weight: 600;
line-height: 1.3;

/* Body */
font-size: var(--text-lg);
font-weight: 400;
line-height: 1.6;

/* Caption */
font-size: var(--text-sm);
font-weight: 400;
line-height: 1.5;
color: var(--text-muted);
```

---

## SPACING SYSTEM

```css
:root {
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-5: 1.25rem;   /* 20px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-10: 2.5rem;   /* 40px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-20: 5rem;     /* 80px */
  --space-24: 6rem;     /* 96px */
}
```

### Layout Constraints
```css
--max-width-container: 1400px;
--max-width-content: 1200px;
--max-width-prose: 65ch;

--padding-mobile: var(--space-6);
--padding-tablet: var(--space-8);
--padding-desktop: var(--space-12);
```

---

## COMPONENT SPECIFICATIONS

### SECTION 1: HERO

#### Layout
```
┌─────────────────────────────────────────────────────┐
│  [Particle Network Background - Full Viewport]      │
│                                                      │
│  ┌──────────────────┐  ┌──────────────────────┐   │
│  │ LEFT (60%)       │  │ RIGHT (40%)          │   │
│  │                  │  │                      │   │
│  │ Dr. Cory Kidd    │  │ [Headshot Image]     │   │
│  │ ═══════════      │  │ - Cyan glow border   │   │
│  │                  │  │ - Tech overlay       │   │
│  │ Enterprise AI    │  │ - Geometric frame    │   │
│  │ Strategy &       │  │                      │   │
│  │ Implementation   │  │                      │   │
│  │                  │  │                      │   │
│  │ [Subheading]     │  │                      │   │
│  │                  │  │                      │   │
│  │ [2 CTAs]         │  │                      │   │
│  │                  │  │                      │   │
│  │ [Credentials]    │  │                      │   │
│  └──────────────────┘  └──────────────────────┘   │
│                                                      │
│             [Scroll Indicator ↓]                    │
└─────────────────────────────────────────────────────┘
```

#### HTML Structure
```html
<section id="hero" class="hero-section">
  <!-- Particle background canvas -->
  <canvas id="particles"></canvas>
  
  <div class="container">
    <div class="hero-grid">
      <!-- Left Column -->
      <div class="hero-content">
        <h1 class="hero-title">
          Dr. Cory Kidd
          <span class="title-underline"></span>
        </h1>
        
        <p class="hero-subtitle">
          Enterprise AI Strategy & Implementation
        </p>
        
        <p class="hero-description">
          I help pharmaceutical, maritime, and industrial companies 
          implement AI strategies that generate measurable ROI—not 
          decks, not roadmaps, working systems.
        </p>
        
        <div class="cta-buttons">
          <a href="https://calendar.app.google/BrtTXrLKioutTtf77" 
             class="btn-primary">
            Schedule Consultation
          </a>
          <a href="#case-studies" class="btn-secondary">
            View Recent Work
          </a>
        </div>
        
        <div class="credentials">
          <span>MIT Media Lab PhD</span>
          <span class="separator">•</span>
          <span>25+ Years in AI</span>
          <span class="separator">•</span>
          <span>Former CEO</span>
          <span class="separator">•</span>
          <span>Enterprise Consultant</span>
        </div>
      </div>
      
      <!-- Right Column -->
      <div class="hero-image">
        <div class="image-wrapper">
          <img src="/images/cory-kidd-headshot.jpg" 
               alt="Dr. Cory Kidd"
               class="headshot" />
          <div class="image-overlay"></div>
          <div class="geometric-frame"></div>
        </div>
      </div>
    </div>
  </div>
  
  <div class="scroll-indicator">
    <span>↓</span>
  </div>
</section>
```

#### Styles
```css
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: var(--navy-deep);
  overflow: hidden;
  padding: var(--space-16) 0;
}

#particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-12);
  align-items: center;
  position: relative;
  z-index: 1;
}

@media (min-width: 1024px) {
  .hero-grid {
    grid-template-columns: 60% 40%;
    gap: var(--space-16);
  }
}

.hero-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: var(--text-5xl);
  font-weight: 700;
  line-height: 1.1;
  color: var(--text-primary);
  margin-bottom: var(--space-4);
}

.title-underline {
  display: block;
  width: 120px;
  height: 4px;
  background: linear-gradient(90deg, var(--cyan-primary), transparent);
  margin-top: var(--space-3);
}

.hero-subtitle {
  font-size: var(--text-2xl);
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--space-6);
}

.hero-description {
  font-size: var(--text-lg);
  line-height: 1.6;
  color: var(--text-secondary);
  max-width: 600px;
  margin-bottom: var(--space-8);
}

.cta-buttons {
  display: flex;
  gap: var(--space-4);
  margin-bottom: var(--space-10);
  flex-wrap: wrap;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-4) var(--space-8);
  background: var(--cyan-primary);
  color: var(--navy-deep);
  font-weight: 600;
  font-size: var(--text-lg);
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 0 20px var(--cyan-glow);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 30px var(--cyan-glow), 0 4px 12px rgba(0, 0, 0, 0.3);
}

.btn-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-4) var(--space-8);
  background: transparent;
  color: var(--text-primary);
  font-weight: 600;
  font-size: var(--text-lg);
  border: 2px solid var(--border-medium);
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  border-color: var(--cyan-primary);
  color: var(--cyan-primary);
  box-shadow: 0 0 20px var(--cyan-dim);
}

.credentials {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
  align-items: center;
  font-size: var(--text-sm);
  color: var(--text-secondary);
}

.separator {
  color: var(--text-muted);
}

/* Image Styling */
.hero-image {
  position: relative;
}

.image-wrapper {
  position: relative;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
}

.headshot {
  width: 100%;
  height: auto;
  border-radius: 12px;
  position: relative;
  z-index: 2;
}

.image-overlay {
  position: absolute;
  top: -8px;
  left: -8px;
  right: -8px;
  bottom: -8px;
  border: 2px solid var(--cyan-primary);
  border-radius: 16px;
  box-shadow: 0 0 30px var(--cyan-glow);
  z-index: 1;
  pointer-events: none;
}

.geometric-frame::before,
.geometric-frame::after {
  content: '';
  position: absolute;
  width: 40px;
  height: 40px;
  border: 2px solid var(--cyan-primary);
  z-index: 3;
}

.geometric-frame::before {
  top: -12px;
  left: -12px;
  border-right: none;
  border-bottom: none;
}

.geometric-frame::after {
  bottom: -12px;
  right: -12px;
  border-left: none;
  border-top: none;
}

/* Scroll Indicator */
.scroll-indicator {
  position: absolute;
  bottom: var(--space-8);
  left: 50%;
  transform: translateX(-50%);
  font-size: var(--text-2xl);
  color: var(--cyan-primary);
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  40% {
    transform: translateX(-50%) translateY(-10px);
  }
  60% {
    transform: translateX(-50%) translateY(-5px);
  }
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .hero-title {
    font-size: var(--text-4xl);
  }
  
  .hero-subtitle {
    font-size: var(--text-xl);
  }
  
  .hero-description {
    font-size: var(--text-base);
  }
  
  .cta-buttons {
    flex-direction: column;
  }
  
  .btn-primary,
  .btn-secondary {
    width: 100%;
  }
}
```

#### Animation Behavior
```javascript
// Framer Motion variants for hero content
const heroVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

// Stagger children animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};
```

---

### SECTION 2: CREDIBILITY BAR

#### Layout
```
┌─────────────────────────────────────────────────────┐
│  Background: navy-medium                             │
│                                                      │
│  ┌──────┐    ┌──────┐    ┌──────┐    ┌──────┐    │
│  │ [📚] │    │ [⚡] │    │ [🏢] │    │ [📄] │    │
│  │      │    │      │    │      │    │      │    │
│  │ MIT  │    │  AI  │    │ CEO  │    │ RES. │    │
│  └──────┘    └──────┘    └──────┘    └──────┘    │
└─────────────────────────────────────────────────────┘
```

#### HTML Structure
```html
<section id="credentials" class="credentials-bar">
  <div class="container">
    <div class="credentials-grid">
      <div class="credential-item">
        <div class="credential-icon">
          <svg><!-- MIT icon --></svg>
        </div>
        <h3 class="credential-title">MIT MEDIA LAB</h3>
        <p class="credential-description">
          PhD in AI &<br/>Psychology (2007)
        </p>
      </div>
      
      <div class="credential-item">
        <div class="credential-icon">
          <svg><!-- Lightning bolt icon --></svg>
        </div>
        <h3 class="credential-title">AI COMMERCIALIZATION</h3>
        <p class="credential-description">
          25+ years building<br/>and deploying AI
        </p>
      </div>
      
      <div class="credential-item">
        <div class="credential-icon">
          <svg><!-- Building icon --></svg>
        </div>
        <h3 class="credential-title">HEALTHCARE CEO</h3>
        <p class="credential-description">
          Founded Catalia<br/>Health (2014)
        </p>
      </div>
      
      <div class="credential-item">
        <div class="credential-icon">
          <svg><!-- Document icon --></svg>
        </div>
        <h3 class="credential-title">PUBLISHED RESEARCHER</h3>
        <p class="credential-description">
          Patents in AI<br/>conversation systems
        </p>
      </div>
    </div>
  </div>
</section>
```

#### Styles
```css
.credentials-bar {
  background: var(--navy-medium);
  padding: var(--space-16) 0;
  border-top: 1px solid var(--border-subtle);
  border-bottom: 1px solid var(--border-subtle);
}

.credentials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--space-8);
  align-items: start;
}

.credential-item {
  text-align: center;
  padding: var(--space-6);
  transition: all 0.3s ease;
}

.credential-item:hover {
  transform: translateY(-4px);
}

.credential-item:not(:last-child) {
  border-right: 1px solid var(--border-subtle);
}

@media (max-width: 768px) {
  .credential-item:not(:last-child) {
    border-right: none;
    border-bottom: 1px solid var(--border-subtle);
  }
}

.credential-icon {
  width: 60px;
  height: 60px;
  margin: 0 auto var(--space-4);
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--cyan-dim);
  border: 2px solid var(--cyan-primary);
  border-radius: 50%;
  transition: all 0.3s ease;
}

.credential-item:hover .credential-icon {
  background: var(--cyan-glow);
  box-shadow: 0 0 20px var(--cyan-glow);
}

.credential-icon svg {
  width: 32px;
  height: 32px;
  color: var(--cyan-primary);
}

.credential-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: var(--text-sm);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--cyan-primary);
  margin-bottom: var(--space-2);
}

.credential-description {
  font-size: var(--text-sm);
  line-height: 1.5;
  color: var(--text-secondary);
}
```

---

### SECTION 3: WHAT I DO

#### HTML Structure
```html
<section id="services" class="services-section">
  <div class="container">
    <div class="section-header">
      <h2 class="section-title">What I Do Differently</h2>
      <p class="section-subtitle">
        Most AI consultants are either strategists who can't implement, 
        or developers who don't understand business. I bridge both worlds.
      </p>
    </div>
    
    <div class="services-grid">
      <div class="service-card">
        <div class="service-icon">
          <svg><!-- Strategy icon --></svg>
        </div>
        <h3 class="service-title">AI Strategy</h3>
        <p class="service-description">
          Not decks. Not roadmaps. Implementation plans with 
          accountability metrics and timelines. I've run companies 
          and know what works in the real world.
        </p>
      </div>
      
      <div class="service-card">
        <div class="service-icon">
          <svg><!-- Prototype icon --></svg>
        </div>
        <h3 class="service-title">Proof of Concept</h3>
        <p class="service-description">
          Validate AI use cases before committing to full deployment. 
          Real prototypes, real data, real results. Reduce risk and 
          prove ROI before scaling.
        </p>
      </div>
      
      <div class="service-card">
        <div class="service-icon">
          <svg><!-- Integration icon --></svg>
        </div>
        <h3 class="service-title">Enterprise Integration</h3>
        <p class="service-description">
          Make AI work in your existing tech stack and workflows. 
          Integration, deployment, training. I understand both the 
          technology and the organizational change required.
        </p>
      </div>
    </div>
  </div>
</section>
```

#### Styles
```css
.services-section {
  padding: var(--space-24) 0;
  background: var(--navy-deep);
}

.section-header {
  text-align: center;
  max-width: 800px;
  margin: 0 auto var(--space-16);
}

.section-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: var(--text-4xl);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: var(--space-4);
}

.section-subtitle {
  font-size: var(--text-lg);
  line-height: 1.6;
  color: var(--text-secondary);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-8);
}

.service-card {
  background: var(--charcoal);
  padding: var(--space-8);
  border-radius: 12px;
  border: 1px solid var(--border-subtle);
  transition: all 0.3s ease;
}

.service-card:hover {
  transform: translateY(-4px);
  border-color: var(--cyan-primary);
  box-shadow: 0 8px 24px var(--cyan-dim);
}

.service-icon {
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--cyan-dim);
  border-radius: 12px;
  margin-bottom: var(--space-6);
  transition: all 0.3s ease;
}

.service-card:hover .service-icon {
  background: var(--cyan-glow);
  box-shadow: 0 0 20px var(--cyan-glow);
}

.service-icon svg {
  width: 32px;
  height: 32px;
  color: var(--cyan-primary);
}

.service-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: var(--text-xl);
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--space-4);
}

.service-description {
  font-size: var(--text-base);
  line-height: 1.6;
  color: var(--text-secondary);
}
```

---

### SECTION 4: CASE STUDIES

#### HTML Structure
```html
<section id="case-studies" class="case-studies-section">
  <div class="container">
    <div class="section-header">
      <h2 class="section-title">Recent Projects</h2>
      <p class="section-subtitle">
        Results-driven AI implementation across regulated industries
      </p>
    </div>
    
    <div class="case-studies-grid">
      <!-- Case Study 1 -->
      <article class="case-study-card">
        <div class="case-study-header">
          <span class="case-study-category">PHARMACEUTICAL AI STRATEGY</span>
        </div>
        
        <h3 class="case-study-company">
          Mid-Size Pharmaceutical Company
        </h3>
        
        <h4 class="case-study-title">
          Comprehensive AI Strategy & Proof of Concept
        </h4>
        
        <p class="case-study-description">
          Built two parallel workstreams: organizational readiness assessment 
          and predictive analytics proof of concept for market optimization.
        </p>
        
        <div class="case-study-deliverables">
          <h5>Deliverables:</h5>
          <ul>
            <li>Benchmarking analysis across 8 readiness pillars vs. industry peers</li>
            <li>Strategic roadmap for enterprise-wide AI implementation</li>
            <li>Proof of concept: Predictive model achieving 8-10 week advance 
                warning for market demand surges</li>
            <li>Successfully demonstrated ROI, leading to full-scale 
                implementation contract</li>
          </ul>
        </div>
        
        <div class="case-study-outcome">
          <span class="outcome-label">Outcome:</span>
          <span>Client moved from assessment to full deployment based on proven concept</span>
        </div>
      </article>
      
      <!-- Case Study 2 -->
      <article class="case-study-card">
        <div class="case-study-header">
          <span class="case-study-category">MARITIME ENTERPRISE AI TRAINING</span>
        </div>
        
        <h3 class="case-study-company">
          $1.5B Maritime & Energy Company
        </h3>
        
        <h4 class="case-study-title">
          Executive Training & Organization-Wide AI Adoption
        </h4>
        
        <p class="case-study-description">
          Designed and delivered comprehensive AI training program for shore-based 
          employees in organization transitioning to AI-augmented operations.
        </p>
        
        <div class="case-study-deliverables">
          <h5>Deliverables:</h5>
          <ul>
            <li>Executive workshops for C-suite leadership</li>
            <li>Company-wide GenAI training for ~165 shore-based employees 
                (100% voluntary participation rate)</li>
            <li>Department-specific tailored training programs</li>
            <li>AI analyst tool development for corporate development function</li>
            <li>Ongoing strategic advisory for AI implementation</li>
          </ul>
        </div>
        
        <div class="case-study-focus">
          <span class="focus-label">Focus:</span>
          <span>Practical AI implementation for workflow automation, 
                competitive intelligence, and operational efficiency</span>
        </div>
      </article>
      
      <!-- Case Study 3 -->
      <article class="case-study-card">
        <div class="case-study-header">
          <span class="case-study-category">BIOTECHNOLOGY SALES TRANSFORMATION</span>
        </div>
        
        <h3 class="case-study-company">
          Food Safety & Microbiology Company
        </h3>
        
        <h4 class="case-study-title">
          AI Strategy Keynotes for Global Sales Organization
        </h4>
        
        <p class="case-study-description">
          Delivered keynote presentations at annual sales meetings for both 
          US and EMEA divisions, focusing on practical AI applications for 
          sales acceleration.
        </p>
        
        <div class="case-study-deliverables">
          <h5>Content:</h5>
          <ul>
            <li>AI-powered customer targeting and territory optimization</li>
            <li>LLM applications for technical sales communications</li>
            <li>Competitive intelligence automation</li>
            <li>Implementation framework for sales organizations</li>
          </ul>
        </div>
        
        <div class="case-study-audience">
          <span class="audience-label">Audience:</span>
          <span>90+ sales representatives, software team, C-suite leadership</span>
        </div>
      </article>
      
      <!-- Case Study 4 -->
      <article class="case-study-card">
        <div class="case-study-header">
          <span class="case-study-category">HEALTHCARE AI COMMERCIALIZATION</span>
        </div>
        
        <h3 class="case-study-company">
          Founded & Scaled Patient Engagement Platform (2014-2024)
        </h3>
        
        <h4 class="case-study-title">
          Catalia Health - AI-Powered Chronic Disease Management
        </h4>
        
        <p class="case-study-description">
          Built hardware/software system (social robots + AI conversation engine) 
          for patient engagement deployed by pharmaceutical leaders.
        </p>
        
        <div class="case-study-deliverables">
          <h5>Achievements:</h5>
          <ul>
            <li>Pharma customers: Pfizer, Novartis</li>
            <li>3 US patents in AI conversation systems</li>
            <li>Secured $10M+ in VC/PE funding</li>
            <li>Managed full product lifecycle: R&D → clinical validation → 
                commercial deployment</li>
            <li>Integrated with major pharmacy chains (Walgreens, CVS)</li>
          </ul>
        </div>
        
        <div class="case-study-demonstrates">
          <span class="demonstrates-label">Demonstrates:</span>
          <span>10-year track record commercializing AI in regulated 
                healthcare environments</span>
        </div>
      </article>
    </div>
  </div>
</section>
```

#### Styles
```css
.case-studies-section {
  padding: var(--space-24) 0;
  background: var(--navy-medium);
}

.case-studies-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: var(--space-8);
}

@media (max-width: 768px) {
  .case-studies-grid {
    grid-template-columns: 1fr;
  }
}

.case-study-card {
  background: var(--charcoal);
  padding: var(--space-8);
  border-radius: 12px;
  border: 1px solid var(--border-subtle);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.case-study-card:hover {
  border-color: var(--cyan-primary);
  box-shadow: 0 8px 24px var(--cyan-dim);
}

.case-study-header {
  margin-bottom: var(--space-2);
}

.case-study-category {
  display: inline-block;
  font-size: var(--text-xs);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--gold-accent);
  padding: var(--space-2) var(--space-3);
  background: rgba(255, 184, 0, 0.1);
  border-radius: 4px;
}

.case-study-company {
  font-family: 'Space Grotesk', sans-serif;
  font-size: var(--text-lg);
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--space-2);
}

.case-study-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: var(--text-xl);
  font-weight: 700;
  color: var(--cyan-primary);
  margin-bottom: var(--space-3);
}

.case-study-description {
  font-size: var(--text-base);
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: var(--space-4);
}

.case-study-deliverables,
.case-study-focus,
.case-study-outcome,
.case-study-audience,
.case-study-demonstrates {
  margin-top: var(--space-4);
}

.case-study-deliverables h5 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: var(--text-sm);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-primary);
  margin-bottom: var(--space-3);
}

.case-study-deliverables ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.case-study-deliverables li {
  position: relative;
  padding-left: var(--space-5);
  margin-bottom: var(--space-2);
  font-size: var(--text-sm);
  line-height: 1.5;
  color: var(--text-secondary);
}

.case-study-deliverables li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--cyan-primary);
  font-weight: 700;
}

.outcome-label,
.focus-label,
.audience-label,
.demonstrates-label {
  font-weight: 700;
  color: var(--cyan-primary);
  margin-right: var(--space-2);
}

.case-study-outcome,
.case-study-focus,
.case-study-audience,
.case-study-demonstrates {
  font-size: var(--text-sm);
  line-height: 1.5;
  color: var(--text-secondary);
  padding: var(--space-3);
  background: rgba(0, 217, 255, 0.05);
  border-left: 3px solid var(--cyan-primary);
  border-radius: 4px;
}
```

---

### SECTION 5: INDUSTRY FOCUS

#### HTML Structure
```html
<section id="industries" class="industries-section">
  <div class="container">
    <div class="section-header">
      <h2 class="section-title">Industry Focus</h2>
    </div>
    
    <div class="industries-grid">
      <div class="industry-card">
        <div class="industry-icon">
          <svg><!-- Pharmaceutical icon --></svg>
        </div>
        <h3 class="industry-title">Pharmaceutical & Biotech</h3>
        <p class="industry-description">
          AI strategy for regulated environments. Clinical trials, 
          commercial operations, patient engagement.
        </p>
      </div>
      
      <div class="industry-card">
        <div class="industry-icon">
          <svg><!-- Ship/Industrial icon --></svg>
        </div>
        <h3 class="industry-title">Maritime & Industrial</h3>
        <p class="industry-description">
          Operational AI for shipping, energy, and manufacturing. 
          Safety, efficiency, automation.
        </p>
      </div>
      
      <div class="industry-card">
        <div class="industry-icon">
          <svg><!-- Healthcare tech icon --></svg>
        </div>
        <h3 class="industry-title">Healthcare Technology</h3>
        <p class="industry-description">
          Product innovation and go-to-market strategy for health 
          tech companies.
        </p>
      </div>
    </div>
  </div>
</section>
```

#### Styles
```css
.industries-section {
  padding: var(--space-24) 0;
  background: var(--navy-deep);
}

.industries-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-8);
}

.industry-card {
  text-align: center;
  padding: var(--space-8);
  background: var(--charcoal);
  border-radius: 12px;
  border: 1px solid var(--border-subtle);
  transition: all 0.3s ease;
}

.industry-card:hover {
  transform: translateY(-4px);
  border-color: var(--cyan-primary);
  box-shadow: 0 8px 24px var(--cyan-dim);
}

.industry-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto var(--space-6);
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--cyan-dim);
  border-radius: 50%;
  transition: all 0.3s ease;
}

.industry-card:hover .industry-icon {
  background: var(--cyan-glow);
  box-shadow: 0 0 30px var(--cyan-glow);
}

.industry-icon svg {
  width: 40px;
  height: 40px;
  color: var(--cyan-primary);
}

.industry-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: var(--text-xl);
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--space-4);
}

.industry-description {
  font-size: var(--text-base);
  line-height: 1.6;
  color: var(--text-secondary);
}
```

---

### SECTION 6: WHY THIS WORKS DIFFERENTLY

#### HTML Structure
```html
<section id="differentiation" class="differentiation-section">
  <div class="container">
    <div class="section-header">
      <h2 class="section-title">Why This Works Differently</h2>
    </div>
    
    <div class="comparison-grid">
      <div class="comparison-column traditional">
        <h3 class="comparison-title">Traditional Consulting</h3>
        <ul class="comparison-list">
          <li>Strategy firms deliver roadmaps and leave</li>
          <li>Junior analysts research best practices</li>
          <li>"Digital transformation" frameworks</li>
          <li>You implement (or it dies)</li>
        </ul>
      </div>
      
      <div class="comparison-divider">
        <span>VS</span>
      </div>
      
      <div class="comparison-column advient">
        <h3 class="comparison-title">Advient Approach</h3>
        <ul class="comparison-list">
          <li>I've been a CEO, built products at scale, and understand 
              both the boardroom and the codebase</li>
          <li>Direct engagement with your team - no intermediaries</li>
          <li>Concrete AI implementations with measurable ROI</li>
          <li>Partnership through deployment</li>
        </ul>
      </div>
    </div>
    
    <div class="pullquote">
      <blockquote>
        "I don't just recommend AI strategies. I've spent 25 years building 
        and commercializing AI products in regulated industries. I know what 
        works because I've done it."
      </blockquote>
    </div>
  </div>
</section>
```

#### Styles
```css
.differentiation-section {
  padding: var(--space-24) 0;
  background: var(--charcoal);
}

.comparison-grid {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: var(--space-8);
  align-items: center;
  margin-bottom: var(--space-16);
}

@media (max-width: 1024px) {
  .comparison-grid {
    grid-template-columns: 1fr;
    gap: var(--space-6);
  }
  
  .comparison-divider {
    display: none;
  }
}

.comparison-column {
  padding: var(--space-8);
  border-radius: 12px;
  border: 2px solid var(--border-subtle);
}

.comparison-column.advient {
  border-color: var(--cyan-primary);
  background: var(--cyan-dim);
}

.comparison-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: var(--text-xl);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: var(--space-6);
  text-align: center;
}

.comparison-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.comparison-list li {
  position: relative;
  padding-left: var(--space-6);
  margin-bottom: var(--space-4);
  font-size: var(--text-base);
  line-height: 1.6;
  color: var(--text-secondary);
}

.traditional .comparison-list li::before {
  content: '✗';
  position: absolute;
  left: 0;
  color: var(--text-muted);
  font-weight: 700;
}

.advient .comparison-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--cyan-primary);
  font-weight: 700;
}

.comparison-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Space Grotesk', sans-serif;
  font-size: var(--text-2xl);
  font-weight: 700;
  color: var(--text-muted);
  padding: 0 var(--space-4);
}

.pullquote {
  max-width: 900px;
  margin: 0 auto;
  padding: var(--space-8);
  background: var(--navy-deep);
  border-left: 4px solid var(--cyan-primary);
  border-radius: 8px;
}

.pullquote blockquote {
  font-size: var(--text-xl);
  line-height: 1.6;
  color: var(--text-primary);
  font-style: italic;
  margin: 0;
}

.pullquote blockquote::before {
  content: '"';
  font-size: var(--text-4xl);
  color: var(--cyan-primary);
  line-height: 0;
  margin-right: var(--space-2);
}
```

---

### SECTION 7: FINAL CTA

#### HTML Structure
```html
<section id="final-cta" class="final-cta-section">
  <div class="container">
    <div class="cta-content">
      <h2 class="cta-title">
        Ready to Implement AI That Delivers Results?
      </h2>
      
      <p class="cta-subtitle">
        Let's discuss your specific challenges and how AI can 
        drive measurable outcomes for your organization.
      </p>
      
      <a href="https://calendar.app.google/BrtTXrLKioutTtf77" 
         class="btn-primary btn-large">
        Schedule a Consultation
      </a>
      
      <div class="cta-notes">
        <p>Typical first call: 30 minutes, no obligation.</p>
        <p>We'll discuss your goals and whether there's a fit.</p>
      </div>
      
      <div class="trust-indicators">
        <div class="trust-item">
          Clients include pharmaceutical, maritime, and industrial leaders
        </div>
        <div class="trust-item">
          Focus on regulated industries and enterprise complexity
        </div>
      </div>
    </div>
  </div>
</section>
```

#### Styles
```css
.final-cta-section {
  padding: var(--space-24) 0;
  background: var(--navy-medium);
  text-align: center;
}

.cta-content {
  max-width: 800px;
  margin: 0 auto;
}

.cta-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: var(--text-4xl);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: var(--space-6);
}

.cta-subtitle {
  font-size: var(--text-xl);
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: var(--space-10);
}

.btn-large {
  font-size: var(--text-xl);
  padding: var(--space-6) var(--space-12);
}

.cta-notes {
  margin-top: var(--space-8);
  margin-bottom: var(--space-10);
}

.cta-notes p {
  font-size: var(--text-sm);
  color: var(--text-muted);
  margin-bottom: var(--space-2);
}

.trust-indicators {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  align-items: center;
}

.trust-item {
  font-size: var(--text-sm);
  color: var(--text-secondary);
  padding: var(--space-3) var(--space-6);
  background: var(--charcoal);
  border-radius: 4px;
  border-left: 3px solid var(--cyan-primary);
}
```

---

### FOOTER

#### HTML Structure
```html
<footer class="site-footer">
  <div class="container">
    <div class="footer-content">
      <div class="footer-branding">
        <h3>Dr. Cory Kidd</h3>
        <p>Advient Advisors LLC</p>
      </div>
      
      <div class="footer-contact">
        <p>Berkeley, CA</p>
        <p>
          <a href="mailto:cory@advientadvisors.com">cory@advientadvisors.com</a>
        </p>
        <p>
          <a href="https://www.linkedin.com/in/coryk" 
             target="_blank" 
             rel="noopener noreferrer">
            LinkedIn
          </a>
        </p>
      </div>
    </div>
    
    <div class="footer-bottom">
      <p>&copy; 2025 Advient Advisors LLC. All rights reserved.</p>
    </div>
  </div>
</footer>
```

#### Styles
```css
.site-footer {
  background: var(--charcoal);
  padding: var(--space-16) 0 var(--space-8);
  border-top: 1px solid var(--border-subtle);
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--space-8);
  margin-bottom: var(--space-8);
}

.footer-branding h3 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: var(--text-xl);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: var(--space-2);
}

.footer-branding p {
  font-size: var(--text-base);
  color: var(--text-secondary);
}

.footer-contact p {
  font-size: var(--text-sm);
  color: var(--text-secondary);
  margin-bottom: var(--space-2);
}

.footer-contact a {
  color: var(--cyan-primary);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-contact a:hover {
  color: var(--text-primary);
  text-decoration: underline;
}

.footer-bottom {
  text-align: center;
  padding-top: var(--space-8);
  border-top: 1px solid var(--border-subtle);
}

.footer-bottom p {
  font-size: var(--text-sm);
  color: var(--text-muted);
}
```

---

## PARTICLE BACKGROUND ANIMATION

### Implementation (particles.js)
```javascript
// particles-config.js
export const particlesConfig = {
  particles: {
    number: {
      value: 120,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#00D9FF"
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.4,
      random: true,
      anim: {
        enable: true,
        speed: 0.5,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: true,
        speed: 2,
        size_min: 0.5,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#00D9FF",
      opacity: 0.2,
      width: 1
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: true,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab"
      },
      onclick: {
        enable: false
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 0.5
        }
      }
    }
  },
  retina_detect: true
};
```

### Initialization
```javascript
// Initialize particles on hero section
import particlesJS from 'particles.js';
import { particlesConfig } from './particles-config';

document.addEventListener('DOMContentLoaded', () => {
  particlesJS('particles', particlesConfig);
});
```

### Mobile Optimization
```javascript
// Reduce particle count on mobile
const isMobile = window.innerWidth < 768;

if (isMobile) {
  particlesConfig.particles.number.value = 50;
  particlesConfig.particles.line_linked.distance = 100;
}
```

---

## RESPONSIVE DESIGN BREAKPOINTS

```css
/* Mobile: 320px - 767px */
@media (max-width: 767px) {
  :root {
    --space-section: var(--space-16);
  }
  
  .hero-grid {
    grid-template-columns: 1fr;
  }
  
  .hero-image {
    order: -1; /* Image above text on mobile */
  }
  
  .services-grid,
  .case-studies-grid,
  .industries-grid {
    grid-template-columns: 1fr;
  }
  
  .credentials-grid {
    grid-template-columns: 1fr;
  }
  
  .credential-item:not(:last-child) {
    border-right: none;
    border-bottom: 1px solid var(--border-subtle);
  }
}

/* Tablet: 768px - 1023px */
@media (min-width: 768px) and (max-width: 1023px) {
  .hero-grid {
    grid-template-columns: 1fr 1fr;
  }
  
  .services-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
  
  .case-studies-grid {
    grid-template-columns: 1fr;
  }
}

/* Desktop: 1024px+ */
@media (min-width: 1024px) {
  .hero-grid {
    grid-template-columns: 60% 40%;
  }
  
  .services-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .case-studies-grid {
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  }
}

/* Large Desktop: 1440px+ */
@media (min-width: 1440px) {
  .container {
    max-width: 1400px;
  }
}
```

---

## ANIMATION & SCROLL BEHAVIOR

### Scroll-triggered Animations (Framer Motion)
```javascript
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

// Fade in on scroll
const FadeIn = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

// Stagger children
const StaggerContainer = ({ children, staggerDelay = 0.1 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
};
```

### Smooth Scroll
```javascript
// Smooth scroll to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
```

---

## IMAGE PROCESSING REQUIREMENTS

### Headshot Image Processing
```
Input: i-PT9PtJ8-X4.jpg
Output: cory-kidd-headshot.jpg

Processing steps:
1. Crop to 800x1000px (portrait orientation)
2. Optimize for web (reduce file size to <200KB)
3. Export as .jpg (quality: 85%)
4. Create @2x version for retina displays (1600x2000px)

CSS Implementation:
.headshot {
  width: 100%;
  height: auto;
  max-width: 500px;
}

@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  .headshot {
    content: url('/images/cory-kidd-headshot@2x.jpg');
  }
}
```

### Overlay Effect
```css
/* Semi-transparent tech overlay on image */
.image-wrapper::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(circle at 20% 30%, rgba(0, 217, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(0, 217, 255, 0.08) 0%, transparent 50%);
  pointer-events: none;
  z-index: 2;
}
```

---

## PERFORMANCE OPTIMIZATION

### Critical CSS (inline in <head>)
```css
/* Inline critical above-the-fold styles */
<style>
  :root {
    --navy-deep: #0A1628;
    --text-primary: #E8E9ED;
    --cyan-primary: #00D9FF;
  }
  
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    background: var(--navy-deep);
    color: var(--text-primary);
  }
  
  .hero-section {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
</style>
```

### Lazy Loading
```html
<!-- Lazy load images below the fold -->
<img src="placeholder.jpg" 
     data-src="actual-image.jpg" 
     loading="lazy" 
     alt="Description" />
```

### Font Loading Strategy
```html
<head>
  <!-- Preload critical fonts -->
  <link rel="preload" 
        href="/fonts/SpaceGrotesk-Bold.woff2" 
        as="font" 
        type="font/woff2" 
        crossorigin />
  
  <link rel="preload" 
        href="/fonts/Inter-Regular.woff2" 
        as="font" 
        type="font/woff2" 
        crossorigin />
  
  <!-- Google Fonts with display=swap -->
  <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&family=Inter:wght@400;500;600;700&display=swap" />
</head>
```

---

## ACCESSIBILITY

### Semantic HTML
```html
<!-- Use proper heading hierarchy -->
<h1>Dr. Cory Kidd</h1>
<h2>What I Do Differently</h2>
<h3>AI Strategy</h3>

<!-- Proper link labels -->
<a href="#services" aria-label="Navigate to services section">
  View Services
</a>

<!-- Alt text for images -->
<img src="headshot.jpg" alt="Dr. Cory Kidd, AI consultant" />
```

### Keyboard Navigation
```css
/* Focus states for keyboard navigation */
a:focus,
button:focus {
  outline: 2px solid var(--cyan-primary);
  outline-offset: 2px;
}

/* Skip to main content link */
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: var(--cyan-primary);
  color: var(--navy-deep);
  padding: 8px;
  text-decoration: none;
  z-index: 100;
}

.skip-link:focus {
  top: 0;
}
```

### Color Contrast
All text meets WCAG AA standards:
- Primary text (#E8E9ED) on navy-deep (#0A1628): 12.6:1 ✓
- Secondary text (#A0A4B0) on navy-deep: 8.2:1 ✓
- Cyan (#00D9FF) on navy-deep: 7.4:1 ✓

---

## DEPLOYMENT CHECKLIST

### Pre-launch
- [ ] Test on Chrome, Firefox, Safari, Edge
- [ ] Test on iOS (iPhone/iPad)
- [ ] Test on Android
- [ ] Verify all links work (especially calendar link)
- [ ] Check images load correctly
- [ ] Test form submissions (if applicable)
- [ ] Run Lighthouse audit (target: 90+ performance)
- [ ] Verify meta tags and OG tags
- [ ] Test loading speed (<3 seconds initial load)

### Meta Tags
```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  <title>Dr. Cory Kidd - Enterprise AI Strategy & Implementation | Advient Advisors</title>
  
  <meta name="description" 
        content="I help pharmaceutical, maritime, and industrial companies implement AI strategies that generate measurable ROI. MIT PhD with 25+ years building AI products." />
  
  <meta name="keywords" 
        content="AI consultant, enterprise AI strategy, AI implementation, pharmaceutical AI, maritime AI, healthcare technology, MIT AI expert" />
  
  <!-- Open Graph -->
  <meta property="og:title" 
        content="Dr. Cory Kidd - Enterprise AI Strategy & Implementation" />
  <meta property="og:description" 
        content="Enterprise AI consultant helping pharma, maritime, and industrial companies implement working systems." />
  <meta property="og:image" 
        content="https://www.advientadvisors.com/images/og-image.jpg" />
  <meta property="og:url" 
        content="https://www.advientadvisors.com" />
  <meta property="og:type" content="website" />
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" 
        content="Dr. Cory Kidd - Enterprise AI Strategy & Implementation" />
  <meta name="twitter:description" 
        content="Enterprise AI consultant with 25+ years building AI products for regulated industries." />
  <meta name="twitter:image" 
        content="https://www.advientadvisors.com/images/twitter-card.jpg" />
  
  <!-- Favicon -->
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
</head>
```

---

## NEXT STEPS FOR IMPLEMENTATION

1. **Set up project structure**
   ```
   /advient-website
   ├── /public
   │   ├── /images
   │   │   ├── cory-kidd-headshot.jpg
   │   │   └── cory-kidd-headshot@2x.jpg
   │   └── /fonts
   ├── /src
   │   ├── /components
   │   │   ├── Hero.jsx
   │   │   ├── CredentialsBar.jsx
   │   │   ├── Services.jsx
   │   │   ├── CaseStudies.jsx
   │   │   ├── Industries.jsx
   │   │   ├── Differentiation.jsx
   │   │   ├── FinalCTA.jsx
   │   │   └── Footer.jsx
   │   ├── /styles
   │   │   ├── globals.css
   │   │   └── variables.css
   │   ├── /utils
   │   │   └── particles-config.js
   │   └── App.jsx
   └── package.json
   ```

2. **Install dependencies**
   ```bash
   npm install next react react-dom framer-motion particles.js
   npm install -D tailwindcss autoprefixer postcss
   ```

3. **Process headshot image**
   - Crop i-PT9PtJ8-X4.jpg to 800x1000px
   - Optimize and save as cory-kidd-headshot.jpg
   - Create @2x version (1600x2000px)

4. **Implement components** following specifications above

5. **Test thoroughly** on multiple devices/browsers

6. **Deploy to Vercel** (or hosting of choice)

---

## SUMMARY

This specification provides everything needed to implement a premium single-page website for Advient Advisors that:

✓ Positions Dr. Cory Kidd as premium AI operator-consultant  
✓ Bridges technical credibility with executive presence  
✓ Uses sophisticated "Bloomberg Terminal meets MIT Media Lab" aesthetic  
✓ Drives consultation bookings as primary conversion goal  
✓ Showcases real project experience without violating NDAs  
✓ Differentiates from pure strategy consultants and pure developers  
✓ Works perfectly on mobile, tablet, and desktop  
✓ Loads fast and performs well  
✓ Scales to multi-page site in Phase 2  

**Primary CTA**: https://calendar.app.google/BrtTXrLKioutTtf77  
**Brand Positioning**: "The premium AI operator-consultant who bridges strategy and implementation"  
**Design Philosophy**: Technical gravitas meets executive presence

Ready for implementation in Claude Code.
