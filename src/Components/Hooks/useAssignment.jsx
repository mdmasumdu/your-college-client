import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiossecure from "./useAxiossecure";
// /${user?.email}
const useAssignment = () => {
      const {user}=useAuth();
      const axiosSecure=useAxiossecure();
    const {refetch,data:assignments=[]}=useQuery({
           queryKey:["assignment",user?.email],
           queryFn: async ()=>{
          const  res = await axiosSecure.get(`/assignments`)
               return res.data
           }
        
    })
    return [assignments,refetch]
};

export default useAssignment;