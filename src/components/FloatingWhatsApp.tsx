//import React from 'react'
import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

const FloatingWhatsApp = () => {
  return (
    <div>
        <motion.a 
            href="https://wa.me/2348156002901"
            rel='noopener noreferrer'
            initial={{ opacity: 0, scale: 0.5, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.1 }}
            className='fixed bottom-22 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 transition-transform duration-300 hover:scale-110'
            title='Message me'
        >
            <FaWhatsapp size={28} />
        </motion.a>
    </div>
  )
}

export default FloatingWhatsApp
