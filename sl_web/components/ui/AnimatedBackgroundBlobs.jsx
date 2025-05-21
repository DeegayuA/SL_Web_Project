// components/AnimatedBackgroundBlobs.jsx (adjust path as needed)
import { motion } from 'framer-motion';

const Blob = ({ initialX, initialY, size, color, durationRange }) => {
  const duration = Math.random() * (durationRange[1] - durationRange[0]) + durationRange[0];
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        filter: 'blur(100px)', // Soft blur
      }}
      initial={{ x: initialX, y: initialY, opacity: 0, scale: 0.8 }}
      animate={{
        x: [initialX, `${Math.random() * 100 - 50}vw`, `${Math.random() * 100 - 50}vw`, initialX],
        y: [initialY, `${Math.random() * 100 - 50}vh`, `${Math.random() * 100 - 50}vh`, initialY],
        opacity: [0, 0.1, 0.15, 0.05, 0], // Fades in and out
        scale: [0.8, 1.1, 1, 0.9, 0.8],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: 'linear', // Smooth, continuous movement
        repeatType: "loop",
      }}
    />
  );
};

export const AnimatedBackgroundBlobs = () => {
  const blobData = [
    // Colors can be themed for light/dark if needed, or use semi-transparent universal colors
    { initialX: '10vw', initialY: '20vh', size: '30vmax', color: 'rgba(59, 130, 246, 0.3)', durationRange: [30, 40] }, // blue-500
    { initialX: '70vw', initialY: '60vh', size: '25vmax', color: 'rgba(139, 92, 246, 0.3)', durationRange: [25, 35] }, // violet-500
    { initialX: '40vw', initialY: '80vh', size: '20vmax', color: 'rgba(14, 165, 233, 0.3)', durationRange: [35, 45] }, // cyan-500
  ];

  return (
    <>
      {blobData.map((blob, index) => (
        <Blob key={index} {...blob} />
      ))}
    </>
  );
};