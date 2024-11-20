const express = require('express');
const Artwork = require('../model/ArtworkModel')
const authenticate = require('../middlewares/auth');
const upload = require('../middlewares/upload');

const router = express.Router();

// Create Artwork
router.post('/', authenticate, upload.array('images', 10), async (req, res) => {
    try {
        const { title, description } = req.body;
        const imagePaths = req.files.map(file => `/uploads/${file.filename}`);

        const artwork = new Artwork({
            title,
            description,
            images: imagePaths,
            artist: req.artist._id,
        });

        await artwork.save();
        res.status(201).json(artwork);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get All Artworks
router.get('/', async (req, res) => {
    const artworks = await Artwork.find().populate('artist', 'name');
    res.json(artworks);
});

module.exports = router;
