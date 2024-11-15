import { useContext } from "react";
import { AuthContext } from "../AuthProvidar/AuthProvidar";

const useAuth = () => {
  const auth = useContext(AuthContext);
  // console.log(auth);
  return auth;
};

export default useAuth;
