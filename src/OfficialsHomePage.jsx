import { useNavigate } from "react-router-dom";
import HeaderOfficials from "./HeaderOfficials"; // ✅ Import the correct header

const OfficialsHomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col">
      <div className="flex-grow flex flex-col justify-center items-center bg-gray-100">
        <h1 className="text-3xl font-bold mb-6">Officials Home Page</h1>

        <div className="flex gap-4">
          {/* To RBI Button -> Navigates to OfficialsPage */}
          <button 
            onClick={() => navigate("/officials/rbi")} 
            className="btn bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md"
          >
            To RBI
          </button>

          {/* Announcements Button (Does Nothing for Now) */}
          <button 
  onClick={() => navigate("/officials/announcements")} 
  className="btn bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md"
>
  Announcements
</button>

        </div>
      </div>
    </div>
  );
};

export default OfficialsHomePage;
