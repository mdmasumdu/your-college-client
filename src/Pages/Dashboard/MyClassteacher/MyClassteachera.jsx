/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const MyClassteachera = ({classes}) => {
    const {Name,Title,Image,price,Short_description ,status,email,_id}=classes
    console.log(classes)


 
    const deleteClass =(id)=>{


    }

   
    return (
        <div >
       
        <div className="card w-96 shadow-xl">
<figure className="px-10 pt-10">
<img  src={Image} alt="Shoes" className="rounded-xl h-40" />
</figure>
<div className="card-body items-center text-center">
<h2 className="card-title">{Title}</h2>
<p>Instructor:{Name}</p>
<p>Email:{email}</p>
<p>{Short_description}</p> myclassesteacherupdate
<p>Status:{status}</p>
<p>Price:$ {price}</p>
<div className="flex gap-5 ">
  <Link to="/dashboard/myclassesteacherupdate"><button className="btn bg-orange-400" >Update</button></Link>
  <button className="btn bg-orange-400" onClick={()=>deleteClass(_id)}>Delete</button>
  <button className="btn bg-orange-400">See Details</button>
</div>
</div>
</div>
        
    </div>
    );
};

export default MyClassteachera;