/* eslint-disable react/prop-types */


import { Link } from "react-router-dom";
import useAxiossecure from "../../../Components/Hooks/useAxiossecure";
import Swal from "sweetalert2";
import useMyClasstecher from "../../../Components/Hooks/useMyClasstecher";


const MyClassteachera = ({classes}) => {
    const {Name,Title,Image,price,Short_description ,status,email,_id}=classes
    console.log(classes)
const axiosSecure =useAxiossecure();
const [,refetch]=useMyClasstecher();

 
    const deleteClass =(id)=>{

        Swal.fire({
            title: "Do you want to delete the class?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "yes",
            denyButtonText: `NO`
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                axiosSecure.delete(`deleteclass/${id}`)
                .then(res=>{
                    console.log(res.data)
                    if(res.data.deletedCount){
                        refetch();
                        Swal.fire({
                            title: 'succsess!',
                            text: 'succsesfully deleted',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                    
                       })
                       
                    }
                })
            }
          });
 


    }

   
    return (
        <div >
               <div className="card  shadow-xl">
<figure className="px-10 pt-10">
<img   src={Image} alt="Shoes" className="rounded-xl max-h-40" />
</figure>
<div className="card-body items-center text-center">
<h2 className="card-title">{Title}</h2>
<p>Instructor:{Name}</p>
<p>Email:{email}</p>
<p>{Short_description}</p> 
<p>Status:{status}</p>
<p>Price:$ {price}</p>
<div className="flex gap-5 ">
  <Link to={`/dashboard/myclassesteacherupdate/${_id}`}><button className="btn bg-orange-400" >Update</button></Link>
  <button className="btn bg-orange-400" onClick={()=>deleteClass(_id)}>Delete</button>
 {
  status === "Approved" ?  <Link to={`/dashboard/seedetails/${_id}`}><button className="btn bg-orange-400">See Details</button></Link> : <Link><button className="btn bg-orange-400" disabled>See Details</button></Link>
 }
</div>
</div>
</div>
        
    </div>
    );
};

export default MyClassteachera;