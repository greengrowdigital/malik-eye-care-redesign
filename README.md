# Malik Eye Care — Redesign Demo

Multi-page premium redesign for [malikeyecare.com](https://www.malikeyecare.com), a board-certified ophthalmology practice with five offices across Manhattan, Jackson Heights, Hollis, Forest Hills and Hicksville, NY.

## Stack
- **Vite** + **React 19** + **React Router 7**
- **Tailwind CSS v4** (`@tailwindcss/vite`)
- **Framer Motion** (page reveals, scroll-triggered, marquee)
- Bilingual EN / ES via React context + `localStorage`

## Routes
- `/` Home
- `/services` + `/services/:slug` (+ self-tests, surgery options, premium IOL, PRK, glaucoma what-is, glaucoma treatment, annual exams)
- `/doctors` + `/doctors/:slug` (9 doctor profiles)
- `/locations` + `/locations/:slug` (5 NYC offices, embedded maps)
- `/patient-resources` + `/your-visit`, `/financing`, `/forms-insurance`, `/post-op-forms`, `/eye-anatomy`, `/referral-pcp`
- `/blog` + `/blog/:slug` (4 articles)
- `/about`, `/testimonials`, `/contact`, `/request-appointment`

## Mock features that work
- 3-step appointment request with validation + animated success
- Contact form with mock submit
- Cataract & LASIK self-tests (8 questions, animated, with scored verdict)
- Newsletter subscribe
- Language toggle (EN/ES) persisted to localStorage
- Maps embedded via Google Maps iframe

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy
`vercel.json` includes SPA rewrites — drop on Vercel and you're live. No environment variables needed.
