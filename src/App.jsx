import React, { useState } from "react";
import IntroAnimation from "./components/IntroAnimation";
import Homepage from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro ? (
        <IntroAnimation onFinish={() => setShowIntro(false)} />
      ) : (
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <Homepage />
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
