export interface ProjectCardDto {
  title: string;
  description: string;
  keyContributions: string[];
  techStack: string[];
  isHaveImg?: boolean;
  srcImg?: string;
}

export const projectList: ProjectCardDto[] = [
  {
    title: "A Service for Grades Management",
    description:
      "Developed a grading service module for a microservices-based Internship & Industrial Training management system, designed using Event-Driven Architecture to ensure reliable asynchronous processing and smooth grade calculation workflow.",
    techStack: ["Spring Boot", "React.js", "Apache Kafka", "PostgreSQL"],
    keyContributions: [
      "Designed and implemented grade management service",
      "Integrated event-driven communication using Kafka",
      "Improved backend structure and OOP quality",
    ],
    isHaveImg: false,
    srcImg: "ri-bar-chart-box-line",
  },
  {
    title: "Development of BMD Asset Inventory & Reporting Module",
    description:
      "Development of asset reporting and inventory modules for Bandung Regency’s DIARVIS-BMD application. Supports asset monitoring by KIB type with multi-format reports and mobile-based asset survey.",
    techStack: ["Laravel", "PHP", "PostgreSQL"],
    keyContributions: [
      "Developed asset reporting module with structured data output",
      "Built inventory feature to support field asset survey and data entry",
      "Optimized data handling and conversion from database to report-ready format",
      "Strengthened understanding and implementation of Laravel framework",
    ],
    isHaveImg: true,
    srcImg: "img/diarvis.png",
  },
  {
    title: "Talent Management Platform",
    description:
      "A digital platform to streamline recruitment and talent management. Enables talent searching, hiring, and status monitoring to improve efficiency.",
    techStack: ["React.js", "Spring Boot", "PostgreSQL"],
    keyContributions: [
      "Developed talent search and management modules",
      "Implemented backend services for talent data processing and status tracking",
      "Built responsive frontend for efficient workflows",
      "Ensured smooth integration between frontend, backend, and database",
    ],
    isHaveImg: true,
    srcImg: "img/talent-center79.png",
  },
  {
    title: "International Remittance Platform",
    description:
      "A digital remittance platform supporting faster, transparent, and cost-efficient international transfers compared to SWIFT-based services.",
    techStack: ["React.js", "Spring Boot", "Oracle Database"],
    keyContributions: [
      "Developed backend scheduler to update transaction inquiry status",
      "Implemented batch processing using Spring Batch",
      "Integrated email queueing via AMQ",
      "Handled Excel processing using Apache POI",
    ],
    isHaveImg: false,
    srcImg: "ri-exchange-dollar-fill",
  },
  {
    title: "Banking CMS – Back Office Platform",
    description:
      "A centralized Back Office CMS for bank internal users to manage customers, transactions, onboarding, and application settings.",
    techStack: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Redis",
      "JWT",
      "Micrometer",
      "Apache POI",
    ],
    keyContributions: [
      "Developed Forgot Password feature",
      "Implemented Company Registration module",
      "Built Admin Dashboards (Web & Mobile)",
      "Added Excel Recipient List Import feature",
    ],
    isHaveImg: false,
    srcImg: "ri-home-gear-fill",
  },
  {
    title: "Banking CMS – Customer Platform",
    description:
      "A customer-facing CMS with microservices architecture providing profile management, recipient management, approvals, and dashboards across web and mobile.",
    techStack: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Redis",
      "JWT",
      "Micrometer",
    ],
    keyContributions: [
      "Developed Customer Profile Module",
      "Built Customer Dashboard (Web & Mobile)",
      "Improved usability and customer experience features",
    ],
    isHaveImg: false,
    srcImg: "ri-team-line",
  },
  {
    title: "IFRS 17 Compliance System",
    description:
      "A compliance platform supporting PSAK 117 & IFRS 17 with complex insurance liability calculations, automated financial reporting, and system integration.",
    techStack: [
      "Angular 16",
      "NestJS 10",
      "MySQL",
      "MongoDB",
      "Redis",
      "BullMQ",
    ],
    keyContributions: [
      "Implemented Assign Model for flexible calculation selection",
      "Developed Assign Factor for dynamic parameter input",
      "Built Generate Liabilities using event-driven processing",
      "Added Mortality Rate management",
      "Developed Generate Journal",
      "Built Generate Report",
      "Performed COA Mapping",
    ],
    isHaveImg: false,
    srcImg: "ri-calculator-line",
  },
  {
    title: "Life Insurance Core System",
    description:
      "Comprehensive life insurance core platform handling policy management, billing, claims, API integrations, and high-volume certificate issuance.",
    techStack: [
      "Angular 16",
      "NestJS 10",
      "MySQL",
      "MongoDB",
      "Redis",
      "BullMQ",
    ],
    keyContributions: [
      "Developed dynamic document upload system",
      "Built Assumption Form Input",
      "Implemented dynamic template upload",
      "Developed Claims & Policy Amendment import",
      "Added Broker CRUD",
      "Created Maturity & Birthday Reminder Scheduler",
      "Implemented Claim Rules",
    ],
    isHaveImg: false,
    srcImg: "ri-leaf-line",
  },
];
