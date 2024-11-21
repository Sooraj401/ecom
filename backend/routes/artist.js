const express = require('express');
const jwt = require('jsonwebtoken');
const Artist = require('../model/ArtistModel')
const router = express.Router();

// Signup
router.post('/signup', async (req, res) => {
    try {
        console.log(req.body)
        const { name, email, password } = req.body;
        const artist = new Artist({ name, email, password });
        await artist.save();
        res.status(201).json({ message: 'Artist created successfully' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const artist = await Artist.findOne({ email });
        console.log(artist)
        if (!artist || !(await artist.comparePassword(password))) {
            throw new Error('Invalid email or password');
        }
        const token = jwt.sign({ id: artist._id }, process.env.JWT_SECRET, { expiresIn: '900s' });
        res.json({ token });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
