const express = require('express');
const app = express();
const recaptcha = require('./api/recaptcha');

app.use(express.json({extended: false}));

app.use('/api/recaptcha', recaptcha);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log('Server is running on port: ${PORT}'));