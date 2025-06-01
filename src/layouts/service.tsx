//import React from 'react'
import image from '../assets/image.jpg'
import { serviceData } from './data/serviceData'

const service = () => {
  return (
    <div className='mt-[18%] md:mt-[16%] lg:mt-[10%]'>
        <div className="max-w-2xl mx-auto text-center">
            <p className="text-4xl md:text-3xl lg:text-xl pb-2 text-gray-700">Service</p>
            <h3 className="font-semibold text-5xl md:text-5xl lg:text-4xl py-4">What I Do</h3>
            <p className="w-full text-xl md:text-2xl lg:text-xl leading-relaxed md:leading-loose">I craft sleek, responsive web interfaces that blend clean code with smooth wear experience, using tools like HTML, CSS, JavaScript, React, Tailwind, and TypeScript to bring ideas to life on the web.</p>
        </div>
        <section className='relative'>
            <div className=' mt-12 h-84'>
                <img 
                    src={image} 
                    alt={image} 
                    className='w-full h-96 md:h-full object-cover opacity-50 absolute top-28 md:top-0 left-0'
                />
            </div>
            <div className='absolute top-[-15%] md:top-38 left-8 md:left-12 right-8 md:right-12 z-10 text-center bg-white md:flex gap-4 p-14 shadow-lg transition-shadow duration-300'>
                {serviceData.map((index) => (
                    <div 
                        key={index.id}
                        className="max-w-md mx-auto text-center flex flex-col justify-center items-center"
                    >
                        <img 
                            src={index.image} 
                            alt="" 
                            className='w-[20%]'
                        />
                        <h4 className='font-semibold text-xl py-2 uppercase'>{index.title}</h4>
                        <p className='py-4'>{index.description}</p>
                    </div>
                ))}
            </div>  
        </section>
    </div>
  )
}

export default service
