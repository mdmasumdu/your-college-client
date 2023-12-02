import useMyClasstecher from "../../../Components/Hooks/useMyClasstecher";
import MyClassteachera from "./MyClassteachera";


const Myclassteacher = () => {
    const [myclassesstecher]=useMyClasstecher();

    
    return (
     <div>

<h1 className="text-center font-bold text-3xl text-orange-400 mt-10">My added Classes</h1>
        
          {
            myclassesstecher == "" ? <p className="text-center font-bold text-red-500 text-4xl m-10">You havent added any classes yet</p>:  <div className="grid grid-cols-3 gap-5 min-h-screen p-5">
            {
                myclassesstecher.map(classes=><MyClassteachera key={classes._id} classes={classes} ></MyClassteachera>)
            }
        </div>
          }
     </div>
    );
};

export default Myclassteacher;