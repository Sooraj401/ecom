import React from 'react';

const ArtistDetails = () => {
  // Sample data for the artist
  const artist = {
    name: "Leia Bryans",
    profilePic: "https://via.placeholder.com/150?text=Artist+Image",
    bio: "Leia Bryans is an emerging artist known for her vibrant and abstract artworks, inspired by natural landscapes and everyday objects.",
  };

  return (
    <div className="max-w-4xl mx-auto mt-4 mb-10 p-8 bg-white shadow-md rounded-lg flex items-center gap-8 ">
      {/* Artist Image */}
      <div className="w-32 h-32">
        <img
          src={artist.profilePic}
          alt={artist.name}
          className="w-full h-full object-cover rounded-full shadow-lg"
        />
      </div>

      {/* Artist Details */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{artist.name}</h2>
        <p className="text-gray-600">{artist.bio}</p>
      </div>
    </div>
  );
};

export default ArtistDetails;
