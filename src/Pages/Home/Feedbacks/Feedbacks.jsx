import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Sectiontitle from "../../../Components/Sectiontitle/Sectiontitle";


const Feedbacks = () => {
    const [feedbacks,setFeedbacks]=useState([]);
    useEffect(()=>{
        fetch("feed.json")
        .then(res=>res.json())
        .then(data=>setFeedbacks(data))

    },[])

    console.log("hello",feedbacks)
    return (
        <div>

            <Sectiontitle heading={"----What our Clients say---- "}></Sectiontitle>
            <div>
                
<Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    feedbacks.map(feedback=><SwiperSlide key={feedback.title}>
                        <div className="flex flex-col justify-center items-center p-6">
                        <img className="h-40" src={feedback.image} alt="" />
                            <h1>Student Name: {feedback.name}</h1>
                            <p> Course Name: {feedback.title}</p>
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