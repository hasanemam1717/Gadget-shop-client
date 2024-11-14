import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <NavLink to="/">Home</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact us</NavLink>
          </ul>
        </div>
        <h1 className="btn btn-ghost text-xl">daisyUI</h1>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal space-x-3 font-semibold text-xl px-1">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact us</NavLink>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex items-center gap-2 ">
          <NavLink to="/login" className="btn btn-outline btn-sm bg-gray-400">Log in</NavLink>
          <NavLink to="/register" className="btn btn-outline btn-sm">Register</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
