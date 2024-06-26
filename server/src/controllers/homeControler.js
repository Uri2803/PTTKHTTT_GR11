/* eslint-disable no-cond-assign */
// import { status } from 'express/lib/response'
import { status } from 'express/lib/response'
import ac from '../models/account'
import home from '../models/home'
import co from '../models/company'

let login = (req, res) => {
  const { UserName, Password } = req.body
  if (UserName && Password) {
    const account = {UserName, Password}
    ac.Login(account, (err, infor)=>{
      if(err){
        res.json({status: false, message: 'Username hoặc Password không chính xác'})
      }
      else{
          res.json({status: true, ID:infor.ID,  Role: infor.RoleName, UserName: infor.UserName})
      }
    })
  }
  else {
    res.json({ status: false, message: 'Vui lòng nhập Username và Password' })
  }
}

let getAllPosting = (req, res) =>{
  console.log(req.session)
    home.getAllPosting((err, posting)=>{
      
      if(err){
        res.json({status: false, posting: false,
        })
      }
      else{

        res.json({status:true, posting: posting})

      }
    })
}

let getJobDetail = (req, res) => {
  const PostingID = req.query.PostingID;
  home.getJobDetail(PostingID, (err, posting) =>{
    if(err){
      res.json({status: false, JobDetail: null})
    }
    else{
      co.GetInfor(PostingID, (err, company)=>{
        if(err){
          res.json({status: false, JobDetail: null})   
        }
        else{
          const JobDeTail = {posting, company}
          res.json({status: true, JobDetail: JobDeTail})
        }
      })
    }
  })
}



module.exports = {
  login: login,
  getAllPosting: getAllPosting,
  getJobDetail: getJobDetail,

}
