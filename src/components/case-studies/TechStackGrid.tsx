import React from "react";
import { CaseStudyArchitecture } from "@/types/caseStudy";
import { Code, Server, Database, Cloud, Layers } from "lucide-react";

interface TechStackGridProps {
  architecture: CaseStudyArchitecture;
}

export function TechStackGrid({ architecture }: TechStackGridProps) {
  const sections = [
    { title: "Frontend Engineering", icon: Code, items: architecture.frontend },
    { title: "Backend Systems", icon: Server, items: architecture.backend },
    { title: "Database & Caching", icon: Database, items: architecture.database },
    { title: "Cloud & DevOps", icon: Cloud, items: architecture.cloud },
    { title: "Integrations & APIs", icon: Layers, items: architecture.integrations },
  ].filter((s) => s.items && s.items.length > 0);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {sections.map((sec) => {
        const Icon = sec.icon;
        return (
          <div
            key={sec.title}
            className="p-5 rounded-2xl bg-[#090e1b] border border-white/[0.08] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-3 pb-2.5 border-b border-white/[0.06]">
                <Icon className="w-4 h-4 text-blue-400" />
                <h4 className="text-xs font-mono uppercase tracking-wider font-semibold text-slate-300">
                  {sec.title}
                </h4>
              </div>

              <div className="space-y-1.5">
                {sec.items.map((item) => (
                  <div
                    key={item}
                    className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.04] text-xs font-mono text-slate-200 flex items-center gap-2"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500/80" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TechStackGrid;
