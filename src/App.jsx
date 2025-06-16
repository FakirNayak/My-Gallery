import react from "react";

import "./App.css";
import Navbar from "./Component/Navbar";
import WaveFooter from "./Component/Footer";
import ImageGalleryHero from "./Component/Home";

function App() {
  return (
    <>
      <Navbar />
      <ImageGalleryHero />
      <WaveFooter />
    </>
  );
}

export default App;
