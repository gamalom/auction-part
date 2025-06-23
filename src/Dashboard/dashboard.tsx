import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/auth-provider";

const Dashboard = () => {
  const { user, setUser, isLoggedIn, setIsLoggedIn, loading, setLoading } =
    useAuth();

  const logIn = (e) => {
    e.preventDefault();
    setLoading(true);

    setIsLoggedIn(true);
    setUser({ name: "John Doe" });
    setLoading(false);
  };

  const logOut = (e) => {
    e.preventDefault();
    setLoading(true);

    setIsLoggedIn(false);
    setUser(null);
    setLoading(false);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>user is currently {isLoggedIn ? "login" : "logOut"}</div>
      {isLoggedIn ? <div>user name is {user?.name}</div> : null}

      {isLoggedIn ? (
        <Button onClick={logOut}>Logout</Button>
      ) : (
        <Button onClick={logIn}>Login</Button>
      )}
    </div>
  );
};

export default Dashboard;
