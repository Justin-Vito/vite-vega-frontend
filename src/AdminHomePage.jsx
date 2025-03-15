import { useNavigate } from "react-router-dom";

const AdminHomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <div className="space-y-4">
        {/* RBI Management Button */}
        <button
          onClick={() => navigate("/admin/rbi")}
          className="btn bg-blue-600 text-white w-64"
        >
          RBI Management
        </button>

        {/* Make Announcement Button */}
        <button
          onClick={() => navigate("/admin/announcement")}
          className="btn bg-green-600 text-white w-64"
        >
          Make Announcement
        </button>
      </div>
    </div>
  );
};

export default AdminHomePage;
