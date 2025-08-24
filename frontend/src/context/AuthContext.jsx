import { createContext, useState, useEffect } from "react";
import axios from "../api/axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Optionally, check for existing session
    // axios.get('/auth/me').then(res => setUser(res.data)).catch(() => setUser(null));
  }, []);

  const login = async (email, password) => {
    const res = await axios.post("/login", { email, password });
    setUser(res.data.user);
    return res.data;
  };

  const register = async (data) => {
    const res = await axios.post("/register", data);
    setUser(res.data.user);
    return res.data;
  };

  const logout = async () => {
    await axios.post("/logout");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
