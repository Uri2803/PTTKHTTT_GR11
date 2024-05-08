import { status } from "express/lib/response";
import candidate from "../models/candidate"  

let createCandidate = (req, res) =>{
    const {fullname, birthday, phonenumber, email, username, password} = req.body;
    console.log(req)
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

module.exports = {
    createCandidate: createCandidate
}