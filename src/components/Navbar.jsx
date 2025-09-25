import { useState } from "react";
import { NavLink } from "react-router";
import { HiMenu, HiX } from "react-icons/hi"; // icons
import logo from "../assets/Logo- light.png";

const linkStyle = ({ isActive }) => ({
  color: isActive ? "#228EE5" : "white",
  fontWeight: isActive ? "bold" : "normal",
  transition: "all 0.2s ease",
});

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-[90%] sm:w-[70%] mx-auto flex justify-between items-center fixed top-0 z-50 backdrop-blur-md rounded-2xl px-4 py-2">
      {/* Logo */}
      <div>
        <NavLink to="/">
          <img src={logo} className="w-16 h-16" alt="logo" />
        </NavLink>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex gap-8 text-lg">
        <NavLink to="/" style={linkStyle}>
          Home
        </NavLink>
        <NavLink to="favorites" style={linkStyle}>
          Favorites
        </NavLink>
        <NavLink to="about" style={linkStyle}>
          About
        </NavLink>
      </nav>

      {/* Burger Button (Mobile) */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-white focus:outline-none">
        {isOpen ? <HiX size={32} /> : <HiMenu size={32} />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`absolute top-20 right-[-25px] w-[70%] bg-black/80 backdrop-blur-lg rounded-l-2xl p-6 flex flex-col gap-6 text-lg transform transition-transform duration-300 ease-in-out md:hidden
        ${isOpen ? "translate-x-0" : "translate-x-[480px]"}`}>
        <NavLink to="/" style={linkStyle} onClick={() => setIsOpen(false)}>
          Home
        </NavLink>
        <NavLink
          to="favorites"
          style={linkStyle}
          onClick={() => setIsOpen(false)}>
          Favorites
        </NavLink>
        <NavLink to="about" style={linkStyle} onClick={() => setIsOpen(false)}>
          About
        </NavLink>
      </div>
    </header>
  );
};

export default Navbar;
