const artistProfileSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    bio: { type: String, required: true },
    artworks: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
  });
  
  module.exports = mongoose.model('ArtistProfile', artistProfileSchema);
  