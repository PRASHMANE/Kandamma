import { AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Preloader from "./components/Preloader";
import Home from "./pages/Home";

const PRELOADER_MS = 3400;

export default function App() {
  const [showPreloader, setShowPreloader] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setShowPreloader(false), PRELOADER_MS);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <audio ref={audioRef} loop preload="auto" playsInline>
        <source src="/music.mp3" type="audio/mpeg" />
      </audio>

      <AnimatePresence mode="wait">
        {showPreloader ? <Preloader key="preloader" /> : <Home key="home" audioRef={audioRef} />}
      </AnimatePresence>
    </>
  );
}
