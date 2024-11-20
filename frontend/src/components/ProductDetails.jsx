import React from 'react';

const ProductDetails = () => {
  // Sample images for the product
  const productImages = [
    "https://via.placeholder.com/400x500?text=Artwork+1",
    "https://via.placeholder.com/400x500?text=Artwork+2",
    "https://via.placeholder.com/800x400?text=Artwork+3",
  ];

  return (
    <section className="max-w-7xl mx-auto py-16 px-4 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 pt-40">
      {/* Product Images Section */}
      <div className="grid grid-cols-2 gap-0">
        {/* Top Two Images */}
        <img
          src={productImages[0]}
          alt="Product Image 1"
          className="w-full h-auto object-cover rounded-none shadow-none"
        />
        <img
          src={productImages[1]}
          alt="Product Image 2"
          className="w-full h-auto object-cover rounded-none shadow-none"
        />

        {/* Bottom Image */}
        <img
          src={productImages[2]}
          alt="Product Image 3"
          className="col-span-2 w-full h-auto object-cover rounded-none shadow-none pb-32"
        />
      </div>

      {/* Product Information Section */}
      <div className="flex flex-col">
        <h1 className="text-4xl font-bold font-serif text-gray-800 mb-4">seven vessels 2</h1>
        <p className="text-xl font-semibold text-gray-700 mb-8">$250.00 CAD</p>

        {/* Buttons */}
        <div className="flex flex-col space-y-4 mb-8">
          <button className="border border-gray-700 py-3 px-6 rounded-full hover:bg-gray-100 transition-all">
            Add to cart
          </button>
          <button className="bg-gray-800 text-white py-3 px-6 rounded-full hover:bg-gray-900 transition-all">
            Buy it now
          </button>
        </div>

        {/* Share Icon */}
        <div className="mb-4">
          <a href="#share" className="text-gray-700 flex items-center space-x-2 hover:text-gray-900">
            <span>🔗</span> {/* Placeholder for share icon */}
            <span>Share</span>
          </a>
        </div>

        {/* Product Description and Details */}
        <div className="text-gray-600">
          <p className="mb-4">
            This is a demonstration store. You can purchase products like this from <a href="#ninth-editions" className="text-blue-600 underline">Ninth Editions</a>.
          </p>
          <h3 className="font-semibold text-lg mb-2">Details</h3>
          <ul className="list-disc ml-5 mb-4 space-y-2">
            <li>Original artwork, 2021</li>
            <li>Gouache on paper with deckled edge</li>
            <li>10 x 12 inches</li>
            <li>Unframed</li>
          </ul>

         
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
