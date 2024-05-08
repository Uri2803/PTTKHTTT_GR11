const { sql, con, connectToDatabase } = require('./connect_DB')

let Create = async (cd, result) => {
  try {
    await connectToDatabase()
    const request = con.request()
    console.log('cd:', cd)
    request.input('fullname', sql.NVARCHAR(100), cd.fullname)
    request.input('birthday', sql.DATE, cd.birthday)
    request.input('phonenumber', sql.CHAR(10), cd.phonenumber)
    request.input('address', sql.NVARCHAR(100), cd.address)
    request.input('email', sql.VARCHAR(50), cd.email)
    request.input('username', sql.VARCHAR(30), cd.username)
    request.input('password', sql.VARCHAR(300), cd.password)
    
    const res = await request.query('EXEC ADD_CANDIDATE @fullname, @birthday, @phonenumber, @address, @email, @username, @password')
    return result(null, 'Đăng ký thành công') 
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
    Create: Create
}