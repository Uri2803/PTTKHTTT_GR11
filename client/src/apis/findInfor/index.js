import { url } from "~/apis/config";

const findInfor  = async (UserName) => {
  return fetch(url.REST_API + "/findinfor", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(  
        {
            userName: UserName,
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

export default findInfor ;