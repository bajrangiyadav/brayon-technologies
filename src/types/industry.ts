export interface Industry {
  id: string;
  slug: string;
  name: string;
  description: string;
  capabilities: string[];
  caseStudyIds: string[];
  hasDirectExperience: boolean;
  featured: boolean;
}
