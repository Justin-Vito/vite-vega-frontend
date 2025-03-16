import { useNavigate } from "react-router-dom";

const AdminHomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      {/* Button Container with Spacing */}
      <div className="flex flex-col space-y-4 w-64">
        {/* RBI Management Button */}
        <button
          onClick={() => navigate("/admin/rbi")}
          className="btn bg-blue-600 text-white w-full py-3 rounded-lg shadow-md"
        >
          RBI Management
        </button>

        {/* Make Announcement Button */}
        <button 
          onClick={() => navigate("/admin/announcement")} 
          className="btn bg-blue-600 text-white w-full py-3 rounded-lg shadow-md"
        >
          Make Announcement
        </button>

        {/* Create Officials Account Button */}
        <button 
          onClick={() => navigate("/admin/create-official")} 
          className="btn bg-blue-600 text-white w-full py-3 rounded-lg shadow-md"
        >
          Create Officials Account
        </button>

        {/* View Appointments Button */}
        <button 
          onClick={() => navigate("/admin/appointments")} 
          className="btn bg-blue-600 text-white w-full py-3 rounded-lg shadow-md"
        >
          View Appointments
        </button>
      </div>
    </div>
  );
};

export default AdminHomePage;
