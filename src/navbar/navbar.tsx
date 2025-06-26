import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/context/auth-context";
import { Search } from "lucide-react";
import { Link, useNavigate } from "react-router";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const CategoriesItem = [
  {
    label: "Electronics",
    value: "electronics",
  },
  {
    label: "Fashion",
    value: "fashion",
  },
  {
    label: "Home & Garden",
    value: "home-garden",
  },
  {
    label: "Sports & Outdoors",
    value: "sports-outdoors",
  },
  {
    label: "Health & Beauty",
    value: "health-beauty",
  },
  {
    label: "Toys & Hobbies",
    value: "toys-hobbies",
  },
  {
    label: "Automotive & Industrial",
    value: "automotive-industrial",
  },
];
export default function Navbar() {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div>
        <Link to="/">
          <h1>logo</h1>
        </Link>
      </div>
      <div className="flex items-center w-220 gap-2">
        <Search />
        <Input placeholder="Search" />
        <Button className="">search</Button>
      </div>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger>Categories</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Categories List</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {CategoriesItem.map((items) => (
              <DropdownMenuItem key={items.label}>
                {items.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div>
        {isLoggedIn ? (
          <Button className="" onClick={logout}>
            Logout
          </Button>
        ) : (
          <Button className="" onClick={handleLogin}>
            Login
          </Button>
        )}
      </div>
      <div>
        <Link to="/addProduct">
          <Button className="bg-blue-500 hover:bg-blue-600">Sell</Button>
        </Link>
      </div>
    </div>
  );
}
