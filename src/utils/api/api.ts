import axios from "axios";
//ESSE ARQUIVO É O QUE FAZ A LIGACAO COM A API
export const api = axios.create({
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
  baseURL: "http://localhost:3333/",
});

export const setAuthToken = (token: string | null) => {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    localStorage.setItem("token", token);
  } else {
    delete api.defaults.headers.common["Authorization"];
    localStorage.removeItem("token");
    localStorage.removeItem("user_uuid");
  }
};

export const config = {
  headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
};
