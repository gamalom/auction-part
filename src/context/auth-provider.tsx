import { useState, useEffect } from "react";
import { AuthContext } from "./auth-context";

export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState(() => {
    const stored = localStorage.getItem("users");
    return stored ? JSON.parse(stored) : [];
  });
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const register = (userData) => {
    setUsers((prevUsers) => {
      const updatedUsers = [...prevUsers, userData];
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      return updatedUsers;
    });
  };

  const login = ({ email, password }) => {
    const stored = localStorage.getItem("users");
    const usersFromStorage = stored ? JSON.parse(stored) : [];
    console.log("Trying to login with:", email, password);
    console.log("Users in localStorage:", usersFromStorage);
    const foundUser = usersFromStorage.find(
      (u) => u.email === email && u.password === password
    );
    if (foundUser) {
      setCurrentUser(foundUser);
      setIsLoggedIn(true);
      console.log("Login successful");
      return true;
    } else {
      console.log("Login failed: Invalid credentials");
      alert("Invalid credentials");
      return false;
    }
  };

  const logout = () => {
    setCurrentUser(null);
    setIsLoggedIn(false);
  };

  const value = {
    users,
    setUsers,
    currentUser,
    setCurrentUser,
    register,
    isLoggedIn,
    setIsLoggedIn,
    loading,
    setLoading,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
