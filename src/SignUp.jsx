import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5003";
const API_URL = "https://3.105.228.252:5003"; // Hardcode for now
console.log("API_URL in use:", API_URL);

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    dateOfBirth: "",
    address: "",
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
  
    const residentData = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      middle_int: formData.middleName,
      birth_date: formData.dateOfBirth,
      address: formData.address,
      email: formData.email,
      password: formData.password,
    };
  
    try {
      const response = await axios.post(`${API_URL}/api/residents/signup`, residentData);
      console.log("Sign-up response:", response.data);
      setSuccess("Sign-up successful! Redirecting to login...");
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      console.error("Signup error details:", err.response ? err.response.data : err.message);
      console.error("Signup error details:", err.response ? err.response.data : err.message);
      setError("Failed to sign up. " + (err.response?.data?.message || "Please try again."));
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96 text-center">
        <h1 className="text-2xl font-bold mb-4">Sign Up as Resident</h1>
        <p className="text-gray-600 mb-6">Create your account</p>
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
            name="address"
            placeholder="Address"
            value={formData.address}
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
          <button type="submit" className="btn bg-blue-600 text-white w-full">
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-gray-600">
          Already have an account?{" "}
          <button className="text-blue-600 underline" onClick={() => navigate("/login")}>
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
