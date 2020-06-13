// LÓGICA DE AUTENTIFICACIÓN //
import axios from "axios";
import jwt from "jwt-decode";
const ENDPOINT = "http://localhost:3050";
const AUTH_TOKEN_KEY = "authToken";
const ROLE = "role";
// FUNCION DE LOGIN //
export function loginUser(email, password) {
  return new Promise(async (resolve, reject) => {
    try {
      let res = await axios({
        url: `${ENDPOINT}/auth`,
        method: "POST",
        data: {
          email: email,
          password: password,
          grant_type: "password",
        },
      });
      setAuthToken(res.data.token);
      setIsAdmin(res.data.isAdmin);
      resolve();
    } catch (err) {
      console.log("Error en login: ", err);
      reject(err);
    }
  });
}
// GUARDAR TOKEN EN LOCAL STORAGE //
export function setAuthToken(token) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  localStorage.setItem(AUTH_TOKEN_KEY, token);
}
// LOGOUT //
export function clearLogin() {
  axios.defaults.headers.common["Authorization"] = "";
  localStorage.removeItem(AUTH_TOKEN_KEY);
  clearAdmin();
}
// COGER EL TOKEN //
export function getAuthToken() {
  return localStorage.getItem(AUTH_TOKEN_KEY);
}
// CONSIGUIENDO FECHA DE EXPIRACIÓN DEL TOKEN //
export function getTokenExpirationDate(encodedToken) {
  let token = jwt(encodedToken);
  // SI NO HAY TOKEN, NO SIGUE //
  if (!token.exp) {
    return null;
  }
  let date = new Date(0);
  date.setUTCSeconds(token.exp);
  return date;
}
// COMPROBANDO SI LA FECHA DEL TOKEN SIGUE VIGENTE O NO //
export function isTokenExpired(token) {
  let expirationDate = getTokenExpirationDate(token);
  return expirationDate < new Date();
}
// COMPROBAR SI EL USER ESTA LOGUEADO O NO //
export function isLoggedIn() {
  let authToken = getAuthToken();
  return !!authToken && !isTokenExpired(authToken);
}
// FUNCIONES PARA COMPROBAR EL ROL DEL USER ==========//
// GUARDAR SI ES ADMIN EN LOCAL STORAGE //
export function setIsAdmin(isAdmin) {
  localStorage.setItem(ROLE, isAdmin);
}
// BORRAR ROL DEL USER EN LOCAL STORAGE //
export function clearAdmin() {
  return localStorage.removeItem(ROLE);
}
// RECUPERAR EL ROL DESDE EL LOCAL STORAGE //
export function getIsAdmin() {
  return localStorage.getItem(ROLE);
}
// COMPROBAR ROL //
export function checkAdmin() {
  let role = false;
  let isAdmin = getIsAdmin();
  if (isAdmin === "true") {
    role = true;
  } else {
    role = false;
  }
  return role;
}