import { useQuery } from "@tanstack/react-query";
import useAxiossecure from "./useAxiossecure";


const useUsers = (email) => {
         const axiosSecure =useAxiossecure();
    const {refetch,data: users=[]}=useQuery({
        queryKey:['users'],
        queryFn: async ()=>{
            const res = await axiosSecure.get(`/users?email=${email}`)
            return res.data
        }
    })
    return [users,refetch]
};

export default useUsers;