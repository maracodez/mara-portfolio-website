import React, { useEffect, useState } from "react";
import { navData } from "./data/navData";
import '../styles/info.css'
import { FiMenu, FiX } from "react-icons/fi";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isOpen, setIsOpen] = useState(false); //toggle mobile dropdown

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

  return (
    <div className={`navfix fixed top-0 left-0 w-full transition-all duration-300 z-50 flex justify-between ${
      scrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="px-8 py-2">
        <h1 className="font-bold text-[2rem]">Mara</h1>
      </div>

      <div className="md:hidden cursor-pointer">
			<button onClick={() => setIsOpen(!isOpen)} className="text-4xl">
				{isOpen ? <FiX /> : <FiMenu />
			
				}
			</button>
        </div>

        {/* mobile dropdown */}
        {isOpen && (
            <div className=" md:hidden flex flex-col bg-gray-300 text-center py-6 text-2xl absolute top-16 left-0 right-0 w-full transition-transform duration-300 shadow-md">
        
            {navData.map((item) => (
              <a
                key={item.id}
                href={item.link}
                className={`hover:underline p-2 ${
                  activeSection === item.link.slice(1) ? "text-gray-600 underline" : ""
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}

      <div className="navbar hidden md:block bg-gray-300 flex gap-8 w-[50%] py-4 px-6 font-semibold text-[1rem] uppercase items-center">
        
        {navData.map((item) => (
          <a
            key={item.id}
            href={item.link}
            className={`hover:underline p-6 ${
              activeSection === item.link.slice(1) ? "text-gray-600 underline" : ""
            }`}
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
