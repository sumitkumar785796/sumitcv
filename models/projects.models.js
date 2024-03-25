const mongoose = require('mongoose')
const ProjectsSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    projectname: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})
const Project = new mongoose.model('Project', ProjectsSchema)
module.exports = Project