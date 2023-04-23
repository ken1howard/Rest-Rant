const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('GET / foods ')
})

module.exports = router
