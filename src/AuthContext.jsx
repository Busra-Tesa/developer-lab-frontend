// AuthContext.jsx
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
   
  );

  const login = async (inputs) => {
    console.log(inputs);
    try {
      // "http://localhost:5005/auth/login"
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/auth/login`, inputs);
      console.log(res);
      localStorage.setItem("token", (res.data.authToken));
      const user= await axios.get(`${import.meta.env.VITE_API_URL}/auth/verify`, { headers: { Authorization: `Bearer ${res.data.authToken}`} });
      console.log(user);
      setCurrentUser(user.data);

      return res; 
    } catch (err) {
      throw err; 
    }
  };

  

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
