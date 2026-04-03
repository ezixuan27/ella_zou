# Website Refinement Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Polish the existing portfolio site with typography upgrades, CSS variables, a hero restructure, and dark backgrounds on Projects/Contact — no layout or content changes.

**Architecture:** Pure visual layer changes across 7 files. No new components, no data changes, no routing changes. Each task is independent and safe to commit individually.

**Tech Stack:** React, Tailwind CSS, Vite, Google Fonts

---

## File Map

| File | What changes |
|------|-------------|
| `index.html` | Add Playfair Display Google Font `<link>` |
| `src/index.css` | Add CSS variables at `:root` |
| `src/components/sections/Home.jsx` | Hero eyebrow text + Playfair Display on name |
| `src/components/sections/About.jsx` | Diagonal clip-path + heading letter-spacing |
| `src/components/sections/Projects.jsx` | Dark bg + updated text/heading colors + letter-spacing |
| `src/components/sections/Experience.jsx` | Heading letter-spacing only |
| `src/components/sections/Contact.jsx` | Dark bg + updated text/input/heading colors |

---

### Task 1: Add Playfair Display font

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Add font link inside `<head>`**

Open `index.html`. Add this line right before the closing `</head>` tag (after the existing `<title>`):

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&display=swap" rel="stylesheet">
```

- [ ] **Step 2: Verify font loads**

Run `npm run dev` from `/Users/shenqinmonb/Downloads/MyWebsite/`.
Open `http://localhost:5173` in browser. Open DevTools → Network → filter by "fonts.googleapis" — confirm the Playfair Display request succeeds (status 200).

- [ ] **Step 3: Commit**

```bash
cd /Users/shenqinmonb/Downloads/MyWebsite
git add index.html
git commit -m "feat: add Playfair Display font"
```

---

### Task 2: Add CSS variables

**Files:**
- Modify: `src/index.css`

- [ ] **Step 1: Add `:root` block at the top of `index.css`**

Insert this block right after the `@import "tailwindcss";` line, before the `html, body` rule:

```css
:root {
  --color-navy-deep:   #0d1b2e;
  --color-navy-dark:   #2C4E80;
  --color-navy-mid:    #3a537b;
  --color-navy-muted:  #3e577b;
  --color-steel:       #5D88AA;
  --color-steel-light: #8BB1D1;
  --color-orange:      #d1865e;
  --color-orange-dark: #E86D2E;
  --color-hero-name:   #395279;
  --color-text-body:   #344c67;
  --color-bg-light:    #F7FAFF;
  --color-bg-subtle:   #EEF5FA;
}
```

- [ ] **Step 2: Verify no visual change**

Check `http://localhost:5173` — the page should look exactly the same as before. This task is purely additive.

- [ ] **Step 3: Commit**

```bash
git add src/index.css
git commit -m "feat: add CSS color variables"
```

---

### Task 3: Refactor hero heading

**Files:**
- Modify: `src/components/sections/Home.jsx`

- [ ] **Step 1: Replace the hero `<h1>` block**

Find this block in `Home.jsx` (lines 38–41):

```jsx
<h1 className="font-['Josefin_Sans',_sans-serif] font-bold tracking-tight leading-tight text-4xl md:text-7xl">
    <span className="text-[#395279]">Hi, I'm</span>
    <span className="text-[#d1865e] ml-4">Zixuan Zou.</span>
</h1>
```

Replace it with:

```jsx
<h1 className="leading-none">
    <span className="block font-['Josefin_Sans',_sans-serif] text-sm md:text-base italic tracking-[0.2em] text-[#395279] opacity-70 mb-3">
        hi, i'm
    </span>
    <span
        className="block font-['Playfair_Display',_serif] font-black text-[#d1865e]"
        style={{ fontSize: 'clamp(64px, 8vw, 118px)' }}
    >
        Zixuan Zou.
    </span>
</h1>
```

- [ ] **Step 2: Verify visually**

