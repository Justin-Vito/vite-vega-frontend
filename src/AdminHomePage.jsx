import { useNavigate } from "react-router-dom";
import adminImage from "./images/adminpage.jpg"; // Ensure the image is located in src/images/adminpage.jpg

const AdminHomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen w-full overflow-hidden bg-white">
      {/* Background Image with Opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: url(${adminImage}),
          opacity: 0.5,
          zIndex: 0,
        }}
      ></div>

      {/* Centered Dashboard Card */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 card w-80 bg-white bg-opacity-90 shadow-xl p-6 z-10">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">
          Admin Dashboard
        </h1>
        <div className="flex flex-col space-y-4 w-full">
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
