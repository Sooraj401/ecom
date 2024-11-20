const jwt = require('jsonwebtoken');
const Artist = require("../model/ArtistModel")

const authenticate = async (req, res, next) => {
    console.log(req.header('Authorization'))
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) return res.status(401).json({ error: 'Authentication required' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded)
        req.artist = await Artist.findById(decoded.id);
        if (!req.artist) throw new Error();
        next();
    } catch (err) {
        res.status(401).json({ error: 'Invalid token' });
    }
};

module.exports = authenticate;
