export const profile = {
  name: "John Rey",
  fullName: "John Rey Baliguat",
  role: "Technical VA | Web and Business System Support | Customer and Admin Support",
  specialty: "Websites, business systems, customer and admin workflows, hardware installation, and maintenance",
  email: "baliguatjohnrey91@gmail.com",
  linkedin: "",
  github: "",
  portfolioUrl: "https://john-rey-portfolio-wsj7.vercel.app",
  resumeHref: "/John-Rey-Baliguat-ATS-Resume.pdf",
  resumeDocxHref: "/John-Rey-Baliguat-ATS-Resume.docx",
  resumePageHref: "/resume",
  location: "Philippines",
};

export type PortfolioProject = {
  slug: string;
  label: string;
  title: string;
  summary: string;
  overview: string;
  problem: string;
  role: string;
  solution: string[];
  technologies: string[];
  highlights: string[];
  transferableSkills: string[];
  note?: string;
  screenshot?: string;
  imageAlt?: string;
  imageLabel?: string;
  liveUrl?: string;
  liveLabel?: string;
  visualClass: "real-estate" | "library" | "loyalty" | "commerce";
};

export type PortfolioSupportStep = {
  phase: string;
  shortLabel: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  width: number;
  height: number;
  redactions?: Array<"ticket-email" | "ticket-ip" | "response-email">;
};

export type PortfolioSupportStory = {
  eyebrow: string;
  title: string;
  intro: string;
  outcome: string;
  steps: PortfolioSupportStep[];
};

export type PortfolioCertificate = {
  title: string;
  issuer: string;
  date: string;
  category: string;
  description: string;
  image: string;
  orientation: "portrait" | "landscape";
};

