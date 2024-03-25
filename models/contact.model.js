const mongoose = require('mongoose')
const ContactSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    msg: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})
const Contact = new mongoose.model('contact', ContactSchema)
module.exports = Contact