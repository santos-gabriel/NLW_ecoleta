const router = require('express').Router()
const modelpoint = require('../model/save-point')


router.get('/', async(req, res) => {

    const search = req.query.search 

    if (search == ""){
        return res.render('search-results.html', {total: 0})
    } 

    try{
        
        const query = modelpoint.find({
            city: {
                $regex: new RegExp(search),
                $options: 'i'
            }
        })
        const total = await (await query.lean().exec()).length
        const promisse = await query.lean().exec()
        return res.render('search-results.html', {places: promisse, total: total}) 
     
    }catch(err){
        res.status(500).send(err)
    }
})

router.post('/', (req, res) => {
    res.status(405)
    const err = {
        code: '405',
        title: 'Method Not Allowed'
    }
    return res.render('page-err.html', {err: err})
})

module.exports = router

