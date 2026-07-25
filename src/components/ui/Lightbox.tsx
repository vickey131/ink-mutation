"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: {
    src: string;
    title: string;
    category: string;
    description: string;
  }[];
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
}

export default function Lightbox({
  isOpen,
  onClose,
  images,
  currentIndex,
  setCurrentIndex,
}: LightboxProps) {
  const currentImage = images[currentIndex];

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, currentIndex, images.length]);

  return (
    <AnimatePresence>
      {isOpen && currentImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex flex-col justify-between bg-black/95 text-white p-6"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between w-full z-10">
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-gold-primary font-bold">
                {currentImage.category}
              </span>
              <h3 className="font-serif-header text-sm tracking-wide font-medium mt-0.5">
                {currentImage.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-smooth focus:outline-none"
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>
          </div>

          {/* Main Content Area */}
          <div className="relative flex items-center justify-center grow w-full my-4">
            
            {/* Left Control */}
            <button
              onClick={handlePrev}
              className="absolute left-2 z-10 p-3 bg-white/5 hover:bg-white/15 border border-white/10 text-white transition-smooth focus:outline-none rounded-full"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Image Wrapper */}
            <motion.div
              key={currentIndex}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full h-[60vh] md:h-[70vh] max-w-4xl flex items-center justify-center p-2"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={currentImage.src}
                alt={currentImage.title}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 1000px"
                priority
              />
            </motion.div>

            {/* Right Control */}
            <button
              onClick={handleNext}
              className="absolute right-2 z-10 p-3 bg-white/5 hover:bg-white/15 border border-white/10 text-white transition-smooth focus:outline-none rounded-full"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Bottom Info Details */}
          <div className="w-full text-center max-w-xl mx-auto space-y-2 mb-2 z-10" onClick={(e) => e.stopPropagation()}>
            <p className="text-xs text-white/75 leading-relaxed font-light">
              {currentImage.description}
            </p>
            <div className="text-[10px] text-white/40 tracking-wider">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
