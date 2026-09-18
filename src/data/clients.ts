import { Client } from "@/types/client";

export const clients: Client[] = [
  {
    id: "CLIENT_01",
    name: "Jay Balaji Computer Education",
    industry: "Education & IT Training",
    description: "ISO 9001:2015 certified computer training institute offering certified vocational IT courses, student certificate verification, and franchise center operations.",
    confidential: false,
    featured: true,
  },
  {
    id: "CLIENT_02",
    name: "Mumbai Hindi Vidyapeeth",
    industry: "Higher Education & Examination Systems",
    description: "Historic educational institution and examination board administering recognized Hindi academic qualifications, multi-center exam registrations, and online student result publications.",
    confidential: false,
    featured: true,
  },
];

export function getClientById(id: string): Client | undefined {
  return clients.find((c) => c.id === id);
}
