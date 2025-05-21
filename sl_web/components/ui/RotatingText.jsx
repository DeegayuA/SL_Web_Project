// @/components/ui/RotatingText.jsx
"use client";
import { motion, AnimatePresence } from 'framer-motion';

const RotatingText = ({ textKey, text, className, tag = "div" }) => {
  const MotionComponent = motion[tag];

  const variants = {
    initial: { opacity: 0, y: 30, filter: "blur(8px)", scale: 0.95 },
    animate: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)", 
      scale: 1,
      transition: { duration: 0.9, ease: [0.6, -0.05, 0.01, 0.99] } // Cinematic ease
    },
    exit: { 
      opacity: 0, 
      y: -30, 
      filter: "blur(8px)", 
      scale: 0.95,
      transition: { duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] } 
    }
  };

  return (
    <AnimatePresence mode="wait">
      <MotionComponent
        key={textKey} // Crucial: unique key for text content + language
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        className={className}
      >
        {text}
      </MotionComponent>
    </AnimatePresence>
  );
};

export default RotatingText;