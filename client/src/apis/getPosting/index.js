import { url } from "~/apis/config";

const getPosting  = async (companyID) => {
  return fetch(url.REST_API + "/getposting", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(  
        {
            companyID: companyID,
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

export default getPosting ;