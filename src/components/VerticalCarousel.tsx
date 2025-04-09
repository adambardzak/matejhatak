"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "DSC01266.jpg",
  "DSC01389.jpg",
  "DSC01503.jpg",
  "DSC02482.jpg",
  "DSC02637.jpg",
  "DSC03810.jpg",
  "DSC03886.jpg",
  "DSC03907.jpg",
  "IMG_0005.JPG",
];

export default function VerticalCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  // Autoplay functionality
  useEffect(() => {
    const startAutoplay = () => {
      autoplayRef.current = setInterval(() => {
        if (!isPaused) {
          paginate(1);
        }
      }, 3000);
    };

    startAutoplay();

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [isPaused]);

  const slideVariants = {
    enter: (direction: number) => ({
      y: direction > 0 ? 200 : -200,
      opacity: 0,
      scale: 0.95,
      filter: "blur(8px)",
      transition: {
        y: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
        filter: { duration: 0.2 }
      }
    }),
    center: {
      zIndex: 1,
      y: 0,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        y: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
        filter: { duration: 0.2 }
      }
    },
    exit: (direction: number) => ({
      zIndex: 0,
      y: direction < 0 ? 200 : -200,
      opacity: 0,
      scale: 0.95,
      filter: "blur(8px)",
      transition: {
        y: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
        filter: { duration: 0.2 }
      }
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div 
        className="relative w-full max-w-[380px] aspect-[2/3] overflow-visible mr-8"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            className="absolute inset-0"
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.y, velocity.y);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          >
            <motion.div 
              className="relative w-full h-full rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
              initial={{ rotate: direction > 0 ? 5 : -5 }}
              animate={{ rotate: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <Image
                src={`/flag/${images[currentIndex]}`}
                alt="Carousel image"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation buttons */}
        <button
          className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm shadow-sm flex items-center justify-center hover:bg-white/90 transition-colors"
          onClick={() => paginate(-1)}
        >
          <svg
            className="w-5 h-5 text-black/70"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>

        <button
          className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-10 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm shadow-sm flex items-center justify-center hover:bg-white/90 transition-colors"
          onClick={() => paginate(1)}
        >
          <svg
            className="w-5 h-5 text-black/70"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {/* Progress indicator */}
        <div className="absolute -right-4 top-1/2 -translate-y-1/2 flex flex-col gap-1 z-10">
          {images.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => {
                const newDirection = index > currentIndex ? 1 : -1;
                setDirection(newDirection);
                setCurrentIndex(index);
              }}
              className={`w-1 h-6 rounded-full transition-colors ${
                index === currentIndex ? "bg-white" : "bg-white/40"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
