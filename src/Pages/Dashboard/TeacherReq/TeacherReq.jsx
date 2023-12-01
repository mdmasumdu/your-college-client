import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Components/Hooks/useAuth";
import useAxiossecure from "../../../Components/Hooks/useAxiossecure";


const TeacherReq = () => {
    const {user}=useAuth();
    const axiosSecure =useAxiossecure();

    const {refetch,data=[]} =useQuery({
        queryKey:["teacherreq",user?.email],
        queryFn: async ()=>{
            const res =await  axiosSecure.get("/teacherreq")
            return res.data
        }
    })

    console.log(data)


    const approveReject =(action,id,email)=>{
    const info ={
        action,
        id,
        email
    }

    axiosSecure.patch("/teacherreq",info )
    .then(res=>{
        if(res.data.modifiedCount){
            refetch()
        }
    })

    }
    return (
        <div>
            <h1 className="text-3xl text-center text-orange-400 font-bold mt-5">All the Teacher Request</h1>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Serial</th>
        <th>Image</th>
        <th>Name</th>
        <th>Experience</th>
        <th>Tittle</th>
        <th>Status</th>
        <th>Approve</th>
        <th>Reject</th>
      </tr>
    </thead>
    <tbody>
    
       {
        data.map((req,idx)=>   <tr key={req._id} className="bg-base-200">
        <th>{idx+1}</th>
        <td><img className="w-10" src={req.image} alt="" /></td>
        <td>{req.name}</td>
        <td>{req.experience}</td>
        <td>{req.title}</td>
        <td>{req.stattus}</td>
        <td><button className="btn bg-orange-400" onClick={()=>approveReject("Accepted",req._id,req.email)}>Approve</button></td>
        <td><button className="btn bg-orange-400" onClick={()=>approveReject("Rejected",req._id,req.email)}>Reject</button></td>
      </tr>)
       }
     
    </tbody>
  </table>
</div>
            
        </div>
    );
};

export default TeacherReq;