Check `http://localhost:5173`. The hero should show:
- Small italic "hi, i'm" in dark blue, slightly faded
- Large Playfair Display "Zixuan Zou." in orange below it
- All other hero content (subtitle, buttons, video) unchanged

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/Home.jsx
git commit -m "feat: upgrade hero heading to Playfair Display with eyebrow text"
```

---

### Task 4: Add letter-spacing to section headings

**Files:**
- Modify: `src/components/sections/About.jsx`
- Modify: `src/components/sections/Projects.jsx`
- Modify: `src/components/sections/Experience.jsx`

- [ ] **Step 1: Update About.jsx heading**

Find in `About.jsx` (around line 130):
```jsx
<h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#5D88AA] text-center
    after:content-[''] after:block after:w-40 after:h-[3px]
    after:bg-[#5D88AA] after:mx-auto after:mt-3">
    ABOUT ME
</h2>
```

Add `tracking-[0.12em]` to the className:
```jsx
<h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#5D88AA] text-center tracking-[0.12em]
    after:content-[''] after:block after:w-40 after:h-[3px]
    after:bg-[#5D88AA] after:mx-auto after:mt-3">
    ABOUT ME
</h2>
```

- [ ] **Step 2: Update Projects.jsx heading**

Find in `Projects.jsx` (around line 43):
```jsx
<h2
    className="text-4xl md:text-5xl font-bold md:mt-10 mb-8 text-[#2C4E80] text-center
    after:block after:w-80 after:h-[3px] after:bg-[#2C4E80] after:mx-auto after:mt-5">
    FEATURED PROJECTS
</h2>
```

Add `tracking-[0.12em]`:
```jsx
<h2
    className="text-4xl md:text-5xl font-bold md:mt-10 mb-8 text-[#2C4E80] text-center tracking-[0.12em]
    after:block after:w-80 after:h-[3px] after:bg-[#2C4E80] after:mx-auto after:mt-5">
    FEATURED PROJECTS
</h2>
```

- [ ] **Step 3: Update Experience.jsx heading**

Find in `Experience.jsx` (around line 70):
```jsx
<h2 className="text-4xl md:text-5xl font-bold mb-16 text-[#2C4E80] text-center
    after:content-[''] after:block after:w-40 after:h-[3px]
    after:bg-[#5D88AA] after:mx-auto after:mt-3">
    EXPERIENCE
</h2>
```

Add `tracking-[0.12em]`:
```jsx
<h2 className="text-4xl md:text-5xl font-bold mb-16 text-[#2C4E80] text-center tracking-[0.12em]
    after:content-[''] after:block after:w-40 after:h-[3px]
    after:bg-[#5D88AA] after:mx-auto after:mt-3">
    EXPERIENCE
</h2>
```

- [ ] **Step 4: Verify visually**

Check About, Projects, and Experience sections. Headings should have noticeably wider letter spacing — more editorial, less cramped.

- [ ] **Step 5: Commit**

```bash
git add src/components/sections/About.jsx src/components/sections/Projects.jsx src/components/sections/Experience.jsx
git commit -m "feat: add letter-spacing to all-caps section headings"
```

---

### Task 5: Add diagonal clip-path to About section

**Files:**
- Modify: `src/components/sections/About.jsx`

- [ ] **Step 1: Add clip-path and padding to the `<section>` tag**

Find in `About.jsx` (around line 121):
```jsx
<section
    id="about"
    className="bg-white min-h-screen flex flex-col py-20"
>
```

Replace with:
```jsx
<section
    id="about"
    className="bg-white min-h-screen flex flex-col py-20"
    style={{
        clipPath: 'polygon(0 5%, 100% 0, 100% 100%, 0 100%)',
        paddingTop: '7rem',
        marginTop: '-3rem',
    }}
>
```

- [ ] **Step 2: Verify visually**

The About section should now have a diagonal top edge instead of a straight horizontal cut. The content should not be clipped. Scroll slowly from hero → About to confirm the transition looks smooth.

If content is clipped at the top, increase `paddingTop` to `8rem` or `9rem`.

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/About.jsx
git commit -m "feat: add diagonal clip-path to About section for smooth hero transition"
```

---

### Task 6: Dark background for Projects section

**Files:**
- Modify: `src/components/sections/Projects.jsx`

- [ ] **Step 1: Update section background and heading colors**

Find the `<section>` tag (around line 30):
```jsx
<section
    id="projects"
    className="bg-[#EEF5FA] min-h-screen flex items-center justify-center py-20 pt-24"
>
```

Replace with:
```jsx
<section
    id="projects"
    className="bg-[#0d1b2e] min-h-screen flex items-center justify-center py-20 pt-24"
>
```

- [ ] **Step 2: Update heading colors**

Find (around line 43):
```jsx
<h2
    className="text-4xl md:text-5xl font-bold md:mt-10 mb-8 text-[#2C4E80] text-center tracking-[0.12em]
    after:block after:w-80 after:h-[3px] after:bg-[#2C4E80] after:mx-auto after:mt-5">
    FEATURED PROJECTS
</h2>
```

Replace with:
```jsx
<h2
    className="text-4xl md:text-5xl font-bold md:mt-10 mb-8 text-[#8BB1D1] text-center tracking-[0.12em]
    after:block after:w-80 after:h-[3px] after:bg-[#5D88AA] after:mx-auto after:mt-5">
    FEATURED PROJECTS
</h2>
```

- [ ] **Step 3: Update "Back to Home" button color**

Find (around line 37):
```jsx
className="text-[#5D88AA] hover:text-[#2C4E80] transition-colors mb-6 flex items-center gap-1 text-sm"
```

Replace with:
```jsx
className="text-[#8BB1D1] hover:text-white transition-colors mb-6 flex items-center gap-1 text-sm"
```

- [ ] **Step 4: Verify visually**

Projects section should show:
- Deep navy `#0d1b2e` background
- White project cards floating on the dark bg (they're `bg-white/60` already — will look great)
- Light blue heading "FEATURED PROJECTS"
- All card content (titles, descriptions, tags, links) unchanged and readable

- [ ] **Step 5: Commit**

```bash
git add src/components/sections/Projects.jsx
git commit -m "feat: dark background for Projects section"
```

---

### Task 7: Dark background for Contact section

**Files:**
- Modify: `src/components/sections/Contact.jsx`

- [ ] **Step 1: Update section background**

Find the `<section>` tag (around line 26):
```jsx
<section
    id="contact"
    className="bg-[#F7FAFF] min-h-screen flex items-center justify-center py-20"
>
```

Replace with:
```jsx
<section
    id="contact"
    className="bg-[#0d1b2e] min-h-screen flex items-center justify-center py-20"
>
```

- [ ] **Step 2: Update heading and subtext colors**

Find the heading (around line 34):
```jsx
<h2 className="text-4xl md:text-5xl font-bold mb-3 text-[#5D88AA] text-center
    after:content-[''] after:block after:w-32 after:h-[3px]
    after:bg-[#5D88AA] after:mx-auto after:mt-3">
    Get In Touch
</h2>
<p className="text-center text-[#344c67] mb-10 mt-6">
    Have a question or want to connect? Feel free to reach out!
</p>
```

Replace with:
```jsx
<h2 className="text-4xl md:text-5xl font-bold mb-3 text-[#8BB1D1] text-center
    after:content-[''] after:block after:w-32 after:h-[3px]
    after:bg-[#5D88AA] after:mx-auto after:mt-3">
    Get In Touch
</h2>
<p className="text-center text-[#8BB1D1]/70 mb-10 mt-6">
    Have a question or want to connect? Feel free to reach out!
</p>
```

- [ ] **Step 3: Update social icons opacity**

Find (around line 94):
```jsx
<div className="mt-8 flex justify-center gap-8">
    <a href="https://github.com/ezixuan27"
        target="_blank" rel="noopener noreferrer"
        aria-label="GitHub"
        className="opacity-70 transition hover:opacity-100 hover:-translate-y-0.5">
```

Change `opacity-70` to `opacity-80` on all three social links:
```jsx
<div className="mt-8 flex justify-center gap-8">
    <a href="https://github.com/ezixuan27"
        target="_blank" rel="noopener noreferrer"
        aria-label="GitHub"
        className="opacity-80 transition hover:opacity-100 hover:-translate-y-0.5">
```

Do the same for the LinkedIn and email links (change `opacity-70` → `opacity-80`).

- [ ] **Step 4: Verify visually**

Contact section should show:
- Deep navy `#0d1b2e` background — matches Projects, bookends the page with hero
- White form card floats cleanly on the dark bg
- Light blue heading and muted subtext
- Social icons slightly brighter

- [ ] **Step 5: Commit**

```bash
git add src/components/sections/Contact.jsx
git commit -m "feat: dark background for Contact section, bookends hero"
```

---

## Final Check

- [ ] Scroll through the full page: hero → about → experience → projects → contact
- [ ] Confirm diagonal transition at top of About section looks smooth
- [ ] Confirm Projects and Contact dark sections feel cohesive with the hero
- [ ] Confirm hero name renders in Playfair Display (serif, not sans-serif)
- [ ] Check mobile view at 375px width — nothing clipped or broken
