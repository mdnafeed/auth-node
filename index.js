const express = require('express')
const bodyParser = require('body-parser');
const urlRoute = require('./routes/url');
const { connectMongoDB } = require('./config/mongo-db');

const app = express();
const PORT = 3000;

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/url',urlRoute);
connectMongoDB('mongodb://127.0.0.1:27017/admin')

app.listen(PORT,()=>console.log(`Server is connected with the PORT of ${PORT}`));