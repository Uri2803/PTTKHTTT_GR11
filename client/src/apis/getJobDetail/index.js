import { url } from "~/apis/config";

const getjobdetail = async (id) => {
  return fetch(`${url.REST_API}/getjobdetail?PostingID=${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      return response;
    });
};

export default getjobdetail;
