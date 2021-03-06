import jwtDecode from "jwt-decode";

import http from "./httpServices";
import { apiUrl } from "../config.json";

const TOKEN_KEY = "token";

http.setJwt(getJwt());

export async function login({ username: email, password }) {
  const { data: jwt } = await http.post(apiUrl + "/auth", { email, password });
  localStorage.setItem(TOKEN_KEY, jwt);
}

export function logout() {
  localStorage.removeItem(TOKEN_KEY);
}

export function loginWithJwt(jwt) {
  localStorage.setItem(TOKEN_KEY, jwt);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(TOKEN_KEY);
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

export function getJwt() {
  return localStorage.getItem(TOKEN_KEY);
}

export default {
  login,
  loginWithJwt,
  logout,
  getCurrentUser,
  getJwt,
};
