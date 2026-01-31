import.meta.env.VITE_APP_GITHUB_API_KEY 
import axios from "axios"

const BASE_URL = "https://api.github.com"

export const fetchUserData = async (username) => {
    try {
        const response = await axios.get(`${BASE_URL}/users/${username}`);
        return response.data;
    }
    catch (error) {
        console.error("Error fetching user data:", error);
        throw error;
    }
}


