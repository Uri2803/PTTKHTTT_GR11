import { url } from "~/apis/config";

const loadLogin  = async () => {
  return fetch(url.REST_API + "/loadlogin", {
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

export default loadLogin ;