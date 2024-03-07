const { sql, con, connectToDatabase } = require('./connect_DB');
import bcrypt from "bcrypt";

let findUser = async (UserName, result) => {
  try {
    console.log(UserName);
    await connectToDatabase(); 
    const request = con.request();
    request.input('UserName', sql.VarChar(30), UserName);
    const res = await request.query("EXEC FIND_USER @UserName");
    return result(null, res.recordset[0]);
  } 
  catch (err) {
    console.log(err);
    return result(err, null);
  } 
  finally {
    sql.close();
  }
};


module.exports = {
    findUser: findUser,
}