import { motion } from "framer-motion";
import hero from "../assets/hero.jpg";
import "../styles/info.css";
import AboutData from "../layouts/data/AboutData";
import resume from "../assets/my_resume.pdf";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row gap-10 items-center justify-center px-6 md:px-16 py-20"
    >
      {/* Image */}
      <motion.div
        className="w-full md:w-[45%]"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <img
          src={hero}
          alt="Mara Ruth"
          className="w-full h-96 object-cover rounded-xl shadow-xl hover:scale-105 transition-transform duration-300"
        />
      </motion.div>

      {/* Text */}
      <motion.div
        className="w-full md:w-[50%] space-y-4"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-indigo-700">Mara Ruth</h2>
        <p className="text-xl text-gray-600">Front-End Developer</p>

        <AboutData />

        <a
          href={resume}
          download
          className="inline-block mt-6 text-center bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition duration-300 shadow-md"
        >
          Download CV
        </a>
      </motion.div>
    </section>
  );
};

export default About;
