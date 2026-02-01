import { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState([]); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setResults([]);

    try {
      const data = await fetchUserData(username, location, minRepos);
      setResults(data.items); 
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      
     
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-wrap gap-4">
        <input
          className="flex-1 shadow border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="flex-1 shadow border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          className="flex-1 shadow border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="number"
          placeholder="Min Repos"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
        />
        <button 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full md:w-auto"
          type="submit"
        >
          Search
        </button>
      </form>

      <div className="mt-8">
        {loading && <p className="text-center">Loading search results...</p>}
        {error && <p className="text-center text-red-500">Aggregate error: Could not fetch data.</p>}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((user) => (
            <div key={user.id} className="border p-4 rounded-lg shadow hover:shadow-lg transition-shadow bg-gray-50">
              <img src={user.avatar_url} alt={user.login} className="w-20 h-20 rounded-full mx-auto" />
              <h2 className="text-xl font-semibold text-center mt-2">{user.login}</h2>
              <p className="text-center text-gray-600">{user.location || "Location hidden"}</p>
              <div className="mt-4 flex justify-center">
                <a 
                  href={user.html_url} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-blue-500 underline"
                >
                  View Full Profile
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Search;