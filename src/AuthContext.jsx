// AuthContext.jsx
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async (inputs) => {
    try {
      // "http://localhost:5005/auth/login"
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/auth/login`, inputs);
      setCurrentUser(res.data);
      return res; 
    } catch (err) {
      throw err; 
    }
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
