import React from 'react';

const ShopbyArtist = () => {
  // Sample data for the collections
  const collections = [
    {
      id: 1,
      title: "Rachel Crummey",
      image: "https://via.placeholder.com/400x500?text=Collection+1",
    },
    {
      id: 2,
      title: "Leia Bryans",
      image: "https://via.placeholder.com/400x500?text=Collection+2",
    },
    {
      id: 3,
      title: "Melanie Katy",
      image: "https://via.placeholder.com/400x500?text=Collection+3",
    },
    {
      id: 4,
      title: "Sol Hicks",
      image: "https://via.placeholder.com/400x500?text=Collection+4",
    },
  ];

  return (
    <section className="bg-[#0f293e] text-center py-16 px-4 md:px-12 lg:px-20" id='artist'>
      {/* Main Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Shop by Artist</h2>

      {/* Art Collection Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {collections.map((collection) => (
          <div key={collection.id} className="text-center lg:px-20 px-20">
            <img
              src={collection.image}
              alt={collection.title}
              className="flex justify-center w-40 h-40 object-cover rounded-full shadow-md mb-4"
            />
            <h4 className="flex justify-center text-lg font-medium text-white">
              {collection.title} <span className="text-primary"><a href="/products">→</a></span>
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShopbyArtist;
