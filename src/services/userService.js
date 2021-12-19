import http from "./httpServices";
import { apiUrl } from "../config.json";

export function register({ username: email, name, password }) {
  return http.post(apiUrl + "/users", { email, name, password });
}
