/* eslint-disable no-cond-assign */
import ac from '../models/account'

let login = (req, res) => {
  const { UserName, Password } = req.body
  if (UserName && Password) {
    ac.findUser(UserName, (err, user) => {
      if (!user?.password) {
        res.json({ status: false, message: 'Không tìm thấy UserName' })
      }
      else if (user?.password && user.password == Password) {
        res.json({ status: true, user: user })
      }
      else {
        res.json({ status: false, message: 'Mật khâu không đúng' })
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