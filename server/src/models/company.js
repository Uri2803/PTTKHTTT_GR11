const { sql, con, connectToDatabase } = require('./connect_DB')

let CreateComapany = async (co, result) => {
  try {
    await connectToDatabase()
    const request = con.request()
    request.input('username', sql.VarChar(30), account.UserName)
    request.input('password', sql.VarChar(30), account.Password)
    const res = await request.query('SELECT dbo.Login(@username, @password) AS RES')
    return result(null, res.recordset[0].RES) 
  }
  catch (err) {
    console.log(err)
    return result(err, null)
  }
  finally {
    sql.close()
  }
}


module.exports = {
    CreateComapany: CreateComapany,
}