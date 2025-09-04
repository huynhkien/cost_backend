const database = require('../config/database');
const sql = require('mssql');
const asyncHandler = require('express-async-handler');

// HIển thị thông tin
const get_dmKH = asyncHandler(async (req, res) => {
    const pool = await database.getPool();
    const result = await pool.request().query('SELECT * FROM DM_KHAU_HAO');

    return res.json({
        success: true,
        data: result.recordset
    });
});
module.exports = {
    get_dmKH,
}