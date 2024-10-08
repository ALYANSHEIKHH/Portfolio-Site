"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="sticky top-0 z-40 w-full h-16 backdrop-brightness-100 bg-white shadow-md">
      <div className="flex justify-between items-center h-full px-6">
        {/* Logo */}
        <div className="logo">
          <Image src="/logo (2).png" alt="Logo" width={140} height={50} />
        </div>

        {/* Links (Desktop) */}
        <nav className="hidden md:flex space-x-6 text-lg">
          <Link href="/" className="text-black transition duration-500 ease-in-out hover:text-[#fca61f] hover:translate-y-1 hover:scale-105">
            Home
          </Link>
          <Link href="#about" className="text-black transition duration-500 ease-in-out hover:text-[#fca61f] hover:translate-y-1 hover:scale-105">
            About
          </Link>
          <Link href="#services" className="text-black transition duration-500 ease-in-out hover:text-[#fca61f] hover:translate-y-1 hover:scale-105">
            Services
          </Link>
          <Link href="#projects" className="text-black transition duration-500 ease-in-out hover:text-[#fca61f] hover:translate-y-1 hover:scale-105">
            Projects
          </Link>
        </nav>

        {/* Contact Button (Desktop) */}
        <div className="hidden md:block">
          <Link href="#contact">
            <button
              className="w-[150px] h-[40px] rounded-full bg-[#fca61f] text-white text-lg font-bold transition duration-300 ease-linear hover:bg-white hover:text-[#fca61f] hover:border-2 hover:border-[#fca61f] hover:shadow-lg"
              style={{ boxShadow: '1px 1px 10px #fca61f' }}
            >
              Contact
            </button>
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="block md:hidden">
          <button
            className="text-black focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Mobile Menu (Toggle) */}
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-lg p-4 md:hidden">
            <nav className="flex flex-col space-y-4 text-lg text-center">
              <Link href="/" className="text-black transition duration-500 ease-in-out hover:text-[#fca61f] hover:translate-y-1 hover:scale-105">
                Home
              </Link>
              <Link href="#about" className="text-black transition duration-500 ease-in-out hover:text-[#fca61f] hover:translate-y-1 hover:scale-105">
                About
              </Link>
              <Link href="#services" className="text-black transition duration-500 ease-in-out hover:text-[#fca61f] hover:translate-y-1 hover:scale-105">
                Services
              </Link>
              <Link href="#projects" className="text-black transition duration-500 ease-in-out hover:text-[#fca61f] hover:translate-y-1 hover:scale-105">
                Projects
              </Link>
              {/* Contact Button in Toggle Menu */}
              <Link href="#contact">
                <button
                  className="w-[150px] h-[40px] rounded-full bg-[#fca61f] text-white text-lg font-bold transition duration-300 ease-linear hover:bg-white hover:text-[#fca61f] hover:border-2 hover:border-[#fca61f] hover:shadow-lg"
                  style={{ boxShadow: '1px 1px 10px #fca61f' }}
                >
                  Contact
                </button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
