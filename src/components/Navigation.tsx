"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-modern">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex-shrink-0 hover:opacity-90 transition-opacity"
          >
            <Image
              src="/logo/black.png"
              alt="Matěj Haták Logo"
              width={120}
              height={48}
              className="h-12 w-auto"
              priority
            />
          </Link>
          <div className="hidden md:flex">
            <div className="flex items-center rounded-full bg-white/90 shadow-md px-2 py-2 gap-1 border border-gray-100">
              {[
                { name: "Domů", href: "/" },
                { name: "O mně", href: "/o-mne" },
                { name: "Portfolio", href: "/portfolio" },
                { name: "Kontakt", href: "/kontakt" },
              ].map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                      isActive
                        ? "text-[#fff] bg-burgundy"
                        : "text-gray-800 hover:text-burgundy hover:bg-burgundy/5"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
