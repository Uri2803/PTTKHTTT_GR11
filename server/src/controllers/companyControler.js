
import { status } from "express/lib/response";
import company from "../models/company"


let CreateCompany = (req, res) =>{
    const {CompanyName, Email, PhoneNumber, TaxCode, Address, CompanyRepresentative, CompanyDescription} = req.body;
    const co = {CompanyName, Email, PhoneNumber, TaxCode, Address, CompanyRepresentative, CompanyDescription}
    if(CompanyName &&Email && PhoneNumber && TaxCode && Address && CompanyRepresentative && CompanyDescription)
    company.Create(co, (err, message)=>{
        if(err){
            res.json({status: false, message: 'Lỗi: không thể thêm công ty, vui lòng thử lại'})
        }
        else{
            res.json({status: true, message:message})
        }
    })
    else{
        res.json({status: false, message: 'Vui lòng điền đầy đủ thông tin'})
    }

}

let GetCompanyInfor = (req, res) => {
    const { companyID } = req.body
    company.GetInfor(companyID, (err, companyInfor)=>{
        if(err) {
            console.log(err)
            res.json({status: false, message: 'Không tìm thấy company' })
        }
        else {
            res.json({ status: true, companyInfor: companyInfor })
        }
    })
}


module.exports = {
    CreateCompany: CreateCompany,
    GetCompanyInfor: GetCompanyInfor


}