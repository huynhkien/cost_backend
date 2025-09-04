const database = require('../config/database');
const sql = require('mssql');
const asyncHandler = require('express-async-handler');

// Hiển thị thông tin
const get_ctCongThuc = asyncHandler(async (req, res) => {
    const pool = await database.getPool();
    const result = await pool.request().query('SELECT * FROM CHI_TIET_CONG_THUC');

    return res.json({
        success: true,
        data: result.recordset
    });
});
module.exports = {
    get_ctCongThuc,
}