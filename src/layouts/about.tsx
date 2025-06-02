//import React from 'react'
import hero from "../assets/hero.jpg"
import '../styles/info.css'
import AboutData from "../layouts/data/AboutData"


const about  = () => {
	


  return (
    <div className="about flex mt-32">
       <div className="about-hero w-[60%] px-8">
            <img src={hero} alt="" className="w-full"/>
       </div>
       <div className="text">
            <h2 className=" text-4xl font-semibold pb-2">Mara Ruth</h2>
            <p className="mara text-2xl pb-2 text-gray-700">Front end Developer</p>

			<div>
				<AboutData />
			</div>
            
            <button className="text-xl bg-black text-white mt-6 py-3 md:py-4 px-4 md:px-6 uppercase mr-2 cursor-pointer hover:bg-white hover:text-black hover:border-2 hover:shadow-lg transition-shadow duration-300">Download CV</button>
       </div>
    </div>
  )
}

export default about
