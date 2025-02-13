import React, { useState, useRef, useEffect } from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import { GiHamburgerMenu } from "react-icons/gi";

function NavbarMain() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null); // Ref for detecting outside clicks

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="max-w-[1300px] mx-auto w-full px-4 fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-4">
      {/* Main Navbar */}
      <div className="flex justify-between w-full max-w-[1200px] mx-auto bg-black items-center p-6 rounded-full border-[0.5px] border-orange">
        <NavbarLogo />

        {/* Desktop Navbar Links */}
        <div className="hidden lg:block">
          <NavbarLinks />
        </div>

        <NavbarBtn />

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-2xl p-3 border border-orange rounded-full"
          onClick={toggleMenu}
        >
          <GiHamburgerMenu />
        </button>
      </div>

      {/* Mobile Menu (Sliding Down Effect) */}
      <div
        ref={menuRef}
        className={`absolute top-full right-0 w-full bg-black p-6 border-t border-orange transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <NavbarLinks />
      </div>
    </nav>
  );
}

export default NavbarMain;
