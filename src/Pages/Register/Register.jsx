import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../Components/Hooks/useAuth";
import { useForm } from "react-hook-form";
import useAxiossecure from "../../Components/Hooks/useAxiossecure";



const Register = () => {

    const {createuser,update,logout} =useAuth();
    const axiosSecure =useAxiossecure();
    
const { register, handleSubmit } = useForm();
    const navigate =useNavigate();



    const onSubmit = (data) => {
      const {name,email,password,photoURL,number}=data;

      const usersave ={
        name,
        email,
        phone:number,
        role:"user",
        image:photoURL
      }

      if(password.length < 6){
        return  Swal.fire({

          title: 'error!',
          text: 'Password length must be 6 charcters or more',
          icon: 'error',
          confirmButtonText: 'Cool'
        })
      }
  
      if( !/[A-Z]/.test(password)){
        return  Swal.fire({
          title: 'error!',
          text: 'password must have a captital letter',
          icon: 'error',
          confirmButtonText: 'Cool'
        })
      }
      createuser(email,password)
      .then(res=>{
        console.log(res.user)
        if(res.user){
        axiosSecure.post("/saveUser",usersave)
        .then(res=>console.log(res.data))

          update(name,photoURL)
          .then(()=>{})
          .catch(()=>{})
          logout()
          .then(()=>{
              Swal.fire({
                  title: 'succsess!',
                  text: 'succsesfully registerd,please login now',
                  icon: 'success',
                  confirmButtonText: 'Cool'
                })
                navigate("/login")
          })
          .catch(()=>{})
         
         
        }
      })
      .catch(err=>
        {console.error(err)
          Swal.fire({
            title: 'Error!',
            text: `${err.message}`,
            icon: 'error',
            confirmButtonText: 'quit'
          })
        })
  

    }
    // const registerhandler =(e)=>{
    //     e.preventDefault();
    //     const form =e.target;
    //     const name =form.name.value;
    //     const email =form.email.value;
    //     const password =form.password.value;
    //     const photoURL =form.photoURL.value;
    //     const number =form.number.value;
    //     console.log(name,email,password,photoURL,number)
    //     // const userinfo ={
    //     //   name,
    //     //   email
    //     // }
    
       
      // }
    return (
        <div className=" m-5 bg-slate-100">
          
        <div className="card flex-shrink-0 w-1/2 mx-auto shadow-2xl">
          <h1 className="text-center font-bold text-4xl mt-5">Register Now</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" placeholder="name" name="name"  {...register("name")}className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="email" name="email"  {...register("email")} className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="password" name="password" {...register("password")} className="input input-bordered" required />
        
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input type="number" placeholder="phone number" {...register("number")} name="number" className="input input-bordered" required />
              
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">PhotoURL</span>
              </label>
              <input type="text" placeholder="PhotoURl" name="photoURL" {...register("photoURL")} className="input input-bordered" required />
              
            </div>
            <div className="form-control mt-6">
              <button className="btn">Register</button>
            </div>
          </form>


        <div className="p-5">
          Have an Account? <Link className="text-blue-300" to="/login">Login</Link>
        </div>
        </div>
      </div>
    );
};

export default Register;