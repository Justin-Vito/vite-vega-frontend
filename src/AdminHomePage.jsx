import { useNavigate } from "react-router-dom";
import AdminPageImg from "./images/adminpage.jpg"; // updated folder name

const AdminHomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      {/* Background Image with Opacity */}
      <div
        className="relative w-3/4 h-3/4 bg-cover bg-center rounded-lg shadow-lg z-0"
        style={{
          backgroundImage: `url(${AdminPageImg})`,
          opacity: 0.5,
        }}
      ></div>

      {/* Card Container */}
      <div className="absolute top-1/2 left-2/3 transform -translate-y-1/2 card w-80 bg-white bg-opacity-90 shadow-xl p-6 z-10">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">
          Admin Dashboard
        </h1>
        <div className="flex flex-col space-y-4 w-64">
          <button
            onClick={() => navigate("/admin/rbi")}
            className="btn bg-blue-600 text-white w-full py-3 rounded-lg shadow-md hover:bg-blue-700"
          >
            RBI Management
          </button>
          <button
            onClick={() => navigate("/admin/announcement")}
            className="btn bg-blue-600 text-white w-full py-3 rounded-lg shadow-md hover:bg-blue-700"
          >
            Make Announcement
          </button>
          <button
            onClick={() => navigate("/admin/create-official")}
            className="btn bg-blue-600 text-white w-full py-3 rounded-lg shadow-md hover:bg-blue-700"
          >
            Create Officials Account
          </button>
          <button
            onClick={() => navigate("/admin/appointments")}
            className="btn bg-blue-600 text-white w-full py-3 rounded-lg shadow-md hover:bg-blue-700"
          >
            View Appointments
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminHomePage;
