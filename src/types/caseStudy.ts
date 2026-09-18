export interface CaseStudyGalleryItem {
  src: string;
  caption: string;
  alt: string;
}

export interface CaseStudyArchitecture {
  frontend: string[];
  backend: string[];
  database: string[];
  cloud: string[];
  integrations: string[];
}

export interface CaseStudyChallenge {
  title: string;
  description: string;
  painPoints: string[];
}

export interface CaseStudySolution {
  title: string;
  description: string;
  highlights: string[];
}

export interface CaseStudyTestimonial {
  quote: string;
  author: string;
  role?: string;
  company?: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  projectType: string;
  category: "E-commerce" | "Enterprise" | "AI" | "Mobility" | "Web Applications" | "Automation" | "Education";
  industry: string;
  clientId: string;
  clientDisplayName: string;
  liveUrl?: string;
  shortDescription: string;
  overview: string;
  challenge: CaseStudyChallenge;
  solution: CaseStudySolution;
  features: string[];
  technologies: string[]; // technology IDs referencing technologies.ts
  architecture: CaseStudyArchitecture;
  heroImage: string;
  thumbnailImage: string;
  gallery: CaseStudyGalleryItem[];
  results?: string[];
  testimonial?: CaseStudyTestimonial;
  featured: boolean;
  published: boolean;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}
