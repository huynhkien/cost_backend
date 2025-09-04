const database = require('../config/database');
const sql = require('mssql');
const asyncHandler = require('express-async-handler');

const get_dmSanNVL = asyncHandler(async (req, res) => {
    const pool = await database.getPool();
    const result = await pool.request().query('SELECT * FROM DM_SANG_NVL');

    return res.json({
        success: true,
        data: result.recordset
    });
});
module.exports = {
    get_dmSanNVL
}