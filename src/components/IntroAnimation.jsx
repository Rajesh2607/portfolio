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
      }, 4000); // Animation duration
    }
  }, [onFinish]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="intro-container"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      {/* Background Video */}
      <motion.video
        className="intro-video"
        src="/path-to-your-video.mp4" // Replace with actual video path
        autoPlay
        muted
        playsInline
        loop={false} // Stops after playing once
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 2, delay: 2 }} // Fades out after 2s
      />

      {/* Animated Text */}
      <motion.h1
        className="intro-text"
        initial={{ opacity: 1, scale: 1 }}
        animate={{ opacity: 0, scale: 1.2 }}
        transition={{ duration: 2 }}
      >
        <center>
          Welcome <br /> to <br />
        </center>
        Rajesh Lingala's Portfolio
      </motion.h1>
    </motion.div>
  );
};

export default IntroAnimation;
