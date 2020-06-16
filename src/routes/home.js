const router = require('express').Router()

router.get('/', (req, res)  => {
    res.render('index.html')
})

router.post('/', (req, res)=>{
    res.status(405)
    const err = {
        code: '405',
        title: 'Method Not Allowed'
    }
    return res.render('page-err.html', {err: err})
})

module.exports = router
