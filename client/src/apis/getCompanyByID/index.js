import { url } from "~/apis/config";

const getCompanyByID  = async (companyID) => {
  return fetch(url.REST_API + "/getcompanybyid", {
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

export default getCompanyByID ;