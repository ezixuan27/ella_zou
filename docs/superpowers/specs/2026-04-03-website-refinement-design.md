# Website Refinement Design — "Refined & Cohesive"
**Date:** 2026-04-03  
**Scope:** Visual polish only — no layout, component, or content changes

---

## Goal
Elevate the site's aesthetic to feel more 大气 (grand, sophisticated, cohesive) without restructuring anything. The site has strong bones and good personality; this pass tightens the typography, fixes section inconsistency, and makes one high-impact color change.

---

## Changes

### 1. CSS Variables (`src/index.css`)
Extract the hardcoded palette into CSS custom properties. No visual change — enables future retheming.

```css
:root {
  --color-navy-deep:    #0d1b2e;
  --color-navy-dark:    #2C4E80;
  --color-navy-mid:     #3a537b;
  --color-navy-muted:   #3e577b;
  --color-steel:        #5D88AA;
  --color-steel-light:  #8BB1D1;
  --color-orange:       #d1865e;
  --color-orange-dark:  #E86D2E;
  --color-hero-name:    #395279;
  --color-text-body:    #344c67;
  --color-bg-light:     #F7FAFF;
  --color-bg-subtle:    #EEF5FA;
}
```

### 2. Google Font — Playfair Display (`index.html`)
Add a single `<link>` to load Playfair Display 700 + 900. Used only for the hero name.

### 3. Hero Section (`src/components/sections/Home.jsx`)
- `"Hi, I'm"` → becomes a small eyebrow: `text-sm italic opacity-60 tracking-widest` above the name
- `"Zixuan Zou."` → font switches to `font-['Playfair_Display']`, size becomes `clamp(72px, 8vw, 118px)` via inline style or a custom Tailwind class
- Color on name stays `#d1865e`, color on eyebrow stays `#395279`
- Everything else (subtitle, buttons, snow video, layout) — unchanged

### 4. Section Heading Letter-Spacing
Add `tracking-[0.12em]` to every all-caps `<h2>` across:
- `About.jsx` — "ABOUT ME"
- `Projects.jsx` — "FEATURED PROJECTS"
- `Experience.jsx` — "EXPERIENCE"

### 5. About Section Diagonal Entry (`src/components/sections/About.jsx`)
Add `clip-path: polygon(0 4%, 100% 0, 100% 100%, 0 100%)` to the `<section>` element and add `padding-top: 6rem` (96px) to compensate for clipped content at the top. Softens the hard-cut transition from the dark hero.

### 6. Projects Section — Dark Background (`src/components/sections/Projects.jsx`)
- Section bg: `#EEF5FA` → `#0d1b2e`
- Section heading color: `#2C4E80` → `#8BB1D1` (visible on dark bg)
- Heading underline bar: switches to `#5D88AA` (visible on dark bg)
- "Back to Home" button text: update to light color
- Project cards: stay `bg-white/60` — they're already semi-transparent so they'll look great on dark
- Card title/body text: unchanged (dark text on white cards — fine)
- Tag chips: unchanged
- "View Project" links: unchanged

### 7. Contact Section — Dark Background (`src/components/sections/Contact.jsx`)
- Section bg: `#F7FAFF` → `#0d1b2e`
- Heading color: `#5D88AA` → `#8BB1D1`
- Heading underline: stays `#5D88AA`
- Subtext color: `#344c67` → `#8BB1D1` or `rgba(255,255,255,0.6)`
- Form card bg: `white` → stays white (form on white card on dark bg = clean contrast)
- Social icons: increase base opacity from `opacity-70` to `opacity-80`, update hover

---

## Files Touched
| File | Change |
|------|--------|
| `index.html` | Add Playfair Display font link |
| `src/index.css` | Add CSS variables, keep existing styles |
| `src/components/sections/Home.jsx` | Hero eyebrow + Playfair name |
| `src/components/sections/About.jsx` | Diagonal clip-path + heading letter-spacing |
| `src/components/sections/Projects.jsx` | Dark bg + adjusted colors + heading letter-spacing |
| `src/components/sections/Experience.jsx` | Heading letter-spacing only |
| `src/components/sections/Contact.jsx` | Dark bg + adjusted colors |

---

## Out of Scope
- No layout changes
- No component additions or removals
- No animation changes
- No content changes
- No navbar changes
- No mobile-specific work beyond what already exists
