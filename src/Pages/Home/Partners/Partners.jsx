import { useEffect, useState } from "react";
import Partner from "./Partner";
import Sectiontitle from "../../../Components/Sectiontitle/Sectiontitle";


const Partners = () => {

    const [partners,setPartners]=useState([]);
    useEffect(()=>{
        fetch("Data.json")
        .then(res=>res.json())
        .then(data=>setPartners(data))
    },[])
    return (
       <div className="bg-slate-200 mb-10 p-5"> 
          <Sectiontitle heading={"Our Reliable Partners and Collaborators"} subheading={""}></Sectiontitle>
         <div className="flex gap-5">
            {
                partners.map(partner=><Partner key={partner._id} partner={partner}></Partner>)
            }
        </div>
       </div>
    );
};

export default Partners;