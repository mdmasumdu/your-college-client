import { useQuery } from "@tanstack/react-query";
import useAxiossecure from "./useAxiossecure";


const useClasses = () => {
    const axiosSecure =useAxiossecure();

const {refetch,data:classes=[]}=useQuery({
    queryKey:["classes"],
    queryFn: async ()=>{
      const  res = await axiosSecure.get("/classes")
        return res.data
    }
})

    return [classes,refetch]
};

export default useClasses;