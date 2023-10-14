import React from "react";
import { motion } from "framer-motion";

export const AnimateDiv = ({ children, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.1, ease: "easeIn" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const AnimateSubDiv = ({ children, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        type: "spring",
        bounce: 0.4,
        duration: 1.5,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
