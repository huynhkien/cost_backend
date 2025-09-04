const database = require('../config/database');
const sql = require('mssql');
const asyncHandler = require('express-async-handler');

// HIển thị thông tin
const get_giaNVL = asyncHandler(async (req, res) => {
    const pool = await database.getPool();
    const result = await pool.request().query('SELECT * FROM Gia_NVL');

    return res.json({
        success: true,
        data: result.recordset
    });
});
module.exports = {
    get_giaNVL
}