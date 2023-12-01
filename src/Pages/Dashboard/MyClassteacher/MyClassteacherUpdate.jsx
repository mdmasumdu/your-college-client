import Swal from "sweetalert2";
import useAxiossecure from "../../../Components/Hooks/useAxiossecure";
import useAuth from "../../../Components/Hooks/useAuth";
import { useForm } from "react-hook-form";


const MyClassteacherUpdate = () => {

    const {user}=useAuth();
    const { register, handleSubmit } = useForm();
    const axiosSecure=useAxiossecure();
    
    
    
    
    const onSubmit = (data) =>{
        const {title,name,email,price,descirption,photoURL,}=data;
        const classinfo ={
            status:"pending",
            Title:title,
            Name:name,
            Image:photoURL,
            Short_description:descirption,
            total_enrolment:0,
            email,
            price
     }
    
    axiosSecure.post("/addClass",classinfo)
    .then(res=>{
        console.log(res.data)
        if(res.data.insertedId){
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
              <input type="text" placeholder="class title" name="name"  {...register("title")}className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" placeholder="name" readOnly name="name" value={user?.displayName}   {...register("name")}className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="email" readOnly name="email"  value={user?.email} {...register("email")} className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input type="password" placeholder="Price" name="password" {...register("price")} className="input input-bordered" required />
        
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input type="text" placeholder="Deshcription" {...register("descirption")} name="number" className="input input-bordered" required />
              
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">PhotoURL</span>
              </label>a
              <input type="text" placeholder="PhotoURl" name="photoURL" {...register("photoURL")} className="input input-bordered" required />
              
            </div>
            <div className="form-control mt-6">
              <button className="btn">Update the Class</button>
            </div>
          </form>
            
        </div>
    );
};

export default MyClassteacherUpdate;