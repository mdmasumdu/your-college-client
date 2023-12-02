
import Sectiontitle from "../../Components/Sectiontitle/Sectiontitle";
import Class from "./Class";
import useClasses from "../../Components/Hooks/useClasses";


const Classes = () => {
//  const [classes,setClasses]=useState([]);
    // useEffect(()=>{
    //     fetch("Class.json")
    //     .then(res=>res.json())
    //     .then(data=>{
    //         const datas =data.sort((a, b) => a.total_enrollment - b.total_enrollment);
            
    //         setClasses(datas)})

    // },[])
    const [classes]=useClasses();
    const approvedClasses =classes.filter(classas=>classas.status === "Approved");
    const filterdClasses =approvedClasses.sort((a,b)=>{
        return b.total_enrolment - a.total_enrolment
    })
    return (
        <div>
            <Sectiontitle heading={"All the Classes"} subheading={"Learn and grow with these skills"}></Sectiontitle>

            <div className="grid grid-cols-3 gap-5">
                {
                   filterdClasses.map(classa=><Class key={classa._id} classa={classa}></Class>)
                }
            </div>
        </div>
    );
};

export default Classes;