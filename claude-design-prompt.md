# Claude Design Prompt — Jakub Lichosik Personal Brand Website

> Paste this prompt into Claude Design to generate a clickable prototype of the full landing page.

---

## Prompt

Design a **premium personal brand portfolio landing page** for **Jakub Lichosik** — Software Engineer / DevOps / SRE / Scrum Master. The design must produce an immediate "WOW" reaction from an IT recruiter or tech lead within 10–15 seconds of landing on the page.

---

### Person & brand positioning

**Name**: Jakub Lichosik  
**Headline**: Software Engineer · DevOps / SRE · Scrum & Delivery  
**Tagline**: "Building reliable systems, improving team flow, and shipping across backend, cloud and product execution."  
**Email**: kuba.lichosik@gmail.com  
**GitHub**: github.com/Kuber-code  
**LinkedIn**: linkedin.com/in/jakublichosik  
**Location**: Katowice, Poland — previously 5 years in Switzerland (Zurich + Zug, last 2 years freelancer)  
**Languages**: Polish (native), English (C1/C2), German (B1)  
**Certifications**: PSPO I (Professional Scrum Product Owner), AWS DevOps Monitoring

---

### Technology stack the implementation will use

The prototype must reflect the final tech stack so the design translates directly to code:

- **Framework**: Next.js 16 with App Router (React 19, TypeScript)
- **Styling**: Tailwind CSS v4 (no config file — CSS-first, uses `@theme` directive and CSS custom properties)
- **Animations**: Framer Motion 11+ (`motion.*` components, `useInView`, `AnimatePresence`, `whileInView`)
- **Dark/Light mode**: `next-themes` with `attribute="data-theme"` — default is **dark mode**
- **Icons**: Lucide React (no GitHub/LinkedIn icons — use GitFork, Link2 as substitutes)
- **Fonts**: Inter (body), JetBrains Mono (code, terminal, badges, monospace accents)
- **Deployment**: Vercel (static export, zero config)

Design all components assuming **dark mode as default**. Light mode is a toggle, not a redesign.

---

### Design tokens (canonical — must be used exactly)

```
Dark mode:
  bg-primary:   #0a0a0f   (page background — near-black)
  bg-secondary: #111118   (cards, sections alternating)
  bg-hover:     #1a1a2e   (interactive hover states)
  text-primary: #e8e8f0   (main body text)
  text-muted:   #6b7280   (secondary text, labels)
  text-subtle:  #4b5563   (timestamps, footers)
  accent-cyan:  #00d4ff   (PRIMARY accent — headlines, CTAs, key highlights)
  accent-purple:#7c3aed   (secondary accent — gradient partner, skill bars)
  accent-green: #10b981   (success, impact bullets, active states)
  accent-orange:#f59e0b   (warnings, pending states)
  accent-pink:  #ec4899   (badges, alternative highlights)
  accent-teal:  #14b8a6   (LinkedIn, external links)
  border:       rgba(255,255,255,0.08)
  border-strong:rgba(255,255,255,0.15)

Light mode (same component layout, different values):
  bg-primary:   #ffffff
  bg-secondary: #f8fafc
  text-primary: #0f172a
  accent-cyan:  #0ea5e9
```

Typography:
- Headings: Inter Bold, sizes 36–72px, tight tracking
- Section labels: JetBrains Mono, 11px, uppercase, `letter-spacing: 0.15em`, accent-cyan color
- Body: Inter Regular/Medium, 14–16px, `line-height: 1.7`
- Tech badges/chips: JetBrains Mono, 12px
- Hero name: 72px desktop / 48px mobile, bold, gradient `accent-cyan → accent-purple` on surname

---

### Page structure — 10 sections in this exact order

#### 1. Navigation (sticky, full-width)
- Logo: `JL_` in JetBrains Mono, accent-cyan
- Links: About · Skills · Experience · Projects · Contact (desktop, anchor links)
- Actions: GitHub icon button · Sun/Moon theme toggle · hamburger on mobile
- On scroll: backdrop blur + subtle bottom border
- Animate in: slide down from top on page load (0.6s)

