import { useState, useEffect } from "react";
import axios from "axios";
import HeaderAdmin from "./HeaderAdmin";

const AdminViewAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get("https://3.105.228.252:5003/api/admins/appointments");
        setAppointments(response.data);
      } catch (err) {
        setError("Failed to load appointments: " + (err.response?.data?.message || err.message));
      }
    };
    fetchAppointments();
  }, []);

  return (
    <div className="h-screen flex flex-col">
      <HeaderAdmin />
      <div className="flex-grow flex items-center justify-center bg-gray-100">
        {error ? (
          <p className="text-red-500">{error}</p>
        ) : appointments.length ? (
          <ul className="space-y-4">
            {appointments.map((appt) => (
              <li key={appt.appointment_id} className="bg-white p-4 rounded shadow">
                <h2 className="text-xl font-bold">{appt.title}</h2>
                <p>Date: {appt.date}</p>
                <p>{appt.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <h1 className="text-2xl font-bold text-gray-600">No appointments yet.</h1>
        )}
      </div>
    </div>
  );
};

export default AdminViewAppointments;