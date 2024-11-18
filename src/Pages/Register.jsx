/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { useForm } from "react-hook-form";
import axios from "axios";

const Register = () => {
  const { createUser } = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    const role = data.role;
    const status = role === "buyer" ? "approved" : "pending";
    const wishList = [];
    const userData = { email, role, status, wishList };
    createUser(email,password ).then(() => {
      console.log(data);
      axios.post("http://localhost:5000/userData", userData).then((response) => {
        console.log("Response", response);
      });
    });
    navigate("/login");
    console.log(userData);
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
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
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <p className="text-red-400 font-thin ">Email is required</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", { required: true })}
                />
                {errors?.password?.type === "required" && (
                  <p className="text-red-400 font-thin ">
                    Password is required
                  </p>
                )}
                {errors?.password?.type === "minLength" && (
                  <p className="text-red-400 font-thin ">
                    Password must have 6 charetar
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("conPass", {
                    required: true,
                    validate: (value) => {
                      if (watch("password") != value) {
                        return "Your password do't match";
                      }
                    },
                  })}
                />
                {errors.conPass && (
                  <p className="font-thin text-red-400 ">
                    {" "}
                    Your password was miss match.{" "}
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Role</span>
                </label>
                <select
                  className="select select-bordered w-full max-w-xs"
                  {...register("role", { required: true })}
                >
                  <option value="buyer">Buyer</option>
                  <option value="seller">Seller</option>
                </select>
                {errors.role && (
                  <p className="text-red-400 font-thin text-sm ">
                    You must select your role
                  </p>
                )}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <p className="my-2 text-sm font-thin">
                All ready have an account{" "}
                <Link type="submit" to="/login" className="text-primary">
                  Log in
                </Link>{" "}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
