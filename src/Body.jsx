import myImage from "./images/brngyhall.jpg";
import myImage2 from "./images/maps.png";

const Body = () => {
  return (
    <div className="p-6 grid grid-cols-3 gap-6 h-full">
      {/* Left Sidebar */}
      <div className="bg-green-700 text-white p-6 flex items-center justify-center h-full">
        Banner 3
      </div>

      {/* Right Content */}
      <div className="col-span-2 flex flex-col h-full">
        {/* Images Section */}
        <div className="flex flex-col gap-6">
          {/* Image 1 - Barangay Hall */}
          <div className="bg-gray-300 h-[280px] overflow-hidden">
            <img 
              src={myImage} 
              alt="hall" 
              className="w-full h-full object-cover object-bottom"
            />
          </div>

          {/* Image 2 - Map (Stretched) */}
          <div className="bg-gray-300 h-[200px] overflow-hidden">
            <img 
              src={myImage2} 
              alt="map" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Vision, Mission, Objectives */}
        <div className="grid grid-cols-3 gap-4 text-center mt-6">
          <div>
            <h2 className="font-bold">Vision</h2>
            <p>text here text here text here</p>
          </div>
          <div>
            <h2 className="font-bold">Mission</h2>
            <p>text here text here text here</p>
          </div>
          <div>
            <h2 className="font-bold">Objectives</h2>
            <p>text here text here text here</p>
          </div>
        </div>

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
      </div>
    </div>
  );
};

export default Body;
