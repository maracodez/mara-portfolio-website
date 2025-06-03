//import React from 'react'

import { useEffect, useState } from "react";

const AboutData = () => {
    const [isMobile, setIsMobile] = useState(false);
        
    const [showMore, setShowMore] = useState(false);

        
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const paragraph1 = "I'm a passionate Front-End Web Developer with years of hands-on experience building responsive and user-focused web applications. My expertise lies in HTML, CSS, JavaScript, Tailwind CSS, React, and TypeScript, which I use to craft sleek and functional interfaces that bring ideas to life. I love turning design concepts into interactive digital experiences, and I'm always looking for new ways to write clean, efficient, and scalable code.";
    const paragraph2 = "Beyond building interfaces, I'm driven by the bigger picture—creating technology that truly improves lives. I believe great front-end development can bridge the gap between people and powerful tech. As I grow in the field, I aim to contribute to projects that promote accessibility, innovation, and inclusivity in tech. I see every line of code as a step toward making digital experiences more meaningful and impactful.";

  return (
    <div className="leading-relaxed  md:text[1rem] lg:text[6px] pr-2">
        <p className="mb-4">{paragraph1}</p>

        {(showMore || !isMobile)  && <p className="mb-4">{paragraph2}</p>}

        {isMobile && (
            <button 
                onClick={() => setShowMore((prev) => !prev)}
                className="text-gray-600 underline cursor-pointer mb-4"
            >
                {showMore ? "Show less" : "Read more"}
            </button>    
        )}
    </div>
  )
}

export default AboutData
