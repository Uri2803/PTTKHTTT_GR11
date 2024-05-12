import { url } from "~/apis/config";

const createRecruimentRegist = async (form) => {
  return fetch(url.REST_API + "/createrecruimentregist", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      CompanyID: form.CompanyID,
      AdStartDate: form.AdStartDate,
      AdEndDate: form.AdEndDate,
      PositionVacancies: form.PositionVacancies,
      NumberRecruitment: form.NumberRecruitment,
      JobDescription: form.JobDescription,
      Experience: form.Experience,
      Level: form.Level,
      ExpectedSalary: form.ExpectedSalary,
      JobType: form.JobType,
      RequiredCandidates:  form.RequiredCandidates,
      AdType: form.AdType
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

export default createRecruimentRegist;