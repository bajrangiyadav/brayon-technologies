"use client";

import React, { useState } from "react";
import { Search, X, SlidersHorizontal, RotateCcw } from "lucide-react";

interface FilterOptions {
  search: string;
  category: string;
  technology: string;
  industry: string;
}

interface CaseStudyFiltersProps {
  filters: FilterOptions;
  onFilterChange: (newFilters: FilterOptions) => void;
  availableCategories: string[];
  availableTechnologies: { id: string; name: string }[];
  availableIndustries: string[];
  totalResults: number;
}

export function CaseStudyFilters({
  filters,
  onFilterChange,
  availableCategories,
  availableTechnologies,
  availableIndustries,
  totalResults,
}: CaseStudyFiltersProps) {
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const handleCategoryClick = (category: string) => {
    onFilterChange({ ...filters, category });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange({ ...filters, search: e.target.value });
  };

  const handleTechChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange({ ...filters, technology: e.target.value });
  };

  const handleIndustryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange({ ...filters, industry: e.target.value });
  };

  const handleReset = () => {
    onFilterChange({
      search: "",
      category: "All",
      technology: "All",
      industry: "All",
    });
  };

  const isFiltered =
    filters.search !== "" ||
    filters.category !== "All" ||
    filters.technology !== "All" ||
    filters.industry !== "All";

  return (
    <div className="space-y-4 mb-10">
      {/* Top Bar: Category Tabs & Mobile Filter Button */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          {["All", ...availableCategories].map((cat) => {
            const isActive = filters.category === cat;
            return (
              <button
                key={cat}
                onClick={() => handleCategoryClick(cat)}
                type="button"
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "bg-blue-600 text-white shadow-sm shadow-blue-600/30 border border-blue-500"
                    : "bg-[#0d1322] text-slate-400 hover:text-white border border-white/[0.08] hover:border-white/[0.18]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Mobile Filter Toggle */}
        <div className="flex items-center justify-between md:justify-end gap-3">
          <span className="text-xs font-mono text-slate-500">
            {totalResults} {totalResults === 1 ? "project" : "projects"} found
          </span>

          <button
            type="button"
            onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
            className="md:hidden inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#0d1322] border border-white/[0.08] text-xs font-mono text-slate-300"
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-blue-400" />
            <span>Filters</span>
          </button>
        </div>
      </div>

      {/* Advanced Filter Row (Search + Select Dropdowns) */}
      <div
        className={`grid grid-cols-1 sm:grid-cols-12 gap-3 pt-2 ${
          mobileFilterOpen ? "block" : "hidden md:grid"
        }`}
      >
        {/* Search input */}
        <div className="sm:col-span-5 relative">
          <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={filters.search}
            onChange={handleSearchChange}
            placeholder="Search projects, technologies, features..."
            className="w-full pl-10 pr-8 py-2.5 rounded-xl bg-[#0d1322] border border-white/[0.08] focus:border-blue-500 focus:outline-none text-xs font-mono text-slate-200 placeholder:text-slate-500 transition-colors"
          />
          {filters.search && (
            <button
              onClick={() => onFilterChange({ ...filters, search: "" })}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Technology Filter */}
        <div className="sm:col-span-3">
          <select
            value={filters.technology}
            onChange={handleTechChange}
            className="w-full px-3 py-2.5 rounded-xl bg-[#0d1322] border border-white/[0.08] focus:border-blue-500 focus:outline-none text-xs font-mono text-slate-200 cursor-pointer transition-colors"
          >
            <option value="All">All Technologies</option>
            {availableTechnologies.map((t) => (
              <option key={t.id} value={t.id}>
                {t.name}
              </option>
            ))}
          </select>
        </div>

        {/* Industry Filter */}
        <div className="sm:col-span-3">
          <select
            value={filters.industry}
            onChange={handleIndustryChange}
            className="w-full px-3 py-2.5 rounded-xl bg-[#0d1322] border border-white/[0.08] focus:border-blue-500 focus:outline-none text-xs font-mono text-slate-200 cursor-pointer transition-colors"
          >
            <option value="All">All Industries</option>
            {availableIndustries.map((ind) => (
              <option key={ind} value={ind}>
                {ind}
              </option>
            ))}
          </select>
        </div>

        {/* Reset Button */}
        <div className="sm:col-span-1 flex items-center">
          {isFiltered && (
            <button
              onClick={handleReset}
              title="Reset all filters"
              type="button"
              className="w-full h-full flex items-center justify-center p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-slate-400 hover:text-white transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default CaseStudyFilters;
