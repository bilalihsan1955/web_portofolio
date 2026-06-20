"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const formatCaption = (url: string) => {
  try {
    const filename = url.split('/').pop() || "";
    // Remove all extensions (e.g., .png.webp -> just the base name)
    const nameWithoutExt = filename.split('.')[0] || filename;
    const decoded = decodeURIComponent(nameWithoutExt).replace(/[-_]/g, ' ');
    
    return decoded
      .split(' ')
      .map(word => word ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() : '')
      .join(' ');
  } catch (e) {
    return "Project Screenshot";
  }
};

interface ProjectGalleryProps {
  images: string[];
}

export default function ProjectGallery({ images }: ProjectGalleryProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  // Keyboard navigation and scroll lock
  useEffect(() => {
    if (!isOpen) return;

    // Lock body scroll when modal is open
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, prevImage, nextImage]);

  if (!images || images.length === 0) return null;

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center p-4 bg-black/90 backdrop-blur-md"
        >
          {/* Close Button */}
          <button 
            onClick={closeModal}
            className="absolute top-6 right-6 z-[10000] p-3 md:p-4 bg-white/10 hover:bg-white/20 text-white border border-white/10 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110 shadow-xl"
          >
            <X className="w-6 h-6 md:w-8 md:h-8"/>
          </button>

          {/* Previous Arrow - Extreme Edge */}
          <button 
            onClick={prevImage}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-[10000] p-4 bg-white/10 hover:bg-white/20 text-white border border-white/10 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110 shadow-xl"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Next Arrow - Extreme Edge */}
          <button 
            onClick={nextImage}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-[10000] p-4 bg-white/10 hover:bg-white/20 text-white border border-white/10 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110 shadow-xl"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Image Container - Borderless & Massive */}
          <div className="relative w-full max-w-[90vw] h-[80vh] md:h-[85vh] flex flex-col items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="w-full h-full relative"
              >
                <Image 
                  alt={`Gallery image ${currentIndex + 1}`} 
                  className="object-contain drop-shadow-2xl" 
                  fill 
                  sizes="90vw" 
                  src={images[currentIndex]}
                  priority
                />
              </motion.div>
            </AnimatePresence>
            
            {/* Minimalist Caption */}
            <div className="absolute -bottom-12 md:-bottom-16 left-0 right-0 text-center">
              <p className="text-lg md:text-xl font-light text-white tracking-wide capitalize">{formatCaption(images[currentIndex])}</p>
              <p className="text-sm font-medium text-white/50 mt-1 capitalize tracking-wide">
                {currentIndex + 1} of {images.length}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  const renderImageCard = (imgUrl: string, idx: number) => (
    <div 
      key={idx} 
      onClick={() => openModal(idx)}
      className="relative w-full overflow-hidden rounded-2xl bg-white/[0.02] dark:bg-white/[0.02] backdrop-blur-2xl border border-black/[0.05] dark:border-white/[0.05] shadow-[0_8px_30px_rgb(0,0,0,0.04)] group cursor-pointer hover:scale-[1.02] transition-transform duration-300"
    >
      <Image
        src={imgUrl}
        alt={`Project screenshot ${idx + 1}`}
        width={800}
        height={600}
        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {/* Subtle overlay on hover */}
      <div className="absolute inset-0 bg-accent-teal/0 group-hover:bg-accent-teal/20 transition-colors duration-300 pointer-events-none" />
      
      {/* Hover Caption matching modal */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end pointer-events-none">
        <p className="text-lg font-light text-white tracking-wide translate-y-4 group-hover:translate-y-0 transition-transform duration-300 capitalize line-clamp-2">{formatCaption(imgUrl)}</p>
        <p className="text-sm font-medium text-white/70 mt-1 capitalize tracking-wide translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
          {idx + 1} of {images.length}
        </p>
      </div>
    </div>
  );

  return (
    <>
      <div className="mt-16 border-t border-foreground/10 pt-16">
        <h3 className="text-2xl font-bold text-foreground mb-8">Project Gallery</h3>
        
        {/* Mobile: Single Column */}
        <div className="flex sm:hidden flex-col gap-4">
          {images.map((imgUrl, idx) => renderImageCard(imgUrl, idx))}
        </div>

        {/* Desktop: Two Columns Masonry (Left-to-Right Order) */}
        <div className="hidden sm:flex flex-row gap-4 items-start">
          <div className="flex flex-col gap-4 flex-1">
            {images.map((imgUrl, idx) => ({ imgUrl, idx })).filter((_, i) => i % 2 === 0).map(({ imgUrl, idx }) => renderImageCard(imgUrl, idx))}
          </div>
          <div className="flex flex-col gap-4 flex-1">
            {images.map((imgUrl, idx) => ({ imgUrl, idx })).filter((_, i) => i % 2 === 1).map(({ imgUrl, idx }) => renderImageCard(imgUrl, idx))}
          </div>
        </div>
      </div>

      {mounted && createPortal(modalContent, document.body)}
    </>
  );
}
