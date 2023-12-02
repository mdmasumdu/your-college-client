import axios from "axios";
import { signOut } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../Provider/Firebase/Firebase.config";
// import { useNavigate } from "react-router-dom";


const axiosSecure = axios.create({
   baseURL:"http://localhost:5000"
})
const useAxiossecure = () => {
//    const navigate =useNavigate();
  
    
    useEffect(()=>{
        axiosSecure.interceptors.response.use(res=>{
            return res;
        },err=>{
            console.log(err.response.status)
            if(err.response.status == 401 ||err.response.status == 403){
                signOut(auth)
                .then(()=>{

                    // navigate('/login')
                })
                .catch(()=>{})
            }
        })
    },[])
 return axiosSecure;
};

export default useAxiossecure;