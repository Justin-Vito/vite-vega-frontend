import { useState } from "react";
import axios from "axios";
import HeaderResident from "./HeaderResident"; // ✅ Added Residents Header

const ResidentsAppointment = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    const appointmentData = { title, date, content };
    try {
      await axios.post("https://3.105.228.252:5003/api/residents/appointments", appointmentData);
      setSuccess("Appointment Sent to Admin!");
      setTitle("");
      setDate("");
      setContent("");
      setTimeout(() => setSuccess(""), 2000);
    } catch (err) {
      setError("Failed to send: " + (err.response?.data?.message || err.message));
    }
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="flex-grow flex items-center justify-center bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
          <h1 className="text-2xl font-bold text-center mb-4">Create Appointment</h1>
          {success && <p className="text-green-500 mb-4">{success}</p>}
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <label className="block text-gray-700 font-medium mb-1">Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-4"
            placeholder="Enter appointment title"
          />
          <label className="block text-gray-700 font-medium mb-1">Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
          <label className="block text-gray-700 font-medium mb-1">Content:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded h-28 resize-none mb-4"
            placeholder="Enter details about the appointment"
          />
          <button
            onClick={handleSubmit}
            className="btn bg-blue-600 text-white w-full py-2 rounded-lg shadow-md"
          >
            Send to Admin
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResidentsAppointment;
