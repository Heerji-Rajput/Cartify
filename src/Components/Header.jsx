import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className= "shadow-md fixed w-full z-50 top-0 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center  bg-gray-900">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">
          H H Rajput
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <Link to={'/'} className="hover:text-blue-600 transition text-white">Home</Link>
          <Link to={"/Cart"} className="hover:text-blue-600 transition text-white">Cart</Link>
        </nav>

        {/* Button */}
        <div className="hidden md:block">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col items-center space-y-4 py-4 text-gray-700 font-medium">
            <a href="#" onClick={() => setIsOpen(false)}>Home</a>
            <a href="#" onClick={() => setIsOpen(false)}>About</a>
            <a href="#" onClick={() => setIsOpen(false)}>Services</a>
            <a href="#" onClick={() => setIsOpen(false)}>Contact</a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
              Get Started
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;