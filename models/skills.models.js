const mongoose = require('mongoose')
const SkillsSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    skillname: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})
const Skill = new mongoose.model('Skill', SkillsSchema)
module.exports = Skill