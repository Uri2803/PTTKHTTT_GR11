/* eslint-disable no-console */
const { sql, con, connectToDatabase } = require('./connect_DB')
let getAllPosting = async (result) => {
  try {
    await connectToDatabase()
    const request = con.request()
    const res = await request.query('EXEC GET_ALL_POSTING')
    return result(null, res.recordset); 
  }
  catch (err) {
    console.log(err);
    return result(err, null)
  }
  finally {
    sql.close()
  }
}


module.exports = {
    getAllPosting: getAllPosting
}