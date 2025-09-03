const database = require('../config/database');
const asyncHandler = require('express-async-handler');

// HIển thị thông tin
const get_giaS1 = asyncHandler(async (req, res) => {
    const pool = await database.getPool();
    const result = await pool.request().query('SELECT * FROM Gia_BTP_S1');

    return res.json({
        success: true,
        data: result.recordset
    });
});
module.exports = {
    get_giaS1,
}