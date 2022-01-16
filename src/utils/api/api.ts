import axios from "axios";

//ESSE ARQUIVO É O QUE FAZ A LIGACAO COM A API
export const api = axios.create({
  baseURL: "http://localhost:40599/",
});

export const apiLocalization = axios.create({
  baseURL: "https://servicodados.ibge.gov.br/api/v1/",
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

export const resetAuthToken = () => {
  localStorage.setItem("token", "");
};

export const config = {
  headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
};
