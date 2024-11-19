/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Loading from "../Pages/Loading";
import useUserData from "../Hooks/useUserData";


const SellerRoute = ({children}) => {
    const { user, loading } = useAuth();
    console.log(user);
    const data = useUserData()
  const location = useLocation();
  if (!user && loading) {
    return <Loading></Loading>;
  }
  if (user && data.role === "seller" ) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default SellerRoute;