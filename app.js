const express = require('express');
const cors = require('cors');
require('dotenv').config();
const dmCU2Router = require('./src/routes/dmCU2Route');
const dmS1Router = require('./src/routes/dmS1Route');
const qltkRouter = require('./src/routes/qltkRoute');
const giaCU2Router = require('./src/routes/giaCU2Route');
const giaS1Router = require('./src/routes/giaS1Route');   
const giaNVLRouter = require('./src/routes/giaNVLRoute');   
const giaVTDGRouter = require('./src/routes/giaVTDGRoute');   
const dmSanNVLRouter = require('./src/routes/dmSanNVLRoute');
const dmDGRouter = require('./src/routes/dmDGRoute');   
const dmRouter = require('./src/routes/dmRoute');   
const ctCongThucRouter = require('./src/routes/ctCongThucRoute');   
const cpptRouter = require('./src/routes/cpptRoute');   
const dmKHRouter = require('./src/routes/dmKHRoute');    
const khCsThangRouter = require('./src/routes/khCsThangRoute');    
const priceVNDRouter = require('./src/routes/priceVNDRoute');    
const app = express()
// cors
app.use(cors())
// route
app.get('/', (req, res) => {
    return res.json({
        message: 'Server đang chạy'
    });
});
app.use('/api/dmCU2',dmCU2Router);
app.use('/api/dmS1',dmS1Router);
app.use('/api/giaCU2', giaCU2Router);
app.use('/api/giaS1', giaS1Router);
app.use('/api/qltk',qltkRouter);
app.use('/api/giaNVL',giaNVLRouter);
app.use('/api/giaVTDG',giaVTDGRouter);
app.use('/api/dmSanNVL',dmSanNVLRouter);
app.use('/api/dmDG',dmDGRouter);
app.use('/api/dm',dmRouter);
app.use('/api/ct',ctCongThucRouter);
app.use('/api/cppt',cpptRouter);
app.use('/api/dmKH', dmKHRouter);
app.use('/api/khCsThang', khCsThangRouter);
app.use('/api/priceVND', priceVNDRouter);
module.exports = app