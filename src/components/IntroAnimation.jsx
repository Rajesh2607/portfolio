import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./IntroAnimation.css";

const IntroAnimation = ({ onFinish }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");
    if (hasVisited) {
      onFinish(); // Skip animation if already visited
    } else {
      setTimeout(() => {
        setIsVisible(false);
        localStorage.setItem("hasVisited", "true"); // Save visit status
        onFinish();
      }, 3000); // Animation duration
    }
  }, [onFinish]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="intro-container"
      initial={{ opacity: 1, scale: 1 }}
      animate={{ opacity: 0, scale: 1.2 }}
      transition={{ duration: 3.5 }}
    >
      <h1 className="intro-text">Welcome to <br/>Rajesh Lingala's Portfolio</h1>
    </motion.div>
  );
};

export default IntroAnimation;
