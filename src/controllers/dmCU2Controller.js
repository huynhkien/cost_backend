const database = require('../config/database');
const sql = require('mssql');
const asyncHandler = require('express-async-handler');

// HIển thị thông tin
const get_dmCU2 = asyncHandler(async (req, res) => {
    const pool = await database.getPool();
    const result = await pool.request().query('SELECT * FROM DM_CU2');

    return res.json({
        success: true,
        data: result.recordset
    });
});
// Thêm thông tin
const create_dmCU2 = asyncHandler(async (req, res) => {
    const data = req.body; 

    const pool = database.getPool();
    const query = `
        INSERT INTO DM_CU2 (
            Ten_btp, Ure, Dap, Kali_belarus, Kali_Sulfate, NHumate,
            Npk161616, Npk190919, Npk180818, Ca, Mg, N1, N2, N3, Black,
            Violet, Yellow, Red, Blue, Mautrang, Citric, Naoh, Solubor,
            Mn_edta, Zn_edta, Fe_edta, Cu_edta, Nh4, Prev, Supergap,
            Iaa, Iba, Pvas, Pva, Gut, Nbpt, Thancam, Dien, Ro, Thuycuc,
            Thoigian, Csthang, Hieusuat, Tong, Pvas20, Pva20
        ) VALUES (
            @Ten_btp, @Ure, @Dap, @Kali_belarus, @Kali_Sulfate, @NHumate,
            @Npk161616, @Npk190919, @Npk180818, @Ca, @Mg, @N1, @N2, @N3, @Black,
            @Violet, @Yellow, @Red, @Blue, @Mautrang, @Citric, @Naoh, @Solubor,
            @Mn_edta, @Zn_edta, @Fe_edta, @Cu_edta, @Nh4, @Prev, @Supergap,
            @Iaa, @Iba, @Pvas, @Pva, @Gut, @Nbpt, @Thancam, @Dien, @Ro, @Thuycuc,
            @Thoigian, @Csthang, @Hieusuat, @Tong, @Pvas20, @Pva20
        )
    `;

    const request = pool.request();

    // Gán dữ liệu JSON vào các parameter
    for (let key in data) {
        request.input(key, data[key]); 
    }

    await request.query(query);

    return res.json({
        success: true,
        message: 'Thêm thành công'
    })
});
// Edit thông tin
const edit_dmCU2 = asyncHandler(async(req, res) => {
    const {id} = req.params;
    const data = req.body;
    if(!id) throw new Error('Không tìm thấy ID!!!');
    const pool = database.getPool();
    // Tạo query tự động từ JSON
    let setQuery = [];
    for (let key in data) {
        setQuery.push(`${key} = @${key}`)
    }
    const query = `
        UPDATE DM_CU2
        SET ${setQuery.join(', ')}
        WHERE Id = ${id}
    `
    const request = pool.request();
    request.input('Id', id);
    for (let key in data) {
        request.input(key, data[key]);
    }

    await request.query(query);

    return res.json({
        success: true,
        message: 'Cập nhật thành công'
    });
});
// Xóa thông tin
const delete_dmCU2 = asyncHandler(async(req, res) => {
    const {id}= req.params;
    if(!id) throw new Error('Không tìm thấy ID!!!');
    const pool = database.getPool();
    // Tạo query tự động từ JSON
    
    const query = `
        DELETE DM_CU2
        WHERE Id = ${id}
    `
    const request = pool.request();
    request.input('Id', id);

    await request.query(query);

    return res.json({
        success: true,
        message: 'Xóa thành công'
    });
})
module.exports = {
    get_dmCU2,
    create_dmCU2,
    edit_dmCU2,
    delete_dmCU2
}