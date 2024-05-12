import { url } from "~/apis/config";

const getallcompany  = async () => {
  return fetch(url.REST_API + "/getallcompany", {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(  
    ),
  })
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      return response;
    });
};

export default getallcompany ;