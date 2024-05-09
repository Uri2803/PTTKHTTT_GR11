import { status } from "express/lib/response";
import candidate from "../models/candidate"  

let createCandidate = (req, res) =>{
    const {fullname, birthday, phonenumber, email, username, password} = req.body;
    if(fullname && birthday && phonenumber && email && username && password){
        const cd = {fullname, birthday, phonenumber, email, username, password}
       
        candidate.Create(cd, (err, message) => {
            if(err){
                res.json({status: false, message: 'Lỗi! không thẻ đăng ký, vui lòng thử lại'})
            }
            else{
                res.json({status: true, message: message })
            }
        })
    }
    else{
        res.json({status: false, message: 'Vui lòng điền đầy đủ thông tin'})
    }

}

let createCV = (req, res) =>{
    const {CandidateID, PostingID, Experience, Level, Skill, AboutYourself} = req.body;
    const cv= {CandidateID, PostingID, Experience, Level, Skill, AboutYourself}
    console.log(cv)
    if(CandidateID && PostingID && Experience && Level && Skill && AboutYourself){
        const cv= {CandidateID, PostingID, Experience, Level, Skill, AboutYourself}
        console.log(cv)
        candidate.createCV (cv, (err, message) =>{
            if(err){
                console.log('err: ', err)
                res.json({status: false, message: 'Lỗi! không thể apply, vui lòng thử lại'})
            }
            else{
                res.json({status: true, message: message })
            }
        })

    }
    else{
        res.json({status: false, message: 'Vui lòng điền đầy đủ thông tin'})
    }

}

let findInfor = (req, res) =>{
    const {userName} = req.body;
    if(userName){
        candidate.findInfor(userName, (err, infor) =>{
            if(err){
                res.json({status: false, message: 'Lỗi không tìm thấy thông tin'})
            }
            else{
                res.json({status: true, userInfor: infor})   
            }
        })
    } 
    else{
        res.json({status: false, message: 'Vui lòng điền đầy đủ thông tin'})

    }
}

module.exports = {
    createCandidate: createCandidate,
    createCV: createCV,
    findInfor: findInfor
}