import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5003";
console.log("API_URL:", API_URL); // Debug

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!role) {
      setError("Please select a role.");
      return;
    }

    const endpoint = role === "residents" ? "/api/residents/login" : "/api/admins/login";

    try {
      const response = await axios.post(`${API_URL}${endpoint}`, { email, password });
      const { token, role: userRole } = response.data;
      localStorage.setItem("token", token);
      if (userRole === "admin") navigate("/admin");
      else if (userRole === "officials") navigate("/officials");
      else if (userRole === "residents") navigate("/residents");
      else setError("Unknown role returned from server.");
    } catch (err) {
      setError("Invalid credentials. " + (err.response?.data?.message || "Please try again."));
      console.error(err);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96 text-center">
        <h1 className="text-2xl font-bold mb-4">Barangay Batasan Hills Website</h1>
        <p className="text-gray-600 mb-6">Enter your credentials:</p>
        {error && <p className="text-red-600 mb-4">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input input-bordered w-full mb-4"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input input-bordered w-full mb-4"
        />
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="select select-bordered w-full mb-4"
        >
          <option value="">Select Role</option>
          <option value="admin">Admin</option>
          <option value="officials">Officials</option>
          <option value="residents">Residents</option>
        </select>
        <button onClick={handleLogin} className="btn bg-blue-600 text-white w-full">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
