import { motion } from "framer-motion";
import hero from "../assets/hero.jpg";
import download from "../assets/download.png";
import "../styles/info.css";

const Intro: React.FC = () => {
  return (
    <section
      id="home"
      className=" flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20 bg-gradient-to-br from-white to-indigo-50"
    >
      {/* Text Section */}
      <motion.div
        className="text-left max-w-xl space-y-4"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-xl text-gray-600">Hello, I'm</p>
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-700">
          Mara Ruth
        </h1>
        <p className="text-2xl text-gray-700">A Front-End Developer</p>

        <div className="flex gap-4 pt-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-indigo-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-indigo-700 transition cursor-pointer"
          >
            Hire Me
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })
            }
            className="border-2 border-indigo-600 text-indigo-600 px-6 py-3 rounded-md hover:bg-indigo-600 hover:text-white transition cursor-pointer"
          >
            Explore More
          </motion.button>
        </div>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="relative hidden md:block w-1/2"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src={download}
          alt="Download Background"
          className="download w-[70%] mx-auto rounded-full relative z-10 shadow-xl"
        />
        <img
          src={hero}
          alt="Mara Hero"
          className="hero absolute h-[60vh] w-[62%] rounded-full top-20 right-10 z-20 shadow-2xl"
        />
      </motion.div>
    </section>
  );
};

export default Intro;
