import { createContext, useContext, useState } from "react";

const AuthProduct = createContext();

export const ProductProvider = ({ children }) => {
  const [productList, setProductList] = useState([
    {
      id: 1,
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus vel ipsam iure, sequi, tenetur obcaecati adipisci nihil consectetur mollitia molestias, architecto doloremque. Delectus hic reiciendis ipsa amet obcaecati est distinctio!",
      endTime: "10:00pm",
      startTime: "10:00am",
      isComplete: false,
    },
  ]);

  const addProduct = (newProduct) => {
    setProductList((prev) => [...prev, newProduct]);
  };

  const updateProduct = (id, updatedData) => {
    setProductList((prev) =>
      prev.map((product) =>
        product.id === id ? { ...product, ...updatedData } : product
      )
    );
  };

  const value = {
    productList,
    addProduct,
    updateProduct,
  };

  return <AuthProduct.Provider value={value}>{children}</AuthProduct.Provider>;
};

export const useProduct = () => useContext(AuthProduct);
