'use client';

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// Define category type
type Category = {
  id: string;
  title: string;
  emoji: string;
  description: string;
  imageUrl: string;
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { 
      type: "spring", 
      stiffness: 300, 
      damping: 24 
    }
  },
  hover: { 
    y: -10,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: { 
      type: "spring", 
      stiffness: 400, 
      damping: 10 
    }
  }
};

export default function CategoriesSection() {
  const categories: Category[] = [
    {
      id: "portrety",
      title: "Portréty",
      emoji: "👤",
      description: "Zachytím vaši osobnost a přirozenou krásu v portrétech, které vyprávějí příběh.",
      imageUrl: "/images/category-portraits.jpg"
    },
    {
      id: "svatby",
      title: "Svatby",
      emoji: "💍",
      description: "Dokumentuji váš velký den se zaměřením na autentické momenty a emoce.",
      imageUrl: "/images/category-weddings.jpg"
    },
    {
      id: "rodiny",
      title: "Rodiny",
      emoji: "👨‍👩‍👧",
      description: "Přirozené rodinné fotografie plné lásky, smíchu a jedinečných okamžiků.",
      imageUrl: "/images/category-families.jpg"
    },
    {
      id: "krajina",
      title: "Krajina",
      emoji: "🏞️",
      description: "Krajinářská fotografie zachycující krásu přírody v různých ročních obdobích.",
      imageUrl: "/images/category-landscape.jpg"
    }
  ];

  return (
    <section id="categories" className="py-20 md:py-28 bg-gray-50">
      <div className="container-modern">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="heading-font text-3xl md:text-4xl mb-4">Co fotografuji</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Specializuji se na několik fotografických stylů. Prohlédněte si mé portfolio 
            a zjistěte, jak mohu zachytit vaše vzácné okamžiky.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              variants={cardVariants}
              whileHover="hover"
            >
              <Link href={`/portfolio/${category.id}`} className="block h-full">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={category.imageUrl}
                    alt={category.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-700 hover:scale-105"
                  />
                  <motion.div 
                    className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center text-xl shadow-sm"
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {category.emoji}
                  </motion.div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 flex items-center">
                    {category.title}
                  </h3>
                  <p className="text-gray-600">{category.description}</p>
                  
                  <motion.div 
                    className="mt-4 flex items-center text-coral font-medium"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ 
                      opacity: 1,
                      x: 5, 
                      transition: { duration: 0.2 } 
                    }}
                  >
                    <span>Zobrazit galerii</span>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 ml-1" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                  </motion.div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 