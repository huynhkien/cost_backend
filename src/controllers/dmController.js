const database = require('../config/database');
const sql = require('mssql');
const asyncHandler = require('express-async-handler');

// Hiển thị danh sách nguyên liệu
const get_dsNVL = asyncHandler(async (req, res) => {
    const pool = await database.getPool();
    const result = await pool.request().query('SELECT * FROM DS_NVL');

    return res.json({
        success: true,
        data: result.recordset
    });
});
// Hiển thị danh sách Vtdg
const get_dsVTDG = asyncHandler(async (req, res) => {
    const pool = await database.getPool();
    const result = await pool.request().query('SELECT * FROM DS_VTDG');

    return res.json({
        success: true,
        data: result.recordset
    });
});
// Hiển thị danh sách công thức
const get_dsCONGTHUC = asyncHandler(async (req, res) => {
    const pool = await database.getPool();
    const result = await pool.request().query('SELECT * FROM DS_CONG_THUC');

    return res.json({
        success: true,
        data: result.recordset
    });
});
// Hiển thị chi tiết công thức
const get_dsCTDetail = asyncHandler(async (req, res) => {
    const {ten_ct} = req.query;
    const pool = await database.getPool();
    if (!ten_ct || ten_ct.trim() === '') throw new Error('Tên công thức không được để trống')
    const result = await pool.request()
        .input('TenCT', sql.NVarChar, decodeURIComponent(ten_ct.trim()))
        .query(
        `SELECT * 
        FROM CHI_TIET_CONGTHUC
        WHERE Ten_CT = @TenCT`
        )
    return res.json({
        success: true,
        data: result.recordset
    });
}) 
module.exports = {
    get_dsNVL,
    get_dsVTDG,
    get_dsCONGTHUC,
    get_dsCTDetail
}