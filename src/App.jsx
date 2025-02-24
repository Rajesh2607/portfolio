import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Homepage.jsx";  // Ensure correct file extension
import About from "./components/About.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
