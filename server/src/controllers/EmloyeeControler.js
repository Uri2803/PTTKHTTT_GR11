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

module.exports = {
    getAllCompany: getAllCompany,
    getRecruimentRegist: getRecruimentRegist,
    getPosting: getPosting,
    searchCompany: searchCompany,
    getCompanyByID: getCompanyByID
}