import { useLoaderData, useParams } from "react-router-dom";
import useAssignment from "../../Components/Hooks/useAssignment";
import { useForm } from "react-hook-form";
import ReactStars from "react-rating-stars-component";
import "./Style.css"
import { useState } from "react";
import useAuth from "../../Components/Hooks/useAuth";
import useAxiossecure from "../../Components/Hooks/useAxiossecure";
import Swal from "sweetalert2";


const Assignments = () => {

    const [assignments]=useAssignment();

    const {id}=useParams();
    const {user}=useAuth();
    const fortitle=useLoaderData();
    const axiosSecure =useAxiossecure();
  const assignmentforthisClass =assignments.filter(assignment=>assignment.classid == id)
  console.log("assignmentforthisClass",assignmentforthisClass)
  // const fortitle =assignments.find(assignment=>assignment.classid == id)
  console.log(fortitle)


  const { register, handleSubmit } = useForm();
  

const [ratingvalue,setratingvalue] =useState(1)

const onSubmit = (data) =>{
   const {description}=data;

     const ratinginfo ={
        ratingvalue,
        description,
        name:user?.displayName,
        image:user?.photoURL,
        classid:id,
        classtitle:fortitle?.Title
     }
   
axiosSecure.post('/reviews',ratinginfo)
.then(res=>{

    if(res.data.insertedId){
        Swal.fire({
            title: 'succsess!',
            text: 'succsesfully logged in',
            icon: 'success',
            confirmButtonText: 'Cool'
    
          })
    }
    console.log(res.data)
})
    


}


  
const thirdExample = {
    size: 40,
    count: 5,
    isHalf: false,
    value: 1,
    color: "blue",
    activeColor: "red",
    onChange: newValue => {
      setratingvalue(newValue)
    }
  };


    return (
        <div className="">
            
            <div className="flex justify-center mt-10">
                <button className="btn bg-orange-500 m-6" onClick={()=>document.getElementById('my_modal_1').showModal()}>Teacher Evaluation Report</button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Give Rating</h3>
    <p className="py-4">Press ESC key to close</p>

    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
   
  
    <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input type="text" placeholder="description" {...register("description")}  className="input input-bordered" required />
        </div>

        <div className="App">
      <ReactStars {...thirdExample} />
    </div>
        <button className="btn mt-5">Send</button>
      </form>
  </div>



</dialog>
            </div>
            <h1 className="text-center font-bold text-4xl mt-10 text-orange-400">Assignment for the class</h1>

            <section>
            <div className="overflow-x-auto">
<table className="table">
{/* head */}
<thead>


  <tr>
    <th>Serial</th>
    <th>Title</th>
    <th>Descritption</th>
    <th>Deadline</th>
    <th>Submit</th>
  
  </tr>
</thead>
<tbody>


   {
    assignmentforthisClass.map((assignmenta,idx)=>   <tr key={assignmenta?._id} className="bg-base-200">
    <th>{idx+1}</th>
    <td>{assignmenta?.title}</td>
    <td>{assignmenta?.description}</td>
    <td>{assignmenta?.deadline}</td>
    <td><button className="btn bg-orange-400">Submit</button></td>
  
  </tr>)
   }
 
</tbody>
</table>
</div>
            </section>
            
        </div>
    );
};

export default Assignments;