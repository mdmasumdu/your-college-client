import Banner from "./Banner";
import Feedbacks from "./Feedbacks/Feedbacks";
import Partners from "./Partners/Partners";
import Popular from "./Popular/Popular";
import StartTeach from "./StartTeach";
import Statistics from "./Statistics/Statistics";
import Why from "./Why";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Partners></Partners>
            <Popular></Popular>
            <Feedbacks></Feedbacks>
         
            <StartTeach></StartTeach>
            <Statistics></Statistics>
            <Why></Why>
        </div>
    );
};

export default Home;