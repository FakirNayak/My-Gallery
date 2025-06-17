// src/components/MusicImageFlow.jsx
import React, { useState, useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaPlay, FaPause } from "react-icons/fa";
import songFile from "../assets/s2.mp3";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";

const images = [img1, img2, img3, img4, img5, img6];

export default function MusicImageFlow() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const controlsArray = images.map(() => useAnimation());
  const [isMobile, setIsMobile] = useState(false);

  const togglePlay = () => {
    if (!isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    setIsPlaying(!isPlaying);
  };

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    controlsArray.forEach((controls, index) => {
      if (isPlaying) {
        if (isMobile) {
          // Show one-by-one on small screens
          controls.start({
            y: [0, 500],
            opacity: 1,
            transition: {
              duration: 5,
              repeat: Infinity,
              repeatDelay: 1,
              delay: index * 4,
              ease: "easeInOut",
            },
          });
        } else {
          // Show multiple images with fade on large screens
          controls.start({
            y: [0, 700],
            opacity: [0, 1, 0.5],
            transition: {
              duration: 12,
              repeat: Infinity,
              delay: index * 1,
              ease: "easeInOut",
            },
          });
        }
      } else {
        controls.stop();
      }
    });
  }, [isPlaying, controlsArray, isMobile]);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#ff9a9e] via-[#fad0c4] via-40% to-[#fbc2eb]">
      <audio ref={audioRef} src={songFile} />

      {/* Play/Pause Button */}
      <button
        onClick={togglePlay}
        className="z-20 mb-10 bg-white rounded-full p-4 shadow-lg hover:scale-110 transition"
      >
        {isPlaying ? (
          <FaPause className="text-pink-600 text-3xl" />
        ) : (
          <FaPlay className="text-pink-600 text-3xl" />
        )}
      </button>

      {/* Falling Images */}
      <div className="absolute top-0 w-full flex flex-wrap justify-center gap-6 z-10">
        {images.map((img, index) => (
          <motion.div
            key={index}
            animate={controlsArray[index]}
            initial={{ y: -200, opacity: 0 }}
            className="w-36 h-36 sm:w-44 sm:h-44 rounded-xl overflow-hidden shadow-xl"
          >
            <img
              src={img}
              alt={`Falling ${index}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
