'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ButtonLink, ArrowIcon } from './Button';

export default function AboutPageContent() {
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
      transition: { type: "spring", stiffness: 300, damping: 24 }
    },
  };

  return (
    <div className="pt-20">
      <section className="section-spacing relative overflow-hidden">
        {/* Background decorations */}
        <motion.div 
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-teal-400/10 blur-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 1.5, delay: 0.2 }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-coral/10 blur-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 1.5, delay: 0.4 }}
        />
        
        <div className="container-modern">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div 
              className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                rotate: -1, 
                transition: { duration: 0.3 } 
              }}
            >
              <Image
                src="/matej.jpg"
                alt="Matěj Haták"
                fill
                className="object-cover"
              />
              
              {/* Animated overlay gradient */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
              
              {/* Decorative elements */}
              <motion.div 
                className="absolute top-6 right-6 w-12 h-12 rounded-full bg-coral/20 backdrop-blur-sm"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
              />
              <motion.div 
                className="absolute bottom-6 left-6 w-16 h-16 rounded-full bg-teal-400/20 backdrop-blur-sm"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.5 }}
              />
            </motion.div>
            
            <motion.div 
              className="space-y-8"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <motion.span 
                  className="inline-block bg-coral/10 text-coral px-4 py-2 rounded-full text-sm font-medium mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  Fotograf s duší
                </motion.span>
                <motion.h1 
                  className="text-5xl font-bold heading-font mb-2"
                  whileHover={{ scale: 1.01 }}
                >
                  O <span className="text-coral">mně</span>
                </motion.h1>
              </motion.div>
              
              <motion.div 
                className="space-y-6 text-lg leading-relaxed"
                variants={itemVariants}
              >
                <motion.p 
                  className="text-gray-700"
                  variants={itemVariants}
                >
                  Jsem Matěj, skaut a nadšenec do focení, grafiky a slam poetry. Vystudoval jsem grafický design na střední škole v Plzni, momentálně pracuji na stavbě a jako přivýdělek fotím profesionální fotky.
                </motion.p>
                <motion.p 
                  className="text-gray-700"
                  variants={itemVariants}
                >
                  Fotím hlavně lidi, zvířata a eventy, snažím se zachytit přirozené a originální momenty Vašich rodin, firemních týmů, nezapomenutelných momentů z akcí a těch nejroztomilejších mazlíčků.
                </motion.p>
              </motion.div>
              
              <motion.div 
                className="pt-4"
                variants={itemVariants}
              >
                <ButtonLink href="/kontakt" variant="primary">
                  <span>Kontaktujte mě</span>
                  <ArrowIcon />
                </ButtonLink>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 