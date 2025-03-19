import { useNavigate } from "react-router-dom";
import ManagementImg from "./images/management.jpg"; // Ensure the path is correct

const AdminRBIPage = () => {
  const navigate = useNavigate();
 
  return (
    <div className="relative h-screen">
      {/* Background Image Layer with 0.5 opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${ManagementImg})`,
          opacity: 0.5,
        }}
      ></div>

      {/* Content Layer */}
      <div className="relative flex flex-col items-center justify-center h-full">
        <h1 className="text-3xl font-bold mb-6">RBI Management</h1>
        <div className="flex flex-col space-y-4 w-64">
          <button
            onClick={() => navigate("/admin/rbi/view")}
            className="btn bg-blue-600 text-white py-3 text-lg rounded-md shadow-md"
          >
            View RBI
          </button>
          <button
            onClick={() => navigate("/admin/rbi/add")}
            className="btn bg-blue-600 text-white py-3 text-lg rounded-md shadow-md"
          >
            Add Inhabitants
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminRBIPage;
