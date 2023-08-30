const express = require('express')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 8080

app.use(express.json())

app.get('/', async (req, res) => {
    try {
        res.status(201).json({ message: "hello world" })
    } catch (error) {
        console.log(error.message)
    }
})

app.post('/', async (req, res) => {
    try {
        const data = await req.body

        res.send(201).json({ data })
    } catch (error) {
        res.send(500).json({ error: error.message })
    }
})

app.listen(PORT, () => console.log`Server running on port ${PORT}`)