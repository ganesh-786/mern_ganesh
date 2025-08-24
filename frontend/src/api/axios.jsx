import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.REACT_APP_API_URL || "http://localhost:5000", // adjust port if needed
  withCredentials: true, // for cookies if backend uses them
});

export default instance;
