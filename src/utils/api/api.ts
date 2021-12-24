import axios from "axios";
//ESSE ARQUIVO É O QUE FAZ A LIGACAO COM A API
export const api = axios.create({
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
  baseURL: "http://localhost:3333/",
});
