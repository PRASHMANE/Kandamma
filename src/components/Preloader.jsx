import { motion } from "framer-motion";

const letter = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Preloader() {
  const text = ["I", " ", "Love", " ", "You"];

  return (
    <motion.div
      className="preloader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.85, ease: "easeInOut" }}
    >
      <div className="preloader-inner">
        <div className="preloader-heart" aria-hidden />
        <h1 className="preloader-title">
          {text.map((chunk, i) =>
            chunk === " " ? (
              <span key={i} className="preloader-space" />
            ) : (
              <motion.span
                key={i}
                custom={i}
                variants={letter}
                initial="hidden"
                animate="visible"
                className="preloader-letter"
              >
                {chunk}
              </motion.span>
            )
          )}
        </h1>
        <motion.p
          className="preloader-sub"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.85 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          Forever &amp; always
        </motion.p>
      </div>
    </motion.div>
  );
}
