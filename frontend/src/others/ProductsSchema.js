const productSchema = new Schema({
    title: { type: String, required: true },
    artist: { type: Schema.Types.ObjectId, ref: 'ArtistProfile', required: true },
    description: { type: String },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    availableSizes: [{ type: String }],  // e.g., ["Small", "Medium", "Large"]
    availableFrames: [{ type: String }], // e.g., ["Wooden", "Metal"]
    createdAt: { type: Date, default: Date.now },
    ratings: { type: Number, default: 0 },
    reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }]
  });
  
  module.exports = mongoose.model('Product', productSchema);
  