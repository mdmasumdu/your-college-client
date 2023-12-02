
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Sectiontitle from "../../../Components/Sectiontitle/Sectiontitle";
import useReviews from '../../../Components/Hooks/useReviews';


const Feedbacks = () => {

     const [reviews] =useReviews()
 
    return (
        <div>

            <Sectiontitle heading={"What our Clients say"} subheading={"Client feedback"}></Sectiontitle>
            <div className='mt-10'>
                
<Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(feedback=><SwiperSlide key={feedback._id}>
                        <div className="flex flex-col justify-center items-center p-6">
                        <img className="h-40" src={feedback.image} alt="" />
                        <h1>Name:{feedback.name}</h1>
                        <p> Class title:  {feedback.classtitle}</p>
                            <h1>FeedBack: {feedback.description}</h1>
                           
                            <p>{feedback.feedbackText}</p>

                             
                         
                        </div>
                    </SwiperSlide>)
                }
                      </Swiper>
            </div>
        </div>
    );
};

export default Feedbacks;