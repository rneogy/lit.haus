// dependencies
const express = require('express');
const router = express.Router();

// public endpoints
router.get('/', function(req, res, next) {
    res.sendFile('index.html', { root: 'views' });
});

module.exports = router;
