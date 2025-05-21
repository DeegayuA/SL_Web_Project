"use client";

import React, { useState, useEffect, useId, useRef } from "react"; // Added useRef to React imports
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ContainerTextFlipProps {
  /** Array of words to cycle through in the animation */
  words?: string[];
  /** Time in milliseconds between word transitions */
  interval?: number;
  /** Additional CSS classes to apply to the container */
  className?: string;
  /** Additional CSS classes to apply to the text */
  textClassName?: string;
  /** Duration of the transition animation in milliseconds */
  animationDuration?: number;
}

export function ContainerTextFlip({
  words = ["better", "modern", "beautiful", "awesome"],
  interval = 3000,
  className,
  textClassName,
  animationDuration = 700,
}: ContainerTextFlipProps) {
  const id = useId();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [width, setWidth] = useState(100); // Initial width, will be updated
  // Explicitly type textRef to be either an HTMLDivElement or null
  const textRef = useRef<HTMLDivElement | null>(null); 

  const updateWidthForWord = () => {
    if (textRef.current) {
      // Add some padding to the text width. The actual padding value for width
      // calculation might differ from visual padding applied by Tailwind classes.
      // Consider a more robust way if visual padding greatly affects width,
      // e.g., by measuring a wrapper div that includes the padding.
      // For now, we estimate with a fixed value.
      const textWidth = textRef.current.scrollWidth + 60; // Increased padding for better fit
      setWidth(textWidth);
    }
  };

  // This effect runs when currentWordIndex changes, or words array changes (to update width for new words)
  useEffect(() => {
    // A slight delay can help ensure the DOM is fully updated with the new word
    // before measuring, though often not necessary with Framer Motion's layout.
    // requestAnimationFrame can also be used here for timing.
    const timeoutId = setTimeout(() => {
        updateWidthForWord();
    }, 50); // Small delay, adjust if needed or remove if not necessary

    return () => clearTimeout(timeoutId);
  }, [currentWordIndex, words]); // Re-run if the words prop itself changes too

  // This effect handles the interval for changing words
  useEffect(() => {
    if (words.length <= 1) return; // No need for interval if only one or no words

    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [words, interval]);

  // If no words are provided, or only one word, render it statically or handle appropriately
  if (!words || words.length === 0) {
    return null; // Or some fallback UI
  }
  const currentWord = words[currentWordIndex];

  return (
    <motion.p
      layout // Enables automatic animation of layout changes (like width)
      layoutId={`words-here-${id}`} // Unique ID for layout animation group
      animate={{ width }}
      transition={{ 
        type: "spring", // Using spring for a more natural feel for width changes
        stiffness: 200,
        damping: 25,
        duration: animationDuration / 1000 // Keep existing duration mapping
      }}
      className={cn(
        "relative inline-flex items-center justify-center overflow-hidden", // Use inline-flex for centering content within width
        "rounded-lg pt-2 pb-3 px-4 text-center text-4xl font-bold text-black md:text-7xl dark:text-white", // Added horizontal padding
        "[background:linear-gradient(to_bottom,#f3f4f6,#e5e7eb)]",
        "shadow-[inset_0_-1px_#d1d5db,inset_0_0_0_1px_#d1d5db,_0_4px_8px_#d1d5db]",
        "dark:[background:linear-gradient(to_bottom,#374151,#1f2937)]",
        "dark:shadow-[inset_0_-1px_#10171e,inset_0_0_0_1px_hsla(205,89%,46%,.24),_0_4px_8px_#00000052]",
        className,
      )}
      // The key on the parent <motion.p> with currentWord can cause issues with `layout` animation for width,
      // as it might re-mount the entire component instead of just updating the width.
      // Width animation should be handled by `animate={{ width }}` without re-keying the parent.
      // key={currentWord} // REMOVED: Usually not needed here for width animation. Let child handle word re-keying if necessary.
    >
      <motion.div
        // Keyed by currentWord so Framer Motion's AnimatePresence or re-render logic
        // can correctly handle exit/enter animations for the word itself, if defined (though here it's letter by letter).
        key={currentWord + '-' + id} 
        className={cn("inline-block whitespace-nowrap", textClassName)} // whitespace-nowrap ensures scrollWidth is accurate
        ref={textRef}
        // layoutId={`word-div-${currentWord}-${id}`} // `layoutId` on this child is not strictly needed if parent uses layout
        // initial, animate, exit can be added here if you want the whole word to animate in/out differently
        // than the letter-by-letter animation.
      >
        {/* This div is the one that `textRef` measures. It only contains the letters. */}
        <motion.div className="inline-block"> 
          {currentWord.split("").map((letter, index) => (
            <motion.span
              key={index} // Key for each letter
              initial={{
                opacity: 0,
                y: 10, // Start slightly below
                filter: "blur(8px)", // Slightly more blur
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              transition={{
                delay: index * 0.03, // Slightly adjusted stagger delay
                duration: animationDuration / 1500, // Duration for each letter, relative to overall
                ease: "easeOut",
              }}
              className="inline-block" // Ensure letters are inline for correct measurement
            >
              {letter === " " ? "\u00A0" : letter} {/* Render space as non-breaking space for layout */}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </motion.p>
  );
}