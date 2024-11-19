import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
const {logInUser, setUser}= useContext(AuthContext);
const location= useLocation();
const navigate= useNavigate();

  const handleLoginSubmit =(e)=>{
e.preventDefault();
const email= e.target.email.value;
const password= e.target.password.value;
console.log(email,password);
logInUser(email,password)
.then(result=>{
  setUser(result.user);
navigate(location?.state ? location.state : '/')
  // console.log(result.user);
})
.catch(error=>{
  console.log(error.message);
})

  }


  return (
    <div className="card bg-base-100 w-full mx-auto mt-8 max-w-lg shrink-0 shadow-2xl">
        <h2 className="text-2xl text-center pt-2">Login Your Account</h2>
      <form onSubmit={handleLoginSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name='email'
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name='password'
            placeholder="password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className="text-center pb-4">New User ? <Link className="text-red-600 ml-1 " to='/auth/register'>Register</Link></p>
    </div>
  );
};

export default Login;
