import axios from "axios";

const baseUrl = import.meta.env.VITE_BACKEND_URL;

export const getPeople = async () => {
  try {
    const url = `${baseUrl}/people`;
    const { data } = await axios(url);
    return data;
  } catch (error) {
    return { data: [] };
  }
};

export const postPeople = async () => {
  try {
    const url = `${baseUrl}/autrechose`;
    const { data } = await axios(url);
    return data;
  } catch (error) {
    return { data: [] };
  }
};
