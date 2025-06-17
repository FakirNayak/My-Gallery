import react from "react";

import "./App.css";
import Navbar from "./Component/Navbar";
import WaveFooter from "./Component/Footer";
import ImageGalleryHero from "./Component/Home";
import ScrollToTop from "./Component/ScrollTotop";
import LoveBackground from "./Component/LoveBackground";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<ImageGalleryHero />} />
        <Route path="/gallery" element={<LoveBackground />} />
      </Routes>
      <WaveFooter />
    </>
  );
}

export default App;
