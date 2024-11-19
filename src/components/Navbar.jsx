import { Link } from "react-router-dom";
import userProfilePhoto from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);

  return (
    <div className="flex justify-between items-center">
      <div>{user && user.email}</div>
      <div className="nav space-x-4">
        <Link to="/">Home</Link>
        <Link to="/career">Carrer</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="flex items-center gap-4">
        <img src={userProfilePhoto} alt="" />
        {user && user?.email ? (
          <button  onClick={logOutUser} className="bg-gray-700 py-2 px-4 rounded-xl text-green-500 text-lg">Log Out</button>
        ) : (
          <Link
            to="/auth/login"
            className="bg-gray-700 py-2 px-4 rounded-xl text-green-500 text-lg"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
