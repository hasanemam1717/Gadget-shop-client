import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import GoogleLoginBar from "../Components/LogIn-Registation/GoogleLoginBar";

const Login = () => {
  const {logIn} = useAuth()
  const { register, handleSubmit ,formState:{errors}} = useForm();
  const navigate = useNavigate()
  const onSubmit =(data)=>{
    logIn(data.email,data.password)
    navigate('/')
  }
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register ("email",{required:true})}
                />
                {errors.email && (<p className="text-red-400 font-thin ">Email is required</p>)}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register ("password",{required:true})}
                />
                  {errors?.password?.type === "required" && (<p className="text-red-400 font-thin ">Password is required</p>)}
                  {errors?.password?.type === "minLength" && (<p className="text-red-400 font-thin ">Password must have 6 charetar</p>)}
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">Login</button>
              </div>
              <p className="my-2 text-sm font-thin">You have not an account <Link to="/register" className="text-primary">Register</Link> </p>
              <GoogleLoginBar></GoogleLoginBar>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
