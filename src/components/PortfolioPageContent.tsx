'use client';

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion';

type Category = {
  title: string;
  image: string;
  link: string;
  description: string;
  emoji: string;
};

type PortfolioPageContentProps = {
  categories: Category[];
};

export default function PortfolioPageContent({ categories }: PortfolioPageContentProps) {
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
    <div className="pt-16">
      <section className="py-24 relative overflow-hidden">
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
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.span 
              className="inline-block bg-coral/10 text-coral px-4 py-2 rounded-full text-sm font-medium mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Moje práce
            </motion.span>
            <motion.h1 
              className="heading-font text-4xl md:text-5xl mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              whileHover={{ scale: 1.01 }}
            >
              <span className="text-coral">Portfolio</span>
            </motion.h1>
            <motion.p 
              className="max-w-2xl mx-auto text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Prohlédněte si mé fotografické služby. Každý styl má své kouzlo a příběh, který chci vyprávět.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {categories.map((category) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="group"
              >
                <Link href={category.link} className="block">
                  <div className="rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="relative aspect-[3/2] overflow-hidden">
                      <Image
                        src={category.image}
                        alt={category.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-300" />
                      
                      {/* Emoji floating animation */}
                      <motion.div
                        className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-lg"
                        initial={{ rotate: 0 }}
                        animate={{ 
                          rotate: [0, 10, 0, -10, 0],
                          y: [0, -5, 0]
                        }}
                        transition={{ 
                          rotate: { repeat: Infinity, duration: 5, ease: "easeInOut" },
                          y: { repeat: Infinity, duration: 3, ease: "easeInOut" }
                        }}
                      >
                        {category.emoji}
                      </motion.div>
                    </div>
                    
                    <div className="p-6">
                      <h2 className="text-xl font-semibold mb-2 group-hover:text-coral transition-colors duration-300">
                        {category.title}
                      </h2>
                      <p className="text-gray-600 mb-4">
                        {category.description}
                      </p>
                      <motion.div 
                        className="text-coral font-medium flex items-center"
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        Zobrazit galerii
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="h-5 w-5 ml-1" 
                          viewBox="0 0 20 20" 
                          fill="currentColor"
                        >
                          <path 
                            fillRule="evenodd" 
                            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                            clipRule="evenodd" 
                          />
                        </svg>
                      </motion.div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
} 