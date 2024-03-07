import sql from "mssql";
require ('dotenv').config();

const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: 'localhost',
    port: parseInt(process.env.DB_PORT),
    database: process.env.DB_DATABASE,
    options: {
        encrypt: true,
        trustServerCertificate: true, 
    },

}

const con = new sql.ConnectionPool(config);

const connectToDatabase = async () => {
  try {
    await con.connect();
    console.log('Kết nối thành công đến cơ sở dữ liệu');
  } catch (err) {
    console.error('Không thể kết nối đến cơ sở dữ liệu:', err);
  }
};

module.exports = { sql, con, connectToDatabase };

