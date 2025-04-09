"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outlined";
  className?: string;
  onClick?: () => void;
  fullWidth?: boolean;
  type?: "button" | "submit" | "reset";
};

type ButtonLinkProps = ButtonProps & {
  href: string;
};

export function Button({
  children,
  variant = "primary",
  className = "",
  onClick,
  fullWidth = false,
  type = "button",
}: ButtonProps) {
  return (
    <motion.button
      className={`btn-${variant} ${
        fullWidth ? "w-full" : ""
      } ${className} px-6 py-3 inline-flex items-center justify-center`}
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      type={type}
    >
      {children}
    </motion.button>
  );
}

export function ButtonLink({
  children,
  variant = "primary",
  className = "",
  href,
  fullWidth = false,
}: ButtonLinkProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={fullWidth ? "w-full" : "inline-block"}
    >
      <Link
        href={href}
        className={`btn-${variant} ${
          fullWidth ? "w-full" : ""
        } ${className} px-6 py-3 inline-flex items-center justify-center`}
      >
        {children}
      </Link>
    </motion.div>
  );
}

export function ArrowIcon() {
  return (
    <motion.svg
      className="ml-2 w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      animate={{ x: [0, 5, 0] }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatType: "loop" as const,
        repeatDelay: 1.5,
        ease: "easeInOut",
      }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 7l5 5m0 0l-5 5m5-5H6"
      />
    </motion.svg>
  );
}
