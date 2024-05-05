import { url } from "~/apis/config";

const getAllPosting  = async (username, password) => {
  return fetch(url.REST_API + "/getallposting", {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(
      {
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

export default getAllPosting;