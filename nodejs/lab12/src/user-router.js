const express = require('express')
const path = require('path')
const router = express.Router()


const users = []

router.get('/', (req, res) => {
    res.render(path.join(__dirname, '..', 'views', 'users.html'), { users });
});

router.post('/', (req, res) => {
    users.push(req.body.user)
    res.redirect('/users')
});

module.exports = router;