#### 2. Hero (full viewport height, 100vh)
- **Background**: Animated matrix-style character rain (canvas element) — sparse, 30% opacity, cyan characters on dark background. Subtle radial glow blobs (cyan top-left, purple bottom-right)
- **Badge**: Small pill at top — `⬤ Available for new opportunities` — green dot pulse animation
- **Name**: "Jakub" in text-primary, "Lichosik" in gradient (cyan→purple), 72px bold
- **Typewriter**: Cycling role text below name in JetBrains Mono accent-cyan: cycles through "Software Engineer", "DevOps / SRE", "Scrum Master", "Quant Developer", "Tech & Delivery"
- **Tagline**: 1 sentence below, 18px, text-muted
- **CTAs**: 3 buttons inline: [GitFork icon] "View GitHub" (filled accent-cyan, dark text) · [Download icon] "Download CV" (outlined) · "Let's talk →" (text only)
- **Tech chips**: 8 chips at bottom: C++ · Python · Kotlin · AWS · Kubernetes · Terraform · Grafana · Scrum — minimal outlined chips in bg-secondary
- **Scroll indicator**: "scroll" text + animated line at bottom

#### 3. Proof Strip (narrow band, full-width, bg-secondary)
6 stats in a 2×3 grid (mobile) / 1×6 row (desktop) with animated counters on scroll:
- `4+` Years in IT
- `3` Years Banking & HFT
- `8` Years Total Experience
- `PSPO I` Scrum Certified
- `PL/EN/DE` Languages
- `CH·5yr` Switzerland

Stats in JetBrains Mono accent-cyan (large), labels in caps text-muted.

#### 4. About (bg-primary)
Section label: `// about`  
Heading: "Software engineer who **builds, deploys and drives process**" — bold word in accent-purple  
Left column: 3 paragraphs of bio copy (specific, proof-based, mentions SIX Digital Exchange, Portofino, Beskid, ipi.io)  
Right column: 4 highlight cards (each with icon + label + value):
- 📍 Based in → Katowice, Poland
- 💼 Background → 5 years living & working in Switzerland · last 2 years as freelancer
- 🎓 Education → M.Eng. Computer Science · Silesian Univ. of Technology
- 🏆 Certification → PSPO I — Professional Scrum Product Owner

Cards: bg-secondary, 1px border, icon in glow-cyan background.

#### 5. Skills & Stack (bg-secondary)
Section label: `// skills & stack`  
Heading: "Core competencies"  
Note below: "Visual levels reflect commercial and project practice — not a formal ranking."

Left column — 6 animated progress bars (fill left-to-right on scroll entry):
1. Software Engineering — 88% — cyan bar
2. DevOps / SRE — 85% — purple bar
3. Cloud & Infrastructure — 80% — green bar
4. Agile / Scrum / Delivery — 90% — orange bar
5. Automation & Tooling — 82% — pink bar
6. Cross-functional Collaboration — 87% — teal bar

Each bar: label left, percentage right, bar fills on viewport entry (1.2s ease), short description below in text-muted.

Right column — tech badges grouped by category (7 groups):
- **Languages**: C++, Python, Kotlin, Java, TypeScript, JavaScript, Bash, Clojure, Scala, Embedded C
- **Web & APIs**: REST API, WebSocket, FIX Protocol, GraphQL, HTML, CSS, Vue.js
- **DevOps & CI/CD**: Git, GitLab CI/CD, Docker, Kubernetes, Helm, Terraform, Argo CD, Jenkins, OpenShift
- **Cloud**: AWS, AWS EKS, AWS IAM
- **Tools & Observability**: Grafana, Prometheus, Loki, Tcpdump, Wireshark
- **Databases**: MongoDB, SQL/MySQL, ElasticSearch
- **Methodologies**: Scrum, Agile, PSPO I, TDD, Google Test

Each badge: colored border + colored text + translucent background matching the category accent. Hover: scale up, lift.

#### 6. Experience Timeline (bg-primary)
Section label: `// experience`  
Heading: "Career timeline"

Vertical timeline (left line) with 6 accordion cards:

1. **🇨🇭 SIX Digital Exchange** · Zurich · Software Developer & Scrum Master · March 2022 – April 2024 *(expanded by default)*
   - Responsibilities: polyglot dev (Kotlin, Java, Clojure, TypeScript), Corda blockchain, bug fixing, code reviews, 30+ Confluence docs, onboarded 10+ people, ran all Scrum ceremonies (Sprint Planning/Review/Retro/Daily), represented at CordaCon London 2022, built Converter App for QA/BA
   - Impact: end-to-end delivery across backend + blockchain in regulated banking; Converter App saved manual effort for testers and BAs
   - Stack chips: Kotlin, Java, Clojure, TypeScript, Corda, REST APIs, Jira, Confluence

