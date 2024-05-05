/* eslint-disable no-cond-assign */
// import { status } from 'express/lib/response'
import { status } from 'express/lib/response'
import ac from '../models/account'
import home from '../models/home'

let login = (req, res) => {
  const { UserName, Password } = req.body
  if (UserName && Password) {
    const account = { UserName, Password }
    ac.Login(account, (err, employeeID) => {
      if (err) {
        res.json({
          status: false,
          message: 'Username hoặc Password không chính xác'
        })
      } else if (employeeID == '00000') {
        res.json({
          status: false,
          message: 'Username hoặc Password không chính xác'
        })
      } else {
        res.json({ status: true, employeeID: employeeID })
      }
    })
  } else {
    res.json({ status: false, message: 'Vui lòng nhập UserName VÀ Password' })
  }
}

let getAllPosting = (req, res) =>{
    home.getAllPosting((err, posting)=>{
      if(err){
        res.json({
          status: false,
          posting: false,
        })
      }
      else{
        res.json({
          status:true,
          posting: posting})
      }
    })
  
}

module.exports = {
  login: login,
  getAllPosting: getAllPosting
}
