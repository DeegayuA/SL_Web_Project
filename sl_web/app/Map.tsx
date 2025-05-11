"use client";
import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation"; // Import useRouter

const World = dynamic(() => import("../components/ui/globe").then((m) => m.World), {
  ssr: false,
});

export function GlobeDemo() {
  const router = useRouter(); // Initialize router

  const handlePageClick = () => {
    // Replace "/next-page-placeholder" with the actual path of the next page.
    // For example, if your next page is about Frankfurt, it might be "/frankfurt".
    // If "sri_lanka/page.tsx" implies navigating to "/sri_lanka",
    // then use router.push("/sri_lanka") which would reload the current page.
    router.push("/discover");
  };

  const colombo = { lat: 6.9271, lng: 79.8612 }; // Colombo, Sri Lanka
  const frankfurt = { lat: 50.1109, lng: 8.6821 }; // Frankfurt, Germany

  const globeConfig = {
    pointSize: 4,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: colombo.lat, lng: colombo.lng }, // Set initial position to Colombo
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };
  const colors = ["#06b6d4", "#3b82f6", "#6366f1"];

  const sampleArcs = [
    {
      order: 1,
      startLat: colombo.lat,
      startLng: colombo.lng,
      endLat: frankfurt.lat,
      endLng: frankfurt.lng,
      arcAlt: 1, // Controls the height of the arc
      color: colors[Math.floor(Math.random() * colors.length)], // Corrected random color selection
    },
    {
      order: 2, // Arcs can share the same order or have different orders
      startLat: frankfurt.lat,
      startLng: frankfurt.lng,
      endLat: colombo.lat,
      endLng: colombo.lng,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * colors.length)], // Corrected random color selection
    },
  ];

  return (
    <div
      className="flex flex-row items-center justify-center py-20 h-screen md:h-auto dark:bg-black bg-white relative w-full cursor-pointer"
      onClick={handlePageClick}
      onTouchStart={handlePageClick} // Using onTouchStart for better responsiveness on touch devices
    >
      <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-full md:h-[40rem] px-4">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
        >
          <h2 className="text-center text-xl md:text-4xl font-bold text-black dark:text-white">
            {/* You can customize this text or pass it as props */}
            Global Connections: Colombo & Frankfurt
          </h2>
          <p className="text-center text-base md:text-lg font-normal text-neutral-700 dark:text-neutral-200 max-w-md mt-2 mx-auto">
            This globe shows a connection between Colombo, Sri Lanka and Frankfurt, Germany. Click anywhere to proceed.
          </p>
        </motion.div>
        <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent dark:to-black to-white z-40" />
        <div className="absolute w-full -bottom-20 h-full md:h-full z-10">
          <World data={sampleArcs} globeConfig={globeConfig} />
        </div>
      </div>
    </div>
  );
}