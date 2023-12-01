
import Partner from "./Partner";
import Sectiontitle from "../../../Components/Sectiontitle/Sectiontitle";
import useAxiossecure from "../../../Components/Hooks/useAxiossecure";
import {  useEffect, useState } from "react";


const Partners = () => {
    const axiosSecure=useAxiossecure();
    const [partners,setPartners]=useState([]);
   


useEffect(()=>{
    axiosSecure.get("/partners")
    .then(res=>setPartners(res.data))


},[axiosSecure])

console.log(partners)
 
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