export const projects: PortfolioProject[] = [
  {
    slug: "real-estate-platform",
    label: "Admin Operations and Lead Management",
    title: "Triple Vision Realty Platform",
    summary:
      "A property and buyer-lead system that combines public listings with practical admin workflows and referral attribution.",
    overview:
      "This project supports both the customer-facing property journey and the behind-the-scenes work required to manage listings, inquiries, and agent referrals.",
    problem:
      "Buyer inquiries arrive from different agents and platforms. The business needs organized records and a clear workflow so leads can be followed up and credited accurately.",
    role:
      "Web development, admin workflow design, interface improvements, mobile testing, issue troubleshooting, and referral-attribution planning.",
    solution: [
      "Structured buyer inquiries so referral-source information can be recorded when a lead enters the system.",
      "Designed clearer admin workflows for property records, buyer follow-up, and lead ownership.",
      "Improved the mobile presentation used for day-to-day buyer-lead management.",
      "Preserved working routes and business rules while improving usability and maintainability.",
    ],
    technologies: ["PHP", "MySQL", "JavaScript", "Responsive UI", "Admin Workflows"],
    highlights: [
      "Buyer inquiry handling",
      "Property record administration",
      "Agent referral logic",
      "Mobile workflow testing",
    ],
    transferableSkills: ["Admin support", "Record accuracy", "Customer follow-up", "Business-system logic"],
    note: "The case study uses business-safe wording and excludes private customer records and administrator credentials.",
    screenshot: "/projects/realestate.png",
    imageAlt: "Triple Vision Realty public property interface",
    imageLabel: "Project interface",
    liveUrl: "https://triplevisionrealty.infinityfree.me/RealEstate/admin/login.php",
    liveLabel: "View Admin Login",
    visualClass: "real-estate",
  },
  {
    slug: "milk-tea-ecommerce-concept",
    label: "Self-Directed E-commerce Concept",
    title: "Milk Tea E-commerce Experience",
    summary:
      "An original storefront concept that turns a customizable drink menu into a clear pickup, delivery, cart, and checkout journey.",
    overview:
      "Created independently for portfolio demonstration, this fictional milk-tea storefront explores how customers can discover drinks, choose an ordering method, review a cart, and move toward checkout without unnecessary friction.",
    problem:
      "A growing beverage shop needs an online ordering experience that makes a varied menu easy to browse while keeping product choices, fulfillment options, and the cart understandable on desktop and mobile.",
    role:
      "Concept planning, information architecture, customer-flow mapping, responsive interface design, e-commerce workflow design, and quality review.",
    solution: [
      "Organized drink discovery around recognizable categories and a focused popular-products area.",
      "Mapped product selection and customization so variants, quantities, and add-ons can be reviewed before checkout.",
      "Separated pickup and delivery choices early in the journey to make fulfillment expectations clearer.",
      "Designed a persistent cart summary that keeps selected items, quantities, and the checkout action visible.",
      "Planned the customer-facing experience with future product and order maintenance workflows in mind.",
    ],
    technologies: ["UI Concept", "Responsive Design", "E-commerce UX", "Order Workflows", "QA Planning"],
    highlights: [
      "Product discovery",
      "Pickup and delivery flow",
      "Cart and checkout planning",
      "Responsive customer journey",
    ],
    transferableSkills: ["Customer journey design", "Workflow planning", "Quality review", "Clear interfaces"],
    note: "Original self-directed portfolio concept. It is not a live client store and uses no client assets, customer data, proprietary material, or performance claims.",
    screenshot: "/projects/milk-tea-commerce-concept.png",
    imageAlt: "Original self-directed milk tea e-commerce interface concept",
    imageLabel: "Self-directed concept",
    visualClass: "commerce",
  },
  {
    slug: "customer-loyalty-system",
    label: "Customer Experience and System Support",
    title: "Chuchu Milktea Loyalty Kiosk",
    summary:
      "A tablet-first customer loyalty flow connected to Loyverse receipt data and designed for reliable in-store use.",
    overview:
      "This live client project supports customers claiming loyalty points while handling receipt synchronization, identity checks, time windows, and kiosk behavior behind the scenes.",
    problem:
      "The customer experience needed to stay simple while the system reliably handled pending receipts, individual claim windows, browser polling, and third-party data.",
    role:
      "PHP development, Loyverse API integration, customer-flow improvements, troubleshooting, timeout and queue logic, deployment, and ongoing client support.",
    solution: [
      "Built and refined a clear tablet experience for customers claiming loyalty points.",
      "Worked on receipt polling and synchronization for browser-based kiosk operation.",
      "Separated claim windows by customer so one person does not affect another customer's available time.",
      "Supported live deployment, kiosk-browser setup, and production issue investigation.",
    ],
    technologies: ["PHP", "MySQL", "Loyverse API", "JavaScript", "Kiosk Support"],
    highlights: [
      "Customer-facing guidance",
      "Loyverse synchronization",
      "Production troubleshooting",
      "Tablet workflow support",
    ],
    transferableSkills: ["Customer support", "Issue investigation", "System familiarization", "Clear user flows"],
    note: "Integration credentials, customer records, and private system endpoints are intentionally excluded.",
    screenshot: "/projects/chuchumilktea.png",
    imageAlt: "Chuchu Milktea loyalty kiosk interface",
    imageLabel: "Project interface",
    visualClass: "loyalty",
  },
  {
    slug: "e-borrower-library-system",
    label: "Academic System and IT Support",
    title: "DOUS E-Borrower's Card System",
    summary:
      "A deployed library portal for registered students and administrators, created during information technology OJT.",
    overview:
      "This academic system gives library users and administrators a consistent digital workflow for borrower access, registration, and record-based services.",
    problem:
      "Students and administrators needed a more organized way to access borrower services instead of relying on fragmented manual processes.",
    role:
      "Web application development, database workflow implementation, interface design, user testing, deployment, and technical support during OJT.",
    solution: [
      "Built separate sign-in paths for registered students and administrators.",
      "Created a straightforward account-registration and borrower-access workflow.",
      "Tested the user journey and supported common IT concerns in the OJT environment.",
      "Delivered and deployed the project as a working academic-services portal.",
    ],
    technologies: ["Web Application", "Database", "JavaScript", "Responsive UI"],
    highlights: [
      "Student and admin assistance",
      "Borrower record workflows",
      "Account registration",
      "Deployed academic system",
    ],
    transferableSkills: ["User support", "Data handling", "Process guidance", "Technical troubleshooting"],
    note: "The displayed project visual uses anonymous borrower cards and demo-only login text. Passwords, private borrower records, and administrator information are not shared.",
    screenshot: "/projects/dous-privacy-safe.png",
    imageAlt: "Privacy-safe DOUS E-Borrower's Card System interface with anonymous demo data",
    imageLabel: "Privacy-safe project preview",
    liveUrl: "https://e-borrower.fusiontechph.com/",
    liveLabel: "View Live System",
    visualClass: "library",
  },
];

