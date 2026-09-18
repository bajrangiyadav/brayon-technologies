export interface Client {
  id: string;
  name: string;
  logo?: string;
  website?: string;
  industry?: string;
  description?: string;
  confidential: boolean;
  featured: boolean;
}
