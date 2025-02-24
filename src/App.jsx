import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import IntroAnimation from "./components/IntroAnimation";

const App = () => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // Check if user has visited before
    const hasVisited = localStorage.getItem("hasVisited");
    if (hasVisited) {
      setShowIntro(false);
    } else {
      setTimeout(() => {
        setShowIntro(false);
        localStorage.setItem("hasVisited", "true");
      }, 3000);
    }
  }, []);

  return (
    <Router>
      {showIntro ? (
        <IntroAnimation />
      ) : (
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/certificates" element={<Certificates />} />
              {/* Add a fallback route */}
              <Route path="*" element={<h1 className="text-center mt-10 text-3xl">Page Not Found</h1>} />
            </Routes>
          </main>
          <Footer />
        </div>
      )}
    </Router>
  );
};

export default App;
