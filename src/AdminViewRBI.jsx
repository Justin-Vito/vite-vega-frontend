import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import HeaderAdmin from "./HeaderAdmin";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5003";
console.log("API_URL:", API_URL); // Debug

const AdminViewRBI = () => {
  const [residents, setResidents] = useState([]);
  const [error, setError] = useState("");
  const [sortOption, setSortOption] = useState(""); // Dropdown sort option
  const [searchTerm, setSearchTerm] = useState(""); // Search term

  useEffect(() => {
    const fetchResidents = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/residents`, {
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
      await axios.delete(`${API_URL}/api/residents/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setResidents(residents.filter((resident) => resident.resident_id !== id));
    } catch (err) {
      setError("Failed to delete resident.");
      console.error(err);
    }
  };

  // Handle sort option change
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  // Handle search term change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Sort residents using useMemo for performance
  const sortedResidents = useMemo(() => {
    const sortableResidents = [...residents]; // Avoid mutating original array
    if (sortOption) {
      sortableResidents.sort((a, b) => {
        switch (sortOption) {
          case "age-asc":
            return a.age - b.age;
          case "age-desc":
            return b.age - a.age;
          case "lastName-asc":
            return a.last_name.localeCompare(b.last_name);
          case "lastName-desc":
            return b.last_name.localeCompare(a.last_name);
          case "firstName-asc":
            return a.first_name.localeCompare(b.first_name);
          case "firstName-desc":
            return b.first_name.localeCompare(a.first_name);
          case "status-alive-first":
            if (a.status === "alive" && b.status !== "alive") return -1;
            if (b.status === "alive" && a.status !== "alive") return 1;
            return 0;
          case "status-deceased-first":
            if (a.status === "deceased" && b.status !== "deceased") return -1;
            if (b.status === "deceased" && a.status !== "deceased") return 1;
            return 0;
          case "sex-male-first":
            if (a.gender === "male" && b.gender !== "male") return -1;
            if (b.gender === "male" && a.gender !== "male") return 1;
            return 0;
          case "sex-female-first":
            if (a.gender === "female" && b.gender !== "female") return -1;
            if (b.gender === "female" && a.gender !== "female") return 1;
            return 0;
          default:
            return 0;
        }
      });
    }
    return sortableResidents;
  }, [residents, sortOption]);

  // Filter sorted residents by search term
  const filteredResidents = sortedResidents.filter((resident) => {
    const term = searchTerm.toLowerCase();
    return (
      resident.last_name.toLowerCase().includes(term) ||
      resident.first_name.toLowerCase().includes(term)
    );
  });

  return (
    <div className="h-screen flex flex-col">
      <div className="flex-grow p-6">
        <h1 className="text-3xl font-bold mb-4">RBI</h1>
        {error && <p className="text-red-600 mb-4">{error}</p>}

        {/* Sorting and Search Controls */}
        <div className="mb-4 flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex-1">
            <label htmlFor="sortOption" className="mr-2 font-semibold">
              Sort By:
            </label>
            <select
              id="sortOption"
              value={sortOption}
              onChange={handleSortChange}
              className="select select-bordered w-full max-w-xs"
            >
              <option value="">-- Select an option --</option>
              <option value="age-asc">Age (Low to High)</option>
              <option value="age-desc">Age (High to Low)</option>
              <option value="lastName-asc">Last Name (A-Z)</option>
              <option value="lastName-desc">Last Name (Z-A)</option>
              <option value="firstName-asc">First Name (A-Z)</option>
              <option value="firstName-desc">First Name (Z-A)</option>
              <option value="status-alive-first">Status (Alive First)</option>
              <option value="status-deceased-first">Status (Deceased First)</option>
              <option value="sex-male-first">Sex (Male First)</option>
              <option value="sex-female-first">Sex (Female First)</option>
            </select>
          </div>

          <div className="flex-1">
            <label htmlFor="search" className="mr-2 font-semibold">
              Search by Name:
            </label>
            <input
              id="search"
              type="text"
              placeholder="Enter first or last name..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="input input-bordered w-full max-w-md"
            />
          </div>
        </div>

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
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredResidents.map((resident) => (
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
