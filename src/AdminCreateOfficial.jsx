import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdminCreateOfficial = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    dateOfBirth: "",
    position: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    const officialData = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      middle_int: formData.middleName,
      birth_date: formData.dateOfBirth,
      position: formData.position,
      email: formData.email,
      password: formData.password,
    };

    try {
      const response = await axios.post("https://3.105.228.252:5003/api/admins/create-official", officialData);
      console.log("Official account creation response:", response.data);
      setSuccess("Official account created successfully!");
      setTimeout(() => navigate("/admin"), 2000);
    } catch (err) {
      console.error("Error creating official:", err.response ? err.response.data : err.message);
      setError("Failed to create official. " + (err.response?.data?.message || "Please try again."));
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96 text-center">
        <h1 className="text-2xl font-bold mb-4">Create Official Account</h1>
        <p className="text-gray-600 mb-6">Register a new official</p>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && <p className="text-green-500 mb-4">{success}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
          <input
            type="text"
            name="middleName"
            placeholder="Middle Name (Optional)"
            value={formData.middleName}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
          <input
            type="text"
            name="position"
            placeholder="Position (e.g., Barangay Captain, Secretary)"
            value={formData.position}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
          <button type="submit" className="btn bg-green-600 text-white w-full">
            Create Account
          </button>
        </form>
        <p className="mt-4 text-gray-600">
          Back to{" "}
          <button className="text-blue-600 underline" onClick={() => navigate("/admin")}>
            Admin Dashboard
          </button>
        </p>
      </div>
    </div>
  );
};

export default AdminCreateOfficial;
