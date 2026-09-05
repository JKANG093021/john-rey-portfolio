# John Rey Baliguat Portfolio - Phase 17B

Hiring-ready portfolio for **John Rey Baliguat**, positioned primarily as a **Technical Virtual Assistant**, with web support, troubleshooting, systems, automation, and coding as supporting strengths for remote, hourly, part-time, and project-based work.

## What's included

- Responsive dark premium portfolio built with Next.js + TypeScript
- Approved cinematic mobile hero using `public/john-rey-workspace.png`
- Real project screenshots for Triple Vision Realty, DOUS E-Borrower, Soy Yummy, and Chuchu Milktea
- Dedicated project case studies and live-project links where available
- Scroll/typewriter section-heading effects
- Services, work options, process, skills, FAQ, and client-focused contact flow
- Contact form that sends the inquiry to Gmail and automatically confirms receipt to the visitor
- New `/resume` page optimized for hiring/recruiter viewing
- Downloadable ATS-friendly PDF: `public/John-Rey-Baliguat-Resume.pdf`
- SEO metadata, sitemap, robots, manifest, Open Graph image, and custom 404 page
- `.gitignore` protecting `.env.local`

## Run locally

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

Resume page:

```text
http://localhost:3000/resume
```

## Contact form / Gmail auto-reply

Copy `.env.example` to `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
GMAIL_USER=baliguatjohnrey91@gmail.com
GMAIL_APP_PASSWORD=your_google_app_password
```

Use a **Google App Password**, not the normal Gmail password. Keep `.env.local` private and never commit it.

## Production build check

After dependencies are installed:

```bash
npm run typecheck
npm run build
```

## Deploy to Vercel

1. Create a GitHub repository for this portfolio when ready.
2. Push the project to GitHub.
3. In Vercel, choose **Add New -> Project** and import the repository.
4. Vercel should detect **Next.js** automatically.
5. Add these Environment Variables:

```text
NEXT_PUBLIC_SITE_URL=https://your-final-vercel-or-domain-url
GMAIL_USER=baliguatjohnrey91@gmail.com
GMAIL_APP_PASSWORD=your_google_app_password
```

6. Deploy.
7. After Vercel gives the final URL, update `NEXT_PUBLIC_SITE_URL` to that exact HTTPS URL and redeploy so sitemap and metadata use the correct address.
8. Test the contact form using an email address you can access. Confirm both:
   - John Rey receives the inquiry.
   - The visitor receives the automatic confirmation.
9. If you later buy a custom domain, connect it in **Vercel -> Project Settings -> Domains**, update `NEXT_PUBLIC_SITE_URL`, and redeploy.

## Before using it on hiring sites

- Open every project link and case study on desktop and mobile.
- Test the downloadable resume.
- Test the inquiry form after production deployment.
- Do not publish passwords, API keys, private customer data, or confidential admin screenshots.
- LinkedIn and GitHub are intentionally not shown until real profiles are available.

## Main profile data

Edit `data/portfolio.ts` to update:

- name
- role
- email
- location
- LinkedIn / GitHub when available
- resume path
- project descriptions and approved live links

## Phase 17A — Final professional cleanup

This pass intentionally reduces visual noise before deployment:
- shorter hero and section copy
- one consistent primary path: **View My Work → Contact Me**
- simplified top navigation
- typewriter animation reserved for the Featured Work heading instead of every section
- four focused service cards
- proof strip with real, defensible trust signals
- consistent project-card image ratio, copy height, and button alignment
- clearer separation between core skills and skills currently being expanded
- tighter desktop/mobile spacing and subtler hover movement

No new claims, fake metrics, or unverified client results were added.


## Phase 17B — Technical VA positioning

This pass shifts the portfolio away from a developer-first impression and toward recurring technical VA work:
- hero now leads with Technical Virtual Assistant, web support, QA, and automation
- services prioritize ongoing technical assistance and troubleshooting
- work options lead with part-time Technical VA support
- skills now include website management, QA, deployment, documentation, and database support
- project work remains as proof that John Rey can go deeper technically when support tasks require code
- resume, SEO metadata, Open Graph copy, footer role, and email auto-reply signature use the same Technical VA positioning

## Phase 17C — Animated Portrait Border

The hero portrait now uses a subtle moving blue/cyan gradient border on desktop and a lightweight animated inset edge on mobile. The effect is CSS-only, keeps the portrait accessible, and disables motion automatically when the visitor prefers reduced motion.

## Phase 17D updates

- Replaced the portrait's linear animated border with a circular/conic running gradient.
- Added the same subtle circular sweep to the mobile cinematic portrait edge.
- Added a left-to-right moving technology logo strip using local SVG assets (HTML5, CSS3, JavaScript, PHP, MySQL, PostgreSQL, Next.js, Git, and REST APIs).
- The marquee pauses on hover and disables animation when reduced-motion is enabled.
- All technology logo files are stored locally in `public/tech/`, so the strip does not depend on an external icon CDN.

## Phase 18 resume update
The resume is now more Technical-VA focused and includes a dedicated Technical Support Experience section plus Education: Bachelor of Science in Information Technology, Don Mariano Marcos Memorial State University - Mid La Union Campus (Graduated). Graduation year was intentionally left out because no year was provided.

## Theme toggle (Phase 19)

The portfolio now includes a persistent Dark / Light theme toggle in the main navigation. The approved dark-blue design remains the default. A visitor's choice is stored in `localStorage` under `johnrey-portfolio-theme` and is applied before hydration to avoid a visible theme flash. The mobile portrait hero intentionally stays cinematic/dark in either theme to preserve text contrast.
