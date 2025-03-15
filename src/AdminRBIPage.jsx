import { useNavigate } from "react-router-dom";

const AdminRBIPage = () => {
  const navigate = useNavigate();
  router.delete('/:id', authenticateToken, async (req, res) => {
    try {
      const resident = await Resident.findByPk(req.params.id);
      if (!resident) return res.status(404).json({ message: 'Resident not found' });
      await resident.destroy();
      res.json({ message: 'Resident deleted' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">RBI Management</h1>

      <div className="space-y-4">
        {/* View RBI Button */}
        <button
          onClick={() => navigate("/admin/rbi/view")}
          className="btn bg-blue-600 text-white w-64"
        >
          View RBI
        </button>

        {/* Add Inhabitants Button */}
        <button
          onClick={() => navigate("/admin/rbi/add")}
          className="btn bg-green-600 text-white w-64"
        >
          Add Inhabitants
        </button>

        {/* Delete Inhabitants Button */}
        <button
          onClick={() => navigate("/admin/rbi/delete")}
          className="btn bg-red-600 text-white w-64"
        >
          Delete Inhabitants
        </button>
      </div>
    </div>
  );
};

export default AdminRBIPage;
