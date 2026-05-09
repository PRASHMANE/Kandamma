import { motion } from "framer-motion";
import ImageTape from "../components/ImageTape";
import MusicOrb from "../components/MusicOrb";

export default function Home({ audioRef }) {
  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9 }}
    >
      <div className="home-bg-gradient" aria-hidden />

      <div className="home-content">
        <ImageTape />

        <header className="home-header">
          <motion.p className="home-kicker" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
            For my beautiful wife
          </motion.p>
          <motion.h1 className="home-title" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28 }}>
            Wish You Happy
            <br />
            Mother&apos;s Day
            <span className="home-name"> Kandamma</span>
          </motion.h1>
          <motion.p className="home-tagline" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            ಜನ್ಮ ನೀಡಿದವಳನ್ನು 'ಅಮ್ಮ' ಎಂದು ಕರೆದಮೇಲೆ, ಜೀವನ ನೀಡಿದವಳನ್ನು ಕೂಡ 'ಅಮ್ಮ' ಎಂದೇ ಕರೆಯಬಹುದು 💗
          </motion.p>

          <MusicOrb audioRef={audioRef} />
        </header>

        <ImageTape />
      </div>
    </motion.div>
  );
}
