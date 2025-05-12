//import React from 'react'
import hero from "../assets/hero.jpg"
import '../styles/info.css'

const about = () => {
  return (
    <div className="about flex mt-32">
       <div className="about-hero w-[60%] px-8">
            <img src={hero} alt="" className="w-full"/>
       </div>
       <div className="text">
            <h2 className=" text-4xl font-semibold pb-2">Mara Ruth</h2>
            <p className="mara text-2xl pb-2 text-gray-700">Front end Developer</p>
            <p className="leading-relaxed pr-6">
                I'm a passionate Front-End Web Developer with years of hands-on experience building responsive and user-focused web applications. My expertise lies in HTML, CSS, JavaScript, Tailwind CSS, React, and TypeScript, which I use to craft sleek and functional interfaces that bring ideas to life. I love turning design concepts into interactive digital experiences, and I'm always looking for new ways to write clean, efficient, and scalable code.
                    <br /><br />
                Beyond building interfaces, I'm driven by the bigger picture—creating technology that truly improves lives. I believe great front-end development can bridge the gap between people and powerful tech. As I grow in the field, I aim to contribute to projects that promote accessibility, innovation, and inclusivity in tech. I see every line of code as a step toward making digital experiences more meaningful and impactful. 
            </p>
            <button className="text-xl bg-black text-white mt-4 py-2 px-4 uppercase mr-2 cursor-pointer hover:bg-white hover:text-black hover:border-2 hover:shadow-lg transition-shadow duration-300">Download CV</button>
       </div>
    </div>
  )
}

export default about
