import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);


  // this useEffect saved my code
  useEffect(() => {
    
    const userData = localStorage.getItem("currentUser");
    if (userData) {
      setCurrentUser(JSON.parse(userData));
    }
  }, []);

  const login = async (inputs) => {
    console.log(inputs);
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/auth/login`, inputs);
      console.log(res);
      localStorage.setItem("token", res.data.authToken);
      const user = await axios.get(`${import.meta.env.VITE_API_URL}/auth/verify`, { headers: { Authorization: `Bearer ${res.data.authToken}` } });
      console.log("User data", user.data);
      setCurrentUser(user.data);
      localStorage.setItem("currentUser", JSON.stringify(user.data)); 
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
