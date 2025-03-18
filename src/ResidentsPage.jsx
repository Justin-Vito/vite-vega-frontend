import { useNavigate } from "react-router-dom";
import HeaderResident from "./HeaderResident";
import coverPhoto from "./images/coverphoto.jpg";

const ResidentsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden"> {/* ✅ Prevents extra scrollbar */}
      <div className="flex-grow p-8 bg-gray-100 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-6">Residents Page</h1>

        {/* Downloadable Forms */}
        <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-center font-semibold text-lg mb-4">Downloadable Forms</h2>
          <div className="grid grid-cols-2 gap-4">
            <a 
              href="https://scontent.fmnl3-4.fna.fbcdn.net/v/t1.6435-9/117198424_1529511437228905_9060302834013588511_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGE80ikMVY7LK3IYi24NoEjJC5vVqZedU0kLm9Wpl51TfKFc2y67toA2NT0I2HGdQ22fAhOcig6jv6kjaOdQ2d2&_nc_ohc=IdJmfqhahcMQ7kNvgGNgLmH&_nc_oc=AdjYPjStEi1AvnJMBeqTl5F0vnGAZiC58RqqHNzXLyYnxorBVaVYGduJo3vkzDKK7tk&_nc_zt=23&_nc_ht=scontent.fmnl3-4.fna&_nc_gid=WXFmf01YHeVSCpOxSC2N0g&oh=00_AYFuYya5_KOlqzGhKayKDzDhoe_ovA7a12f79s7h6MHpYQ&oe=67FDF510"
              className="btn bg-blue-600 text-white w-full text-center"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Barangay Clearance Request Form
            </a>

            <a 
              href="https://mariaaurora.gov.ph/wp-content/uploads/2018/12/ISSUANCE-OF-CERTIFICATE-OF-INDIGENCY-1.pdf"
              className="btn bg-blue-600 text-white w-full text-center"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Certificate of Indigency Request Form
            </a>

            <a 
              href="https://quezoncity.gov.ph/wp-content/uploads/2020/10/Unified-Business-Permit-Application-Form.pdf"
              className="btn bg-blue-600 text-white w-full text-center"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Barangay Business Permit Application Form
            </a>

            <a 
              href="https://didm.pnp.gov.ph/images/Incident%20Record%20Forms/Incident%20Record%20Form.pdf"
              className="btn bg-blue-600 text-white w-full text-center"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Incident Report Form
            </a>
          </div>
        </div>

        {/* Guidelines & Regulations */}
        <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-center font-semibold text-lg mb-4">Guidelines & Regulations</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <a 
              href="https://www.facebook.com/stories/796260775562810/?source=profile_highlight"
              className="btn bg-blue-600 text-white w-full text-center"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Ordinances & Resolutions
            </a>

            <a 
              href="https://pepp.emb.gov.ph/wp-content/uploads/2016/06/RA-9003-Ecological-Solid-Waste-Management-Act-of-2000.pdf"
              className="btn bg-blue-600 text-white w-full text-center"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Solid Waste Management
            </a>

            <a 
              href="https://web.senate.gov.ph/lisdata/3865235106!.pdf"
              className="btn bg-blue-600 text-white w-full text-center"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Curfew & Noise Control Rules
            </a>

            <a 
              href="https://ndrrmc.gov.ph/attachments/article/4147/NDRRMP-Pre-Publication-Copy-v2.pdf"
              className="btn bg-blue-600 text-white w-full text-center"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Disaster Preparedness
            </a>
          </div>
        </div>

        {/* Create Appointment & View Announcements Buttons */}
        <div className="w-full max-w-2xl flex flex-col md:flex-row justify-center gap-4">
          <button 
            onClick={() => navigate("/residents/appointment")}
            className="btn bg-blue-600 text-white w-full"
          >
            Create Appointment
          </button>
          <button 
            onClick={() => navigate("/residents/announcements")}
            className="btn bg-blue-600 text-white w-full"
          >
            View Announcements
          </button>
        </div>
      </div>

      {/* Barangay Officials Section */}
      <div className="mt-0 w-full bg-gray-100 text-center py-8 pb-0"> {/* ✅ Removes gap */}
  <h2 className="text-2xl font-bold text-gray-800 mb-4">Barangay Officials</h2> 
  <img 
    src={coverPhoto} 
    alt="Barangay Officials Banner" 
    className="w-full h-auto object-cover"
  />
</div>
    </div>
  );
};

export default ResidentsPage;
