import { createContext, useContext } from "react";

export const AuthProduct = createContext({
  productList: [],
  addProduct: () => {},
  updateProduct: () => {},
});

export const useProduct = () => useContext(AuthProduct);
