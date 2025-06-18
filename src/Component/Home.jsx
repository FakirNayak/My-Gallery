import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import one from "../assets/fr.jpg";
import two from "../assets/1.jpg";
import song from "../assets/s1.mp3";
import "../Component/Home.css";
import MusicImageFlow from "./Musicimage";
import VideoEmojiSection from "./VideoPlay";

export default function ImageGalleryHero() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const textVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 1.5, ease: "easeOut", delay: 3.5 },
    },
  };

  const bgImage1Variants = {
    hidden: { scale: 1.15, opacity: 0, filter: "blur(10px) brightness(0.8)" },
    visible: {
      scale: 1,
      opacity: 1,
      filter: "blur(0px) brightness(1)",
      transition: { duration: 2, ease: "easeInOut" },
    },
  };

  const bgImage2Variants = {
    hidden: {
      opacity: 0,
      scale: 1.1,
      y: 100,
      filter: "blur(8px) brightness(0.6)",
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      filter: "blur(0px) brightness(1)",
      transition: {
        duration: 2,
        ease: "easeInOut",
        delay: 2.2,
      },
    },
  };

  const handleTogglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div>
      <section className="w-full h-screen bg-slate-900 flex items-center justify-center relative overflow-hidden">
        {/* Background Images */}
        <motion.div
          variants={bgImage1Variants}
          initial="hidden"
          animate="visible"
          className="absolute inset-0 z-0"
        >
          <img
            src={one}
            alt="Gallery Background 1"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </motion.div>

        <motion.div
          variants={bgImage2Variants}
          initial="hidden"
          animate="visible"
          className="absolute inset-0 z-10"
        >
          <img
            src={two}
            alt="Gallery Background 2"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </motion.div>

        {/* Foreground Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
          className="relative z-20 max-w-6xl w-full px-6 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="text-left text-white text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" id="my-textone">
              This is{" "}
              <span className="text-cyan-400">Timeless Memories I Hold</span>
            </h1>
            <p className="text-lg text-gray-300">
              A curated collection of Fragments of My Soul.
            </p>

            {/* Play/Stop Button */}
            <div className="mt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleTogglePlay}
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-300"
              >
                {isPlaying ? "⏹ Stop Song" : "▶️ Play Song"}
              </motion.button>

              {/* Text below button */}
              <p className="mt-4 text-gray-300 text-sm">
                {isPlaying
                  ? "The melody is playing..."
                  : "Click to play music 🎵"}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Hidden audio player */}
        <audio ref={audioRef} src={song} preload="auto" />
      </section>
      <MusicImageFlow />
      <VideoEmojiSection />
    </div>
  );
}
