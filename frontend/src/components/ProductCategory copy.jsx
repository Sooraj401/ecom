import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { FiHeart, FiMaximize2 } from 'react-icons/fi';

const ProductCategory = () => {

  const [artworks, setArtworks] = useState([]);

  // Fetch artwork data from backend
  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/artwork/fetch');
        const data = await response.json();
        setArtworks(data);
      } catch (err) {
        console.error('Error fetching artworks:', err);
      }
    };

    fetchArtworks();
  }, []);

  return (
    <section className="max-w-7xl mx-auto py-16 px-4 md:px-12 lg:px-20">


      {/* Filters and Sort Options */}
      <div className="flex flex-wrap justify-between items-center mb-12 pt-24">
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
            >
              <option>Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
            </select>
          </div>
          <span className="font-medium">Products {data.length}</span>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 p-14">
        {artworks.map((data) => (
          <div key={data._id} className="bg-white p-5 rounded-lg hover:shadow-lg relative lg:w-[20rem] lg:h-[30rem]">
            {/* Favorite Icon */}
            <div className="absolute top-8 right-8 text-gray-600 hover:text-red-500 cursor-pointer">
              <FiHeart size={24} />
            </div>
            {/* Product Image */}
            <img
              src={`http://localhost:3000${data.images[0]}`}
              alt={data.name}
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
            <h4 className="text-lg font-medium text-gray-800 mb-1"><a href="/product">{data.title}</a></h4>
            {/* Artist Name */}
            <p className="text-gray-600 mb-2">{data.artist._id}</p>
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
            <p className="text-gray-800 font-semibold"><span className="text-orange-500">{data.price}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCategory;