2. **🇨🇭 Portofino** · Zug · Quant Developer / DevOps / SRE / Release Engineer · July 2021 – February 2022
   - C++ for crypto markets (REST, WebSocket, FIX), Google Test (gmock), GitLab CI + Docker + Kubernetes + Helm + Terraform + AWS IAM deployments, built full Grafana/Prometheus/Loki/MongoDB observability from scratch, packet capturing on AWS EKS with Traffic Mirroring + tcpdump + Wireshark, Python + Bash automation
   - Impact: 3 self-planned own projects delivered: Packet Capturing pipeline, Alerting/Monitoring system, Morning Routine automation

3. **🇨🇭 Freelance — Switzerland** · April 2024 – present · Independent Software Engineer / Consultant
   - DevOps and software engineering consulting, Scrum facilitation, cloud infrastructure, contributions to Beskid-lang (PO/PM) and ipi.io (Scrum Expert + DevOps + Developer)

4. **🇵🇱 VASCO / OneSpan** · Katowice · Software Developer · February – June 2021
5. **🇵🇱 DisplayLink (Synaptics)** · Katowice · Associate Development Engineer · January – September 2020
6. **🇵🇱 RW Swiss Automation** · Katowice · Robotics Engineer · October 2017 – December 2019

Card state: collapsed shows company + role + period + location. Expanded reveals summary + responsibilities bullets + impact (in green with ↗) + stack chips. Expanding/collapsing with smooth height animation (AnimatePresence). Timeline dot glows accent-cyan.

#### 7. Projects — Bento Grid (bg-secondary)
Section label: `// projects`  
Heading: "What I've shipped"  
Right-aligned link: [GitFork icon] "View all on GitHub"

Bento grid (3-column, first featured card spans 2 columns on desktop):

**Featured projects (5):**
1. **Alerting & Monitoring System** [Private] — Grafana, Prometheus, Loki, Promtail, MongoDB, Python, AWS — self-planned full observability stack for HFT crypto
2. **Packet Capturing Pipeline** [Private] — AWS EKS, Traffic Mirroring, Tcpdump, Wireshark, Python — network traffic analysis on trading infrastructure
3. **SDX Converter App** [Private] — Kotlin, Java, REST APIs — automated test data conversion, saved manual effort for QA/BA at SIX Digital Exchange
4. **Beskid Programming Language** [In Progress 🔵] — Product Management, Scrum, Community — PO/PM and marketing lead for emerging language (tracker.beskid-lang.org)
5. **This Website** [Public 🟢] — Next.js 16, TypeScript, Tailwind CSS, Framer Motion — the site you're looking at

**Non-featured (3):**
- Morning Routine Automation [Private] — Python, Bash, AWS Linux
- IPI.io Contribution [In Progress] — Scrum, DevOps, Development
- More Projects [Coming Soon] — GitHub: Kuber-code

Card design: status badge top-left, external link top-right (if public/in-progress), title, description, impact bullets in green (↗), stack chips. Hover: lift + scale + border highlight.

Status badge colors: Public=green, Private=orange, NDA=pink, In Progress=cyan, Coming Soon=text-muted.

#### 8. Roles Beyond Code (bg-primary)
Section label: `// roles beyond code`  
Heading: "Product, process & community"  
Subtitle: "Not just a developer — I run process, grow teams and contribute to community."

4 cards in 2×2 grid:

1. **Beskid Programming Language** (tracker.beskid-lang.org) · purple accent
   - Roles: Product Owner / PM · Marketing Lead
   - Driving roadmap and community for an emerging programming language. Managing backlog, stakeholder communication and growth strategy.

2. **IPI.io** (ipi.io) · cyan accent
   - Roles: Scrum Expert · DevOps Engineer · Developer
   - Multi-role contribution — facilitating agile process, maintaining infrastructure and contributing code.

3. **BEST Gliwice — Board of European Students of Technology** · green accent
   - Roles: Job Fair Organizer · Recruitment Lead
   - Acquired 12 companies for BIT Festival job fair (2014/2015). Led Autumn 2014 recruitment with 20-person team — strategy, marketing, task delegation.

