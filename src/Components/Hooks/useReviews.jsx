import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiossecure from "./useAxiossecure";


const useReviews = () => {

    const axiosSecure =useAxiossecure();
    const {user}=useAuth();

    const {refetch,data:reviews=[]}=useQuery({
        queryKey:['reviews',user?.email],
        queryFn: async ()=>{
          const res = await axiosSecure.get(`/reviews`)
            return res.data
        }
    })
    return [reviews,refetch]
};

export default useReviews;