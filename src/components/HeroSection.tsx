"use client";

import { motion } from "framer-motion";
import { ButtonLink, ArrowIcon } from "./Button";
import VerticalCarousel from "./VerticalCarousel";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
};

const floatingVariants = {
  initial: { y: 0 },
  animate: {
    y: [-8, 8, -8],
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "loop" as const,
      ease: "easeInOut",
    },
  },
};

export default function HeroSection() {
  return (
    <section className="relative h-screen flex">
      {/* Left Content */}
      <div className="relative z-10 flex flex-1 items-center justify-center md:justify-end px-6 md:px-12 lg:px-16">
        <motion.div
          className="max-w-xl md:mr-10"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Greeting Tag */}
          <motion.div
            className="mb-6 inline-block bg-white rounded-lg shadow-sm p-3"
            variants={itemVariants}
            whileHover={{ rotate: -4, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <span className="flex items-center gap-2 text-lg font-medium">
              Ahoj!{" "}
              <motion.span
                className="inline-block"
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 1 }}
              >
                👋
              </motion.span>{" "}
              Jsem Matěj
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 className="tracking-tight mb-6" variants={itemVariants}>
            <span className="block text-4xl md:text-5xl lg:text-6xl">
              Profesionální
            </span>
            <div className="flex items-baseline mt-1">
              <motion.span
                className="heading-emphasis text-5xl md:text-6xl lg:text-7xl text-burgundy"
                whileHover={{ scale: 1.03 }}
              >
                fotograf
              </motion.span>
              <motion.span
                className="text-4xl ml-2 opacity-70"
                variants={floatingVariants}
                initial="initial"
                animate="animate"
              >
                ✨
              </motion.span>
            </div>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl font-light mb-8 text-gray-700 max-w-xl leading-relaxed"
            variants={itemVariants}
          >
            Zachycuji jedinečné momenty vašeho života s důrazem na přirozenost a
            originalitu.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center gap-4"
            variants={itemVariants}
          >
            <ButtonLink href="/portfolio" variant="primary">
              <span>Prohlédnout portfolio</span>
              <ArrowIcon />
            </ButtonLink>

            <ButtonLink href="/kontakt" variant="secondary">
              <span>Kontaktovat</span>
            </ButtonLink>
          </motion.div>
        </motion.div>
      </div>

      {/* Right Content - Card Carousel */}
      <div className="absolute md:relative md:flex-1 inset-0 md:inset-auto opacity-90 md:opacity-100">
        <div className="h-full w-full">
          <VerticalCarousel />
        </div>
      </div>

      {/* Social proof badge */}
      <motion.div
        className="absolute bottom-6 right-6 z-20 bg-white rounded-lg shadow-lg p-3 md:p-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.5 }}
      >
        <div className="flex items-center gap-2">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className="w-4 h-4 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-sm font-medium">4.9/5</span>
        </div>
        <div className="text-xs text-gray-500 mt-1">
          150+ spokojených klientů
        </div>
      </motion.div>
    </section>
  );
}
