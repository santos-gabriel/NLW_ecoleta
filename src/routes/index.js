const router = require('express').Router()

router.use('/', require('./home'))
router.use('/create-point', require('./create-point'))
router.use('/savepoint', require('./save-point'))
router.use('/search', require('./search-results'))

router.use((req, res) => {
    res.status(404)
    const err = {
        code: '404',
        title: 'Page not found'
    }
    res.render('page-err.html', {err: err})
})

module.exports = router
