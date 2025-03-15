import { useState } from "react";
import axios from "axios";
import HeaderAdmin from "./HeaderAdmin";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5003";

const AdminAddInhabitant = () => {
  const [formData, setFormData] = useState({
    lastName: "",
    firstName: "",
    middleInitial: "",
    ext: "",
    placeOfBirth: "",
    dateOfBirth: "",
    age: "",
    sex: "",
    civilStatus: "",
    citizenship: "",
    address: "",
    occupation: "",
    estadoSaBuhay: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const residentData = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      middle_int: formData.middleInitial,
      ext: formData.ext,
      birth_place: formData.placeOfBirth,
      birth_date: formData.dateOfBirth,
      age: parseInt(formData.age),
      gender: formData.sex,
      civil_stat: formData.civilStatus,
      citizenship: formData.citizenship,
      occupation: formData.occupation,
      status: formData.estadoSaBuhay,
      household_id: 1, // Placeholder; adjust as needed
      contact_num: "N/A", // Placeholder; add to form if needed
    };

    try {
      const response = await axios.post(
        `${API_URL}/api/residents`,
        residentData,
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );
      console.log("Resident added:", response.data);
      setSuccess("Inhabitant added successfully!");
      setError("");
      setFormData({
        lastName: "",
        firstName: "",
        middleInitial: "",
        ext: "",
        placeOfBirth: "",
        dateOfBirth: "",
        age: "",
        sex: "",
        civilStatus: "",
        citizenship: "",
        address: "",
        occupation: "",
        estadoSaBuhay: "",
      });
    } catch (err) {
      console.error("Error adding inhabitant:", err);
      setError("Failed to add inhabitant. Please try again.");
      setSuccess("");
    }
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="flex-grow p-6">
        <h1 className="text-3xl font-bold mb-4">Add Inhabitant</h1>
        {success && <p className="text-green-600 mb-4">{success}</p>}
        {error && <p className="text-red-600 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
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
                <tr>
                  <td><input type="text" name="lastName" value={formData.lastName} className="input input-bordered w-full" onChange={handleChange} required /></td>
                  <td><input type="text" name="firstName" value={formData.firstName} className="input input-bordered w-full" onChange={handleChange} required /></td>
                  <td><input type="text" name="middleInitial" value={formData.middleInitial} className="input input-bordered w-full" onChange={handleChange} /></td>
                  <td><input type="text" name="ext" value={formData.ext} className="input input-bordered w-full" onChange={handleChange} /></td>
                  <td><input type="text" name="placeOfBirth" value={formData.placeOfBirth} className="input input-bordered w-full" onChange={handleChange} required /></td>
                  <td><input type="date" name="dateOfBirth" value={formData.dateOfBirth} className="input input-bordered w-full" onChange={handleChange} required /></td>
                  <td><input type="number" name="age" value={formData.age} className="input input-bordered w-full" onChange={handleChange} required /></td>
                  <td>
                    <select name="sex" value={formData.sex} className="select select-bordered w-full" onChange={handleChange} required>
                      <option value="">Select</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </td>
                  <td>
                    <select name="civilStatus" value={formData.civilStatus} className="select select-bordered w-full" onChange={handleChange} required>
                      <option value="">Select</option>
                      <option value="Single">Single</option>
                      <option value="Married">Married</option>
                      <option value="Widowed">Widowed</option>
                      <option value="Separated">Separated</option>
                    </select>
                  </td>
                  <td><input type="text" name="citizenship" value={formData.citizenship} className="input input-bordered w-full" onChange={handleChange} required /></td>
                  <td><input type="text" name="address" value={formData.address} className="input input-bordered w-full" onChange={handleChange} required /></td>
                  <td><input type="text" name="occupation" value={formData.occupation} className="input input-bordered w-full" onChange={handleChange} required /></td>
                  <td><input type="text" name="estadoSaBuhay" value={formData.estadoSaBuhay} className="input input-bordered w-full" onChange={handleChange} required /></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex justify-end mt-4">
            <button type="submit" className="btn bg-blue-600 text-white">Add Inhabitant</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminAddInhabitant;
