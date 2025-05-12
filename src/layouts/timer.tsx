import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import image from '../assets/html.jpg'

const timer: React.FC = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [secondsElapsed, setSecondsElapsed] = useState(0);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        const interval = setInterval(() => {
            setSecondsElapsed(prev => prev + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formatTime = (totalSeconds: number) => {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds  = totalSeconds % 60;
        return `${minutes}m ${seconds < 10 ? "" : ""}${seconds}s`
    };

    
  return (
    <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0}}
        transition={{ duration: 0.5}}
        className='text-[3rem] text-center my-[10%] relative'
    >
        <img 
            src={image}
            alt={image} 
            className='w-full h-84  object-cover opacity-40 shadow-md absolute top-0 left-0'
        />
        <div className='absolute top-24 right-0 left-0'>
            <span className='font-bold '>{formatTime(secondsElapsed)}</span>
            <br />
            Time on this site! <br />
            What are you waiting for?
        </div>
    </motion.div>
  )
}

export default timer
