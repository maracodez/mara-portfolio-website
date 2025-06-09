import { motion } from "framer-motion";
import { FiMail } from "react-icons/fi";

const FloatingContact = () => {
  const handleClick = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.button
      onClick={handleClick}
      initial={{ opacity: 0, scale: 0.5, y: 100 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-40 right-6 z-50 bg-indigo-600 hover:bg-indigo-700 text-white p-4 rounded-full shadow-lg transition-colors cursor-pointer"
      title="Contact Me"
    >
      <FiMail size={24} />
    </motion.button>
  );
};

export default FloatingContact;
