'use client';

import { motion } from 'framer-motion';
import { ButtonLink } from './Button';
import Image from 'next/image';

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
              >
                <ButtonLink 
                  href="/kontakt" 
                  variant="primary"
                >
                  Kontaktovat
                </ButtonLink>
              </motion.div>
            </motion.div>
            
            <motion.div
              className="relative flex justify-center items-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.7, 
                delay: 0.3,
                type: "spring",
                stiffness: 100
              }}
            >
              <div className="relative w-full max-w-md aspect-square">
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    className="w-[85%] h-[85%] rounded-full border-2 border-gray-200"
                    initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </div>
                
                <motion.div 
                  className="absolute inset-0"
                  initial={{ opacity: 0, rotate: 45 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ duration: 1.2, delay: 0.7 }}
                >
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    <path
                      d="M100,15 A85,85 0 1,1 99,15"
                      fill="none"
                      stroke="#FF6B6B"
                      strokeWidth="3"
                      strokeDasharray="15,10"
                    />
                  </svg>
                </motion.div>
                
                <motion.div 
                  className="absolute inset-0"
                  initial={{ opacity: 0, rotate: -45 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ duration: 1.2, delay: 0.9 }}
                >
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    <path
                      d="M100,25 A75,75 0 1,0 101,25"
                      fill="none"
                      stroke="#4ECDC4"
                      strokeWidth="2"
                      strokeDasharray="8,6"
                    />
                  </svg>
                </motion.div>
                
                <motion.div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/camera-icon.svg"
                      alt="Professional Camera"
                      fill
                      className="object-contain"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 