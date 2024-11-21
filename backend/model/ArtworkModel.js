const mongoose = require('mongoose');

const artworkSchema = new mongoose.Schema({
    title: { type: String, required: true },  // Title of the artwork
    description: { type: String },  // Short description of the artwork
    images: [{ type: String }],  // Array of image paths (for multiple images)
    artist: { type: String, required: true },  // Reference to the artist
    price: { type: Number, required: true },  // Price of the artwork
}, { timestamps: true });

module.exports = mongoose.model('Artwork', artworkSchema);
