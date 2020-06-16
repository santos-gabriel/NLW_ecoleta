const mongoose = require('mongoose')
mongoose.connect(process.env.URL_DB, {
    useNewUrlParser : true,
    useUnifiedTopology: true
})

module.exports = mongoose
