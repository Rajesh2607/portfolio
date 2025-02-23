import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">LINGALA RAJESH</h1>
        <div className="space-x-6">
          <Link to="/" className="hover:text-gray-400">Home</Link>
          <Link to="/about" className="hover:text-gray-400">About</Link>
          <Link to="/projects" className="hover:text-gray-400">Projects</Link>
          <Link to="/certificates" className="hover:text-gray-400">Certificates</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
