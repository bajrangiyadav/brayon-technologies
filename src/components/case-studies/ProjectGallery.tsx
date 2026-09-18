"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { CaseStudyGalleryItem } from "@/types/caseStudy";

interface ProjectGalleryProps {
  items: CaseStudyGalleryItem[];
}

export function ProjectGallery({ items }: ProjectGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleClose = () => setSelectedIndex(null);

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + items.length) % items.length);
  }, [selectedIndex, items.length]);

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % items.length);
  }, [selectedIndex, items.length]);

  // Keyboard navigation
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedIndex, handlePrev, handleNext]);

  if (!items || items.length === 0) return null;

  return (
    <div>
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, idx) => (
          <div
            key={item.caption + idx}
            onClick={() => setSelectedIndex(idx)}
            className="group relative rounded-2xl bg-[#090e1b] border border-white/[0.08] hover:border-white/[0.2] overflow-hidden cursor-pointer transition-all flex flex-col justify-between"
          >
            {/* Image viewport with aspect ratio */}
            <div className="relative w-full aspect-[16/10] bg-[#050811] overflow-hidden flex items-center justify-center">
              <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, #3b82f6 1px, transparent 1px),
                    linear-gradient(to bottom, #3b82f6 1px, transparent 1px)
                  `,
                  backgroundSize: "20px 20px",
                }}
              />
              <div className="relative w-3/4 h-3/4 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-contain"
                  loading="lazy"
                />
              </div>

              {/* Hover overlay icon */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="p-2.5 rounded-full bg-[#0d1322]/90 border border-white/[0.2] text-white">
                  <Maximize2 className="w-4 h-4" />
                </span>
              </div>
            </div>

            {/* Caption */}
            <div className="p-4 bg-[#0d1322]/90 border-t border-white/[0.06]">
              <p className="text-xs font-mono text-slate-300 leading-snug">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image Lightbox"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={handleClose}
        >
          {/* Close button */}
          <button
            onClick={handleClose}
            type="button"
            className="absolute top-4 right-4 p-3 rounded-full bg-white/[0.06] hover:bg-white/[0.14] text-slate-300 hover:text-white transition-colors cursor-pointer z-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation controls */}
          {items.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                type="button"
                className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/[0.08] hover:bg-white/[0.18] text-white transition-colors cursor-pointer z-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                type="button"
                className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/[0.08] hover:bg-white/[0.18] text-white transition-colors cursor-pointer z-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Active Image Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center"
          >
            <div className="relative w-full h-[60vh] max-h-[600px] flex items-center justify-center p-4">
              <Image
                src={items[selectedIndex].src}
                alt={items[selectedIndex].alt}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Lightbox Caption & Index */}
            <div className="mt-4 text-center max-w-xl">
              <p className="text-sm font-mono text-slate-200">
                {items[selectedIndex].caption}
              </p>
              <p className="text-xs font-mono text-slate-500 mt-1">
                {selectedIndex + 1} of {items.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectGallery;
