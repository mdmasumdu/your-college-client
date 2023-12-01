
import { Link } from "react-router-dom";
import useEnrollClasses from "../../Components/Hooks/useEnrollClasses";


const MyenrolledClass = () => {
  
    const [myenrolledclasses] =useEnrollClasses();
  
  


  
    return (
        <div>

            <h1 className="text-center font-bold text-3xl mt-10 mb-10 text-orange-400">My Enrolled Classes</h1>
        {
            myenrolledclasses == "" ? <div><p className="text-center font-bold text-red-600 text-5xl">You Havent Enrolled at any Class yet</p></div> :       <div className="grid grid-cols-3 gap-5 m-4">
            {
                myenrolledclasses.map(myenrolledclass=><div key={myenrolledclass._id} className="card  shadow-xl">
                <figure className="px-10 pt-10">
                  <img src={myenrolledclass.Image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{myenrolledclass.Title}</h2>
                  <p>Teacher: {myenrolledclass.Name}</p>
                  <div className="card-actions">
                    <Link to={`/dashboard/assignments/${myenrolledclass.purchasedclassid}`}><button className="btn bg-orange-400" >Continue</button></Link>
                  </div>
                </div>
              </div>)
            }
            </div>
        }
            
        </div>
    );
};

export default MyenrolledClass;