import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const AuthLayout = () => {
  return (
    <div className="w-11/12 mx-auto bg-orange-50 p-4 font-poppins">
      <header className="py-2">
        <Navbar></Navbar>
      </header>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
