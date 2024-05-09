const { sql, con, connectToDatabase } = require('./connect_DB')

let Create = async (cd, result) => {
  try {
    await connectToDatabase()
    const request = con.request()
    request.input('fullname', sql.NVARCHAR(100), cd.fullname)
    request.input('birthday', sql.DATE, cd.birthday)
    request.input('phonenumber', sql.CHAR(10), cd.phonenumber)
    request.input('email', sql.VARCHAR(50), cd.email)
    request.input('username', sql.VARCHAR(30), cd.username)
    request.input('password', sql.VARCHAR(300), cd.password)
    
    const res = await request.query('EXEC ADD_CANDIDATE @fullname, @birthday, @phonenumber, @email, @username, @password')
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

let createCV = async (cv, result) =>{
  try {
    await connectToDatabase()
    const request = con.request()
    request.input('candidateid', sql.NVARCHAR(5), cv.CandidateID)
    request.input('postingid', sql.NVARCHAR(5), cv.PostingID)
    request.input('experience', sql.NVARCHAR(30), cv.Experience)
    request.input('level', sql.NVARCHAR(50), cv.Level)
    request.input('skill', sql.NVARCHAR(100), cv.Skill)
    request.input('aboutyourself', sql.NVARCHAR(300), cv.AboutYourself)
    const res = await request.query('EXEC CREATE_CV @candidateid, @postingid, @experience, @level, @skill, @aboutyourself')
    return result(null, 'Đăng ký thành công')

  }
  catch (err) {
    return result(err, null)
  }
  finally {
    sql.close()
  }
}

let findInfor = async (userName, result) => {
  try{
    await connectToDatabase()
    const request = con.request()
    request.input('username', sql.VARCHAR(30), userName)
    const res = await request.query ('EXEC FIND_INFOR @username')
    return result (null, res.recordset[0])
  }
  catch (err) {
    return result(err, null)
  }
  finally{
    sql.close()
  }

}
module.exports = {
    Create: Create,
    createCV: createCV,
    findInfor: findInfor
}