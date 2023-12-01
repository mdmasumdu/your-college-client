import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiossecure from "./useAxiossecure";


const useEnrollClasses = () => {
    const axiosSecure =useAxiossecure();
    const {user}=useAuth();


    const {refetch,data:myenrolledclasses=[]}=useQuery({

        queryKey:['myenrollled'],
        queryFn: async ()=>{
          const res = await axiosSecure.get(`/myenrolled/${user?.email}`)
            return res.data
        }
    })
    return [myenrolledclasses,refetch]
};

export default useEnrollClasses;