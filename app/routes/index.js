var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('home', {
        title: 'Feed Me',
        message: 'いっぺん、死んでみる？'
    });
});

module.exports = router;
