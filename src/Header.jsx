import { useNavigate } from "react-router-dom";
import logo from "./images/btsnhillslogo.png";

function Header() {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="navbar bg-blue-600 shadow-md px-4 flex justify-between items-center">
      {/* Clickable Left Side: Logo & Barangay Name */}
      <button 
        onClick={() => navigate("/")} 
        className="flex items-center gap-2 focus:outline-none cursor-pointer"
      >
        <img src={logo} alt="Logo" className="w-10 h-10 rounded-full object-cover" />
        <span className="text-xl font-bold text-white">Barangay Batasan Hills</span>
      </button>

      {/* Right side: Dropdown, Sign Up, Login */}
      <div className="flex items-center gap-4">
        <button className="btn bg-yellow-500 text-black border border-black "onClick={() => navigate("/SignUp")} // Navigate to login page
        > Sign Up</button>
        <button 
          className="btn bg-red-600 text-white border border-black"
          onClick={() => navigate("/login")} // Navigate to login page
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Header;
