import img1 from "../../assets/Wavy_Bus-43_Single-12.jpg"
import img2 from "../../assets//19199360.jpg"
import img3 from "../../assets/19362653.jpg"

const Why = () => {
    return (
        <div>
            <h1 className="text-orange-400 text-3xl font-bold text-center mt-10 mb-5">Why chose Us</h1>

            <div className="flex flex-col md:flex-row p-5 gap-5">
                <div className="flex-1 flex flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold"> Expert Instructors</h1>
                    <p className="">
                    
                    At your college our instructors are seasoned professionals in the tech industry. They bring real-world experience, industry insights, and a passion for teaching to every lesson. Learn from the best and stay ahead in your tech career.

                   </p>

                </div>

                <div className="flex-1">
                    <img src={img1} alt="" />
                </div>
            </div>

            <div className="flex  flex-col md:flex-row-reverse gap-5 p-5">
                <div className="flex-1 flex flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold"> Hands-On Learning</h1>
                    <p className="">
                    
                    We believe in learning by doing. Our courses are designed to provide hands-on experience, allowing you to apply what you learn immediately. Gain practical skills and build a strong foundation for success in the tech world.

                   </p>

                </div>

                <div className="flex-1">
                    <img src={img2} alt="" />
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-5 p-5">
                <div className="flex-1 flex flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold">Interactive Community</h1>
                    <p className="">
                    
                    Join a vibrant community of learners, mentors, and industry professionals. Engage in discussions, collaborate on projects, and network with like-minded individuals. Our community is an invaluable resource for support and growth.

                   </p>

                </div>

                <div className="flex-1">
                    <img src={img3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Why;