import { Token } from "./../storage";
import { auth } from "../../services/Auth/AuthActions";
import { store } from "./../../store";

const API_URL = "http://localhost:8550/mb";

class Api {
  GET(url) {
    url = new URL(`${API_URL}/${url}`);
    return fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${Token.GetToken()}`,
      },
    })
      .then(async (res) => {
        if (res.status === 401) {
          store.dispatch(auth.logout());
          return res;
        }
        res.payload = await res.json();
        return res;
      })
      .catch((err) => err);
  }

  POST(url, body, header) {
    let dataBody = JSON.stringify(body);
    console.log(dataBody);
    return fetch(`${API_URL}/${url}`, {
      method: "POST",
      headers: header
        ? header
        : {
            Accept: "application/json",
            "Content-type": "application/json",
            Authorization: `Bearer ${Token.GetToken()}`,
          },
      body: dataBody,
    })
      .then(async (res) => {
        if (res.status === 401) {
          store.dispatch(auth.logout());
          return res;
        }
        res.payload = await res.json();
        return res;
      })
      .catch((err) => err);
  }

  PUT(url, body, header) {
    console.log(url);
    console.log(body);
    return fetch(`${API_URL}/${url}`, {
      method: "PUT",
      headers: header
        ? header
        : {
            Accept: "application/json",
            "Content-type": "application/json",
            Authorization: `Bearer ${Token.GetToken()}`,
          },
      body: JSON.stringify(body),
    })
      .then(async (res) => {
        if (res.status === 401) {
          store.dispatch(auth.logout());
          return res;
        }
        res.payload = await res.json();
        return res;
      })
      .catch((res) => res);
  }

  DELETE(url, body, header) {
    return fetch(`${API_URL}/${url}`, {
      method: "DELETE",
      headers: header
        ? header
        : {
            Accept: "application/json",
            "Content-type": "application/json",
            Authorization: `Bearer ${Token.GetToken()}`,
          },
      body: body ? body : "",
    })
      .then(async (res) => {
        if (res.status === 401) {
          store.dispatch(auth.logout());
          return res;
        }
        res.payload = await res.json();
        return res;
      })
      .catch((err) => err);
  }
}

export default new Api();
