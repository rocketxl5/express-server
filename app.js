const express = require('express')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5001

app.use(express.json())

app.get('/', async (req, res) => {
    try {
        res.status(201)._construct({message: "hello world"})
    } catch (error) {
        console.log(error.message)
    }
})

app.listen(PORT, () => console.log`Server running on port ${PORT}`)