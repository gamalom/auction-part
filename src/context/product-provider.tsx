import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { AuthProduct } from "./product-context";

export const ProductProvider = ({ children }) => {
  const [productList, setProductList] = useState([
    {
      id: uuidv4(),
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus vel ipsam iure, sequi, tenetur obcaecati adipisci nihil consectetur mollitia molestias, architecto doloremque. Delectus hic reiciendis ipsa amet obcaecati est distinctio!",
      publishBy: "Sunil Gamal",
      price: "1000",
      badge: "sold",
      categories: "electronics",
    },
    {
      id: uuidv4(),
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus vel ipsam iure, sequi, tenetur obcaecati adipisci nihil consectetur mollitia molestias, architecto doloremque. Delectus hic reiciendis ipsa amet obcaecati est distinctio!",
      publishBy: "Sunil Gamal",
      price: "1000",
      categories: "fashion",
      badge: "sold",
    },
  ]);
  const [search, setSearch] = useState("");

  const addProduct = (newProduct) => {
    setProductList((prev) => [...prev, newProduct]);
    console.log("Adding new product:", newProduct);
  };

  const updateProduct = (id, updatedData) => {
    setProductList((prev) =>
      prev.map((product) =>
        product.id === id ? { ...product, ...updatedData } : product
      )
    );
  };

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem("productList"));
    if (Array.isArray(products) && products.length > 0) {
      setProductList(products);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("productList", JSON.stringify(productList));
  }, [productList]);

  const value = {
    productList,
    addProduct,
    updateProduct,
    search,
    setSearch,
  };

  return <AuthProduct.Provider value={value}>{children}</AuthProduct.Provider>;
};
