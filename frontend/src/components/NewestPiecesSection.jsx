
import React from 'react';
import { FiHeart, FiMaximize2 } from 'react-icons/fi';

const NewestPiecesSection = () => {
  // Sample data for the artwork pieces
  const artworks = [
    {
      id: 1,
      title: "Portrait Of Adele Bloch Bauer I",
      artist: "GUSTAV KLIMT",
      image: "https://via.placeholder.com/400x500?text=Artwork+1",
      price: "$312.95",
    },
    {
      id: 2,
      title: "Song of the Angels",
      artist: "WILLIAM-ADOLPHE BOUGUEREAU",
      image: "https://via.placeholder.com/400x500?text=Artwork+2",
      price: "$312.95",
    },
    {
      id: 3,
      title: "Pathway In Monets Garden At Giverny",
      artist: "CLAUDE MONET",
      image: "https://via.placeholder.com/400x500?text=Artwork+3",
      price: "$312.95",
    },
    {
      id: 4,
      title: "Pathway In Monets Garden At Giverny",
      artist: "CLAUDE MONET",
      image: "https://via.placeholder.com/400x500?text=Artwork+3",
      price: "$312.95",
    },
  ];

  return (
    <section className="text-center py-16 px-4 md:px-12 lg:px-20" id='newest'>
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-serif mb-12">
        Explore our newest pieces
      </h2>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {artworks.map((artwork) => (
          <div key={artwork.id} className="bg-white p-5 rounded-lg shadow-md relative lg:w-[20rem] lg:h-[30rem]">
            {/* Favorite Icon */}
            <div className="absolute top-8 right-8 text-gray-600 hover:text-red-500 cursor-pointer">
              <FiHeart size={24} />
            </div>
            {/* Artwork Image */}
            <img
              src={artwork.image}
              alt={artwork.title}
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
            {/* Artwork Title */}
            <h4 className="text-lg font-medium text-gray-800 mb-1">{artwork.title}</h4>
            {/* Artist Name */}
            <p className="text-gray-600 mb-2">{artwork.artist.toUpperCase()}</p>
            {/* Options */}
            <div className="flex justify-center items-center space-x-4 text-gray-600 mb-2">
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
            <p className="text-gray-800 font-semibold">
              Starting from <span className="text-orange-500">{artwork.price}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewestPiecesSection;
