import {  NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const UserDropdown = () => {
    const {logOut} = useAuth()
    const handleLogOut =()=>{
        return logOut()
    }
  return (
    <div>
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className=" m-1">
          <div className="avatar ">
            <div className="w-10 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
        </div>
        <div
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow flex flex-col gap-4"
        >
            
        <NavLink>Dashboard</NavLink>
        <NavLink onClick={handleLogOut} className="btn btn-primary btn-outline btn-sm">Log Out</NavLink>
         
        </div>
      </div>
    </div>
  );
};

export default UserDropdown;
