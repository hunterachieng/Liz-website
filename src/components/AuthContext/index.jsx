// src/AuthContext.js
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext({
    currentUser:null,
    setCurrentUser:()=>{}
});

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false);



  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
