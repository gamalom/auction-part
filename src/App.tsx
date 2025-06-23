import { AuthProvider } from "./context/auth-provider";
import { ProductProvider } from "./context/product-provider";
import Dashboard from "./Dashboard/dashboard";
import ProductCard from "./product/product-card";

function App() {
  return (
    <AuthProvider>
      <ProductProvider>
        <ProductCard />
      </ProductProvider>
    </AuthProvider>
  );
}

export default App;
