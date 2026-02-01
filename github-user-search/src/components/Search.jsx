import { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState([]); // Initialized as empty array
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const data = await fetchUserData(username, location, minRepos);
      
      // IMPORTANT: GitHub Search API returns { items: [], total_count: 0 }
      // We must set results to the 'items' array.
      setResults(data.items || []); 
    } catch (err) {
      setError(true);
      setResults([]); // Reset to empty array so .map() doesn't break
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-lg mx-auto bg-gray-100 p-6 rounded-lg">
        <input 
          type="text" 
          placeholder="User Name" 
          className="border p-2 rounded"
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Location" 
          className="border p-2 rounded"
          value={location} 
          onChange={(e) => setLocation(e.target.value)} 
        />
        <input 
          type="number" 
          placeholder="Min Repos" 
          className="border p-2 rounded"
          value={minRepos} 
          onChange={(e) => setMinRepos(e.target.value)} 
        />
        <button type="submit" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          Search
        </button>
      </form>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">Error fetching data.</p>}
        
        {/* The Safety Check: results is an array now */}
        {results.length > 0 && results.map((user) => (
          <div key={user.id} className="border p-4 rounded shadow-sm text-center">
            <img src={user.avatar_url} alt={user.login} className="w-20 h-20 rounded-full mx-auto" />
            <h3 className="font-bold mt-2">{user.login}</h3>
            <a href={user.html_url} target="_blank" rel="noreferrer" className="text-blue-500 block mt-2">
              View Profile
            </a>
          </div>
        ))}

        {!loading && !error && results.length === 0 && (
            <p className="col-span-full text-center text-gray-500">No users found. Try adjusting your filters.</p>
        )}
      </div>
    </div>
  );
}

export default Search;