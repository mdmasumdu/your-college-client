import useClasses from "../../../Components/Hooks/useClasses";
import Class from "../../Classes/Class";


const Popular = () => {
    const [classes]=useClasses();
    const approvedClasses =classes.filter(classas=>classas.status === "Approved");
    const filterdClasses =approvedClasses.sort((a,b)=>{
        return b.total_enrolment - a.total_enrolment
    })



    return (
        <div>
            <h1 className="text-center font-bold text-4xl text-orange-400 mt-10 mb-10">Our Popular courses</h1>
             <div  // Add your own styling for the card
     className="grid grid-cols-3 gap-5 mt-10 mb-10">
                {
                   filterdClasses.slice(0,6).map(classa=><Class key={classa._id} classa={classa}></Class>)
                }
            </div>
            
        </div>
    );
};

export default Popular;