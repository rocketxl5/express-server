const express = require('express')
const router = express.Router()
const User = require('../models/User');

// Get all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find()

        res.status(201).json({ data: users })
    } catch {
        res.status(500).json({ message: err.message })
    }
})

router.post('/login', async (req, res) => {

    const { email } = await req.body

    try {
        let user = await User.find({ email })

        if (!user) {
            console.log('no user found')
            return
        }

        res.status(201).json({ data: user })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router;
