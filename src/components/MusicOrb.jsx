import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function MusicOrb({ audioRef }) {
  const [playing, setPlaying] = useState(false);
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;

    const sync = () => setPlaying(!el.paused);
    el.addEventListener("play", sync);
    el.addEventListener("pause", sync);
    return () => {
      el.removeEventListener("play", sync);
      el.removeEventListener("pause", sync);
    };
  }, [audioRef]);

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;

    let cancelled = false;
    el.volume = 0.45;

    const tryPlay = async () => {
      try {
        await el.play();
        if (!cancelled) setBlocked(false);
      } catch {
        if (!cancelled) setBlocked(true);
      }
    };

    void tryPlay();

    return () => {
      cancelled = true;
    };
  }, [audioRef]);

  const toggle = () => {
    const el = audioRef.current;
    if (!el) return;
    if (el.paused) {
      void el.play().then(() => setBlocked(false));
    } else {
      el.pause();
    }
  };

  return (
    <div className="music-wrap">
      {blocked ? (
        <motion.p
          className="music-hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Browsers sometimes need a tap for sound — tap the glowing button to hear your song ♪
        </motion.p>
      ) : null}
      <motion.button
        type="button"
        className={`music-orb ${playing ? "music-orb--pulse" : ""}`}
        onClick={toggle}
        aria-label={playing ? "Pause music" : "Play music"}
        whileTap={{ scale: 0.95 }}
      >
        <span className="music-note" aria-hidden>
          ♪
        </span>
      </motion.button>
      <span className="music-label">{playing ? "Playing" : "Song"}</span>
    </div>
  );
}
