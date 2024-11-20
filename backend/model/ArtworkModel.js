const mongoose = require('mongoose');

const artworkSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    images: [{ type: String }], // Array to store image paths
    artist: { type: mongoose.Schema.Types.ObjectId, ref: 'Artist', required: true },
}, { timestamps: true });

module.exports = mongoose.model('Artwork', artworkSchema);
