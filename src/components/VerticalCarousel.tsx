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
  // Track current image indexes
  const [topImageIndex, setTopImageIndex] = useState(0);
  const [bottomImageIndex, setBottomImageIndex] = useState(1);
  const [thirdImageIndex, setThirdImageIndex] = useState(2);

  // Animation state
  const [isTopActive, setIsTopActive] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Function to advance the carousel
  const advanceCarousel = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setIsTopActive(false); // Start animation

    // After animation is complete, update images and reset positions
    setTimeout(() => {
      // Rotate all image indices
      setTopImageIndex(bottomImageIndex);
      setBottomImageIndex(thirdImageIndex);
      setThirdImageIndex((thirdImageIndex + 1) % images.length);
      setIsTopActive(true);

      // Reset animation state after positions are updated
      setTimeout(() => {
        setIsAnimating(false);
      }, 50);
    }, 600); // Shorter timeout - just enough for the animation to finish
  };

  // Setup the rotation interval
  useEffect(() => {
    if (!isAnimating) {
      timeoutRef.current = setTimeout(() => {
        advanceCarousel();
      }, 5000);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [topImageIndex, bottomImageIndex, thirdImageIndex, isAnimating]);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="relative w-[70%] h-[70%]">
        <AnimatePresence>
          {/* Cards container with hardware acceleration enabled */}
          <div
            className="absolute inset-0"
            style={{
              willChange: "transform",
              perspective: "1000px",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transformStyle: "preserve-3d",
            }}
          >
            {/* Top card */}
            <motion.div
              key={`top-${topImageIndex}`}
              className="absolute inset-0"
              initial={{ rotate: 0, y: 0, scale: 1, zIndex: 10 }}
              animate={
                isTopActive
                  ? { rotate: 0, y: 0, scale: 1, zIndex: 10, opacity: 1 }
                  : { rotate: -3, y: 80, scale: 0.92, zIndex: 1, opacity: 0 }
              }
              transition={{
                type: "tween",
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              style={{
                position: "absolute",
                transformOrigin: "center 30%",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                boxShadow: "0 8px 30px rgba(0, 0, 0, 0.15)",
              }}
            >
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-white p-2.5 border-2 border-burgundy/10">
                <div className="relative w-full h-full overflow-hidden rounded-lg">
                  <Image
                    src={`/flag/${images[topImageIndex]}`}
                    alt={`Gallery image top`}
                    fill
                    sizes="(max-width: 768px) 70vw, 35vw"
                    className="object-cover"
                    priority={true}
                    quality={95}
                  />
                </div>
              </div>
            </motion.div>

            {/* Bottom card */}
            <motion.div
              key={`bottom-${bottomImageIndex}`}
              className="absolute inset-0"
              initial={{ rotate: 2, y: 8, scale: 0.97, zIndex: 5, opacity: 1 }}
              animate={
                isTopActive
                  ? { rotate: 2, y: 8, scale: 0.97, zIndex: 5, opacity: 1 }
                  : { rotate: 0, y: 0, scale: 1, zIndex: 10, opacity: 1 }
              }
              transition={{
                type: "tween",
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              style={{
                position: "absolute",
                transformOrigin: "center 30%",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.08)",
              }}
            >
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-white p-2.5 border-2 border-burgundy/10">
                <div className="relative w-full h-full overflow-hidden rounded-lg">
                  <Image
                    src={`/flag/${images[bottomImageIndex]}`}
                    alt={`Gallery image bottom`}
                    fill
                    sizes="(max-width: 768px) 70vw, 35vw"
                    className="object-cover"
                    priority={true}
                    quality={90}
                  />
                </div>
              </div>
            </motion.div>

            {/* Third card (preloaded) */}
            <div className="absolute inset-0 opacity-0 pointer-events-none">
              <div className="relative w-full h-full">
                <Image
                  src={`/flag/${images[thirdImageIndex]}`}
                  alt="Preloaded next image"
                  fill
                  sizes="(max-width: 768px) 70vw, 35vw"
                  className="object-cover"
                  priority={false}
                  quality={80}
                />
              </div>
            </div>
          </div>
        </AnimatePresence>
      </div>

      {/* Carousel dots */}
      {/* <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-1.5 pb-2">
        {images.map((_, index) => (
          <motion.div
            key={`dot-${index}`}
            className={`w-1.5 h-1.5 rounded-full ${
              index === topImageIndex ? "bg-burgundy" : "bg-gray-300"
            }`}
            animate={{
              scale: index === topImageIndex ? 1.2 : 1,
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div> */}
    </div>
  );
}
