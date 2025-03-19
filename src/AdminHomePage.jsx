import { useNavigate } from "react-router-dom";

const AdminHomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      {/* Background Image with Opacity */}
      <div
        className="relative w-3/4 h-3/4 bg-cover bg-center rounded-lg shadow-lg z-0"
        style={{
          // Try local first, comment out URL if testing local
        //  backgroundImage: "url('/images/adminBG.jpg')", // Local from public/
           backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')", // URL fallback
          opacity: 0.5, // Bump to 0.5 to test visibility
        }}
      ></div>
 {/* Card Container */}
{/* Content: Title and Buttons in a Card */}
      <div className="absolute top-1/2 left-2/3 transform -translate-y-1/2 card w-80 bg-white bg-opacity-90 shadow-xl p-6 z-10">
      {/* Content */}
      <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">Admin Dashboard</h1>

      {/* Button Container with Spacing */}
      <div className="flex flex-col space-y-4 w-64">
        {/* RBI Management Button */}
        <button
          onClick={() => navigate("/admin/rbi")}
          className="btn bg-blue-600 text-white w-full py-3 rounded-lg shadow-md hover:bg-blue-700"
        >
          RBI Management
        </button>

        {/* Make Announcement Button */}
        <button
          onClick={() => navigate("/admin/announcement")}
          className="btn bg-blue-600 text-white w-full py-3 rounded-lg shadow-md hover:bg-blue-700"
        >
          Make Announcement
        </button>

        {/* Create Officials Account Button */}
        <button
          onClick={() => navigate("/admin/create-official")}
          className="btn bg-blue-600 text-white w-full py-3 rounded-lg shadow-md hover:bg-blue-700"
        >
          Create Officials Account
        </button>

        {/* View Appointments Button */}
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

