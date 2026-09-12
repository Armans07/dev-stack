import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar bg-base-100 shadow-sm px-4 md:px-8 py-3 flex justify-between items-center sticky top-0 z-50">
      
      {/* Left: Mobile Menu Toggle + Logo */}
      <div className="flex items-center gap-2">
        {/* Mobile Dropdown Button */}
        <div className="dropdown lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="btn btn-ghost btn-circle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

          {/* Mobile Dropdown Items */}
          {isOpen && (
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-base-100 rounded-box w-52 gap-2 text-gray-700 font-medium">
              <li>
                <a href="#" className="text-pink-500 font-semibold" onClick={() => setIsOpen(false)}>Home</a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500" onClick={() => setIsOpen(false)}>Technologies</a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500" onClick={() => setIsOpen(false)}>Projects</a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500" onClick={() => setIsOpen(false)}>About</a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500" onClick={() => setIsOpen(false)}>Contact</a>
              </li>
            </ul>
          )}
        </div>

        {/* Logo */}
        <img src="/src/assets/logo-text.png" alt="Logo" className="h-8 md:h-9 w-auto" />
      </div>

      {/* Center: Desktop Navigation Links (Hidden on mobile) */}
      <ul className="hidden lg:flex items-center gap-8 text-sm font-medium">
        <li>
          <a href="#" className="text-pink-500 font-semibold">Home</a>
        </li>
        <li>
          <a href="#" className="text-gray-600 hover:text-pink-500 transition-colors">Technologies</a>
        </li>
        <li>
          <a href="#" className="text-gray-600 hover:text-pink-500 transition-colors">Projects</a>
        </li>
        <li>
          <a href="#" className="text-gray-600 hover:text-pink-500 transition-colors">About</a>
        </li>
        <li>
          <a href="#" className="text-gray-600 hover:text-pink-500 transition-colors">Contact</a>
        </li>
      </ul>

      {/* Right: Action Buttons */}
      <div className="flex items-center gap-2 md:gap-4">
        <button className="btn btn-ghost text-gray-700 font-medium normal-case hover:bg-transparent px-3 md:px-4 text-xs md:text-sm">
          Sign In
        </button>
        <button className="btn bg-pink-500 hover:bg-pink-600 text-white border-none rounded-full px-4 md:px-6 text-xs md:text-sm normal-case">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Navbar;