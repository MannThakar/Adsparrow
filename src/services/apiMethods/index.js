import axios from "axios";

const BASE_URL = "http://devadsparrowapi.bdccoder.in/api";

export const getApi = (endpoint) => {
  return axios
    .get(BASE_URL + endpoint, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => console.log(res))
    .catch((error) => console.log(error));
};

export const postApi = (endpoint, body, isAuth = false) => {
  return axios
    .post(
      BASE_URL + endpoint,
      {
        headers:
          localStorage.getItem("token") && isAuth
            ? {
                Authorization: `Bearer ${getLocalStorageItem("token")}`,
              }
            : {},
        "Content-Type": "application/json",
      },
      body
    )
    .then((res) => res)
    .catch((e) => console.log(e));
};
