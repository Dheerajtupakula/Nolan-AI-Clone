import React, { createContext, useState } from "react";

export const AuthContext = createContext();
export const AuthContextOut = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );
  const LogOut = () => {
    setIsLoggedIn(!isLoggedIn);
    localStorage.setItem("isLoggedIn", !isLoggedIn);
  };
  return (
    <AuthContext.Provider value={isLoggedIn}>
      <AuthContextOut.Provider value={LogOut}>
        {children}
      </AuthContextOut.Provider>
    </AuthContext.Provider>
  );
};
