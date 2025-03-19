import { useNavigate } from "react-router-dom";
import HeaderOfficials from "./HeaderOfficials"; // Imported header
import OfficialsImg from "./images/officials.jpg"; // Import the local background image

const OfficialsHomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen">
      {/* Background Image Layer with 0.5 opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${OfficialsImg})`,
          opacity: 0.5,
        }}
      ></div>

      {/* Content Panel */}
      <div className="relative h-full flex flex-col">
        <HeaderOfficials />
        <div className="flex-grow flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <h1 className="text-3xl font-bold mb-6">Officials Home Page</h1>
            <div className="flex gap-4">
              <button
                onClick={() => navigate("/officials/rbi")}
                className="btn bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md"
              >
                To RBI
              </button>
              <button
                onClick={() => navigate("/officials/announcements")}
                className="btn bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md"
              >
                Announcements
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficialsHomePage;
