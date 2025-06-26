import { AuthProvider } from "./context/auth-provider";
import { ProductProvider } from "./context/product-provider";
import Dashboard from "./Dashboard/dashboard";
import Register from "./register-form/form";
import ProductCard from "./product/product-card";
import Login from "./login-form/login";
import { Routes, Route } from "react-router-dom";

{
  /* <AuthProvider>
  <ProductProvider></ProductProvider>
</AuthProvider>; */
}
function App() {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/products" element={<ProductCard />} />
      <Route path="*" element={<Register />} />
    </Routes>
  );
}

export default App;
