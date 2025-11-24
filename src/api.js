import axios from "axios";

const API_URL = "https://fake-news-detection-production-5242.up.railway.app/predict";

export const predictNews = async (title, text) => {
  const response = await axios.post(API_URL, { title, text });
  return response.data;
};