export const customerSupportStory: PortfolioSupportStory = {
  eyebrow: "Customer support work sample",
  title: "A real support issue, handled from first report to resolution.",
  intro:
    "This standalone example shows how I communicate with a client, investigate a technical issue, escalate with useful evidence, explain the response, and follow through until service is restored.",
  outcome:
    "The root cause was a domain suspension caused by an unverified registrant email. After provider confirmation and client verification, the website became available again and the client confirmed the resolution.",
  steps: [
    {
      phase: "Step 01 · Client report",
      shortLabel: "Reported",
      title: "The client reported that the website would not open.",
      description:
        "I asked when the issue began, checked whether it was intermittent, tested the website myself, and confirmed that it was unavailable.",
      image: "/projects/chuchu-support/01-client-report.png",
      imageAlt: "Client conversation reporting that the Chuchu Milktea website would not open",
      width: 1648,
      height: 954,
    },
    {
      phase: "Step 02 · My escalation",
      shortLabel: "Escalated",
      title: "I emailed the hosting company with my findings.",
      description:
        "I sent a detailed support ticket describing the NXDOMAIN error and included the nameserver, DNS-zone, A-record, and direct-server connectivity checks I had completed.",
      image: "/projects/chuchu-support/02-provider-escalation.png",
      imageAlt: "Support ticket sent to the hosting company with DNS troubleshooting details",
      width: 1230,
      height: 605,
      redactions: ["ticket-email", "ticket-ip"],
    },
    {
      phase: "Step 03 · Provider response",
      shortLabel: "Diagnosed",
      title: "Melissa B. confirmed the root cause.",
      description:
        "The hosting support operator explained that the domain had been suspended because the registrant email address had not been verified.",
      image: "/projects/chuchu-support/03-provider-response.png",
      imageAlt: "Hosting support response identifying missing registrant email verification as the cause",
      width: 1251,
      height: 778,
      redactions: ["response-email"],
    },
    {
      phase: "Step 04 · Client guidance",
      shortLabel: "Guided",
      title: "I explained the cause and the next action.",
      description:
        "I told the client that the issue was at the domain and hosting layer, asked her to locate the registration-verification email, and guided her through the required action.",
      image: "/projects/chuchu-support/04-client-guidance.png",
      imageAlt: "Client conversation explaining the domain verification issue and next action",
      width: 1692,
      height: 929,
    },
    {
      phase: "Step 05 · Resolution",
      shortLabel: "Resolved",
      title: "The client confirmed the successful resolution.",
      description:
        "After verification and domain reactivation, the client confirmed that she could open the website again. I stayed with the issue from the first report through the final confirmation.",
      image: "/projects/chuchu-support/05-resolution-confirmed.png",
      imageAlt: "Client confirming that the Chuchu Milktea website opened successfully",
      width: 1209,
      height: 1300,
    },
  ],
};

export const certificates: PortfolioCertificate[] = [
  {
    title: "No Cap, Just Clarity: The Real Deal on Explainable AI (XAI)",
    issuer: "West Visayas State University · CICT",
    date: "September 27, 2024",
    category: "Artificial Intelligence",
    description: "Participated in a webinar on emerging trends and explainable artificial intelligence.",
    image: "/certificates/explainable-ai-webinar.png",
    orientation: "landscape",
  },
  {
    title: "Code x Creativity: Front-End Web Dev Essentials for Creatives",
    issuer: "West Visayas State University · CICT",
    date: "September 27, 2024",
    category: "Front-End Development",
    description: "Participated in a focused webinar on practical front-end foundations for creative work.",
    image: "/certificates/front-end-web-dev-essentials.png",
    orientation: "landscape",
  },
  {
    title: "Career Development in IT: From College to Industry",
    issuer: "West Visayas State University · CICT",
    date: "September 28, 2024",
    category: "Career Development",
    description: "Completed an industry-readiness session focused on the transition from college to IT work.",
    image: "/certificates/career-development-in-it.png",
    orientation: "landscape",
  },
  {
    title: "Let’s Talk About Azure: Insight into AZ-104",
    issuer: "Styava.dev",
    date: "September 25, 2024",
    category: "Cloud and Azure",
    description: "Participated in an introductory learning event focused on Microsoft Azure administration concepts.",
    image: "/certificates/azure-az-104-insight.png",
    orientation: "landscape",
  },
  {
    title: "Real Estate Brokerage Seminar for Real Estate Salespersons",
    issuer: "Philippines Center for Real Estate Professional Studies, Inc.",
    date: "June 20–21, 2026",
    category: "Real Estate · 12 Credit Units",
    description:
      "Supports my light real-estate experience as a licensed salesperson; training covered professional practice, ethics, taxation, and documentation.",
    image: "/certificates/real-estate-brokerage-seminar.png",
    orientation: "portrait",
  },
];
