const { sql, con, connectToDatabase } = require('./connect_DB')

let Create = async (co, result) => {
  try {
    await connectToDatabase()
    const request = con.request()
    request.input('companyname', sql.NVARCHAR(100), co.CompanyName)
    request.input('email', sql.VARCHAR(50), co.Email)
    request.input('phonenumber', sql.CHAR(10), co.PhoneNumber )
    request.input('taxcode', sql.VARCHAR(10), co.TaxCode)
    request.input('address', sql.NVARCHAR(100), co.Address)
    request.input('companyrepresentative', sql.NVARCHAR(50), co.CompanyRepresentative )
    request.input('companydescription', sql.NVARCHAR(500), co.CompanyDescription)
    const res = await request.query('EXEC CREATE_COMPANY @companyname, @email, @phonenumber, @taxcode, @address, @companyrepresentative, @companydescription')
    return result(null, 'Thêm công ty thành công') 
  }
  catch (err) {
    console.log(err)
    return result(err, null)
  }
  finally {
    sql.close()
  }
}

let GetInfor = async (PostingID, result) => {
  try {
    await connectToDatabase()
    const request = con.request()
    request.input('PostingID', sql.VARCHAR(5), PostingID)
    const res =  await request.query('EXEC GET_COMPANY_INFOR @PostingID')
    return result(null, res.recordset[0])
  }
  catch (err) {
    return result(err, null)
  }
  finally {
    sql.close()
  }
}

let getAllComapany = async (result) => {
  try {
    await connectToDatabase()
    const request = con.request()
    
    const res =  await request.query('EXEC GET_ALL_COMPANY');
    return result(null, res.recordset)
  }
  catch (err) {
    return result(err, null)
  }
  finally {
    sql.close()
  }

}

let getRecruimentRegist = async (companyID, result) => {
  try {
    await connectToDatabase()
    const request = con.request()
    request.input('companyID', sql.VARCHAR(5), companyID)
    const res =  await request.query('EXEC GET_RECRUITMENT_REGISTRATION @companyID')
    return result(null, res.recordset)
  }
  catch (err) {
    return result(err, null)
  }
  finally {
    sql.close()
  }
}
let getPosting = async (companyID, result) => {
  try {
    await connectToDatabase()
    const request = con.request()
    request.input('companyID', sql.VARCHAR(5), companyID)
    const res =  await request.query('EXEC GET_POSTING @companyID')
    return result(null, res.recordset)
  }
  catch (err) {
    return result(err, null)
  }
  finally {
    sql.close()
  }
}

let searchCompany = async (searchKey, result) => {
  try {
    await connectToDatabase()
    const request = con.request()
    request.input('serchkey', sql.NVARCHAR(30), searchKey)
    const res =  await request.query('EXEC SEARCH_COMPANY @serchkey')
    return result(null, res.recordset)
  }
  catch (err) {
    return result(err, null)
  }
  finally {
    sql.close()
  }
}

module.exports = {
    Create: Create,
    GetInfor: GetInfor,
    getAllComapany: getAllComapany,
    getRecruimentRegist: getRecruimentRegist,
    getPosting: getPosting,
    searchCompany: searchCompany
}