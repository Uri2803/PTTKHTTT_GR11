import { url } from "~/apis/config";

const login  = async (username, password) => {
  return fetch(url.REST_API + "/login", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(
      {
        UserName: username,
        Password: password,
      },
    ),
  })
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      return response;
    });
};

export default login;