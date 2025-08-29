const app = require('./app')
const db = require('./src/config/database');
const config = require('./src/config/index');
const PORT = config.port.key
// chạy server
db.ConnectDatabase();
app.listen(PORT, () => {console.log(`Server đang chạy ở cổng ${PORT}`)});
