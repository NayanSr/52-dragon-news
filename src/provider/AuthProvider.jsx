import { createContext, useState } from "react";

export const AuthContext =createContext();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {

    const [user,setUser] = useState({
        name:"Nayan", email:'n@g.c'
    })

    const authInfo={
        user, setUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
                {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;