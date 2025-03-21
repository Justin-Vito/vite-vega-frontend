import myImage2 from "./images/maps.png";
import coverPhoto from "./images/coverphoto.jpg"; // Import cover photo

const Body = () => {
  return (
    <div className="p-6 flex flex-col items-center overflow-x-hidden w-full">
      {/* Header Section Above Cover Photo */}
      <h1 className="text-2xl font-bold text-center mb-4">
        Welcome to the Barangay Batasan Hills Website
      </h1>

      {/* Full-Width Cover Photo */}
      <div className="w-screen">
        <img 
          src={coverPhoto} 
          alt="Cover Photo" 
          className="w-screen h-auto object-cover"
        />
      </div>

      {/* Location Text */}
      <p className="text-sm text-center mt-6 font-bold">Barangay Batasan Hills is located here!</p>

      {/* Wider Maps Image */}
      <div className="mt-6 w-full max-w-5xl">
        <img 
          src={myImage2} 
          alt="map" 
          className="w-full h-[400px] object-cover rounded-lg shadow"
        />
      </div>

      {/* Forms & Guidelines Section */}
      <div className="mt-6 grid grid-cols-2 gap-8 w-full max-w-7xl">
        {/* Downloadable Forms */}
        <div className="bg-white p-8 rounded-lg shadow-md w-full">
          <h2 className="text-center font-semibold text-lg">Downloadable Forms</h2>
          <div className="grid grid-cols-2 gap-4 mt-3">
            <a 
              href="https://scontent.fmnl3-4.fna.fbcdn.net/v/t1.6435-9/117198424_1529511437228905_9060302834013588511_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGE80ikMVY7LK3IYi24NoEjJC5vVqZedU0kLm9Wpl51TfKFc2y67toA2NT0I2HGdQ22fAhOcig6jv6kjaOdQ2d2&_nc_ohc=IdJmfqhahcMQ7kNvgGNgLmH&_nc_oc=AdjYPjStEi1AvnJMBeqTl5F0vnGAZiC58RqqHNzXLyYnxorBVaVYGduJo3vkzDKK7tk&_nc_zt=23&_nc_ht=scontent.fmnl3-4.fna&_nc_gid=WXFmf01YHeVSCpOxSC2N0g&oh=00_AYFuYya5_KOlqzGhKayKDzDhoe_ovA7a12f79s7h6MHpYQ&oe=67FDF510"
              className="btn bg-blue-500 text-white w-full py-3 text-sm text-center"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Barangay Clearance Request Form
            </a>

            <a 
              href="https://mariaaurora.gov.ph/wp-content/uploads/2018/12/ISSUANCE-OF-CERTIFICATE-OF-INDIGENCY-1.pdf"
              className="btn bg-blue-500 text-white w-full py-3 text-sm text-center"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Certificate of Indigency Request Form
            </a>

            <a 
              href="https://quezoncity.gov.ph/wp-content/uploads/2020/10/Unified-Business-Permit-Application-Form.pdf"
              className="btn bg-blue-500 text-white w-full py-3 text-sm text-center"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Barangay Business Permit Application Form
            </a>

            <a 
              href="https://didm.pnp.gov.ph/images/Incident%20Record%20Forms/Incident%20Record%20Form.pdf"
              className="btn bg-blue-500 text-white w-full py-3 text-sm text-center"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Incident Report Form
            </a>
          </div>
        </div>

        {/* Guidelines & Regulations */}
        <div className="bg-white p-8 rounded-lg shadow-md w-full">
          <h2 className="text-center font-semibold text-lg">Guidelines & Regulations</h2>
          <div className="grid grid-cols-2 gap-4 mt-3">
            <a 
              href="https://www.facebook.com/stories/796260775562810/?source=profile_highlight"
              className="btn bg-blue-500 text-white w-full py-3 text-sm text-center"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Ordinances & Resolutions
            </a>

            <a 
              href="https://pepp.emb.gov.ph/wp-content/uploads/2016/06/RA-9003-Ecological-Solid-Waste-Management-Act-of-2000.pdf"
              className="btn bg-blue-500 text-white w-full py-3 text-sm text-center"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Solid Waste Management
            </a>

            <a 
              href="https://web.senate.gov.ph/lisdata/3865235106!.pdf"
              className="btn bg-blue-500 text-white w-full py-3 text-sm text-center"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Curfew & Noise Control Rules
            </a>

            <a 
              href="https://ndrrmc.gov.ph/attachments/article/4147/NDRRMP-Pre-Publication-Copy-v2.pdf"
              className="btn bg-blue-500 text-white w-full py-3 text-sm text-center"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Disaster Preparedness
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
