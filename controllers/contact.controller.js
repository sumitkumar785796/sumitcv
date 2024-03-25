const Contact = require('../models/contact.model')

exports.InsertContact = async (req, res) => {
    try {
        const { fullname, email, subject, msg } = req.body
        const linkdata = await Contact.create({
            fullname, email, subject, msg
        })
        res.status(200).json({ message: 'Thank You For Contact Me', data: linkdata })
    } catch (error) {
        res.status(500).json({ message: 'Internal server Error', data: error })
    }
}

exports.ViewContact = async (req, res) => {
    try {
        const viewData = await Contact.find()
        res.status(200).json({ message: 'View Data', view: viewData })
    } catch (error) {
        res.status(500).json({ message: 'Internal server Error', data: error })
    }
}