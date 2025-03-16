import { useState, useEffect } from "react";
import axios from "axios";

const AnnouncementsPage = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await axios.get("https://3.105.228.252:5003/api/officials/announcements");
        setAnnouncements(response.data);
      } catch (err) {
        setError("Failed to load announcements: " + (err.response?.data?.message || err.message));
      }
    };
    fetchAnnouncements();
  }, []);

  return (
    <div className="h-screen flex items-center justify-center">
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : announcements.length ? (
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
  );
};

export default AnnouncementsPage;