/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {  signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
import useAxiossecure from "../Hooks/useAxiossecure";
import { auth } from "./Firebase/Firebase.config.jsx";



export const AuthContext =createContext();

const AuthProvider = ({children}) => {

    const [user,setUser] =useState(null);
    const [loading,setLoading] =useState(true)
    const googleprovider = new GoogleAuthProvider();
    const axiosSecure =useAxiossecure();

// create user/registration
const createuser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)

}

// updateprofile when user register
const update =(name,photo)=>{
    return updateProfile(auth.currentUser,{

        displayName:name, photoURL:photo
    })
}

// loggout 

const logout=()=>{
    return signOut(auth)
}
// signin with email and password/login

const signin =(email,password)=>{
    setLoading(true)
   return signInWithEmailAndPassword(auth,email,password)
}


// state observer
useEffect(()=>{

    const unsubscribe= onAuthStateChanged(auth,currentuser=>{
        setUser(currentuser)
        setLoading(false)

        const   loggeduser ={email:currentuser?.email}
        if(currentuser){
            axiosSecure.post("/jwt",loggeduser,{
                withCredentials:true
            })
            .then(res=>console.log(res.data))
        }
        
        else{
            axiosSecure.post("/logout",loggeduser,{
                withCredentials:true
            })
            .then(res=>console.log(res.data))
        }

    })

    return ()=>{
        unsubscribe();
    }
},[axiosSecure])



console.log(user)




// login with google
    const logingoogle =()=>{
      return  signInWithPopup(auth,googleprovider)
        
    }

    const authinfo ={
        user,
        loading,
        logingoogle,
        createuser,
        signin,
        update,
        logout

    }


    
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;