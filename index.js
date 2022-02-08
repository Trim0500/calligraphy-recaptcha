const express = require('express');
const app = express();
const recaptcha = require('./api/recaptcha');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(express.json());
app.use(bodyParser.json({
    type: "*/*"    
}));
dotenv.config({path: './.env'});

app.use(express.json({extended: false}));

app.use('/api/recaptcha', recaptcha);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));