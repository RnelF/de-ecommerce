"use client";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi"; // For the hamburger icon
import { SlArrowDown } from "react-icons/sl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoCloseSharp } from "react-icons/io5";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [projMenuOpen, setProjMenuOpen] = useState(false);
  const [aboutMenuOpen, setAboutMenuOpen] = useState(false);

  const pathname = usePathname();

  // Toggle the menu open/close
  const toggleMenu = () => setMenuOpen(!menuOpen);

  function HandleCloseMenu() {
    setMenuOpen(false);
    setProjMenuOpen(false);
    setAboutMenuOpen(false);
  }
  function handleProjMenu() {
    setProjMenuOpen(!projMenuOpen);
    if (aboutMenuOpen) setAboutMenuOpen(false);
  }

  function handleAboutMenu() {
    setAboutMenuOpen(!aboutMenuOpen);
    if (projMenuOpen) setProjMenuOpen(false);
  }

  return (
    <div className="relative shadow-md flex justify-between gap-10 p-4">
      <div>
        <Image src="/logo/DE-logo.png" alt="Logo" width={180} height={90} />
      </div>

      {/* Desktop Menu (shows for screens 780px and above) */}
      <div className="hidden md:flex md:items-center md:justify-between md:w-full">
        <ul className="flex space-x-6 text-md">
          <li>
            <Link
              href="/"
              className={
                pathname === "/"
                  ? "text-yellow-500 font-semibold underline opacity-75"
                  : "hover:text-yellow-500 ease-in-out duration-300 "
              }
            >
              HOME
            </Link>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-yellow-500 ease-in-out duration-300"
            >
              OUR PROCESS
            </a>
          </li>
          <li>
            <div
              onClick={handleAboutMenu}
              className="flex items-center gap-1 cursor-pointer hover:text-yellow-500 duration-300"
            >
              <span>ABOUT </span>
              <span>
                <SlArrowDown />
              </span>
            </div>
            <div
              className={`${
                aboutMenuOpen ? "opacity-100 max-h-40" : "opacity-0 max-h-0"
              } transition-all duration-500 ease-in-out overflow-hidden flex flex-col gap-2 items-center bg-slate-100 absolute w-52  left-96 shadow-lg mt-2 border border-black border-opacity-15`}
            >
              <div className="shadow-md w-52 text-center pb-1 hover:bg-slate-600 hover:text-slate-100 ease-in-out duration-200">
                <a href="#">OUR STORY</a>
              </div>
              <div className="shadow-md w-52 text-center pb-1 hover:bg-slate-600 hover:text-slate-100  ease-in-out duration-200">
                <a href="#">FAQ</a>
              </div>
              <div className="shadow-md w-52 text-center pb-1 hover:bg-slate-600 hover:text-slate-100  ease-in-out duration-200">
                <a href="#">SHOWROOM</a>
              </div>
              <div className="shadow-md w-52 text-center pb-1 hover:bg-slate-600 hover:text-slate-100  ease-in-out duration-200">
                <a href="#">CUSTOMER SERVICES</a>
              </div>
            </div>
          </li>

          <li>
            <div
              onClick={handleProjMenu}
              className="flex items-center gap-1 cursor-pointer hover:text-yellow-500 duration-300"
            >
              <span>OUR PROJECTS </span>
              <span>
                <SlArrowDown />
              </span>
            </div>
            <div
              className={`${
                projMenuOpen ? "opacity-100 max-h-40" : "opacity-0 max-h-0"
              } transition-all duration-500 ease-in-out overflow-hidden flex flex-col gap-2 items-center bg-slate-100 absolute w-36 shadow-lg mt-2 border border-black border-opacity-15`}
            >
              <div className="shadow-md w-36 text-center hover:bg-slate-600 hover:text-slate-100 ease-in-out duration-200">
                <a href="#">KITCHEN</a>
              </div>
              <div className="shadow-md w-36 text-center hover:bg-slate-600 hover:text-slate-100  ease-in-out duration-200">
                <a href="#">CLOSETS</a>
              </div>
              <div className="shadow-md w-36 text-center hover:bg-slate-600 hover:text-slate-100  ease-in-out duration-200">
                <a href="#">OFFICE</a>
              </div>
            </div>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-yellow-500 ease-in-out duration-300"
            >
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
            <IoCloseSharp />
          </button>
        </div>
        <div className="text-white text-xl mt-6 mb-4">Menu</div>
        <ul className="space-y-4 ">
          <li>
            <Link
              href="/"
              className={
                pathname === "/"
                  ? "text-yellow-500 font-semibold underline opacity-75"
                  : "hover:text-yellow-500 ease-in-out duration-300 "
              }
            >
              HOME
            </Link>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-yellow-500 ease-in-out duration-300"
            >
              OUR PROCESS
            </a>
          </li>
          <li>
            <div className="relative">
              <div
                onClick={handleAboutMenu}
                className={`flex items-center gap-1 cursor-pointer  ${
                  aboutMenuOpen
                    ? "text-yellow-500"
                    : "hover:!text-yellow-500 text-black ease-in-out duration-300"
                }`}
              >
                <span>ABOUT </span>
                <span>
                  <SlArrowDown />
                </span>
              </div>
              <div
                className={`${
                  aboutMenuOpen ? "opacity-100 max-h-40" : "opacity-0 max-h-0"
                } transition-all duration-500 ease-in-out overflow-hidden flex flex-col gap-2 items-center bg-slate-100 absolute w-52 shadow-lg mt-2 border border-black border-opacity-15 z-100`}
              >
                <div className="shadow-md w-52 text-center pb-1 hover:bg-slate-600 hover:text-slate-100 ease-in-out duration-200">
                  <a href="#">OUR STORY</a>
                </div>
                <div className="shadow-md w-52 text-center pb-1 hover:bg-slate-600 hover:text-slate-100  ease-in-out duration-200">
                  <a href="#">FAQ</a>
                </div>
                <div className="shadow-md w-52 text-center pb-1 hover:bg-slate-600 hover:text-slate-100  ease-in-out duration-200">
                  <a href="#">SHOWROOM</a>
                </div>
                <div className="shadow-md w-52 text-center pb-1 hover:bg-slate-600 hover:text-slate-100  ease-in-out duration-200">
                  <a href="#">CUSTOMER SERVICES</a>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div
              className={
                aboutMenuOpen
                  ? "transition-all ease-in-out duration-500 mt-40"
                  : "transition-all ease-in-out duration-500 relative"
              }
            >
              <div
                onClick={handleProjMenu}
                className={`flex items-center gap-1 cursor-pointer ${
                  projMenuOpen
                    ? "text-yellow-500"
                    : "hover:text-yellow-500 ease-in-out duration-300"
                }`}
              >
                <span>OUR PROJECTS </span>
                <span>
                  <SlArrowDown />
                </span>
              </div>
              <div
                className={`${
                  projMenuOpen ? "opacity-100 max-h-40" : "opacity-0 max-h-0"
                } transition-all duration-500 ease-in-out overflow-hidden flex flex-col gap-2 items-center bg-slate-100 absolute w-36 shadow-lg mt-2 border border-black border-opacity-15`}
              >
                <div className="shadow-md w-36 text-center hover:bg-slate-600 hover:text-slate-100 ease-in-out duration-200">
                  <a href="#">KITCHEN</a>
                </div>
                <div className="shadow-md w-36 text-center hover:bg-slate-600 hover:text-slate-100  ease-in-out duration-200">
                  <a href="#">CLOSETS</a>
                </div>
                <div className="shadow-md w-36 text-center hover:bg-slate-600 hover:text-slate-100  ease-in-out duration-200">
                  <a href="#">OFFICE</a>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div
              className={
                projMenuOpen
                  ? "mt-28 transition-all ease-in-out duration-500"
                  : "transition-all ease-in-out duration-500"
              }
            >
              <a
                href="#"
                className="hover:text-yellow-500 ease-in-out duration-300"
              >
                CONTACT US
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
