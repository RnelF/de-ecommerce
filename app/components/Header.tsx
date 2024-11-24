"use client";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi"; // For the hamburger icon
import { SlArrowDown } from "react-icons/sl";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  // Toggle the menu open/close
  const toggleMenu = () => setMenuOpen(!menuOpen);

  function HandleCloseMenu() {
    setMenuOpen(false);
  }
  function handleSubMenu() {
    if (subMenuOpen === false) {
      setSubMenuOpen(true);
    } else {
      setSubMenuOpen(false);
    }
  }

  return (
    <div className="relative shadow-md flex justify-between gap-10 p-4">
      <div>
        <img src="/logo/DE-logo.png" alt="Logo" width={180} height={90} />
      </div>

      {/* Desktop Menu (shows for screens 780px and above) */}
      <div className="hidden md:flex md:items-center md:justify-between md:w-full">
        <ul className="flex space-x-6 text-lg">
          <li>
            <a href="#" className="hover:text-yellow-500 ">
              HOME
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-500 ">
              ABOUT US
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-500 ">
              OUR PROCESS
            </a>
          </li>
          <li>
            <div onClick={handleSubMenu} className="flex items-center gap-1">
              <span>OUR PROJECTS </span>
              <span>
                <SlArrowDown />
              </span>
            </div>
            <div
              className={
                subMenuOpen
                  ? "flex flex-col gap-2 items-center bg-slate-100 absolute w-36 shadow-lg"
                  : "hidden"
              }
            >
              <div className="shadow-sm">
                <a href="#">KITCHEN</a>
              </div>
              <div className="shadow-sm">
                <a href="#">CLOSETS</a>
              </div>
              <div className="shadow-sm">
                <a href="#">OFFICE</a>
              </div>
            </div>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-500 ">
              CONTACT US
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu Button (shows below 780px) */}
      <button
        onClick={toggleMenu}
        className={`md:hidden text-slate-800 text-3xl p-3 absolute top-4 right-4 z-50 ${
          menuOpen ? "hidden" : ""
        }`}
      >
        <GiHamburgerMenu />
      </button>

      {/* Mobile Slide-out Menu */}
      <div
        className={`${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transform transition-transform duration-300 ease-in-out fixed top-0 right-0 h-full bg-gray-800 shadow-lg w-64 z-40 p-6 md:hidden`}
      >
        <div className="absolute right-4 text-white text-3xl font-sans">
          <button onClick={HandleCloseMenu} className="hover:text-red-700">
            X
          </button>
        </div>
        <div className="text-white text-xl mt-6 mb-4">Menu</div>
        <ul className="space-y-4 ">
          <li>
            <a href="#" className="hover:text-yellow-500 ">
              HOME
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-500 ">
              ABOUT US
            </a>
          </li>
          <li>
            <p>OUR PROJECTS</p>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-500 ">
              OUR PROJECTS
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-500 ">
              CONTACT US
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
