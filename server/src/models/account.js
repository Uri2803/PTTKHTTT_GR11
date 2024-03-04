const { sql, db, connectToDatabase } = require('../models/connect_DB');
import bcrypt from "bcrypt";

let findUser = async (username, result) => {
  try {
    await connectToDatabase(); 
    const request = db.request();
    request.input('UserName', sql.NVarChar(20), username);
    const res = await request.query("EXEC GetUserByUsername @UserName");
    return result(null, res.recordset[0]);
  } 
  catch (err) {
    return result(err, null);
  } 
  finally {
    sql.close();
  }
};




module.exports = {
    findUser: findUser,
}