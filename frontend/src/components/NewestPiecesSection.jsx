import { FiHeart, FiMaximize2 } from 'react-icons/fi';
import { useEffect, useState } from "react";


const NewestPiecesSection = () => {

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
    <section className="text-center py-16 px-4 md:px-12 lg:px-20" id='newest'>
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-serif mb-12">
        Explore our newest pieces
      </h2>
   {/* Products Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {artworks.map((data) => (
          <div key={data.id} className="bg-white p-5 rounded-lg hover:shadow-lg relative lg:w-[20rem] lg:h-[30rem]">
            {/* Favorite Icon */}
            <div className="absolute top-8 right-8 text-gray-600 hover:text-red-500 cursor-pointer">
              <FiHeart size={24} />
            </div>
            {/* Product Image */}
            <img
              src={`http://localhost:3000${data.images[0]}`}
              alt={data.title}
              className="w-full h-60 object-cover rounded-md mb-4"
            />
            {/* Rating Stars */}
            <div className="flex justify-center mb-2">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, index) => (
                  <span key={index} className="text-orange-500">★</span>
                ))}
              </div>
            </div>
            {/* Product Title */}
            <h4 className="text-lg font-medium text-gray-800 mb-1"><a href="/product">{data.title}</a></h4>
            {/* Artist Name */}
            <p className="text-gray-600 mb-2">{data.artist}</p>
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
            <p className="text-gray-800 font-semibold"><span className="text-orange-500">{data.price}</span>
            </p>
          </div>
        ))}
      </div>
     </section>

  );
};

export default NewestPiecesSection;
