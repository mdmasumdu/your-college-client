import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../assets/4884785.jpg"
import img2 from "../../assets/programming-background-collage.jpg"
import img3 from "../../assets/971.jpg"
import { motion } from "framer-motion"
import { useState } from "react";


const Banner = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);

    const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
    const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;
    return (
         <motion.div 
         initial={false} 
         animate={
           isLoaded && isInView
             ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
             : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
         }
         transition={{ duration: 1, delay: 1 }}
         viewport={{ once: true }}
         onViewportEnter={() => setIsInView(true)}
         onLoad={() => setIsLoaded(true)}
         >
               <Carousel>
        <div>
            <img src={img1} />
       
        </div>
        <div>
            <img src={img2} />
           
        </div>
        <div>
            <img src={img3}/>
            
        </div>
    </Carousel>
         </motion.div>
       
    );
};

export default Banner;