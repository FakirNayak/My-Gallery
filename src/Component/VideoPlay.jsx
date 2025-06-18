// src/components/VideoEmojiSection.jsx

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import sampleVideo from "../assets/vg.mp4";

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.4,
      duration: 0.8,
      type: "spring",
      stiffness: 70,
    },
  }),
};

export default function VideoEmojiSection() {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const handleSoundToggle = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);
    }
  };

  const loveQuote =
    "In every heartbeat, I find you. In every breath, I keep you. Forever is just the beginning with you.";

  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full min-h-screen px-4 py-10 bg-gradient-to-br from-purple-600 via-pink-500 to-red-500">
      {/* Video Section */}
      <div className="relative w-full md:w-1/2 p-4">
        <video
          ref={videoRef}
          className="rounded-2xl w-full h-[300px] md:h-[500px] object-cover shadow-2xl"
          autoPlay
          loop
          playsInline
          muted={isMuted}
          controls={false}
        >
          <source src={sampleVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Sound Button */}
        <button
          onClick={handleSoundToggle}
          className="absolute bottom-4 right-4 bg-white/20 hover:bg-white/30 text-white font-medium py-2 px-4 rounded-lg backdrop-blur-sm border border-white transition-all duration-300"
        >
          {isMuted ? "🔇 Unmute" : "🔊 Mute"}
        </button>
      </div>

      {/* Quote Section */}
      <div className="w-full md:w-1/2 p-4 text-white">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            delay: 1.2,
            duration: 1,
            type: "spring",
            stiffness: 60,
            damping: 12,
          }}
          whileHover={{
            scale: 1.03,
            boxShadow: "0 8px 30px rgba(255, 192, 203, 0.6)",
            transition: { duration: 0.4 },
          }}
          animate={{
            y: [0, -3, 0],
            transition: {
              repeat: Infinity,
              repeatType: "mirror",
              duration: 3,
              ease: "easeInOut",
            },
          }}
          className="mt-10 text-center bg-white/10 p-4 rounded-xl shadow-lg backdrop-blur-md"
        >
          <p className="text-xl italic font-light text-pink-100">{loveQuote}</p>
        </motion.div>
      </div>
    </div>
  );
}
