'use client';

import { motion } from 'framer-motion';

export default function ContactPageContent() {
  // Use predefined positions instead of random ones
  const emojiPositions = [
    { x: '25%', y: '15%' },
    { x: '75%', y: '45%' },
    { x: '40%', y: '80%' }
  ];
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
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
            className="max-w-2xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div
              className="text-center mb-8"
              variants={itemVariants}
            >
              <motion.span 
                className="inline-block bg-coral/10 text-coral px-4 py-2 rounded-full text-sm font-medium mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Napište mi
              </motion.span>
              <motion.h1 
                className="text-4xl md:text-5xl font-bold heading-font mb-2"
                whileHover={{ scale: 1.01 }}
              >
                <span className="text-coral">Kontakt</span>
              </motion.h1>
            </motion.div>
            
            <motion.div className="space-y-12" variants={containerVariants}>
              <motion.div 
                className="text-center space-y-4 bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-sm"
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <h2 className="text-2xl font-semibold">Kontaktní informace</h2>
                <div className="space-y-2">
                  <p className="text-lg text-gray-700">Email: info@matejhatak.cz</p>
                  <p className="text-lg text-gray-700">Telefon: +420 123 456 789</p>
                </div>
              </motion.div>

              <motion.form 
                className="space-y-6 bg-white p-8 rounded-xl shadow-lg"
                variants={itemVariants}
              >
                <motion.div variants={itemVariants}>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Jméno
                  </label>
                  <motion.input
                    type="text"
                    id="name"
                    name="name"
                    className="input-modern"
                    placeholder="Vaše jméno"
                    whileFocus={{ scale: 1.01, borderColor: '#FF6B6B' }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    className="input-modern"
                    placeholder="vas@email.cz"
                    whileFocus={{ scale: 1.01, borderColor: '#FF6B6B' }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Zpráva
                  </label>
                  <motion.textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="input-modern"
                    placeholder="Napište mi zprávu..."
                    whileFocus={{ scale: 1.01, borderColor: '#FF6B6B' }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <motion.button
                    type="submit"
                    className="btn-primary w-full flex items-center justify-center"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <span>Odeslat zprávu</span>
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
                        ease: "easeInOut" 
                      }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </motion.svg>
                  </motion.button>
                </motion.div>
              </motion.form>
              
              {/* Floating elements with fixed positions */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {['✉️', '📱', '💬'].map((emoji, index) => (
                  <motion.div 
                    key={index}
                    className="absolute text-4xl opacity-20"
                    initial={{ 
                      opacity: 0
                    }}
                    animate={{ 
                      y: ['0%', '3%', '0%'],
                      opacity: 0.2,
                      rotate: [0, 10, 0, -10, 0]
                    }}
                    transition={{ 
                      y: { 
                        duration: 4 + (index * 0.5), 
                        repeat: Infinity,
                        repeatType: 'reverse',
                        ease: 'easeInOut'
                      },
                      opacity: { duration: 1 },
                      rotate: {
                        duration: 6 + (index * 0.5),
                        repeat: Infinity,
                        repeatType: 'reverse',
                        ease: 'easeInOut'
                      }
                    }}
                    style={{
                      top: emojiPositions[index].y,
                      left: emojiPositions[index].x
                    }}
                  >
                    {emoji}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 