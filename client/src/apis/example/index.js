import { url } from "~/apis/Config";

const example = async (/* Truyền tham số */) => {
  return fetch(url.REST_API + "/login", {
    method: "get",  // có thể thay đổi phương thức phù hợp
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
        /* Truyền dữ liệu dạng json*/
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      return response;
    });
};



export default example;



