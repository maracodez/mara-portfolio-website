import React, { useEffect, useState } from "react";
import { navData } from "./data/navData";
import "../styles/info.css";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";


const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isOpen, setIsOpen] = useState(false); // toggle mobile dropdown

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = document.querySelectorAll("section");
      let current = "home";

      sections.forEach((section) => {
        const top = section.offsetTop - 80;
        if (window.scrollY >= top) {
          current = section.getAttribute("id") || "home";
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-md "
          : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center px-6 py-4">
        <h1 className="font-bold text-3xl text-indigo-600">Mara</h1>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl text-gray-700 cursor-pointer"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

	  	

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 font-medium text-sm uppercase">
          {navData.map((item) => (
            <a
              key={item.id}
              href={item.link}
              className={`transition-colors duration-200 hover:text-indigo-600 ${
                activeSection === item.link.slice(1)
                  ? "text-indigo-600 underline underline-offset-4"
                  : "text-gray-700"
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Dropdown with Framer Motion */}
      <AnimatePresence>
			{isOpen && (
				<motion.div
					initial={{ height: 0, opacity: 0 }}
					animate={{ height: "auto", opacity: 1 }}
					exit={{ height: 0, opacity: 0 }}
					transition={{ duration: 0.3 }}
					id="skills"
					className="md:hidden bg-white/95 backdrop-blur-md flex flex-col items-center gap-4 py-6 shadow-md text-lg"
				>
					{navData.map((item) => (
						<a
							key={item.id}
							href={item.link}
							onClick={closeMenu}
							id="modes"
							className={`transition-colors duration-200 hover:text-indigo-600 ${
							activeSection === item.link.slice(1)
								? "text-indigo-600 underline underline-offset-4"
								: "text-gray-700"
							}`}
						>
							{item.name}
						</a>
					))}
				</motion.div>
			)}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;