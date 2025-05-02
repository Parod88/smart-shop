import axios from "axios";

const api = axios.create({
  baseURL: "https://itx-frontend-test.onrender.com",
  timeout: 5000,
});

export default api;
