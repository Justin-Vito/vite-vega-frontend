import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import HeaderOfficials from "./HeaderOfficials";
import HeaderAdmin from "./HeaderAdmin";
import HeaderResident from "./HeaderResident";
import Body from "./Body";
import Login from "./Login";
import SignUp from "./SignUp";
import OfficialsHomePage from "./OfficialsHomePage";
import OfficialsPage from "./OfficialsPage";
import AdminHomePage from "./AdminHomePage";
import AdminRBIPage from "./AdminRBIPage";
import AdminViewRBI from "./AdminViewRBI";
import AdminAddInhabitant from "./AdminAddInhabitant";
import ResidentsPage from "./ResidentsPage";
import AdminAnnouncement from "./AdminAnnouncement";
import AdminCreateOfficial from "./AdminCreateOfficial";
import AnnouncementsPage from "./AnnouncementsPage";
import OfficialsAnnouncements from "./OfficialsAnnouncements";
import AdminViewAppointments from "./AdminViewAppointments";
import ResidentsAppointment from "./ResidentsAppointment";


function App() {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "light");
  }, []);

  const location = useLocation();
  const isOfficialsPage = location.pathname.startsWith("/officials");
  const isAdminPage = location.pathname.startsWith("/admin");
  const isResidentsPage = location.pathname.startsWith("/residents"); // ✅ Fixed typo

  return (
    <div className="flex flex-col h-screen">
      {/* Conditionally Render Headers */}
      {isAdminPage ? (
        <HeaderAdmin />
      ) : isOfficialsPage ? (
        <HeaderOfficials />
      ) : isResidentsPage ? (
        <HeaderResident />
      ) : (
        <Header />
      )}

      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Officials Routes */}
          <Route path="/officials" element={<OfficialsHomePage />} />
          <Route path="/officials/rbi" element={<OfficialsPage />} />
          <Route path="/officials/announcements" element={<OfficialsAnnouncements />} />


          {/* Admin Routes */}
          <Route path="/admin" element={<AdminHomePage />} />
          <Route path="/admin/rbi" element={<AdminRBIPage />} />
          <Route path="/admin/rbi/view" element={<AdminViewRBI />} />
          <Route path="/admin/rbi/add" element={<AdminAddInhabitant />} />
          <Route path="/admin/announcement" element={<AdminAnnouncement />} />
          <Route path="/admin/create-official" element={<AdminCreateOfficial />} />
          <Route path="/admin/appointments" element={<AdminViewAppointments />} />



          {/* Residents Route */}
          <Route path="/residents" element={<ResidentsPage />} />
          <Route path="/announcements" element={<AnnouncementsPage />} />
          <Route path="/residents/appointment" element={<ResidentsAppointment />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
