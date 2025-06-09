import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const FloatingThemeToggle = () => {
  const [darkMode, setdarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
   
    if (darkMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
    } else {
       document.documentElement.classList.remove("dark");
       localStorage.setItem("theme", "light")
    }
  }, [darkMode]);

  return (
    <motion.button
      onClick={() => setdarkMode(!darkMode)}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1,  y: 0 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="fixed bottom-6 right-8 z-50 flex items-center gap-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white p-3 rounded-full shadow-md hover:scale-110 transition-transform duration-300 cursor-pointer"
      title="Toggle Theme"
    >
      {darkMode ? <FaSun className="text-yellow-400" size={22} /> : <FaMoon className="text-blue-500" size={22} />}
      <span className="text-sm font-medium"> {darkMode ? 'light Mode' : 'Dark Mode'}</span>
    </motion.button>
  );
};

export default FloatingThemeToggle;
