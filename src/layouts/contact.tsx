//import React from 'react'
import emailjs from '@emailjs/browser';

import  { useRef } from "react";

const Contact = () => {

	const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

	if (!form.current) {
    console.error('Form reference is null');
    return;
  }

    emailjs
      .sendForm(
		'service_y2tbsed', 
		'template_qdfxub9', 
		form.current, 
         'ad3jTCKdNvIclboYB',
      )
      .then(
        () => {
          alert('SUCCESSFULY SENT A MESSAGE!');
        },
        (error) => {
          console.log('FAILED...', error.text);
		  alert('FAILED TO SEND MESSAGE...')
        },
      );
  };

  return (
	<div className="px-8 mt-12 mb-4 flex flex-col">
		<h2 className="text-center font-semibold uppercase text-4xl lg:text-3xl">Contact</h2>
		<form 
			ref={form} 
			onSubmit={sendEmail}
			className="w-full flex flex-wrap gap-4 mt-4 mb-4 text-gray-700"
		>
			<input 
				type="text" 
				name="user_name" 
				className="w-[45%] md:text-2xl outline-none border-b border-gray-700"
              	placeholder="Name"
			/>
			<input 
				type="email" 
				name="user_email" 
				className="w-[48%] md:text-2xl lg:text-xl outline-none border-b border-gray-700"
				placeholder='Email'
			/>
			<textarea 
				name="message" 
				className="outline-none text-gray-600 md:text-2xl lg:text-xl w-[80%] h-[200px] border-b border-gray-700"
				placeholder="Message"
			/>
			<input 
				type="submit" 
				value=" Hire Me" 
				className="text-2xl lg:text-xl ml-[25%] md:ml-[40%] w-1/2 md:w-1/4 mt-4 py-2 px-4 uppercase border cursor-pointer hover:bg-black hover:text-white hover:shadow-lg transition duration-300"
			/>
    	</form>
	</div>
  )
}

export default Contact