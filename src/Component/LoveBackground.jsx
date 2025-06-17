// src/components/LoveBackground.jsx
import React from "react";
import { motion } from "framer-motion";
import bgImage from "../assets/4.jpg";

const balloons = [
  { id: 1, emoji: "❤️", delay: 0 },
  { id: 2, emoji: "💖", delay: 1 },
  { id: 3, emoji: "💘", delay: 2 },
  { id: 4, emoji: "💕", delay: 1.5 },
  { id: 5, emoji: "💓", delay: 0.5 },
  { id: 6, emoji: "💗", delay: 2.5 },
  { id: 7, emoji: "💞", delay: 1.2 },
  { id: 8, emoji: "💝", delay: 0.8 },
  { id: 9, emoji: "💟", delay: 1.7 },
  { id: 10, emoji: "🩷", delay: 0.3 },
  { id: 11, emoji: "❤️", delay: 1.8 },
  { id: 12, emoji: "💖", delay: 2.3 },
];

export default function LoveBackground() {
  return (
    <div className="w-full">
      {/* ✅ Top Section with Background and Emojis */}
      <div className="relative w-full h-screen flex items-center justify-center overflow-hidden mt-14">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${bgImage})`,
            filter: "blur(2px) brightness(0.5)",
          }}
        ></div>

        {/* ✅ Emoji Balloons */}
        {balloons.map((balloon) => (
          <motion.div
            key={balloon.id}
            className="absolute text-3xl sm:text-4xl md:text-5xl lg:text-6xl z-20"
            style={{
              left: `${Math.random() * 90}%`,
              bottom: "-10%",
            }}
            initial={{ y: 0, opacity: 0, rotate: 0 }}
            animate={{
              y: "-120vh",
              opacity: [0, 1, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              delay: balloon.delay,
              ease: "easeInOut",
            }}
          >
            {balloon.emoji}
          </motion.div>
        ))}

        {/* ✅ Hero Title Text Only */}
        <div className="z-30 text-center text-white px-4">
          <h1 className="text-3xl md:text-4xl font-bold drop-shadow-xl">
            MaMa In your arms is where I find my forever ❤️
          </h1>
        </div>
      </div>

      {/* ✅ Scroll-Reveal Paragraph Section */}
      <motion.div
        className="w-full flex justify-center items-center py-16 px-4 bg-pink-50"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <div className="max-w-[700px] text-center text-pink-900">
          <p className="text-base sm:text-lg mb-6 leading-relaxed font-medium">
            Even on our worst days, I will always love you more than words can
            explain.
          </p>
          <p className="text-base sm:text-lg leading-relaxed font-medium">
            When I say I love you more, I don’t mean I love you more than you
            love me. I mean I love you more than the bad days ahead of us, I
            love you more than any fight we will ever have. I love you more than
            the distance between us, I love you more than any obstacle that
            could try and come between us. I love you the most.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
