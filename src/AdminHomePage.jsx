import { useNavigate } from "react-router-dom";

const AdminHomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-gray-100">
      {/* Background Image with Opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://cocities.designforcommons.org/wp-content/uploads/sites/29/2017/07/barangay.jpg')", // Replace with your image URL
          opacity: 0.3, // Adjust opacity here (0.0 to 1.0)
          zIndex: -1, // Keeps it behind content
        }}
      ></div>

      {/* Content */}
      <h1 className="text-3xl font-bold mb-6 text-white drop-shadow-md">Admin Dashboard</h1>

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
  );
};

export default AdminHomePage;
