// src/components/Header.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../layouts/Button"; // Adjust the path as per your project structure

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showNav, setShowNav] = useState(true); // 初期状態で表示に設定

  const handleScroll = () => {
    const currentPosition = window.pageYOffset;

    if (currentPosition > scrollPosition) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }

    setScrollPosition(currentPosition);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <header
      className={`fixed top-0 w-full transition-transform duration-300 ${
        showNav ? "translate-y-0" : "-translate-y-full"
      } ${
        scrollPosition > 50 ? "bg-gray-800" : "bg-black"
      } bg-opacity-75 text-white p-4 z-50`}
    >
      <nav className="max-w-screen-xl mx-auto px-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold">KOREAN CHICKEN</h1>
        <ul className="flex space-x-6 items-center">
          <li>
            <Link to="/" className="hover:text-brightcolor">
              Home
            </Link>
          </li>
          <li>
            <Link to="/menu" className="hover:text-brightcolor">
              Menu
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-brightcolor">
              About
            </Link>
          </li>
          <Button href="/contact" title="Contact Us" />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
