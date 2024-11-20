import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
const {createNewUser, setUser, updateUserProfile}= useContext(AuthContext);
const navigate= useNavigate()

const handleSubmit=(e)=>{
  e.preventDefault();
  const form = new FormData(e.target);
  const name= form.get("name");
  const photo= form.get("photo");
  const password= form.get("password");
  const email= form.get("email");
  // console.log({name,photo,password,email});
  createNewUser(email,password)
  .then(result=>{
    console.log(result.user);
    setUser(result.user);
    updateUserProfile({displayName:name, photoURL: photo})
  
    .then(()=>{
      navigate('/');
      console.log(result.user);
    })
    .catch(error=>{
      console.log(error);
    })
  })
  .catch(error=>{
    console.log(error.errorMessage);
  })

}

  return (
    <div className="card bg-base-100 w-full mx-auto mt-8 max-w-lg shrink-0 shadow-2xl">
      <h2 className="text-2xl text-center pt-2">Create an account</h2>
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">

          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input
            type="text"
            name='name'
            placeholder="your name"
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="text"
            name="photo"
            placeholder="photo url"
            className="input input-bordered"
            required
          />
        </div>

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
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      <p className="text-center pb-4">
        Alredy have an account ?{" "}
        <Link className="text-red-600 ml-1 " to="/auth/login">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
