import { url } from "~/apis/config";

const createcompany  = async (companydata) => {
  return fetch(url.REST_API + "/createcompany", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(
      {
        CompanyName: companydata.companyname,
        Email: companydata.email,
        PhoneNumber: companydata.phonenumber,
        TaxCode: companydata.taxcode,
        Address: companydata.address,
        CompanyRepresentative: companydata.companyrepresentative,
        CompanyDescription: companydata.companydescription
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

export default createcompany;