import { url } from "~/apis/config";

const createCandidate = async (candidate) => {
  return fetch(url.REST_API + "/createcandidate", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(
      {
       fullname: candidate.fullname,
       username: candidate.username,
       birthday: candidate.birthday,
       phonenumber: candidate.phonenumber,
       email: candidate.email,
       password: candidate.password
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

export default createCandidate;