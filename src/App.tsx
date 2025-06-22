import { AuthProvider } from "./context/auth-context";
import { ProductProvider } from "./context/product-provider";
import Dashboard from "./Dashboard/dashboard";
import ProductCard from "./product/product-card";

function App() {
  return (
    <ProductProvider>
      <AuthProvider>
        <ProductCard />
      </AuthProvider>
    </ProductProvider>
  );
}

export default App;
