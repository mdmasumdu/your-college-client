
import { Link } from "react-router-dom";
import teacher from "../../assets/6101073.jpg"

const StartTeach = () => {
    return (
       <div> 

        <h1 className="text-center font-bold text-3xl text-orange-500">Join As Teacher at Your College</h1>
         <div className="flex gap-5">
                 
                 <div className="flex-1">
                  <img src={teacher} alt="" />
                  </div>
     
                 <div className="flex flex-col justify-center space-y-5 flex-1">
                     <h1 className="text-2xl font-bold">Become An Instructor</h1>
                       <p>Becoming an instructor can be a fulfilling and rewarding career path. Whether you want to teach in a traditional classroom setting, online, or through other platforms.</p>
                       <Link to='/techon'><button className="btn bg-orange-400">Start Teaching Today</button></Link>
     
                 </div>
                 
             </div>
       </div>
    );
};

export default StartTeach;