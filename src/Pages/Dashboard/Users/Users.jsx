import { useForm } from "react-hook-form";
import useAxiossecure from "../../../Components/Hooks/useAxiossecure";
import useUsers from "../../../Components/Hooks/useUsers";
import { useState } from "react";





const Users = () => {
    const axiosSecure =useAxiossecure();
    const { register, handleSubmit } = useForm();
  
    const [email,setemail]=useState('c')
    const [users,refetch] =useUsers(email);
  
    

    const onSubmit = (data) => {
        setemail(data.keyword)
        refetch()

    }

    const handlemakeadmin=(email)=>{
        axiosSecure.patch(`/makeuseradmin/${email}`)
        .then(res=>{
            if(res.data.modifiedCount){
                refetch();
            }
        })


    }
    return (
        <div>
            
        <h1 className="text-3xl text-center text-orange-400 font-bold mt-5">All the Teacher Request</h1>

        <div className="flex justify-center mt-10 mb-10">
        <form onSubmit={handleSubmit(onSubmit)}>

        <input className="bg-slate-100 p-2" type="text" {...register("keyword")} placeholder="search users by email" />
        <button className="p-2 bg-orange-400">Search</button>
        </form>
        </div>
        <div className="overflow-x-auto">
<table className="table">
{/* head */}
<thead>
  <tr>
    <th>Serial</th>
    <th>Image</th>
    <th>Name</th>
    <th>email</th>
    <th>Make Admin</th>
  
  </tr>
</thead>
<tbody>

   {
    users.map((usera,idx)=>   <tr key={usera?._id} className="bg-base-200">
    <th>{idx+1}</th>
    <td><img className="w-10" src={usera?.image} alt="" /></td>
    <td>{usera?.name}</td>
    <td>{usera?.email}</td>
    <td>{usera.role == "admin" ? <button className="btn bg-orange-400" disabled >Make Admin</button> :<button className="btn bg-orange-400" onClick={()=>handlemakeadmin(usera?.email)}>Make Admin</button>}</td>
  
  </tr>)
   }
 
</tbody>
</table>
</div>
        
    </div>
    );
};

export default Users;