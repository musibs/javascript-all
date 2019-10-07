let express = require('express');
let router = express.Router();

router.get('/hello', (req, res) => res.json('Hello World'));

module.exports = router;