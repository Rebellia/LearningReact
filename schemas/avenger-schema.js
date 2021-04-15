const mongoose = require('mongoose')

const reqiredString = {
    type: String,
    required: true
}

const avengerSchema = mongoose.Schema({
    name: reqiredString,
    title: reqiredString,
    country: String,
})

module.exports = mongoose.model('avengers', avengerSchema)