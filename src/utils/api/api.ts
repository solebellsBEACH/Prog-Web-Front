import axios from "axios";
//ESSE ARQUIVO É O QUE FAZ A LIGACAO COM A API
export const api = axios.create({
  baseURL: "http://localhost:3333/",
});
