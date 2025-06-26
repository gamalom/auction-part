import { AuthProvider } from "./context/auth-provider";
import { ProductProvider } from "./context/product-provider";
import Dashboard from "./Dashboard/dashboard";
import Register from "./register-form/form";
import ProductCard from "./product/product-card";
import Login from "./login-form/login";
import { Routes, Route } from "react-router-dom";
import Navbar from "./navbar/navbar";
import ProductForm from "./product/product-form";

function App() {
  return (
    <>
      <AuthProvider>
        <ProductProvider>
          <Navbar />
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/products" element={<ProductCard />} />
            <Route path="/addProduct" element={<ProductForm />} />
            <Route path="/" element={<ProductCard />} />
          </Routes>
        </ProductProvider>
      </AuthProvider>
      ;
    </>
  );
}

export default App;
