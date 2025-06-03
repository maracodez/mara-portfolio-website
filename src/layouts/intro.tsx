import hero from "../assets/hero.jpg"
import downlaod from "../assets/download.png"
import '../styles/info.css'

const intro = () => {
   
    
  return (
    <div className="flex justify-between items-center mt-18">
        <div className="text py-2 px-8">
            <p className="text-[1.5rem]">hello, I'm</p>
            <h2 className="font-bold text-[2rem] md:text-[3rem]">Mara Ruth</h2>
            <p className="text-2xl py-2">A Front-End Developer</p>
            <div className="explore ">
                <button 
                    className=" text-xl bg-black text-white  py-4 px-8 shadow-md uppercase mr-2 cursor-pointer hover:bg-white hover:text-black hover:border-2"
                    onClick={() => {
                        const section = document.getElementById("contact");
                        section?.scrollIntoView({ behavior: "smooth" });
                    }}
                >Hire me</button>
                <button 
                    className="border-2 text-xl py-[13px] px-8 uppercase shadow-md cursor-pointer hover:bg-black hover:text-white"
                    onClick={() => {
                        const section = document.getElementById("portfolio");
                        section?.scrollIntoView({ behavior: "smooth" });
                      }}
                >Explore More</button>
            </div>
        </div>
        <div className="image hidden md:block w-[50%] z-10">
            <img 
                src={downlaod} 
                alt=""
                className="download w-[70%] relative rounded-[60%] top-6" 
            />
            <img 
                src={hero} 
                alt={hero}
                className="hero h-[65vh] w-[32%] items-center rounded-[60%] absolute bottom-[7%] right-28"
            />
            
        </div>
    </div>
  )
}

export default intro
