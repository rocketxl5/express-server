const express = require('express')
const router = express.Router()
const connectDB = require('./config/db')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 8080
connectDB()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', async (req, res) => {
    try {
        const users = await User.find()

        res.status(201).json({ data: users })
    } catch (error) {
        res.send(500).json({ message: message.error })
    }
})

app.post('/', async (req, res) => {
    try {
        const data = await req.body

        res.send(JSON.stringify(data))
    } catch (error) {

        console.log(error.message)
    }
})

app.listen(PORT, () => console.log`Server running on port ${PORT}`)