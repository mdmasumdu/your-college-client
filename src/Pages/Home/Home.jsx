import Banner from "./Banner";
import Feedbacks from "./Feedbacks/Feedbacks";
import Partners from "./Partners/Partners";
import StartTeach from "./StartTeach";
import Statistics from "./Statistics/Statistics";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Partners></Partners>
            <Feedbacks></Feedbacks>
         
            <StartTeach></StartTeach>
            <Statistics></Statistics>
        </div>
    );
};

export default Home;