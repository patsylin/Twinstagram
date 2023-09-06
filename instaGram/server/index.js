const cors = require('cors');
app.use(cors());

const client = require('./db/client');
client.connect();
