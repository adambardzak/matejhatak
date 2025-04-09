"use client";

import { motion } from "framer-motion";
import { ButtonLink, ArrowIcon } from "./Button";

export default function AboutSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container-modern">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <motion.h2
            className="mb-8 text-3xl md:text-4xl font-bold"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="text-burgundy">Proč právě já?</span>
            <motion.div
              className="mt-2 mx-auto h-1 w-24 bg-burgundy/20 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-3 gap-8 mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            <motion.div
              className="card-hover bg-white p-8 rounded-2xl shadow-lg border border-burgundy/5"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { type: "spring", stiffness: 300, damping: 24 },
                },
              }}
              whileHover={{
                y: -10,
                rotate: -1,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05)",
              }}
            >
              <motion.div
                className="text-5xl mb-4 bg-burgundy/5 w-16 h-16 rounded-full flex items-center justify-center mx-auto"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatType: "loop" as const,
                }}
              >
                📸
              </motion.div>
              <motion.h3
                className="text-xl font-semibold mb-3 heading-font text-burgundy"
                whileHover={{ scale: 1.05 }}
              >
                Přirozený styl
              </motion.h3>
              <p className="text-gray-600">
                Žádné strojené pózy. Zachytím skutečné emoce a autentické
                momenty.
              </p>
            </motion.div>

            <motion.div
              className="card-hover bg-white p-8 rounded-2xl shadow-lg border border-burgundy/5"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 24,
                    delay: 0.1,
                  },
                },
              }}
              whileHover={{
                y: -10,
                rotate: 1,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05)",
              }}
            >
              <motion.div
                className="text-5xl mb-4 bg-burgundy/5 w-16 h-16 rounded-full flex items-center justify-center mx-auto"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatType: "loop" as const,
                  delay: 0.5,
                }}
              >
                🎨
              </motion.div>
              <motion.h3
                className="text-xl font-semibold mb-3 heading-font text-burgundy"
                whileHover={{ scale: 1.05 }}
              >
                Kreativní přístup
              </motion.h3>
              <p className="text-gray-600">
                Každé focení je jedinečné. Rád experimentuji a hledám nové úhly
                pohledu.
              </p>
            </motion.div>

            <motion.div
              className="card-hover bg-white p-8 rounded-2xl shadow-lg border border-burgundy/5"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 24,
                    delay: 0.2,
                  },
                },
              }}
              whileHover={{
                y: -10,
                rotate: -1,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05)",
              }}
            >
              <motion.div
                className="text-5xl mb-4 bg-burgundy/5 w-16 h-16 rounded-full flex items-center justify-center mx-auto"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatType: "loop" as const,
                  delay: 1,
                }}
              >
                💫
              </motion.div>
              <motion.h3
                className="text-xl font-semibold mb-3 heading-font text-burgundy"
                whileHover={{ scale: 1.05 }}
              >
                Osobní přístup
              </motion.h3>
              <p className="text-gray-600">
                Pohodová atmosféra a přátelský přístup jsou základem každého
                focení.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <ButtonLink href="/o-mne" variant="secondary">
              <span>Dozvědět se více</span>
              <ArrowIcon />
            </ButtonLink>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
