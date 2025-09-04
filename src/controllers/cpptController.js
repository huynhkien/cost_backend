const database = require('../config/database');
const sql = require('mssql');
const asyncHandler = require('express-async-handler');

// Hiển thị thông tin cppt02
const get_cppt02 = asyncHandler(async (req, res) => {
    const pool = await database.getPool();
    const result = await pool.request().query('SELECT * FROM CPPT_02');

    return res.json({
        success: true,
        data: result.recordset
    });
});
// Hiển thị thông tin cppts1
const get_cpptS1 = asyncHandler(async (req, res) => {
    const pool = await database.getPool();
    const result = await pool.request().query('SELECT * FROM CPPT_S1');

    return res.json({
        success: true,
        data: result.recordset
    });
});
module.exports = {
    get_cppt02,
    get_cpptS1
}