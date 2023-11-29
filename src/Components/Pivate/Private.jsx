/* eslint-disable react/prop-types */

import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";


const Private = ({children}) => {
    const location =useLocation();

    const {user,loading}=useAuth();
    if(loading){
        return <div className="flex justify-center"><span className="loading loading-spinner text-success w-96"></span></div>
    }

    if(user?.email){
        return children;

    }


 return <Navigate state={location.pathname}  to="/login"></Navigate>
};

export default Private;