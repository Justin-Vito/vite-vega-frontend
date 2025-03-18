import { useState, useEffect } from "react";
import axios from "axios";
import HeaderOfficials from "./HeaderOfficials";

const OfficialsPage = () => {
  const [residents, setResidents] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchResidents = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("https://3.105.228.252:5003/api/residents", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setResidents(response.data);
      } catch (err) {
        setError("Failed to load residents: " + (err.response?.data?.message || err.message));
        console.error(err);
      }
    };
    fetchResidents();
  }, []);

  return (
    <div className="h-screen flex flex-col">
      <div className="flex-grow p-6">
        <h1 className="text-3xl font-bold mb-4">RBI</h1>
        {error && <p className="text-red-600 mb-4">{error}</p>}
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full border">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th>Last Name</th>
                <th>First Name</th>
                <th>Middle Initial</th>
                <th>EXT</th>
                <th>Place of Birth</th>
                <th>Date of Birth</th>
                <th>Age</th>
                <th>Sex</th>
                <th>Civil Status</th>
                <th>Citizenship</th>
                <th>Address</th>
                <th>Occupation</th>
                <th>Estado sa Buhay</th>
              </tr>
            </thead>
            <tbody>
              {residents.map((resident) => (
                <tr key={resident.resident_id}>
                  <td>{resident.last_name}</td>
                  <td>{resident.first_name}</td>
                  <td>{resident.middle_int}</td>
                  <td>{resident.ext}</td>
                  <td>{resident.birth_place}</td>
                  <td>{new Date(resident.birth_date).toLocaleDateString()}</td>
                  <td>{resident.age}</td>
                  <td>{resident.gender}</td>
                  <td>{resident.civil_stat}</td>
                  <td>{resident.citizenship}</td>
                  <td>{resident.address || "N/A"}</td>
                  <td>{resident.occupation}</td>
                  <td>{resident.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OfficialsPage;