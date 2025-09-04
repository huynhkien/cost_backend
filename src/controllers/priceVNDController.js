const database = require('../config/database');
const sql = require('mssql');
const asyncHandler = require('express-async-handler');

const get_priceVND = asyncHandler(async (req, res) => {
    const pool = await database.getPool();
    const result = await pool.request().query('SELECT * FROM Price_VND');

    return res.json({
        success: true,
        data: result.recordset
    });
});
module.exports = {
    get_priceVND
}