4. **ING Bank — Silesian University of Technology** · orange accent
   - Roles: Brand Ambassador
   - Promoted internships through events, media and university/student-org collaboration (2015–2016).

Card: org name + external link icon + role chips + description text.

#### 9. International Profile (bg-secondary)
Section label: `// languages & profile`  
Heading: "International profile"

Left column — 3 language bars (fill on scroll):
- Polish — Native (100%) — cyan
- English — C1/C2 · Professional (95%) — purple
- German — B1 · Conversational (55%) — green

Each: language name + 2-letter code chip (colored) + level label + animated bar.

Right column — 3 location cards:
- 🇨🇭 Switzerland · 5 years — Lived and worked in Zurich (SIX Digital Exchange) and Zug (Portofino), with 2 years as independent freelancer
- 🇵🇱 Poland · Katowice — Silesian University of Technology graduate (M.Eng. CS + B.Eng. Automatic Control & Robotics)
- 🌍 Open to remote & hybrid — Comfortable across time zones and cultures. Driving licence B.

#### 10. Interests (bg-primary)
Section label: `// outside of work`  
Heading: "When I'm not shipping code"

9 interest chips (each with icon + label), with accent-colored borders and hover lift:
1. 🎵 Music & Festivals
2. 🎛️ Ableton Production
3. 🎸 Guitar & Singing
4. 🧗 Rock Climbing
5. 🏂 Snowboard & Ski
6. 📚 Books
7. 📈 Investing
8. ♟️ Chess & Gaming
9. 💻 Technology

#### 11. Contact / CTA (bg-secondary)
Section label: `// contact`  
Heading: "Let's build something together"  
Subtitle: "Open to software engineering roles, DevOps/SRE positions, freelance engagements and product/delivery hybrid roles. PL · EN · DE."

4 contact cards (2×2 grid):
- Email → kuba.lichosik@gmail.com (cyan)
- GitHub → Kuber-code (purple, external)
- LinkedIn → jakublichosik (teal, external)
- CV → Download PDF (green)

Each card: icon in colored background, label, value, ArrowUpRight icon. Hover: lift + border color highlights to card accent color.

Footer below: "Built with Next.js 16 · Tailwind CSS · Framer Motion · source on GitHub" in JetBrains Mono text-subtle. © 2026 Jakub Lichosik.

---

### Visual direction

**Overall feel**: Premium dark tech portfolio — cinematic, high-contrast, motion-forward. Think Vercel/Linear design quality applied to a personal brand.

**What to avoid**: 
- Generic "3 boxes with icons" layouts
- Star ratings for skills
- Aggressive neon gradients everywhere
- Flat, static feel

**Motion principles**:
- Section reveals: `opacity 0→1, y 20→0` on viewport entry, staggered for lists
- Hover states: `scale(1.02–1.05)`, `translateY(-3px)`, border color transitions
- Animated counters: count up from 0 to target when section enters viewport
- Skill bars: fill left-to-right on scroll entry (1.2s ease)
- Typewriter: character-by-character cycle with cursor blink
- ALL animations respect `prefers-reduced-motion: reduce`

**Responsive**:
- Mobile (375px): single column, hamburger menu, stacked proof strip 2×3
- Tablet (768px): some 2-column layouts start
- Desktop (1280px): full grid layouts, 3-column bento

**Accessibility**:
- WCAG 2.2 AA contrast on all text (test against dark and light backgrounds)
- All interactive elements keyboard-navigable
- Accordion timeline: `aria-expanded`, `aria-controls`
- Animated elements: `aria-hidden="true"` on decorative canvas

---

### Prototype requirements

Generate a **clickable, scrollable, fully interactive prototype** of the entire page:
- All 10 sections fully rendered with real content from this prompt
- Working dark/light mode toggle in navigation
- Accordion timeline (click to expand/collapse any experience item)
- Hover states on all interactive elements
- Sticky navigation with active section highlighting
- Mobile responsive layout
- Smooth scroll between sections
- Show Framer Motion animation intent via CSS transitions where motion isn't available in prototype

The prototype should be self-contained and demonstrate the complete user experience from hero to contact, matching the tech stack and design tokens listed above exactly.
