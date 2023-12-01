import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../assets/4884785.jpg"
import img2 from "../../assets/programming-background-collage.jpg"
import img3 from "../../assets/971.jpg"

const Banner = () => {
    return (
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
       
    );
};

export default Banner;