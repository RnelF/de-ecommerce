"use client";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi"; // For the hamburger icon

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle the menu open/close
  const toggleMenu = () => setMenuOpen(!menuOpen);

  function HandleCloseMenu() {
    setMenuOpen(false);
  }

  return (
    <div className="relative">
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className={
          menuOpen
            ? "hidden"
            : "text-slate-800 text-3xl p-3 absolute top-4 right-4 z-50"
        }
      >
        <GiHamburgerMenu />
      </button>

      <div
        className={`${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transform transition-transform duration-300 ease-in-out fixed top-0 right-0 h-full bg-gray-800 shadow-lg w-64 z-40 p-6`}
      >
        <div className="absolute right-4 text-white text-3xl font-sans">
          <button onClick={HandleCloseMenu}>X</button>
        </div>
        <div className="text-white text-xl mt-6 mb-4">Menu</div>
        <ul className="space-y-4">
          <li>
            <a href="#" className="hover:text-yellow-500">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-500">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-500">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-500">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Main Header Content */}
      <div className="shadow-lg p-4">
        <div>
          <img src="/logo/DE-logo.png" alt="Logo" width={180} height={90} />
        </div>
      </div>
    </div>
  );
}
