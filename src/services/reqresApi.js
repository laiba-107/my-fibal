import axios from "axios";

const BASE_URL = "https://reqres.in/api";

export const fetchAllUsers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/users?page=1`);
    return response.data.data; // Return the user array
  } catch (error) {
    throw new Error("Failed to fetch users");
  }
};
