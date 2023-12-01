import { useForm } from "react-hook-form"
import useAuth from "../../Components/Hooks/useAuth";
import useAxiossecure from "../../Components/Hooks/useAxiossecure";
import Swal from "sweetalert2";

const Techon = () => {

    const { register, handleSubmit } = useForm();
    const {user}=useAuth();
    const axiosSecure=useAxiossecure();
    const onSubmit = (data) => {
       const {name,title,experience,category}=data;
       const teacherinfo ={
        name,
        title,
        experience,
        category,
        image:user?.photoURL,
        email:user?.email,
        stattus:"pending"
       }


       axiosSecure.post('/teacherRequest',teacherinfo)
       .then(res=>{
        console.log(res.data)
        if(res.data.insertedId){
            Swal.fire({
                title: 'success',
                text: `succesfully posted for review`,
                icon: 'success',
                confirmButtonText: 'quit'
              })
        }
       })

       
    }
    return (
        <div className="m-5">
            <h1 className="text-center font-bold text-3xl mt-5 text-orange-400">Teach on Your College</h1>


            <div className="card flex-shrink-0 w-1/2 mx-auto shadow-2xl">
          
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" {...register("name")} placeholder="name" name="name" className="input input-bordered" required />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input type="text" {...register("title")} placeholder="Title"  className="input input-bordered" required />
            </div>

                <select className="select select-primary w-full" {...register("experience")}>
                <option disabled selected>Expericence Level</option>
                <option>Beginer</option>
                <option>Intermediate</option>
                <option>Expert</option>

              
                </select>
                <select className="select select-primary w-full" {...register("category")}>
                <option disabled selected>Select A Category</option>
                <option>Wev Development</option>
                <option>Ethical Hacking</option>
                <option>Data Science</option>
                <option>Artificial Intiligence</option>
                <option>Machine Learning</option>
                </select>

                <button className="btn bg-orange-400">Submit For Review</button>

          </form>
        </div>
        </div>
    );
};

export default Techon;