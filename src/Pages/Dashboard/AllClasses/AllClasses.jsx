import Swal from "sweetalert2";
import useAxiossecure from "../../../Components/Hooks/useAxiossecure";
import useClasses from "../../../Components/Hooks/useClasses";
import { Link } from "react-router-dom";


const AllClasses = () => {
    const [classes,refetch]=useClasses();

const axiosSecure=useAxiossecure();
    const approveReject =(action,id)=>{
        const info ={
            action,
            id,
          
        }
    
        axiosSecure.patch("/approveclass",info )
        .then(res=>{
            console.log(res)
            if(res.data.modifiedCount){
                refetch()
                Swal.fire({
                    title: 'succsess!',
                    text: `succsesfully ${action} the class` ,
                    icon: 'success',
                    confirmButtonText: 'Cool'
            
                  })
            }
        })
    
        }
    return (
        <div>

<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Serial</th>
        <th>Image</th>
        <th>Title</th>
        <th>Email</th>
        <th>Short Description</th>
        <th>Approve</th>
        <th>Reject</th>
        <th>See Progress</th>
      </tr>
    </thead>
    <tbody>
    
       {
        classes.map((classa,idx)=>   <tr key={classa._id} className="bg-base-200">
        <th>{idx+1}</th>
        <td><img className="w-10" src={classa.Image} alt="" /></td>
        <td>{classa.Title}</td>
        <td>{classa.email}</td>
        <td>{classa.Short_description}</td>
        <td><button className="btn bg-orange-400" onClick={()=>approveReject("Approved",classa._id)}>Approve</button></td>
        <td><button className="btn bg-orange-400" onClick={()=>approveReject("Rejected",classa._id)}>Reject</button></td>
        <td>{classa.status === "Approved"? <Link to={`/dashboard/seeprogress/${classa._id}`}><button className="btn bg-orange-400">See Progress</button></Link> :<button disabled className="btn bg-orange-400">See Progress</button> }</td>
      </tr>)
       }
     
    </tbody>
  </table>
</div>
            
            
        </div>
    );
};

export default AllClasses;