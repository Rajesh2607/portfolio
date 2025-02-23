import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import IntroAnimation from "./components/IntroAnimation";

const App = () => {

  return (
    
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {/* Main Content */}
      <Homepage/>
      <Footer />
    </div>
  );
};

export default App;
