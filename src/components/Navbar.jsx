import { Link } from "react-router-dom";
import user from '../assets/user.png'

const Navbar = () => {
    return (
        <div className="flex justify-between items-center">
            <div></div>
            <div className="nav space-x-4">
                <Link to='/'>Home</Link>
                <Link to='/career'>Carrer</Link>
                <Link to='/about'>About</Link>
            </div>
            <div className="flex items-center gap-4">
                <img src={user} alt="" />
                <button className="bg-gray-700 py-2 px-4 rounded-xl text-green-500 text-lg">Login</button>
            </div>
        </div>
    );
};

export default Navbar;