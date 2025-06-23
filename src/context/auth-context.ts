import { createContext, useContext } from "react";

export const AuthContext = createContext({
  user: null,
  setUser: () => {},
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  loading: false,
  setLoading: () => {},
  login: () => {},
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);
