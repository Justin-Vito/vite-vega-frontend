import { useState, useEffect } from "react";
import axios from "axios";
import HeaderOfficials from "./HeaderOfficials";

const OfficialsAnnouncements = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [formData, setFormData] = useState({ title: "", content: "" });
  const [error, setError] = useState("");

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const fetchAnnouncements = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("https://3.105.228.252:5003/api/officials/announcements", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setAnnouncements(response.data);
    } catch (err) {
      setError("Failed to load: " + (err.response?.data?.message || err.message));
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await axios.post("https://3.105.228.252:5003/api/officials/announcements", formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setFormData({ title: "", content: "" });
      fetchAnnouncements();
    } catch (err) {
      setError("Failed to post: " + (err.response?.data?.message || err.message));
    }
  };


  return (
    <div className="h-screen flex flex-col">
      <HeaderOfficials />
      <div className="flex-grow flex justify-center items-center">
        <div className="w-full max-w-lg">
          <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-4">
            <input
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Title"
              className="input w-full mb-2"
            />
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              placeholder="Content"
              className="input w-full h-24 resize-none"
            />
            <button type="submit" className="btn bg-blue-600 text-white w-full mt-2">
              Post Announcement
            </button>
          </form>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          {announcements.length ? (
            <ul className="space-y-4">
              {announcements.map((ann) => (
                <li key={ann.id} className="bg-white p-4 rounded shadow">
                  <h2 className="text-xl font-bold">{ann.title}</h2>
                  <p>{ann.content}</p>
                </li>
              ))}
            </ul>
          ) : (
            <h1 className="text-2xl font-bold">No announcements yet.</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default OfficialsAnnouncements;