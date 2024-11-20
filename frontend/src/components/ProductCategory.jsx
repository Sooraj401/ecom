import React, { useState } from 'react';
import { FiHeart, FiMaximize2 } from 'react-icons/fi';

const ProductCategory = () => {
  // Sample data for the products
  const products = [
    {
      id: 1,
      name: "Starlight",
      artist: "GUSTAV KLIMT",
      price: "$320.00 CAD",
      image: "https://via.placeholder.com/400x500?text=Product+1",
    },
    {
      id: 2,
      name: "Up In the Air",
      artist: "WILLIAM-ADOLPHE BOUGUEREAU",
      price: "$225.00",
      image: "https://via.placeholder.com/400x500?text=Product+2",
    },
    {
      id: 3,
      name: "7 A.M. Staring Contests",
      artist: "CLAUDE MONET",
      price: "$500.00",
      image: "https://via.placeholder.com/400x500?text=Product+3",
    },
      {
        id: 4,
        name: "7 A.M. Staring Contests",
        artist: "CLAUDE MONET",
        price: "$500.00",
        image: "https://via.placeholder.com/400x500?text=Product+3",
      },
      {
        id: 5,
        name: "7 A.M. Staring Contests",
        artist: "CLAUDE MONET",
        price: "$500.00",
        image: "https://via.placeholder.com/400x500?text=Product+3",
      },
  ];

  const [sort, setSort] = useState('Featured');

  // Sample artist details
  const artistDetails = {
    name: "Claude Monet",
    description:
      "Claude Monet, a founder of French Impressionist painting, is known for his landscape masterpieces that beautifully capture light and color.",
    profilePicture: "https://via.placeholder.com/200x200?text=Monet",
  };

  return (
    <section className="max-w-7xl mx-auto py-16 px-4 md:px-12 lg:px-20">
      {/* Artist Section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-center mb-12 lg:mt-28 bg-gray-100 rounded-lg shadow-md p-5">
        <div className="mb-6 lg:mb-0 lg:mr-8">
          <img
            src={artistDetails.profilePicture}
            alt={artistDetails.name}
            className="w-40 h-40 rounded-full object-cover shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">{artistDetails.name}</h2>
          <p className="text-gray-600 leading-relaxed">{artistDetails.description}</p>
        </div>
      </div>

      {/* Filters and Sort Options */}
      <div className="flex flex-wrap justify-between items-center mb-12">
        <div className="flex items-center space-x-6 text-gray-700">
          <span className="font-medium">Filter:</span>
          <div className="relative">
            <select className="bg-transparent border-b border-gray-400 outline-none pr-6">
              <option>Availability</option>
              <option>In Stock</option>
              <option>Out of Stock</option>
            </select>
          </div>
          <div className="relative">
            <select className="bg-transparent border-b border-gray-400 outline-none pr-6">
              <option>Price</option>
              <option>Low to High</option>
              <option>High to Low</option>
            </select>
          </div>
        </div>

        <div className="flex items-center space-x-6 text-gray-700">
          <span className="font-medium">Sort by:</span>
          <div className="relative">
            <select
              className="bg-transparent border-b border-gray-400 outline-none pr-6"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option>Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
            </select>
          </div>
          <span className="font-medium">Products {products.length}</span>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-5 rounded-lg hover:shadow-lg relative lg:w-[20rem] lg:h-[30rem]">
            {/* Favorite Icon */}
            <div className="absolute top-8 right-8 text-gray-600 hover:text-red-500 cursor-pointer">
              <FiHeart size={24} />
            </div>
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-60 object-cover rounded-md mb-4"
            />
            {/* Rating Stars */}
            <div className="flex justify-start mb-2">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, index) => (
                  <span key={index} className="text-orange-500">★</span>
                ))}
              </div>
            </div>
            {/* Product Title */}
            <h4 className="text-lg font-medium text-gray-800 mb-1"><a href="/product">{product.name}</a></h4>
            {/* Artist Name */}
            <p className="text-gray-600 mb-2">{product.artist.toUpperCase()}</p>
            {/* Options */}
            <div className="flex justify-start items-center space-x-4 text-gray-600 mb-2">
              <div className="flex items-center space-x-1">
                <FiMaximize2 />
                <span className="text-sm">PICK SIZE</span>
              </div>
              <div className="flex items-center space-x-1">
                <FiMaximize2 />
                <span className="text-sm">PICK FRAME</span>
              </div>
            </div>
            {/* Price */}
            <p className="text-gray-800 font-semibold"><span className="text-orange-500">{product.price}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCategory;
