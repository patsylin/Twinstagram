const cors = require('cors');
app.use(cors());

const client = require('./db/client');
client.connect();

//Router: /api
//app.use('/api', require('./api'));
