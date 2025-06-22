import { AuthProvider } from "./context/auth-context";
import Dashboard from "./Dashboard/dashboard";

function App() {
  return (
    <AuthProvider>
      <Dashboard />
    </AuthProvider>
  );
}

export default App;
