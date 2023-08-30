const express = require('express')
require('dotenv').config()

const app = express()

app.use(express.json())

app.get('/', async (req, res) => {
    try {
        res.status(201)._construct({message: "hello world"})
    } catch (error) {
        console.log(error.message)
    }
})