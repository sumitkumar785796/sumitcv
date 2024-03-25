require('dotenv').config()
const path = require('path')
const cors = require('cors')
const routes = require('./routes/routes')
const connDB = require('./config/connection')
const PORT = process.env.PORT
const express = require('express')
const app = express()
app.use(cors())
// Serve static files to react
app.use(express.static(path.resolve(__dirname,"client","build")))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('', routes)
const createServer = async () => {
    try {
        await connDB()
        app.listen(PORT, () => {
            console.log(`server is running now http://localhost:${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}
createServer()