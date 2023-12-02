import useClasses from "../../../Components/Hooks/useClasses";
import useUsers from "../../../Components/Hooks/useUsers";
import Sectiontitle from "../../../Components/Sectiontitle/Sectiontitle";
import img from "../../../assets/skills-intelligence-job-occupation-recruitment-concept.jpg"

const Statistics = () => {
  const [users] =useUsers('c');
  const [classes]=useClasses();
  const total_enrollment =classes.reduce((total,item)=>{
     return total + parseInt(item.total_enrolment)
  },0)
    return (
        <div>

            <Sectiontitle heading={"----Glimpse of Our Achievements----"}></Sectiontitle>

            <div className="flex">
              <div className="flex justify-center items-center">
                                 
<div className="stats shadow">
  
  <div className="stat">
    <div className="stat-figure text-primary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
    </div>
    <div className="stat-title">Total Users</div>
    <div className="stat-value text-primary">{users.length}</div>
   
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    </div>
    <div className="stat-title">Total Classes</div>
    <div className="stat-value text-secondary">{classes.length}</div>
   
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <div className="avatar online">
        <div className="w-16 rounded-full">
          <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
    </div>
    <div className="stat-value">{total_enrollment}</div>
    <div className="stat-title">Total Enrollment</div>
  
  </div>
  
</div>
              </div>

              <div className="flex-1">

                <img src={img} alt="" />

              </div>
                
            </div>

        </div>
    );
};

export default Statistics;