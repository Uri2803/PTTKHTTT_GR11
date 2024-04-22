/* eslint-disable no-cond-assign */
import { status } from 'express/lib/response'
import ac from '../models/account'

let login = (req, res) => {
  const { UserName, Password } = req.body
  if (UserName && Password) {
    const account = {UserName, Password}
    ac.Login(account, (err, employeeID)=>{
      if(err){
        console.log(err)
        res.json({status: false, message: 'Username hoặc Password không chính xác'})
      }
      else{
        if(employeeID=='00000'){
          res.json({status: false, message: 'Username hoặc Password không chính xác'})
        }
        else{
          res.json({status: true, employeeID: employeeID})
        }
      }
    })
  }
  else {
    res.json({ status: false, message: 'Vui lòng nhập UserName VÀ Password' })
  }
}


module.exports = {
  login: login

}