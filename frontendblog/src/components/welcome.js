import React from 'react';
import { motion } from 'framer-motion';

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: 'spring', duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

const WelcomeAnimation = () => {
  return (
    <motion.svg
      width="800"
      height="200"
      viewBox="0 0 800 200"
      initial="hidden"
      animate="visible"
    >
      {/* Down W */}
      <motion.path
        d="
        M50,50 
        L75, 150 
        M100, 50, 
        L125, 150, 
        "
        stroke="black"
        fill="none"
        strokeWidth="2"
        variants={draw}
        custom={1}
      />

      {/* Up W */}
      <motion.path
        d="
        M75, 150 
        L100, 50, 
        M125, 150,
        L150, 50
        "
        stroke="black"
        fill="none"
        strokeWidth="2"
        variants={draw}
        custom={1.5}
      />

      {/* E */}
      <motion.path
        d="
        M175,50 
        L175,150 
        M175,50 
        L215,50 
        M175,100 
        L205,100 
        M175,150 
        L215,150"
        stroke="black"
        fill="none"
        strokeWidth="2"
        variants={draw}
        custom={2}
      />

      {/* L */}
      <motion.path
        d="
        M240, 50
        L240, 150
        L290, 150"
        stroke="black"
        fill="none"
        strokeWidth="2"
        variants={draw}
        custom={2}
      />

      {/* C */}
      <motion.path
        d="M370,50 C295,95 295,145 370,150"
        stroke="black"
        fill="none"
        strokeWidth="2"
        variants={draw}
        custom={2}
      />

      <motion.circle
        cx="425"
        cy="100"
        r="50"
        stroke="#0d63f8"
        variants={draw}
        custom={2}
        fill="none"
        strokeWidth="2"
      />
    </motion.svg>
  );
};

export default WelcomeAnimation;
