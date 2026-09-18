export interface InsightCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
}

export interface Insight {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string; // Markdown or formatted HTML/paragraphs
  category: string;
  tags: string[];
  author: string;
  authorRole?: string;
  publishedAt: string;
  readingTime: number; // in minutes
  featuredImage: string;
  featured: boolean;
  published: boolean;
  seo: {
    title: string;
    description: string;
    keywords: string[];
    ogImage?: string;
  };
}
