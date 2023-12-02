import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import useAxiossecure from "../../../Components/Hooks/useAxiossecure";
import Swal from "sweetalert2";
import useAssignment from "../../../Components/Hooks/useAssignment";
import { useQuery } from "@tanstack/react-query";


const Seedetails = () => {

    const classa=useLoaderData();
    const axiosSecure =useAxiossecure();
    const [assignments,refetch] =useAssignment();
    const assignmentforthisClass =assignments.filter(assignment=>assignment.classid == classa._id);
 const {data:submitted=[]}=useQuery({
  queryKey:['assdfasdfsdaf'],
  queryFn:async ()=>{
    const res =await axiosSecure.get(`/submitted/${classa._id}`)
    return res.data
  }
 })
 let today = new Date().toISOString().split('T')[0];
 let filteredDates = submitted.filter(date => date.date.split('T')[0] == today);
//  console.log(today,submitted,classa._id)
 console.log(filteredDates)

    const { register, handleSubmit } = useForm();
  

       console.log(classa._id)

    const onSubmit = (data) =>{
        const {title,deadline,description}=data;
        const assinfo={
            title,
            email:classa.email,
            deadline,
            description,
            classid: classa._id,
            submittedCount:0,
            submitstatus:'pending',
            classtitle:classa.Title
        }
     
        axiosSecure.post("/assignment",assinfo)
        .then(res=>{
            if(res.data.insertedId){
               refetch();
                Swal.fire({
                    title: 'succsess!',
                    text: 'succsesfully added the assignment',
                    icon: 'success',
                    confirmButtonText: 'Cool'
            
                  })
            }
        })
      

    }
    return (
        <div>
            <div className="bg-slate-200 p-2 w-96 mx-auto mt-10 mb-10">
            <h1 className="text-center font-bold text-3xl text-orange-400  p-1">Class Progress</h1>
            </div>

            {/* class progress section */}
            <section className="flex justify-center">
            <div className="stats shadow">
  
  <div className="stat place-items-center">
    <div className="stat-title">Total Enrollment</div>
    <div className="stat-value">{classa.total_enrolment}</div>
    <div className="stat-desc">Total {classa.total_enrolment} student have enrolled this class</div>
  </div>
  
  <div className="stat place-items-center">
    <div className="stat-title">Total Assignment</div>
    <div className="stat-value text-secondary">{assignmentforthisClass.length}</div>
    <div className="stat-desc text-secondary">total {assignmentforthisClass.length} assignment</div>
  </div>
  
  <div className="stat place-items-center">
    <div className="stat-title">Per day assignment submitted for this class</div>
    <div className="stat-value">{filteredDates.length}</div>
    <div className="stat-desc">↘︎ (14%)</div>
  </div>
  
</div>

            </section>


       

       {/* class assignment */}

       <div className="bg-slate-200 p-2 w-96 mx-auto mt-10 mb-10">
            <h1 className="text-center font-bold text-3xl text-orange-400  p-1">Class assignment</h1>
            </div>


            <section>

                
<button className="btn bg-orange-500 m-6" onClick={()=>document.getElementById('my_modal_1').showModal()}>Create Assignmnet</button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Create Assignment</h3>
    <p className="py-4">Press ESC key or click the button below to close</p>

    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
    <div className="form-control">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input type="text" placeholder="title" {...register("title")}  className="input input-bordered" required />
        </div>
    <div className="form-control">
          <label className="label">
            <span className="label-text">Deadline</span>
          </label>
          <input type="date" placeholder="deadline" {...register("deadline")}  className="input input-bordered" required />
        </div>
    <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input type="text" placeholder="description" {...register("description")}  className="input input-bordered" required />
        </div>
        <button className="btn mt-5" onClick={()=>document.getElementById('my_modal_1').closeModal()}>Create</button>
      </form>
  </div>
</dialog>
            </section>
            
        </div>
    );
};

export default Seedetails;