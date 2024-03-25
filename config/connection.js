const mongoose = require('mongoose')
const DB_URL = process.env.DB_URL
const connDB = async()=>{
    try {
        await mongoose.connect(DB_URL)
        console.log('connected successfully...')
    } catch (error) {
        console.log('DB is not connected...')
    }
}
module.exports=connDB