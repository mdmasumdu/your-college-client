import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../Components/Hooks/useAuth";




const Register = () => {

    const {createuser,update,logout} =useAuth();
    const navigate =useNavigate();

    const registerhandler =(e)=>{
        e.preventDefault();
        const form =e.target;
        const name =form.name.value;
        const email =form.email.value;
        const password =form.password.value;
        const photoURL =form.photoURL.value;
        console.log(name,email,password,photoURL)
        // const userinfo ={
        //   name,
        //   email
        // }
    
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
    return (
        <div className=" m-5 bg-slate-100">
          
        <div className="card flex-shrink-0 w-1/2 mx-auto shadow-2xl">
          <h1 className="text-center font-bold text-4xl mt-5">Register Now</h1>
          <form onSubmit={registerhandler} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" placeholder="name" name="name" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="email" name="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="password" name="password" className="input input-bordered" required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">PhotoURL</span>
              </label>
              <input type="text" placeholder="PhotoURl" name="photoURL" className="input input-bordered" required />
              
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