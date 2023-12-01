import { useQuery } from "@tanstack/react-query";
import useAxiossecure from "./useAxiossecure";
import useAuth from "./useAuth";

const useMyClasstecher = () => {
    const axiosSecure =useAxiossecure();
    const {user}=useAuth();

    const {refetch,data:myclassesteacher=[]}=useQuery({
        queryKey:['myclassesstecher'],
        queryFn: async ()=>{
          const res = await axiosSecure.get(`/myclassesteacher/${user?.email}`)
            return res.data
        }
    })
    return [myclassesteacher,refetch]
};

export default useMyClasstecher;