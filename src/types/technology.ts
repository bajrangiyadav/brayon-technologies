export type TechnologyCategory =
  | "frontend"
  | "backend"
  | "database"
  | "ai"
  | "cloud"
  | "integration";

export interface Technology {
  id: string;
  name: string;
  category: TechnologyCategory;
  description: string;
  docsUrl?: string;
}
