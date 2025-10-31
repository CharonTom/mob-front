import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { NAV_ITEMS } from "../lib/constants";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      {/* Ligne orange */}
      <div className="bg-orange-400 h-[7px] w-full" />

      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div>
            <img className="h-10 w-auto" src="/logo.png" alt="Logo" />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            {NAV_ITEMS.map(({ href, label }) => (
              <NavLink
                key={label}
                to={href}
                end
                className={({ isActive }) =>
                  `font-medium transition-colors duration-300 ${
                    isScrolled
                      ? isActive
                        ? "text-blue-600"
                        : "text-gray-700 hover:text-blue-500"
                      : isActive
                      ? "text-blue-300"
                      : "text-white hover:text-blue-300"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
