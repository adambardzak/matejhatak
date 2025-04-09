'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CtaSection() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background decorative elements */}
      <motion.div 
        className="absolute -top-24 -right-24 w-64 h-64 bg-coral/10 rounded-full blur-3xl"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.4, 0.6, 0.4], 
          scale: [1, 1.1, 1],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      />
      <motion.div 
        className="absolute -bottom-32 -left-32 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.3, 0.5, 0.3], 
          scale: [1, 1.2, 1],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1
        }}
      />

      <div className="container-modern relative z-10">
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <motion.h2 
                className="heading-font text-3xl md:text-4xl mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Pojďme společně vytvořit
                <span className="text-coral block mt-2">nezapomenutelné vzpomínky</span>
              </motion.h2>
              
              <motion.p 
                className="text-gray-600 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Každý okamžik si zaslouží být zachycen. Kontaktujte mě a naplánujme 
                společně focení, které vám přinese radost na celý život.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Link 
                    href="/kontakt" 
                    className="btn-primary w-full sm:w-auto block text-center"
                  >
                    Kontaktovat
                  </Link>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Link 
                    href="/cenik" 
                    className="btn-secondary w-full sm:w-auto block text-center"
                  >
                    Ceník služeb
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.7, 
                delay: 0.3,
                type: "spring",
                stiffness: 100
              }}
            >
              <svg 
                className="w-full h-auto max-w-md mx-auto"
                viewBox="0 0 400 300" 
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path 
                  d="M223.431 48.6438C242.907 56.2598 260.223 69.2309 270.398 87.1473C280.573 105.064 283.607 127.926 277.657 147.373C271.707 166.82 256.773 182.851 238.465 193.942C220.156 205.032 198.473 211.182 178.627 212.302C158.781 213.421 140.773 209.51 125.361 199.566C109.948 189.622 97.1318 173.646 89.2943 154.687C81.4568 135.729 78.5984 113.788 85.3151 95.1283C92.0318 76.4685 108.323 61.0896 126.148 50.3157" 
                  stroke="#FF6B6B" 
                  strokeWidth="6"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                />
                <motion.path 
                  d="M175 35C209.242 35 243.484 46.6667 257 58C270.516 69.3333 263.307 85.6667 245 105C226.693 124.333 197.288 146.667 178 160C158.712 173.333 149.542 177.667 139 175C128.458 172.333 116.545 162.667 108 145C99.4545 127.333 94.2772 101.667 103 80C111.723 58.3333 134.346 40.6667 149 35C163.654 29.3333 170.337 35 175 38"
                  stroke="#4ECDC4" 
                  strokeWidth="4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.8, delay: 0.8, ease: "easeInOut" }}
                />
                
                <motion.circle 
                  cx="180" 
                  cy="125" 
                  r="75" 
                  fill="white"
                  stroke="#E0E0E0"
                  strokeWidth="2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 1,
                    type: "spring",
                    stiffness: 200 
                  }}
                />
                
                <motion.path 
                  d="M170 94C170 90.134 173.134 87 177 87H183C186.866 87 190 90.134 190 94V117C190 120.866 186.866 124 183 124H177C173.134 124 170 120.866 170 117V94Z" 
                  fill="#FF6B6B"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.2 }}
                />
                
                <motion.path 
                  d="M154 110C154 106.134 157.134 103 161 103H198C201.866 103 205 106.134 205 110V144C205 147.866 201.866 151 198 151H161C157.134 151 154 147.866 154 144V110Z" 
                  fill="#4ECDC4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.4 }}
                />
                
                <motion.path 
                  d="M154 130C154 126.134 157.134 123 161 123H198C201.866 123 205 126.134 205 130V164C205 167.866 201.866 171 198 171H161C157.134 171 154 167.866 154 164V130Z" 
                  fill="#FFEEAD"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.6 }}
                />
                
                <motion.circle 
                  cx="180" 
                  cy="125" 
                  r="6" 
                  fill="#333333"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.8 }}
                />
              </svg>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 