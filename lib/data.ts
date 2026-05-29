/**
 * Single source of truth for all portfolio content.
 * Update values here — components read from this file.
 */

export const profile = {
  name: "Subash K",
  role: "Android SDK Developer",
  tagline:
    "Building scalable Android SDKs, Kotlin Multiplatform solutions, and reliable mobile developer tools.",
  githubUsername: "subashkanthasamy",
  links: {
    github: "https://github.com/subashkanthasamy",
    linkedin: "https://www.linkedin.com/in/subash-kanthasamy/",
    email: "subashktsmpi@gmail.com",
    phone: "+91 7010373172",
  },
} as const;

export const heroHighlights: string[] = [
  "3+ Years Experience",
  "Zoho Corporation",
  "Kotlin",
  "Android SDK",
  "Kotlin Multiplatform",
];

export const about = {
  summary:
    "Android SDK Developer with 3+ years of experience specializing in Android SDK engineering, Kotlin development, and mobile platform development. Focused on crash analysis, SDK maintenance, and performance optimization to ship stable, well-tested developer tools used across products.",
  expertise: [
    "Kotlin",
    "Java 17",
    "Android SDK",
    "Kotlin Multiplatform",
    "Jetpack Compose",
    "MVVM",
    "Clean Architecture",
    "Hilt",
    "Dagger",
    "Room Database",
    "Firebase",
    "Gradle",
    "Git",
    "Unit Testing",
  ],
} as const;

export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  current?: boolean;
  responsibilities: string[];
  tech?: string[];
}

export const experience: ExperienceItem[] = [
  {
    company: "Zoho Corporation",
    role: "Android SDK Developer",
    duration: "June 2022 - Present",
    current: true,
    responsibilities: [
      "Android SDK Development",
      "SDK Publishing",
      "Crash Analysis",
      "KMP Development",
      "Gradle Optimization",
      "Unit Testing",
      "SDK Stability Improvements",
      "Performance Optimization",
    ],
    tech: ["Kotlin", "Android SDK", "KMP", "MVVM", "Compose"],
  },
  {
    company: "TNQ Technologies",
    role: "Associate - Data Conversion",
    duration: "June 2020 - June 2022",
    responsibilities: [
      "DOC to XML Conversion",
      "XML Validation",
      "HTML Tagging",
      "Parser Validation",
      "QC Tools",
      "Error-free Delivery",
    ],
  },
];

export interface Project {
  title: string;
  description: string;
  tech: string[];
  features: string[];
  url?: string;
}

export const projects: Project[] = [
  {
    title: "Expense Tracker",
    description:
      "A Kotlin + Jetpack Compose Android app for household-level collaborative budgeting, with smart automation like SMS bank-transaction import, ML Kit receipt OCR, and voice entry.",
    tech: [
      "Kotlin",
      "Jetpack Compose",
      "Material 3",
      "ML Kit",
      "Firebase",
      "WorkManager",
    ],
    features: [
      "SMS Import & Receipt OCR",
      "Voice Expense Entry",
      "Budgets, Goals & Recurring Expenses",
      "Household Collaboration",
      "Spending Analytics",
    ],
    url: "https://github.com/subashkanthasamy/ExpenseTracker",
  },
  {
    title: "Smart QR Generator",
    description:
      "A Kotlin Android app for generating customizable QR codes — quick creation, styling options, and easy sharing from a clean Jetpack Compose interface.",
    tech: ["Kotlin", "Jetpack Compose", "Android"],
    features: [
      "Customizable QR Codes",
      "Multiple Data Types",
      "Quick Share",
    ],
    url: "https://github.com/subashkanthasamy/Smart-QR-Generator",
  },
  // Hidden — uncomment to re-enable.
  // {
  //   title: "Loan Tracker Android Application",
  //   description:
  //     "A Kotlin-based Android app for tracking loans end to end — recording repayments and surfacing pending balances with a clean, reliable UI backed by Firebase.",
  //   tech: ["Kotlin", "Firebase"],
  //   features: [
  //     "Loan Tracking",
  //     "Repayment Management",
  //     "Pending Balance Tracking",
  //   ],
  // },
];

export const skills: string[] = [
  "Android SDK",
  "Kotlin",
  "Jetpack Compose",
  "KMP",
  "MVVM",
  "Clean Architecture",
  "Gradle",
  "Firebase",
  "Git",
  "Hilt",
  "Dagger",
  "Java 17",
  "Room Database",
];

export interface EducationItem {
  degree: string;
  field?: string;
  institution: string;
  duration: string;
  detail?: string;
}

export const education: EducationItem[] = [
  {
    degree: "Bachelor of Engineering",
    field: "Mechanical and Automation Engineering",
    institution: "PSN Engineering College",
    duration: "2015 - 2019",
    detail: "CGPA: 7.31",
  },
];

export const academics: { label: string; value: string }[] = [
  { label: "B.E. CGPA", value: "7.31" },
  { label: "HSC", value: "72.42%" },
  { label: "SSLC", value: "89.4%" },
];

export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
