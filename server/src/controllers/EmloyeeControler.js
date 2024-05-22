import { status } from "express/lib/response";
import company from "../models/company";

let getAllCompany = (req, res) => {
    company.getAllComapany((err, company)=>{
        if(err){
            res.json({status: false, message: err})
        }
        else{
            res.json({status: true, company: company})
        }
    })
}

let getRecruimentRegist = (req, res) =>{
    const {companyID} = req.body;
    if(companyID){
        company.getRecruimentRegist(companyID, (err, RecruimentRegist)=>{
            if(err){
                res.json({status: false, message: err})
            }
            else{
                res.json({status: true, registForm: RecruimentRegist})
            }
        })

    }
    else{
        res.json({status: false, message: 'Không có companyID'})
    }
}

let getPosting = (req, res) =>{
    const {companyID} = req.body;
    if(companyID){
        company.getPosting(companyID, (err, posting)=>{
            if(err){
                res.json({status: false, message: err})
            }
            else{
                res.json({status: true, posting: posting})
            }
        })
    }
    else{
        res.json({status: false, message: 'Không có companyID'})
    }
}

let searchCompany = (req, res) =>{
    const {searchKey} =req.body;
    console.log('KEY: ', searchKey)
    if(searchKey){
        company.searchCompany(searchKey, (err, company)=>{
            if(err){
                res.json({status: false, message: err})
            }
            else{
                res.json({status: true, company: company})
            }
        })
    }
    else{
        company.getAllComapany((err, company)=>{
            if(err){
                res.json({status: false, message: err})
            }
            else{
                res.json({status: true, company: company})
            }
        })
    }
}

let getCompanyByID = (req, res) =>{
    const {companyID} = req.body;
    if(companyID){
        company.getCompanyByID(companyID, (err, company)=>{
            if(err){
                res.json({status: false, message: err})
            }
            else{
                res.json({status: true, company: company})
            }
        })
    }
    else{
        res.json({status: false, message: 'Không có companyID'})
    }
    
}

let createRegistForm = (req, res) =>{
    const {CompanyID, 
        AdStartDate, 
        AdEndDate, 
        PositionVacancies,
        NumberRecruitment, 
        JobDescription, 
        Experience,
        Level,
        ExpectedSalary,
        JobType,
        RequiredCandidates,
        AdType} =req.body;

    if(CompanyID && AdStartDate&& AdEndDate &&PositionVacancies &&NumberRecruitment && 
        JobDescription && 
        Experience &&
        Level &&
        ExpectedSalary &&
        JobType &&
        RequiredCandidates &&
        AdType){
        const form = {CompanyID, 
            AdStartDate, 
            AdEndDate, 
            PositionVacancies,
            NumberRecruitment, 
            JobDescription, 
            Experience,
            Level,
            ExpectedSalary,
            JobType,
            RequiredCandidates,
            AdType}
        company.createRegistForm(form, (err, message)=>{
            if(err){
                res.json({status: false, message: 'Lỗi: không thể thêm công ty, vui lòng thử lại'})
            }
            else{
                res.json({status: true, message:message})
            }
        })
    }
    else{
        res.json({status: false, message: 'Vui lòng điền đầy đủ thông tin'})
    }

}

let getRecruimentRegistByID = (req, res) =>{
    const {registFormID} = req.body;
    if(registFormID){
        company.getRecruimentRegistByID(registFormID, (err, registForm)=>{
            if(err){
                console.log(err)
                res.json({status: false, message: err})
            }
            else{
                res.json({status: true, registForm: registForm})
            }
        })
    }
    else{
        res.json({status: false, message: 'Không có Registform'})
    }
     
}
module.exports = {
    getAllCompany: getAllCompany,
    getRecruimentRegist: getRecruimentRegist,
    getPosting: getPosting,
    searchCompany: searchCompany,
    getCompanyByID: getCompanyByID,
    createRegistForm: createRegistForm,
    getRecruimentRegistByID: getRecruimentRegistByID
}