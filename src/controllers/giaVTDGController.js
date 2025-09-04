const database = require('../config/database');
const sql = require('mssql');
const asyncHandler = require('express-async-handler');

// HIển thị thông tin
const get_giaVTDG = asyncHandler(async (req, res) => {
    const pool = await database.getPool();
    const result = await pool.request().query('SELECT * FROM Gia_VTDG');

    return res.json({
        success: true,
        data: result.recordset
    });
});
module.exports = {
    get_giaVTDG
}