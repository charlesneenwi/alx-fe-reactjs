import axios from "axios";

const BASE_URL = "https://api.github.com";
const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

export const fetchUserData = async (username, location, minRepos) => {
    try {
        let query = "";
        if (username) query += `${username}`;
        if (location) query += `+location:${location}`;
        if (minRepos) query += `+repos:>=${minRepos}`;

        const response = await axios.get(`${BASE_URL}/search/users?q=${query}`, {
            headers: {
                Authorization: `token ${API_KEY}`
            }
        });
        
        
        return response.data; 
    }
    catch (error) {
        console.error("Error fetching user data:", error);
        throw error;
    }
}