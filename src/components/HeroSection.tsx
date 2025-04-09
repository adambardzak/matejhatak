"use client";

import { motion } from "framer-motion";
import { ButtonLink, ArrowIcon } from "./Button";
import VerticalCarousel from "./VerticalCarousel";
import Container from "./Container";

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
    <Container size="sm">
      <section className="relative lg:min-h-screen flex flex-col md:flex-row items-center justify-between overflow-hidden h-fit pt-24 lg:pt-0">
        {/* Left Content */}
        <div className="relative z-10 w-full flex items-center py-12 md:py-0 lg:px-2">
          <motion.div
            className="max-w-xl"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {/* Greeting Tag */}
            <motion.div
              className="mb-6 inline-block bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-3 border border-burgundy/10"
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotate: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span className="flex items-center gap-2 text-sm lg:text-xl font-medium">
                Ahoj!{" "}
                <motion.span
                  className="inline-block"
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    repeatDelay: 1,
                  }}
                >
                  👋
                </motion.span>{" "}
                Jsem Matěj
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 className="tracking-tight mb-6" variants={itemVariants}>
              <span className="block text-5xl md:text-6xl lg:text-7xl">
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
              Zachycuji jedinečné momenty vašeho života s důrazem na přirozenost
              a originalitu.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row lg:items-center gap-4"
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
        <motion.div
          className="w-full md:w-1/2 h-[50vh] md:h-screen relative z-10 pt-36 lg:pt-0 hidden lg:block"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
        >
          <div className="h-full w-full">
            <VerticalCarousel />
          </div>
        </motion.div>

        {/* Scroll Hint */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 hidden md:flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          <span className="text-xs text-gray-500 mb-2">Scrolluj dolů</span>
          <motion.div
            className="w-5 h-10 border-2 border-gray-300 rounded-full flex justify-center pt-2"
            animate={{ y: [0, 5, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              repeatType: "loop",
            }}
          >
            <motion.div className="w-1.5 h-1.5 bg-burgundy rounded-full animate-scroll-dot" />
          </motion.div>
        </motion.div>
      </section>
      <motion.div
        className="absolute bottom-8 right-8 z-20 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-4 border border-burgundy/10 hidden lg:block"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        whileHover={{ scale: 1.05, y: -2 }}
      >
        <div className="flex items-center gap-2">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <motion.svg
                key={star}
                className="w-4 h-4 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.3 + star * 0.1, type: "spring" }}
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </motion.svg>
            ))}
          </div>
          <span className="text-sm font-medium">4.9/5</span>
        </div>
        <div className="text-xs text-gray-500 mt-1">
          150+ spokojených klientů
        </div>
      </motion.div>
    </Container>
  );
}
