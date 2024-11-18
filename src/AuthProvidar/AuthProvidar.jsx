import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import app from "./../Firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const GoogleLogIn = () => {
    setLoading(true);
    signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("CurrentUser", currentUser);
      if (currentUser) {
        axios
          .post("http://localhost:5000/authentication", {
            email: currentUser?.email,
          })
          .then((response) => {
            const token = response.data.token;
            console.log("Token",token);
            if (token) {
              localStorage.setItem("access-token", token);
            }
          })
          .catch((error) => {
            console.error("Error fetching token:", error.message);
          });
        // .finally(() => {
        //   setLoading(false);
        // });
      } else {
        localStorage.removeItem("access-token");
        setLoading(false);
      }
    });

    return unsubscribe; // Clean up the subscription
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    logIn,
    logOut,
    GoogleLogIn,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

// Add PropTypes validation for the `children` prop
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
