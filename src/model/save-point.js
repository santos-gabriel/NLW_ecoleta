const mongoose = require('mongoose')

const pointSchema = new mongoose.Schema({
    description: {
        type: String,
        require: true
    },
    url_image: {
        type: String,
        require: false
    },
    address:{ 
        type: String,
        require: true
    },
    complement: {
        type: String,
        require: true
    },
    state: { 
        type: String,
        require: true
    },
    uf: {
        type: String,
        require: true
    },
    city: { 
        type: String,
        require: true
    },
    items: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('points', pointSchema)

