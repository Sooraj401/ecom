const cartSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    items: [
      {
        product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
        quantity: { type: Number, required: true, default: 1 },
        selectedSize: { type: String },
        selectedFrame: { type: String }
      }
    ],
    createdAt: { type: Date, default: Date.now }
  });
  
  module.exports = mongoose.model('Cart', cartSchema);
  