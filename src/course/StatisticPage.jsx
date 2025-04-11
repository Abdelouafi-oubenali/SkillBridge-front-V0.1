import { useState, useEffect } from "react";
import axios from "axios";

function StatisticPage() {
  const [stats, setStats] = useState({
    courses: 0,
    categories: 0,
    tags: 0
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = "13|6H8WToh7fxKfTEtuyhPmI0tnqm9D2VwQHZis5chv006c2402";
  const baseUrl = "http://localhost:8000/api/V2/stats";

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        const headers = { 'Authorization': `Bearer ${token}` };
        
        const [coursesRes, categoriesRes, tagsRes] = await Promise.all([
          axios.get(`${baseUrl}/courses`, { headers }),
          axios.get(`${baseUrl}/categories`, { headers }),
          axios.get(`${baseUrl}/tags`, { headers })
        ]);

        setStats({
          courses: coursesRes.data.total_courses || 0,
          categories: categoriesRes.data["total des categorises"] || 0,
          tags: tagsRes.data["total des categorises"] || 0  // Note: API appears to use same key for tags
        });
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch statistics:", err);
        setError("Impossible de charger les statistiques");
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) return <div className="text-center p-4">Chargement des statistiques...</div>;
  if (error) return <div className="text-center p-4 text-red-500">{error}</div>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Statistiques du Système</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard title="Cours" value={stats.courses} icon />
        <StatCard title="Catégories" value={stats.categories} />
        <StatCard title="Tags" value={stats.tags}  />
      </div>
    </div>
  );
}

// Simple stat card component
function StatCard({ title, value, icon }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center">
      <div className="text-4xl mb-2">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
      <p className="text-3xl font-bold mt-2">{value}</p>
    </div>
  );
}

export default StatisticPage;