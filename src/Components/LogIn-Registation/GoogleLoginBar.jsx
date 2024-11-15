import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { FcGoogle } from "react-icons/fc";


const GoogleLoginBar = () => {
    const { GoogleLogIn } = useAuth();
    const navigate = useNavigate();
    const handleGoogleLogIn = () => {
      GoogleLogIn().then(()=>{
        navigate("/");
      })
        
    };
    return (
      <div>
        <div className="divider">or</div>
        <div className="flex btn btn-outline" onClick={handleGoogleLogIn} >
          <FcGoogle className="mx-auto w-16" />
        </div>
      </div>
    );
};

export default GoogleLoginBar;
