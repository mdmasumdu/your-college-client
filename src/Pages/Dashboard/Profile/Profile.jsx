import useAuth from "../../../Components/Hooks/useAuth";
import useUsers from "../../../Components/Hooks/useUsers";


const Profile = () => {
     
    const {user}=useAuth();
    const [users]=useUsers("c");
    console.log(users)

    const currentuser =users.find(usera=>usera.email == user?.email)
    console.log(currentuser)
    return (
        <div className="flex flex-col justify-center items-center  bg-slate-100 min-h-screen">
            <h1 className="text-center font-bold text-3xl text-orange-500 mb-32">Welcome, Mr {currentuser?.name}</h1>

            <div>
            <div className="avatar">
                <div className="w-40 ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={currentuser?.image} />
                </div>
            </div>
           
            </div>
            <h1><span className="font-bold">Name:</span> {currentuser?.name}</h1>
            <h1> <span className="font-bold">Email:</span>{currentuser?.email}</h1>
            <h1><span className="font-bold">Role:</span>:{currentuser?.role}</h1>
            <h1>{currentuser?.phone}</h1>
        </div>
    );
};

export default Profile;