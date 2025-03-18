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
        const token = localStorage.getItem("token");
        const response = await axios.post(
          `${API_URL}/api/admins/announcements`,
          { title, content },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setSuccess("Announcement posted!");
        setError("");
        setTitle("");
        setContent("");
      } catch (err) {
        setError("Failed to post: " + (err.response?.data?.message || err.message));
        setSuccess("");
        console.error(err);
      }
    };

    return (
      <div className="h-screen flex flex-col">

        <div className="flex-grow flex flex-col items-center justify-center p-6">
          <h1 className="text-2xl font-bold mb-4">Create Announcement</h1>
          {success && <p className="text-green-600 mb-4">{success}</p>}
          {error && <p className="text-red-600 mb-4">{error}</p>}
          
          {/* Title Input */}
          <input
            type="text"
            className="input input-bordered w-full max-w-2xl mb-4"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          {/* Content Textarea */}
          <textarea
            className="textarea textarea-bordered w-full max-w-2xl h-40"
            placeholder="Write your announcement here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          
          <button 
            onClick={handleSubmit}
            className="btn bg-blue-600 text-white mt-4 px-6 py-2"
          >
            Publish Announcement
          </button>
        </div>
      </div>
    );
  };


  export default AdminAnnouncement;
