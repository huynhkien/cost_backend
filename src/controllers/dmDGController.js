const database = require('../config/database');
const sql = require('mssql');
const asyncHandler = require('express-async-handler');

// Định mức đóng gói hũ
const get_dmDGHu = asyncHandler(async (req, res) => {
    const pool = await database.getPool();
    const result = await pool.request().query('SELECT * FROM DMDG_Hu');

    return res.json({
        success: true,
        data: result.recordset
    });
});
// Định mức đóng gói bịch
const get_dmDGBich = asyncHandler(async (req, res) => {
    const pool = await database.getPool();
    const result = await pool.request().query('SELECT * FROM DMDG_BICH');

    return res.json({
        success: true,
        data: result.recordset
    });
});
// Định mức đóng gói túi
const get_dmDGTui = asyncHandler(async (req, res) => {
    const pool = await database.getPool();
    const result = await pool.request().query('SELECT * FROM DMDG_TUI');

    return res.json({
        success: true,
        data: result.recordset
    });
});
// Định mức đóng gói bao
const get_dmDGBao = asyncHandler(async (req, res) => {
    const pool = await database.getPool();
    const result = await pool.request().query('SELECT * FROM DMDG_BAO');

    return res.json({
        success: true,
        data: result.recordset
    });
});
// Định mức đóng gói Bigbag
const get_dmDGBigBag = asyncHandler(async (req, res) => {
    const pool = await database.getPool();
    const result = await pool.request().query('SELECT * FROM DMDG_BIGBAG');

    return res.json({
        success: true,
        data: result.recordset
    });
});
module.exports = {
    get_dmDGHu,
    get_dmDGBich,
    get_dmDGTui,
    get_dmDGBao,
    get_dmDGBigBag
}