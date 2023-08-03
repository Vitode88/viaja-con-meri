import { useEffect } from "react";
import { useState, createContext, useContext } from "react";

const useAuthHook = () => {
  const [authed, setAuthed] = useState(false);

  const authorised = localStorage.getItem("authed");

  useEffect(() => {
    if (authorised) {
      setAuthed(true);
    }
  }, [authorised]);

  return { authed, setAuthed };
};

/* ---------------------------------------------------- */

const AuthContext = createContext(null);

const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const authHook = useAuthHook();

  return (
    <AuthContext.Provider value={authHook}>{children}</AuthContext.Provider>
  );
};

export default useAuth;
