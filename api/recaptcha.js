const express = require('express');
const router = express.Router();
var request = require('request');

router.get('/', async (req, res) => {
    try {
        res.json({
            status: 200,
            message: 'GET data successful'
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).send("Server error");
    }
})

router.post('/', async function(req, res) {
    try {
        let response = req.body.token;
        let secret = !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? '6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe' : process.env.REACT_APP_RECAPTCHA_SERVER_KEY;
        let api = 'https://www.google.com/recaptcha/api/siteverify?secret=' + secret + '&response=' + response

        console.log(api);

        request(api, function(error, response, body){
            if(error) {
                console.error(error);
            }
            else {
                res.statusCode = 200;
                console.log(body);
                res.send(body);
            }
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).send("Server error");
    }
})

module.exports = router