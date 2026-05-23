"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Embers() {
  const [embers, setEmbers] = useState<Array<{ id: number, left: string, duration: number, delay: number, size: number }>>([]);

  useEffect(() => {
    // Generate random glowing embers for the background
    const emberCount = 35;
    const newEmbers = Array.from({ length: emberCount }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      duration: Math.random() * 8 + 6, // 6 to 14 seconds
      delay: Math.random() * 10,
      size: Math.random() * 3 + 2, // 2px to 5px
    }));
    setEmbers(newEmbers);
  }, []);

  if (embers.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {embers.map((ember) => (
        <motion.div
          key={ember.id}
          initial={{ y: "110vh", opacity: 0 }}
          animate={{
            y: "-10vh",
            opacity: [0, 0.8, 1, 0.5, 0],
            x: ["-15px", "15px", "-10px", "20px", "0px"],
          }}
          transition={{
            duration: ember.duration,
            delay: ember.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute rounded-full bg-amber-400 shadow-[0_0_10px_3px_rgba(245,158,11,0.8)]"
          style={{
            left: ember.left,
            width: `${ember.size}px`,
            height: `${ember.size}px`,
          }}
        />
      ))}
    </div>
  );
}
