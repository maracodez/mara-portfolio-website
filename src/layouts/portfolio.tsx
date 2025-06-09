import { motion } from "framer-motion";
import image from "../assets/loopstudio crop.png";
import image1 from "../assets/travel.png";
import image2 from "../assets/weather.png";
import image3 from "../assets/Screenshot (35).png";
import image4 from "../assets/Screenshot (36).png";
import image5 from "../assets/Screenshot (44).png";

const projects = [
  {
    image,
    title: "Loopstudio",
    github: "https://maracodez.github.io/loopstudio-landing-page/",
    live: "https://loopstudio-landing-page-lyart.vercel.app/",
  },
  {
    image: image1,
    title: "Travel Journal",
    github: "https://maracodez.github.io/travel-journal-website",
    live: "https://travel-journal-website-tan.vercel.app/",
  },
  {
    image: image2,
    title: "Weather App",
    github: "https://maracodez.github.io/weatherApp/",
    live: "https://weather-app-one-wheat-30.vercel.app/",
  },
  {
    image: image3,
    title: "Dog Breed",
    github: "https://maracodez.github.io/dog-breed-api/",
    live: "https://dog-breed-api-zeta.vercel.app/",
  },
  {
    image: image4,
    title: "Fragrance Gallery",
    github: "https://maracodez.github.io/Online-Shopping/",
    live: "https://online-shopping-five-eta.vercel.app/",
  },
  {
    image: image5,
    title: "Fashion Hub",
    github: "https://maracodez.github.io/FashionHub/",
    live: "https://fashion-hub-five.vercel.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="mt-[59vh] md:mt-[40%] lg:mt-[20%] text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="text-3xl lg:text-xl pb-2 text-indigo-700">Portfolio</p>
        <h5 className="font-semibold text-4xl py-4">Check My Wonderful Works</h5>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 ">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative group overflow-hidden rounded-xl shadow-lg "
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex flex-col items-center justify-center text-white px-4">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <div className="space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-gray-300"
                >
                  GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-gray-300"
                >
                  Live
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
