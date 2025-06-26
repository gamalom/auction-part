import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/auth-context";

const Dashboard = () => {
  const { isLoggedIn, logout, currentUser } = useAuth();

  return (
    <div>
      <span>user is currently {isLoggedIn ? "login" : "logOut"}</span>
      {isLoggedIn ? <span>user name is {currentUser?.firstName}</span> : null}
      <br />
      {isLoggedIn ? (
        <Button onClick={logout}>Logout</Button>
      ) : (
        <span>Please log in to access the dashboard.</span>
      )}
    </div>
  );
};

export default Dashboard;
