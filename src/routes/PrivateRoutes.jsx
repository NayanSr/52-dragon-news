import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrivateRoutes = ({children}) => {
const{user, isLoading}= useContext(AuthContext);
const location =useLocation();

    if(isLoading){
       return <h2 className="text-4xl text-white bg-green-600 p-8 w-1/2 mx-auto text-center mt-12">LOADING........</h2>
    }

    if(user && user?.email){
        return children
    }
    else{
        return <Navigate state={location.pathname} to='/auth/login'></Navigate>
    }
};

export default PrivateRoutes;