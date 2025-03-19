import { useState, useEffect } from "react";
import axios from "axios";
import HeaderAdmin from "./HeaderAdmin";

const AdminViewRBI = () => {
  const [residents, setResidents] = useState([]);
  const [error, setError] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  useEffect(() => {
    const fetchResidents = async () => {
      try {
        const response = await axios.get("http://localhost:5003/api/residents", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        setResidents(response.data);
      } catch (err) {
        setError("Failed to load residents.");
        console.error(err);
      }
    };
    fetchResidents();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5003/api/residents/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setResidents(residents.filter((resident) => resident.resident_id !== id));
    } catch (err) {
      setError("Failed to delete resident.");
      console.error(err);
    }
  };

  // Sorting function
  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });

    const sortedResidents = [...residents].sort((a, b) => {
      if (key === "age") {
        return direction === "asc" ? a.age - b.age : b.age - a.age;
      }
      if (key === "gender") {
        return direction === "asc"
          ? a.gender.localeCompare(b.gender)
          : b.gender.localeCompare(a.gender);
      }
      return direction === "asc"
        ? a[key].toString().localeCompare(b[key].toString())
        : b[key].toString().localeCompare(a[key].toString());
    });

    setResidents(sortedResidents);
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="flex-grow p-6">
        <h1 className="text-3xl font-bold mb-4">RBI</h1>
        {error && <p className="text-red-600 mb-4">{error}</p>}
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full border">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th>
                  <button onClick={() => handleSort("last_name")} className="text-blue-500">
                    Last Name ⬍
                  </button>
                </th>
                <th>
                  <button onClick={() => handleSort("first_name")} className="text-blue-500">
                    First Name ⬍
                  </button>
                </th>
                <th>Middle Initial</th>
                <th>EXT</th>
                <th>Place of Birth</th>
                <th>Date of Birth</th>
                <th>
                  <button onClick={() => handleSort("age")} className="text-blue-500">
                    Age ⬍
                  </button>
                </th>
                <th>
                  <button onClick={() => handleSort("gender")} className="text-blue-500">
                    Sex ⬍
                  </button>
                </th>
                <th>Civil Status</th>
                <th>Citizenship</th>
                <th>Address</th>
                <th>Occupation</th>
                <th>Estado sa Buhay</th>
                <th>Actions</th>
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
                  <td>
                    <button
                      onClick={() => handleDelete(resident.resident_id)}
                      className="btn bg-red-600 text-white"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminViewRBI;
