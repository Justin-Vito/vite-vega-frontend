import Header from "./Header";

const ResidentsPage = () => {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex-grow p-6">
        <h1 className="text-3xl font-bold mb-4 text-center">Residents Page</h1>

        {/* Downloadable Forms */}
        <div className="mt-6">
          <h2 className="text-center font-bold">Downloadable Forms</h2>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <button className="btn bg-gray-200 w-full">Barangay Clearance Request Form</button>
            <button className="btn bg-gray-200 w-full">Certificate of Indigency Request Form</button>
            <button className="btn bg-gray-200 w-full">Barangay Business Permit Application Form</button>
            <button className="btn bg-gray-200 w-full">Incident Report Form</button>
          </div>
        </div>

        {/* Guidelines & Regulations */}
        <div className="mt-6">
          <h2 className="text-center font-bold">Guidelines & Regulations</h2>
          <div className="grid grid-cols-4 gap-4 mt-4">
            <button className="btn bg-gray-300 w-full">Ordinances & Resolutions</button>
            <button className="btn bg-green-500 w-full">Solid Waste Management</button>
            <button className="btn bg-blue-500 w-full">Curfew & Noise Control Rules</button>
            <button className="btn bg-red-500 w-full">Disaster Preparedness</button>
          </div>
        </div>

        {/* Create Appointment Button */}
        <div className="mt-6 flex justify-center">
          <button className="btn bg-blue-600 text-white w-1/3">Create Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default ResidentsPage;
