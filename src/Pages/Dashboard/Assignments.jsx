import { useParams } from "react-router-dom";
import useAssignment from "../../Components/Hooks/useAssignment";


const Assignments = () => {

    const [assignments]=useAssignment();

    const {id}=useParams();
  const assignmentforthisClass =assignments.filter(assignment=>assignment.classid == id)
  console.log(assignmentforthisClass)
    return (
        <div>
            
            <div className="flex justify-center mt-10">
                <button className="btn bg-orange-400">Teacher Evaluation Report</button>
            </div>
            <h1 className="text-center font-bold text-4xl mt-10 text-orange-400">Assignment for the class</h1>

            <section>
            <div className="overflow-x-auto">
<table className="table">
{/* head */}
<thead>


  <tr>
    <th>Serial</th>
    <th>Title</th>
    <th>Descritption</th>
    <th>Deadline</th>
    <th>Submit</th>
  
  </tr>
</thead>
<tbody>


   {
    assignmentforthisClass.map((assignmenta,idx)=>   <tr key={assignmenta?._id} className="bg-base-200">
    <th>{idx+1}</th>
    <td>{assignmenta?.title}</td>
    <td>{assignmenta?.description}</td>
    <td>{assignmenta?.deadline}</td>
    <td><button className="btn bg-orange-400">Submit</button></td>
  
  </tr>)
   }
 
</tbody>
</table>
</div>
            </section>
            
        </div>
    );
};

export default Assignments;