import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const IntroAnimation = ({ onComplete }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
      onComplete(); // Notify parent when animation is done
    }, 3000); // Duration of animation
  }, [onComplete]);

  if (!show) return null;

  return (
    <motion.div
      initial={{ opacity: 1, scale: 1 }}
      animate={{ opacity: 0, scale: 5 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="fixed inset-0 flex items-center justify-center bg-black text-white text-4xl md:text-6xl font-bold z-50"
    >
      Lingala Rajesh
    </motion.div>
  );
};

export default IntroAnimation;
