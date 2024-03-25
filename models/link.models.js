const mongoose = require('mongoose')
const LinkSchema = new mongoose.Schema({
    iconName: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})
const Link = new mongoose.model('Link', LinkSchema)
module.exports = Link