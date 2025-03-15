import { useNavigate } from "react-router-dom";
import logo from "./images/btsnhillslogo.png";

const HeaderOfficials = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar bg-blue-600 shadow-md px-4 flex justify-between items-center">
      {/* Clickable Logo & Title */}
      <button 
        onClick={() => navigate("/officials")} 
        className="flex items-center gap-2 focus:outline-none cursor-pointer"
      >
        <img src={logo} alt="Logo" className="w-10 h-10 rounded-full object-cover" />
        <span className="text-xl font-bold text-white">Barangay Batasan Hills</span>
      </button>

      {/* Logout Button */}
      <button 
        className="btn bg-red-600 text-white border border-black"
        onClick={() => navigate("/")}
      >
        Logout
      </button>
    </div>
  );
};

export default HeaderOfficials;
