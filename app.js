const express = require('express');
const cors = require('cors');
require('dotenv').config();
const dmCU2Router = require('./src/routes/dmCU2Route')
const qltkRouter = require('./src/routes/qltkRoute')
const app = express()
// cors
app.use(cors())
// route
app.get('/', (req, res) => {
    return res.json({
        message: 'Server đang chạy'
    });
});
app.use('/api/dmCU2',dmCU2Router)
app.use('/api/qltk',qltkRouter)
module.exports = app