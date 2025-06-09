import { motion } from "framer-motion";
import image from "../assets/image.jpg";
import { serviceData } from "./data/serviceData";

const Service = () => {
  return (
    <section id="services" className=" md:mt-[16%] lg:mt-[10%]">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center px-6 z-10 relative">
        <p id="mode" className="text-4xl md:text-3xl lg:text-xl pb-2 text-gray-700">Service</p>
        <h3 className="font-semibold text-5xl md:text-5xl lg:text-4xl text-indigo-700 py-4">What I Do</h3>
        <p className="w-full text-xl px-8 md:text-2xl lg:text-xl leading-relaxed md:leading-loose">
          I craft sleek, responsive web interfaces that blend clean code with smooth user experiences,
          using tools like HTML, CSS, JavaScript, React, Tailwind, and TypeScript to bring ideas to life on the web.
        </p>
      </div>

      {/* Background Image */}
      <div className="relative z-10 mt-16 px-6">
      <div className="mt-12 h-84">
        <img
          src={image}
          alt="background service"
          className="w-full h-96 md:h-full object-cover opacity-50 absolute top-28 md:top-0 left-0"
        />
      </div>

      {/* Service Cards */}
      
        <div className="absolute top-[-15%] md:top-38 left-8 md:left-12 right-8 md:right-12 z-10 text-center bg-white md:flex gap-4 p-14 shadow-lg transition-shadow duration-300 backdrop-blur-md">
          {serviceData.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <img src={service.image} alt={service.title} className="w-16 h-16 mb-4" />
              <h4 className="text-xl font-semibold uppercase">{service.title}</h4>
              <p className="mt-2 text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
