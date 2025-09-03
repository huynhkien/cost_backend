const express = require('express');
const cors = require('cors');
require('dotenv').config();
const dmCU2Router = require('./src/routes/dmCU2Route');
const dmS1Router = require('./src/routes/dmS1Route');
const qltkRouter = require('./src/routes/qltkRoute');
const giaCU2Router = require('./src/routes/giaCU2Route');
const giaS1Router = require('./src/routes/giaS1Route');
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
module.exports = app