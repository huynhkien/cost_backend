const sql = require('mssql');
const config = require('./index'); 

let pool;
async function ConnectDatabase() {
    try {
        pool = await sql.connect({
            user: config.db_login.key, // Tên nhập sql server
            password: config.db_password.key, // Mật khẩu đăng nhập sql server
            server: config.db_server.key,   // Địa chỉ ip
            database: config.db_name.key, // Tên database
            options: {
                encrypt: false,          // dùng cho Azure
                trustServerCertificate: true // dùng cho SQL Server trong LAN
            }
        });
        console.log('Kết nối SQL Server thành công');
        return pool;
    } catch (error) {
        console.error('Không kết nối được tới SQL SERVER:', error);
    }
}

// Hàm để controller lấy pool
function getPool() {
    if (!pool) throw new Error('Database chưa kết nối');
    return pool;
}

module.exports = { ConnectDatabase, getPool };
