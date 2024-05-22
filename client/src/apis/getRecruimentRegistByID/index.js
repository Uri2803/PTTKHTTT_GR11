import { url } from "~/apis/config";

const getRecruimentRegistByID  = async (registFormID) => {
  return fetch(url.REST_API + "/cruimentregistform", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(  
        {
            registFormID: registFormID,
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

export default getRecruimentRegistByID;