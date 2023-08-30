const express = require('express')
const router = express.Router()
const connectDB = require('./config/db')
// const User = require('./models/User')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 8080
connectDB()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', async (req, res) => {
    try {
        // const users = await User.find()

        // res.sendStatus(201).json({ data: users })
        res.send("get succeeded")
    } catch (error) {
        res.sendStatus(500).json({ message: message.error })
    }
})

app.post('/', async (req, res) => {
    try {
        // const data = await req.body

        // res.sendStatus(JSON.stringify(data))
        res.send("post succeeded")
    } catch (error) {

        console.log(error.message)
    }
})

app.listen(PORT, () => console.log`Server running on port ${PORT}`)