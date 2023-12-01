import Swal from "sweetalert2";
import useAxiossecure from "../../../Components/Hooks/useAxiossecure";

import { useForm } from "react-hook-form";
import { useLoaderData, useParams } from "react-router-dom";


const MyClassteacherUpdate = () => {


    const { register, handleSubmit } = useForm();
    const axiosSecure=useAxiossecure();
    
    const {id}=useParams();
    const toUpdate=useLoaderData();
    console.log(toUpdate)

    console.log(id)
    
    
    const onSubmit = (data) =>{
        const {title,name,email,price,description,status,photoURL}=data;
        const classinfo ={
            status:status,
            Title:title,
            Name:name,
            Image:photoURL,
            Short_description:description,
            total_enrolment:0,
            email,
            price
     }
    
    axiosSecure.put(`/updateClass/${id}`,classinfo)
    .then(res=>{
        console.log(res.data.modifiedCount)
        if(res.data.modifiedCount){
            Swal.fire({
                title: 'succsess!',
                text: 'succsesfully added the class',
                icon: 'success',
                confirmButtonText: 'Cool'
        
              })
        }
    })
    
    }
    return (
        <div>
            <h1 className="text-center font-bold text-3xl mt-10 mb-10 text-orange-400">Add Class</h1>
             <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input type="text" placeholder="class title" name="name" defaultValue={toUpdate?.Title}  {...register("title")}className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" placeholder="name" readOnly name="name" value={toUpdate?.Name}   {...register("name")}className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="email" readOnly name="email"  value={toUpdate?.email} {...register("email")} className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input type="text" placeholder="Price" name="password" defaultValue={toUpdate?.price}{...register("price")} className="input input-bordered" required />
        
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>                                                                                 
              <input type="text" placeholder="Deshcription" defaultValue={toUpdate?.Short_description} {...register("description")}  className="input input-bordered" required />
              
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">PhotoURL</span>
              </label>
              <input type="text" placeholder="PhotoURl" defaultValue={toUpdate?.Image} {...register("photoURL")} className="input input-bordered" required />
              
            </div>
            <div className="form-control mt-6">
              <button className="btn">Update the Class</button>
            </div>
          </form>
            
        </div>
    );
};

export default MyClassteacherUpdate;