import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/auth-context";

const Dashboard = () => {
  const { user, setUser, isLogIn, setIsLogIn, loading, setLoading } = useAuth();

  const logIn = (e) => {
    e.preventDefault();
    setIsLogIn(true);
    setUser({ Name: "John Doe" });
  };

  const logOut = (e) => {
    e.preventDefault();
    setIsLogIn(false);
    setUser(null);
  };

  return (
    <div>
      <span>user is currently {isLogIn ? "login" : "logOut"}</span>
      {isLogIn ? <span>user name is {user?.Name}</span> : null}
      <br />
      {isLogIn ? (
        <Button onClick={logOut}>Logout</Button>
      ) : (
        <Button onClick={logIn}>Login</Button>
      )}
    </div>
  );
};

export default Dashboard;
