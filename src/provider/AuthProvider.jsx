import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContext =createContext();

const auth = getAuth(app);
// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    console.log(user);

    const createNewUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const logInUser =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOutUser =()=>{
        return signOut(auth)
    }

    const authInfo={
        user, setUser, createNewUser, logInUser, logOutUser
    }

    // Obsurver
    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth,(currentUser)=>{setUser(currentUser)});
        return ()=>{unsubscribe}
    },[])

    return (
        <AuthContext.Provider value={authInfo}>
                {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;