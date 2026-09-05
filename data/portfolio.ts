export const profile = {
  name: "John Rey",
  fullName: "John Rey Baliguat",
  role: "Technical Virtual Assistant | Web Support & Automation",
  specialty: "Technical Support • Website Management • Business Systems • Automation",
  email: "baliguatjohnrey91@gmail.com",
  linkedin: "",
  github: "",
  resumeHref: "/John-Rey-Baliguat-Resume.pdf",
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
  note?: string;
  screenshot?: string;
  liveUrl?: string;
  liveLabel?: string;
  visualClass: "real-estate" | "library" | "retail" | "loyalty";
};

export const projects: PortfolioProject[] = [
  {
    slug: "real-estate-platform",
    label: "Lead & Sales Attribution",
    title: "Triple Vision Realty Platform",
    summary:
      "A property and buyer-lead system with admin tools and agent referral attribution.",
    overview:
      "This project focuses on helping a real-estate business manage listings, buyer inquiries, and agent ownership more clearly from one system.",
    problem:
      "Buyer inquiries can come from different agents and platforms, so attribution can become unclear when the first referral click and the actual selling agent are not the same person.",
    role:
      "Web development, interface improvements, admin workflow design, troubleshooting, and referral-attribution planning.",
    solution: [
      "Structured buyer leads so referral-source information can be recorded when an inquiry enters the system.",
      "Designed the admin flow around clear lead ownership instead of relying only on a raw link click.",
      "Improved mobile presentation for buyer-lead management and day-to-day admin use.",
      "Preserved existing routes and functionality while modernizing the user experience.",
    ],
    technologies: ["PHP", "MySQL", "JavaScript", "Responsive UI", "Admin Workflows"],
    highlights: [
      "Buyer lead management",
      "Agent referral logic",
      "Admin dashboard workflows",
      "Mobile UI improvements",
    ],
    note: "Public case study uses business-safe wording and does not expose private customer data.",
    screenshot: "/projects/realestate.png",
    liveUrl: "https://triplevisionrealty.infinityfree.me/RealEstate/admin/login.php",
    liveLabel: "View Admin Login",
    visualClass: "real-estate",
  },
  {
    slug: "retail-ordering-platform",
    label: "E-commerce & Operations",
    title: "Soy Yummy E-commerce Platform",
    summary:
      "A customer and admin platform supporting ordering, products, inventory, POS workflows, and branch operations.",
    overview:
      "This platform brings customer ordering and internal retail operations together, with role-based admin tools and branch-aware workflows.",
    problem:
      "The business needed one digital platform where customers can order while staff can manage products, stock-related workflows, branch operations, and sales activity.",
    role:
      "Full-stack implementation support, database setup, UI iteration, debugging, admin/customer workflow testing, and deployment preparation.",
    solution: [
      "Built customer-facing ordering flows and admin-side management interfaces.",
      "Worked with role-based access, products, branches, inventory-related records, POS workflows, and order states.",
      "Troubleshot database and Prisma setup issues during the move to a modern application stack.",
      "Iterated the interface to keep operational actions easy to find and use.",
    ],
    technologies: ["PHP", "MySQL", "JavaScript", "Responsive UI", "E-commerce"],
    highlights: [
      "Customer ordering",
      "Branch-aware operations",
      "Admin and POS workflows",
      "Database-driven business logic",
    ],
    note: "No sales figures or performance claims are shown unless they can be verified and approved for public use.",
    screenshot: "/projects/soy-yummy.png",
    liveUrl: "https://soyyummy.infinityfreeapp.com/",
    liveLabel: "View Live Website",
    visualClass: "retail",
  },
  {
    slug: "e-borrower-library-system",
    label: "Library & Borrower Management",
    title: "DOUS E-Borrower's Card System",
    summary:
      "A web-based library portal for registered students and administrators, built around secure access and borrower management.",
    overview:
      "This live academic system provides a dedicated portal for DMMMSU library users, with separate access for administrators and registered students.",
    problem:
      "Library borrower access and records need to be organized in one system so students and administrators can use a consistent digital workflow instead of relying on fragmented manual processes.",
    role:
      "Web application development, database-driven workflow implementation, interface design, testing, and deployment as an OJT project.",
    solution: [
      "Built a dedicated web portal with separate administrator and student sign-in paths.",
      "Created a clear onboarding path for new student accounts and returning users.",
      "Focused the interface on straightforward access to the library borrower system.",
      "Delivered and deployed the project as a working academic services portal.",
    ],
    technologies: ["Web Application", "Database", "JavaScript", "Responsive UI"],
    highlights: [
      "Student and admin access",
      "Borrower-focused workflow",
      "Account registration",
      "Live deployed system",
    ],
    note: "The public portfolio links only to the live system. Passwords, private records, and administrator data are not shared.",
    screenshot: "/projects/DOUS.png",
    liveUrl: "https://e-borrower.fusiontechph.com/",
    liveLabel: "View Live System",
    visualClass: "library",
  },
  {
    slug: "customer-loyalty-system",
    label: "Customer Experience",
    title: "Chuchu Milktea Loyalty Kiosk",
    summary:
      "A tablet-first loyalty kiosk that connects customer points workflows with Loyverse receipt data.",
    overview:
      "This project is designed for an in-store tablet/kiosk environment where customers can claim loyalty points while the system synchronizes receipt information with Loyverse.",
    problem:
      "The customer flow needed to be simple enough for a kiosk while handling pending receipts, claim windows, customer identification, and synchronization behavior reliably.",
    role:
      "PHP development, Loyverse API integration, kiosk UX improvements, debugging, timeout/queue logic, and deployment support.",
    solution: [
      "Built and refined customer-facing kiosk screens for a low-friction loyalty flow.",
      "Worked on receipt polling and synchronization logic for browser-based operation.",
      "Adjusted per-customer claim-window behavior so one customer does not consume another customer’s available time.",
      "Supported tablet deployment and kiosk-browser setup for a focused in-store experience.",
    ],
    technologies: ["PHP", "MySQL", "Loyverse API", "JavaScript", "Kiosk UI"],
    highlights: [
      "Tablet-first interface",
      "Loyverse receipt synchronization",
      "Per-customer claim windows",
      "External POS integration",
    ],
    note: "Sensitive integration credentials, customer records, and internal endpoints are intentionally excluded.",
    screenshot: "/projects/chuchumilktea.png",
    liveUrl: "",
    liveLabel: "Visit Live Website",
    visualClass: "loyalty",
  },
];
