const connectToMongo = require('./db');
const express = require("express");
require("dotenv").config({ path: __dirname + "/.env" });
const cors = require('cors');

connectToMongo();
const app = express();
const port=8080
app.use(cors());
app.use(express.json());

app.use('/api/auth',require('./routes/auth'));
app.use('/api/notes',require('./routes/notes'));

app.listen(port, () => {
console.log(`🚀 Server running on port ${port}` );
});