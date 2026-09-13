# John Rey Baliguat Portfolio

Premium hiring portfolio for John Rey Baliguat, positioned for technical support, customer support, administrative operations, website and system support, and junior IT opportunities.

## Included

- Responsive Next.js portfolio with dark and light themes
- Broader professional positioning beyond pure web development
- Support areas for customers, administration, business systems, and technical work
- Hardware, printer, peripheral installation, device troubleshooting, and maintenance capabilities
- Personal AI productivity tools: ChatGPT and Claude
- Four business-safe case studies, including an original self-directed milk-tea e-commerce concept
- Certificate gallery covering real estate, explainable AI, front-end development, IT career readiness, and Azure
- Privacy-safe DOUS project imagery and restored Triple Vision admin-system link
- Dedicated online resume page at `/resume`
- One-page ATS resume in PDF and editable DOCX formats
- Contact form with Gmail delivery and visitor confirmation
- SEO metadata, sitemap, robots, manifest, Open Graph image, and custom 404 page

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Contact form configuration

Copy `.env.example` to `.env.local` and add:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
GMAIL_USER=baliguatjohnrey91@gmail.com
GMAIL_APP_PASSWORD=your_google_app_password
```

Use a Google App Password rather than a normal Gmail password. Never commit `.env.local`.

## Verification

```bash
npm run typecheck
npm run build
```

## Deploy to Vercel

1. Push this project to the existing GitHub repository.
2. Open the connected project in Vercel.
3. Confirm the required environment variables are configured.
4. Deploy the latest commit.
5. Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS address and redeploy if the live address changes.
6. Test the resume downloads and contact form after deployment.

## Resume files

- `public/John-Rey-Baliguat-ATS-Resume.pdf`
- `public/John-Rey-Baliguat-ATS-Resume.docx`

The resume uses a single-column reading order, standard headings, selectable text, and no icons, tables, text boxes, skill bars, or profile photo.

## Privacy

Public project descriptions exclude passwords, integration credentials, private customer records, administrator data, and confidential project materials.
