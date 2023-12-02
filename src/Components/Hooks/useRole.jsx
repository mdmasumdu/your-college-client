import { useQuery } from "@tanstack/react-query";
import useAxiossecure from "./useAxiossecure";
import useAuth from "./useAuth";


const useRole = () => {
    const axiosSecure =useAxiossecure();
    const {user} =useAuth();
    const {refetch,data: userRole=[]}=useQuery({
        queryKey:['users',user?.displayName],
        queryFn: async ()=>{
            const res = await axiosSecure.get(`/users/${user?.email}`)
            return res.data
        }
    })
    return [userRole,refetch]
};

export default useRole;