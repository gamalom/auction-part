import { createContext, useContext } from "react";

export const AuthContext = createContext({
  user: null,
  setUser: () => {},
  currentUser: null,
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  loading: false,
  setLoading: () => {},
  login: () => {},
  logout: () => {},
  register: () => {},
});

export const useAuth = () => useContext(AuthContext);
