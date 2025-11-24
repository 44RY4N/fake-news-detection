import axios from "axios";

const API_URL = "https://YOUR_BACKEND_URL/predict";

export const predictNews = async (title, text) => {
  const response = await axios.post(API_URL, { title, text });
  return response.data;
};
