import { url } from "~/apis/config";

const searchCompany  = async (searchKey) => {
  return fetch(url.REST_API + "/searchcompany", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(  
        {
            searchKey: searchKey,
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

export default searchCompany  ;