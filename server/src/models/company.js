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
module.exports = {
    Create: Create,
}