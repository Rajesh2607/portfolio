import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for menu toggle

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white fixed w-full top-0 z-50 shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Brand Name */}
        <Link to="/" className="text-2xl font-extrabold tracking-wide text-[#64ffda]">
          LINGALA RAJESH
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-lg">
          <Link to="/" className="hover:text-[#64ffda] transition">Home</Link>
          <Link to="/Blog.jsx" className="hover:text-[#64ffda] transition">Blog</Link>
          <Link to="/projects" className="hover:text-[#64ffda] transition">Projects</Link>
          <Link to="/certificates" className="hover:text-[#64ffda] transition">Certificates</Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col bg-gray-900 text-center py-4 space-y-4">
          <Link to="/" className="hover:text-[#64ffda] transition" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/Blog" className="hover:text-[#64ffda] transition" onClick={() => setIsOpen(false)}>Blog</Link>
          <Link to="/projects" className="hover:text-[#64ffda] transition" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link to="/certificates" className="hover:text-[#64ffda] transition" onClick={() => setIsOpen(false)}>Certificates</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
