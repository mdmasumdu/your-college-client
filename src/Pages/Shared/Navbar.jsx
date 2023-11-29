import { NavLink } from "react-router-dom";
import useAuth from "../../Components/Hooks/useAuth";


const Navbar = () => {
    const {user,logout}=useAuth();

    const links =<>
   <NavLink to="/">Home</NavLink>
   <NavLink to="/">All Classes</NavLink>
   <NavLink to="/">Tech-on-Your-COllege</NavLink>

   {
    user ? "":<><NavLink to="/login">Sign In</NavLink>
    <NavLink to="/register">Register</NavLink></>
   }
   
    </>


const logouthandler=()=>{
    logout()
    .then(()=>{})
    .catch(()=>{})
    
}
    return (
        <div>
            <div className="navbar bg-slate-100 shadow-2xl">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-bold text-xl gap-5">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
  <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-bold">
        <h1>{user?.displayName}</h1>
       <NavLink>Dashboard</NavLink>
       {
        user ? <NavLink onClick={logouthandler}>Logout</NavLink>: ""
       }
      </ul>
    </div>

  </div>
</div>
            
        </div>
    );
};

export default Navbar;