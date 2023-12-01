import { NavLink, Outlet } from "react-router-dom";
import { FaHome,FaUsers } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoSchoolOutline,IoGitPullRequest } from "react-icons/io5";


const Dashboard = () => {
    return (
        <div className="flex">

            <div className="bg-orange-400 w-[300px] min-h-screen">
                <ul className="menu font-bold">
                <li><NavLink to="/"><IoSchoolOutline></IoSchoolOutline>MY Classes</NavLink></li>

                <li><NavLink to="/dashboard/profile"><CgProfile></CgProfile>Profile</NavLink></li>
                <li><NavLink to="/dashboard/teacherreq"><IoGitPullRequest></IoGitPullRequest>Teacher Request</NavLink></li>
                <li><NavLink to="/dashboard/users"><FaUsers></FaUsers>Users</NavLink></li>
                <li><NavLink to="/dashboard/allclasses"><IoSchoolOutline></IoSchoolOutline>ALL Classes</NavLink></li>
                <li><NavLink to="/dashboard/addclass"><IoSchoolOutline></IoSchoolOutline>Add Class</NavLink></li>
                <li><NavLink to="/dashboard/myclassesteacher"><IoSchoolOutline></IoSchoolOutline>My classes for teacher</NavLink></li>

                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome>Home</NavLink></li>

                </ul>

            </div>

            <div className="w-full">
                <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default Dashboard;