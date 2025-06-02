import image from '../assets/loopstudio crop.png';
import image1 from '../assets/travel.png';
import image2 from '../assets/desktop-preview.jpg';
import image3 from '../assets/Screenshot (35).png';
import image4 from '../assets/Screenshot (36).png';
import image5 from '../assets/Screenshot (44).png'

const projects = [
  {
    image: image,
    title: 'Loopstudio',
    github: 'https://maracodez.github.io/loopstudio',
    live: 'https://loopstudio-landing-page-lyart.vercel.app/',
  },
  {
    image: image1,
    title: 'Travel Journal',
    github: 'https://maracodez.github.io/travel-journal-website',
    live: 'https://travel-journal-website-tan.vercel.app/',
  },
  {
    image: image2,
    title: 'Newsletter Page',
    github: 'https://github.com/maracodex/newsletter',
    live: 'https://newsletter.vercel.app',
  },
  {
    image: image3,
    title: 'Dog Breed',
    github: 'https://maracodez.github.io/dog-breed-api/',
    live: 'https://vercel.com/mara1/dog-breed-api/EuhKYAUemkmYQeYBiS64H3Ya1bkb',
  },
  {
    image: image4,
    title: 'Fragrance Gallery',
    github: 'https://maracodez.github.io/Online-Shopping/',
    live: 'https://online-shopping-five-eta.vercel.app/',
  },
  {
	image: image5,
	title: 'Fashion Hub',
	github: "https://maracodez.github.io/FashionHub/",
	live: "https://fashion-hub-five.vercel.app/"
  }
];

const Portfolio = () => {
  return (
    <div className="portfolio mt-[50vh] md:mt-[30%] lg:mt-[20%] text-center">
      <p className="text-3xl lg:text-xl pb-2 text-gray-700">Portfolio</p>
      <h5 className="font-semibold text-4xl py-4">Check My Wonderful Works</h5>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 cursor-pointer">
        {projects.map((project, index) => (
          <div 
				key={index} 
				className="relative group overflow-hidden rounded-xl shadow-lg "
			>
            <img 
				src={project.image} 
				alt={project.title} 
				className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer" 
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
                  Github
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
