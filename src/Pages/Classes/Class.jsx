/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { motion } from "framer-motion"
import { useState } from "react";


const Class = ({classa}) => {
  console.log(classa)
    const {Name,Title,Image,price,Short_description ,total_enrolment,_id}=classa;
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);

    const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
    const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;
    return (
        <div>
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
      onLoad={() => setIsLoaded(true)}  className="card  shadow-xl">
  <figure className="px-10 pt-10">
    <img  src={Image} alt="Shoes" className="rounded-xl h-40" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{Title}</h2>
    <p>Instructor:{Name}</p>
    <p>{Short_description}</p>
    <p>Enrolled students:{total_enrolment}</p>
    <p>Price:$ {price}</p>
    <div className="card-actions">
     <Link to={`/classdetail/${_id}`}> <button className="btn btn-primary">Enroll Now</button></Link>
    </div>
  </div>
</motion.div>
            
        </div>
    );
};

export default Class;