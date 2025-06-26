import { useState, useEffect } from "react";
import { AuthContext } from "./auth-context";

export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState(() => {
    const stored = localStorage.getItem("users");
    return stored ? JSON.parse(stored) : [];
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const register = (userData) => {
    const updatedUsers = [...users, userData];
    setUsers(updatedUsers);
  };

  const login = ({ email, password }) => {
    const foundUser = users.find(
      (u) => u.email === email && u.password === password
    );
    if (foundUser) {
      setIsLoggedIn(true);
      return true;
    } else {
      alert("Invalid credentials");
      return false;
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  const value = {
    users,
    setUsers,

    register,
    login,
    logout,
    isLoggedIn,
    loading,
    setLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
