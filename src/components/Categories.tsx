'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

type Category = {
  id: string;
  title: string;
  description: string;
  emoji: string;
  image: string;
};

type CategoriesProps = {
  categories: Category[];
};

export default function Categories({ categories }: CategoriesProps) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 20
      }
    }
  };
  
  const generateUniqueGradient = (index: number) => {
    const gradients = [
      'from-purple-500/20 to-teal-500/20',
      'from-coral/20 to-amber-500/20',
      'from-teal-500/20 to-blue-500/20',
      'from-amber-500/20 to-rose-500/20',
      'from-emerald-500/20 to-teal-500/20',
      'from-rose-500/20 to-purple-500/20'
    ];
    return gradients[index % gradients.length];
  };

  return (
    <section id="categories" className="py-20 md:py-28 relative overflow-hidden bg-gray-50">
      {/* Animated background decorations */}
      <motion.div 
        className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-teal-400/10 blur-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8, scale: [1, 1.1, 1], x: [0, 20, 0], y: [0, -20, 0] }}
        transition={{ 
          opacity: { duration: 1.5, delay: 0.2 },
          scale: { repeat: Infinity, duration: 20, ease: "easeInOut" },
          x: { repeat: Infinity, duration: 25, ease: "easeInOut" },
          y: { repeat: Infinity, duration: 18, ease: "easeInOut" }
        }}
      />
      <motion.div 
        className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-coral/10 blur-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8, scale: [1, 1.2, 1], x: [0, -20, 0], y: [0, 20, 0] }}
        transition={{ 
          opacity: { duration: 1.5, delay: 0.4 },
          scale: { repeat: Infinity, duration: 15, ease: "easeInOut" },
          x: { repeat: Infinity, duration: 20, ease: "easeInOut" },
          y: { repeat: Infinity, duration: 22, ease: "easeInOut" }
        }}
      />
      
      {/* Subtle floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => {
          // Use deterministic values based on index instead of Math.random()
          const particleData = [
            { width: 7.2, height: 4.5, left: 36.4, top: 51.1, color: '#FF6B6B' },
            { width: 10.9, height: 4.5, left: 63.0, top: 34.1, color: '#4ECDC4' },
            { width: 6.4, height: 8.9, left: 86.1, top: 53.0, color: '#FF6B6B' },
            { width: 10.0, height: 11.7, left: 5.2, top: 7.4, color: '#4ECDC4' },
            { width: 9.7, height: 11.9, left: 86.5, top: 40.0, color: '#FF6B6B' },
            { width: 10.0, height: 5.4, left: 7.6, top: 55.4, color: '#4ECDC4' },
            { width: 9.5, height: 10.9, left: 36.1, top: 60.9, color: '#FF6B6B' },
            { width: 10.0, height: 9.1, left: 96.8, top: 44.9, color: '#4ECDC4' },
          ];
          
          const particle = particleData[i];
          
          return (
            <motion.div
              key={i}
              className="absolute rounded-full opacity-70"
              style={{
                width: particle.width,
                height: particle.height,
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                backgroundColor: particle.color,
              }}
              animate={{
                y: [0, -100, 0],
                x: [0, (i % 5) * 10 - 20, 0],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{
                repeat: Infinity,
                duration: 15 + i * 2,
                ease: "easeInOut",
                delay: i * 0.5
              }}
            />
          );
        })}
      </div>
      
      <div className="container-modern relative z-10" ref={containerRef}>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <motion.h2 
            className="heading-font text-3xl md:text-4xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Prozkoumejte mé <span className="text-coral relative">
              služby
              <motion.span 
                className="absolute bottom-1 left-0 h-1 bg-coral rounded-full"
                initial={{ width: 0 }}
                animate={isInView ? { width: '100%' } : { width: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              />
            </span>
          </motion.h2>
          <motion.p 
            className="max-w-2xl mx-auto text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Vyberte si z mých fotografických služeb. Každý okamžik si zaslouží být zachycen s péčí a profesionalitou.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group relative"
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <Link href={`/kategorie/${category.id}`} className="block">
                <div className={`rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300 
                border border-transparent hover:border-gray-200`}>
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Interactive gradient overlay */}
                    <motion.div 
                      className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent
                      opacity-70 group-hover:opacity-80 transition-opacity duration-300`}
                      initial={{ opacity: 0.7 }}
                      animate={{ 
                        opacity: hoveredIndex === index ? 0.5 : 0.7,
                        background: hoveredIndex === index ? 
                          `linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.2) 70%, transparent)` : 
                          `linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0.3) 70%, transparent)`
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Animated decoration elements */}
                    <div className="absolute inset-0 overflow-hidden opacity-50 pointer-events-none">
                      <motion.div 
                        className={`absolute -right-16 -bottom-16 w-32 h-32 rounded-full bg-gradient-to-br ${generateUniqueGradient(index)}`}
                        initial={{ opacity: 0 }}
                        animate={{ 
                          opacity: hoveredIndex === index ? 0.8 : 0.4,
                          scale: hoveredIndex === index ? 1.1 : 1
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                    
                    {/* Emoji with enhanced animation */}
                    <motion.div
                      className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-lg"
                      initial={{ rotate: 0, scale: 1 }}
                      animate={{ 
                        rotate: [0, 10, 0, -10, 0],
                        y: [0, -5, 0],
                        scale: hoveredIndex === index ? 1.1 : 1,
                        boxShadow: hoveredIndex === index ? 
                          '0 8px 20px rgba(0,0,0,0.2)' : 
                          '0 4px 10px rgba(0,0,0,0.1)'
                      }}
                      transition={{ 
                        rotate: { repeat: Infinity, duration: 5, ease: "easeInOut" },
                        y: { repeat: Infinity, duration: 3, ease: "easeInOut" },
                        scale: { duration: 0.3 },
                        boxShadow: { duration: 0.3 }
                      }}
                    >
                      {category.emoji}
                    </motion.div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-coral transition-colors duration-300 flex items-center">
                      {category.title}
                      <motion.span
                        initial={{ width: 0, x: 10, opacity: 0 }}
                        animate={hoveredIndex === index ? 
                          { width: 'auto', x: 0, opacity: 1 } : 
                          { width: 0, x: 10, opacity: 0 }
                        }
                        transition={{ duration: 0.3 }}
                        className="text-coral ml-2 overflow-hidden"
                      >
                        ✨
                      </motion.span>
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {category.description}
                    </p>
                    <motion.div 
                      className="text-coral font-medium flex items-center"
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      Zobrazit více
                      <motion.svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-5 w-5 ml-1" 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                        animate={hoveredIndex === index ? 
                          { x: [0, 5, 0], opacity: 1 } : 
                          { x: 0, opacity: 0.8 }
                        }
                        transition={{ 
                          x: { repeat: hoveredIndex === index ? Infinity : 0, duration: 1 },
                          opacity: { duration: 0.3 }
                        }}
                      >
                        <path 
                          fillRule="evenodd" 
                          d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                          clipRule="evenodd" 
                        />
                      </motion.svg>
                    </motion.div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <motion.div 
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }} 
            whileTap={{ scale: 0.97 }}
            className="relative overflow-hidden rounded-full"
          >
            <Link 
              href="/galerie" 
              className="btn-secondary px-8 py-3 flex items-center relative z-10"
            >
              <span>Prozkoumat všechny fotografie</span>
              <motion.svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 ml-2" 
                viewBox="0 0 20 20" 
                fill="currentColor"
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 0.5 }}
              >
                <path 
                  fillRule="evenodd" 
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                  clipRule="evenodd" 
                />
              </motion.svg>
              
              {/* Animated background effect */}
              <motion.div 
                className="absolute inset-0 -z-10 bg-gradient-to-r from-coral/80 to-coral opacity-0"
                whileHover={{ opacity: 0.2 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 