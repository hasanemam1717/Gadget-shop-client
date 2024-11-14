import {  createContext, useEffect, useState } from "react";
import app from "./../Firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/web-extension";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvidar = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(null);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    return signOut(auth);
  };
  const googleLogIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unsubscrib = onAuthStateChanged(auth, (carentUser) =>
      setUser(carentUser),
        setLoading(false)
    );
    return () => {
      return unsubscrib;
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    logIn,
    logOut,
    googleLogIn,
  };
  return <AuthContext.Provider value={authInfo}>
    {
        children
    }
  </AuthContext.Provider>
};

export default AuthProvidar;
