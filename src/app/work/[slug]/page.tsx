import { redirect } from "next/navigation";
import { caseStudies } from "@/data/caseStudies";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((project) => ({
    slug: project.slug,
  }));
}

export default async function WorkSlugPage({ params }: Props) {
  const { slug } = await params;
  redirect(`/case-studies/${slug}`);
}
