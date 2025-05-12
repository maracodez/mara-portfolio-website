//import React from 'react'
import image from '../assets/image.jpg'
import { serviceData } from './data/serviceData'

const service = () => {
  return (
    <div className='mt-[10%]'>
        <div className="max-w-2xl mx-auto text-center">
            <p className="text-xl pb-2 text-gray-700">Service</p>
            <h3 className="font-semibold text-4xl py-4">What I Do</h3>
            <p className="w-full text-xl">I craft sleek, responsive web interfaces that blend clean code with smooth wear experience, using tools like HTML, CSS, JavaScript, React, Tailwind, and TypeScript to bring ideas to life on the web.</p>
        </div>
        <section className='relative'>
            <div className=' mt-12 h-84'>
                <img 
                    src={image} 
                    alt={image} 
                    className='w-full h-full object-cover opacity-50 absolute top-0 left-0'
                />
            </div>
            <div className='absolute top-38 left-12 right-12 z-10 text-center bg-white flex gap-4 p-14 shadow-lg transition-shadow duration-300'>
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
