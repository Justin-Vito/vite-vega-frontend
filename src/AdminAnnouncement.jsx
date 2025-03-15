import { useState } from "react";
import axios from "axios";
import HeaderAdmin from "./HeaderAdmin";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5003";
console.log("API_URL:", API_URL); // Debug

const AdminAnnouncement = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${API_URL}/api/admins/announcements`,
        `${API_URL}/api/admins/announcements`,
        { title, content },
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );
      setSuccess("Announcement posted!");
      setError("");
      setTitle("");
      setContent("");
    } catch (err) {
      setError("Failed to post announcement.");
      setSuccess("");
      console.error(err);
    }
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="flex-grow p-6">
        <h1 className="text-3xl font-bold mb-4">Make Announcement</h1>
        {success && <p className="text-green-600 mb-4">{success}</p>}
        {error && <p className="text-red-600 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input input-bordered w-full mb-4"
            required
          />
          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="textarea textarea-bordered w-full mb-4"
            required
          />
          <button type="submit" className="btn bg-blue-600 text-white">
            Post Announcement
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminAnnouncement;
