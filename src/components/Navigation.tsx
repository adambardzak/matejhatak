"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const [hovered, setHovered] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: "Domů", href: "/" },
    { name: "O mně", href: "/o-mne" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Kontakt", href: "/kontakt" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Animation variants
  const menuVariants = {
    closed: {
      x: "100%",
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    open: {
      x: "0%",
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const backdropVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const menuItemVariants = {
    closed: {
      x: 50,
      opacity: 0,
    },
    open: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.1 + i * 0.1,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 nav-container transition-all duration-500 ${
          scrolled ? "bg-white/95 shadow-lg py-2" : "bg-transparent py-5"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="container-modern">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex-shrink-0 transition-all duration-300 transform hover:scale-105"
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Image
                  src="/logo/black.png"
                  alt="Matěj Haták Logo"
                  width={120}
                  height={48}
                  className="h-12 w-auto"
                  priority
                />
              </motion.div>
            </Link>
            <div className="hidden md:block">
              <motion.div
                className="flex items-center rounded-full bg-white/95 shadow-lg px-3 py-2 gap-2 border border-gray-100"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                {navLinks.map((item, index) => {
                  const isActive = pathname === item.href;
                  const isHovered = hovered === item.name;

                  return (
                    <motion.div
                      key={item.name}
                      onHoverStart={() => setHovered(item.name)}
                      onHoverEnd={() => setHovered(null)}
                      className="relative"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index + 0.3, duration: 0.3 }}
                    >
                      <Link
                        href={item.href}
                        className={`relative px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 flex items-center justify-center nav-link ${
                          isActive
                            ? "text-white bg-burgundy"
                            : "text-gray-800 hover:text-burgundy"
                        }`}
                      >
                        {item.name}

                        {!isActive && isHovered && (
                          <motion.div
                            className="absolute inset-0 bg-burgundy/5 rounded-full z-[-1]"
                            layoutId="navHover"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>

            {/* Mobile navigation button */}
            <div className="md:hidden">
              <motion.button
                className="p-2 rounded-full bg-white/90 shadow-md border border-gray-100"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-burgundy"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-50 md:hidden mobile-menu-backdrop"
              initial="closed"
              animate="open"
              exit="closed"
              variants={backdropVariants}
              onClick={closeMenu}
            />

            {/* Menu Panel */}
            <motion.div
              className="fixed top-0 right-0 bottom-0 w-3/4 max-w-xs bg-white z-50 md:hidden shadow-xl flex flex-col"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              {/* Menu Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-100">
                <div className="flex items-center">
                  <Link href="/" onClick={closeMenu}>
                    <Image
                      src="/logo/black.png"
                      alt="Matěj Haták Logo"
                      width={100}
                      height={40}
                      className="h-8 w-auto"
                    />
                  </Link>
                </div>
                <motion.button
                  className="p-2 rounded-full hover:bg-gray-100"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={closeMenu}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-burgundy"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </motion.button>
              </div>

              {/* Menu Items */}
              <div className="flex-1 overflow-y-auto pt-4 px-4">
                <nav className="space-y-2">
                  {navLinks.map((item, index) => {
                    const isActive = pathname === item.href;

                    return (
                      <motion.div
                        key={item.name}
                        custom={index}
                        variants={menuItemVariants}
                        initial="closed"
                        animate="open"
                      >
                        <Link
                          href={item.href}
                          className={`block py-3 px-4 rounded-lg text-lg font-medium transition-colors mobile-menu-item ${
                            isActive
                              ? "bg-burgundy/10 text-burgundy mobile-menu-active"
                              : "text-gray-700 hover:bg-burgundy/5 hover:text-burgundy"
                          }`}
                          onClick={closeMenu}
                        >
                          <div className="flex items-center">{item.name}</div>
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-gray-100">
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">
                    © {new Date().getFullYear()} Matěj Haták
                  </div>
                  <div className="flex space-x-3">
                    <motion.a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-burgundy"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </motion.a>
                    <motion.a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-burgundy"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                      </svg>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
