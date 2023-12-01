import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Mainlayout/Mainlayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Classes from "../Pages/Classes/Classes";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AllClasses from "../Pages/Dashboard/AllClasses/AllClasses";
import Techon from "../Pages/Techon/Techon";
import TeacherReq from "../Pages/Dashboard/TeacherReq/TeacherReq";
import Users from "../Pages/Dashboard/Users/Users";
import AddClass from "../Pages/Dashboard/AddClass/AddClass";
import Profile from "../Pages/Dashboard/Profile/Profile";
import Myclassteacher from "../Pages/Dashboard/MyClassteacher/Myclassteacher";
import Private from "../Components/Pivate/Private";
import MyClassteacherUpdate from "../Pages/Dashboard/MyClassteacher/MyClassteacherUpdate";
import Seedetails from "../Pages/Dashboard/MyClassteacher/Seedetails";
import ClaassDetails from "../Pages/Classes/ClaassDetails";
import Payment from "../Pages/Classes/Payment/Payment";
import MyenrolledClass from "../Pages/Dashboard/MyenrolledClass";
import Assignments from "../Pages/Dashboard/Assignments";

const mycreatedroute =createBrowserRouter([
    {
        path:"/",
        element:<Mainlayout></Mainlayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            },
            {
                path:"/classes",
                element:<Classes></Classes>
            },
            {
                path:"/techon",
                element:<Techon></Techon>
            },
            {
                path:"/classdetail/:id",
                loader:({params})=>fetch(`http://localhost:5000/classes/${params.id}`),
                element:<ClaassDetails></ClaassDetails>
            },
            {
                path:"/payment/:id",
                loader:({params})=>fetch(`http://localhost:5000/classes/${params.id}`),
                element:<Payment></Payment>
            }
        ]
    },
    {
        path:"/Dashboard",
        element:<Private><Dashboard></Dashboard></Private>,
        children:[
            {
                path:"allclasses",
                element:<AllClasses></AllClasses>
            },
            {
                path:"teacherreq",
                element:<TeacherReq></TeacherReq>
            },
            {
                path:"users",
                element:<Users></Users>

            },
            {
                path:"addclass",
                element:<AddClass></AddClass>
            },
            {
                path:"profile",
                element:<Profile></Profile>

            },
            {
                path:"myclassesteacher",
                element:<Myclassteacher></Myclassteacher>
            },
            {
                path:"myclassesteacherupdate/:id",
                loader:({params})=>fetch(`http://localhost:5000/classes/${params.id}`),
                element:<MyClassteacherUpdate></MyClassteacherUpdate>
            },
            {
                path:"seedetails/:id",
                loader:({params})=>fetch(`http://localhost:5000/classes/${params.id}`),
                element:<Seedetails></Seedetails>
            },
            {
                path:"myenrolledclass",
                element:<MyenrolledClass></MyenrolledClass>
            },
            {
                path:"assignments/:id",
                element:<Assignments></Assignments>
            }
        ]
    }
])

export default mycreatedroute;