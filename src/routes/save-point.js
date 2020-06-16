const router = require('express').Router()
const modelpoint = require('../model/save-point')

router.get('/', (req, res, next) => {
    res.status(406).send({ error: 'Not Acceptable' })
})


router.post('/', async(req, res) => {
    //req.body: O corpo do nosso formulário
    req.body.image = '../public/assets/recycle01.svg'
    const mypoint = new modelpoint(req.body) 
    try {
        await mypoint.save()
        res.render('create-point.html', {saved: true})
    } catch (err) {
        res.status(400)
        const error = {
            code: '400',
            title: 'Error creating point'
        }
        return res.render('page-err.html', {err: error})
    }

})

module.exports = router
