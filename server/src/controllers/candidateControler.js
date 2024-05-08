import { status } from "express/lib/response";
import candidate from "../models/candidate"  

let createCandidate = (req, res) =>{
    const {fullname, birthday, phonenumber, address, email, username, password} = req.body;
    
    if(fullname && birthday && phonenumber && address && email && username && password){
        const cd = {fullname, birthday, phonenumber, address, email, username, password}
        console.log(cd)
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