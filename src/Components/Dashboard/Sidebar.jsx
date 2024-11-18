import { BiLogOut } from "react-icons/bi";
import { GrOverview } from "react-icons/gr";
import { IoAddCircleOutline, IoHomeOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import useUserData from "../../Hooks/useUserData";
import { RiProductHuntLine } from "react-icons/ri";
import useAuth from "../../Hooks/useAuth";

const sellerRoutes = [
  {
    id: 1,
    path: "/dashboard/myProduct",
    icon: <RiProductHuntLine />,
  },
  {
    id: 2,
    path: "/dashboard/addProduct",
    icon: <IoAddCircleOutline />,
  },
];

const Sidebar = () => {
  const data = useUserData();
  //   console.log("sidebar user data", data);
  const { logOut } = useAuth();
  return (
    <div className="bg-gray-200 border-r-black py-10 px-6  min-h-screen">
      <div className="text-3xl font-bold ">Gadget shop</div>
      <div className="flex flex-col gap-3 mt-2">
        <NavLink
          className="flex gap-2 flex-row items-center border-2 border-black rounded-md p-2"
          to="/dashboard/overview"
        >
          <GrOverview />
          Overview{" "}
        </NavLink>
        {data.role === "seller" &&
          sellerRoutes.map((route) => {
            <NavLink
              key={route.id}
              className="flex gap-2 flex-row items-center border-2 border-black rounded-md p-2"
              to={route.path}
            >
              <IoHomeOutline /> Home
            </NavLink>;
          })}
        <NavLink
          className="flex gap-2 flex-row items-center border-2 border-black rounded-md p-2"
          to="/"
        >
          <IoHomeOutline /> Home
        </NavLink>
        <NavLink onClick={()=>logOut()} className="flex gap-2 flex-row items-center border-2 border-black rounded-md p-2">
          <BiLogOut />
          Log out
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
