const database = require('../config/database');
const sql = require('mssql');
const asyncHandler = require('express-async-handler');

const get_dsNVL = asyncHandler(async (req, res) => {
    const pool = await database.getPool();
    const result = await pool.request().query('SELECT * FROM DS_NVL');

    return res.json({
        success: true,
        data: result.recordset
    });
});
const get_dsVTDG = asyncHandler(async (req, res) => {
    const pool = await database.getPool();
    const result = await pool.request().query('SELECT * FROM DS_VTDG');

    return res.json({
        success: true,
        data: result.recordset
    });
});
const get_dsCONGTHUC = asyncHandler(async (req, res) => {
    const pool = await database.getPool();
    const result = await pool.request().query('SELECT * FROM DS_CONG_THUC');

    return res.json({
        success: true,
        data: result.recordset
    });
});
module.exports = {
    get_dsNVL,
    get_dsVTDG,
    get_dsCONGTHUC
}