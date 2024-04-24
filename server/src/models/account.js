/* eslint-disable no-console */
const { sql, con, connectToDatabase } = require('./connect_DB')
import bcrypt from 'bcrypt'

let Login = async (account, result) => {
  try {
    await connectToDatabase()
    const request = con.request()
    request.input('username', sql.VarChar(30), account.UserName)
    request.input('password', sql.VarChar(30), account.Password)
    const res = await request.query('EXEC LOGIN @username, @password')
    return result(null, res.recordset[0]); 
  }
  catch (err) {
    return result(err, null)
  }
  finally {
    sql.close()
  }
}


module.exports = {
  Login:Login
}