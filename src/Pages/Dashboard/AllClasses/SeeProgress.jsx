import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import useReviews from "../../../Components/Hooks/useReviews";
import { Navigation } from "swiper/modules";


const SeeProgress = () => {

    const [reviews]=useReviews();
    const {id} =useParams();

    const feedbacks =reviews.filter(review=>review.classid ===id);
    
    return (
        <div>
              {
                feedbacks == "" ? <p className="text-center font-bold text-4xl text-red-500">No feedback yet</p> :<div>
                
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                                {
                                    feedbacks.map(feedback=><SwiperSlide key={feedback.title}>
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
              }
        </div>
    );
};

export default SeeProgress;