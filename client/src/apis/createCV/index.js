import { url } from "~/apis/config";

const createcv  = async (CV) => {
  return fetch(url.REST_API + "/createCV", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(
      {
        CandidateID: CV.candidateid,
        PostingID: CV.postingid,
        Experience: CV.experience,
        Level: CV.level,
        Skill: CV.skill,
        AboutYourself: CV.aboutyourself
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

export default createcv;