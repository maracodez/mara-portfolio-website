import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/send-email', {
        name,
        email,
        message,
      });

      if (response.status === 200) {
        alert('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="px-8 mt-12 mb-4 flex flex-col">
      <h2 className="text-center font-semibold uppercase text-3xl">Contact</h2>
      <form onSubmit={handleSubmit} className="w-full flex flex-wrap gap-4 mt-4 mb-4 text-gray-700">
            <input
                type="text"
                placeholder="Name"
                className="w-[45%] outline-none border-b border-gray-700"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="email"
                placeholder="Email"
                className="w-[48%] outline-none border-b border-gray-700"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
                name="message"
                placeholder="Message"
                className="outline-none w-[80%] h-[200px] border-b border-gray-700"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button
                type="submit"
                className="text-xl ml-[40%] w-1/4 mt-4 py-2 px-4 uppercase border cursor-pointer hover:bg-black hover:text-white hover:shadow-lg transition duration-300"
            >
            Hire Me
            </button>
      </form>
    </div>
  );
};

export default Contact;
