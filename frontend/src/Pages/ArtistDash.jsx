import React, { useState } from 'react';
import { FiEdit, FiTrash2 } from 'react-icons/fi';

const ArtistDash = () => {
  // Sample data for artworks
  const [artworks, setArtworks] = useState([]);
  const [newArtwork, setNewArtwork] = useState({
    title: '',
    description: '',
    price: '',
    image: null,
  });
  const [imagePreview, setImagePreview] = useState(null);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewArtwork({ ...newArtwork, [name]: value });
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewArtwork({ ...newArtwork, image: file });
      setImagePreview(URL.createObjectURL(file));
    }
  };

  // Handle artwork submission
  const handleArtworkSubmit = (e) => {
    e.preventDefault();
    if (newArtwork.title && newArtwork.price && newArtwork.image) {
      setArtworks([...artworks, { ...newArtwork, id: Date.now() }]);
      setNewArtwork({ title: '', description: '', price: '', image: null });
      setImagePreview(null);
    }
  };

  // Handle artwork deletion
  const handleDelete = (id) => {
    setArtworks(artworks.filter((artwork) => artwork.id !== id));
  };

  return (
    <div className="max-w-7xl mx-auto py-16 px-4 md:px-12 lg:px-20 mt-36">
      <h1 className="text-4xl font-serif font-bold text-gray-800 mb-8">Artist Dashboard</h1>

      {/* Add Artwork Form */}
      <section className="bg-white p-8 shadow-md rounded-lg mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Add New Artwork</h2>
        <form onSubmit={handleArtworkSubmit} className="flex flex-col space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
            <input
              type="text"
              name="title"
              value={newArtwork.title}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
              placeholder="Enter artwork title"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
            <textarea
              name="description"
              value={newArtwork.description}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
              placeholder="Enter artwork description"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Price (CAD)</label>
            <input
              type="number"
              name="price"
              value={newArtwork.price}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
              placeholder="Enter price"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Upload Image</label>
            <input
              type="file"
              onChange={handleImageUpload}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
              accept="image/*"
              required
            />
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Artwork Preview"
                className="w-full h-60 object-cover rounded-md mt-4"
              />
            )}
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-all"
          >
            Add Artwork
          </button>
        </form>
      </section>

      {/* Artwork List */}
      <section className="bg-white p-8 shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Your Artworks</h2>
        {artworks.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {artworks.map((artwork) => (
              <div key={artwork.id} className="bg-gray-50 p-4 rounded-lg shadow-md relative">
                <img
                  src={URL.createObjectURL(artwork.image)}
                  alt={artwork.title}
                  className="w-full h-60 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{artwork.title}</h3>
                <p className="text-gray-600 mb-2">{artwork.description}</p>
                <p className="text-gray-800 font-semibold">${artwork.price} CAD</p>
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button className="text-blue-600 hover:text-blue-800">
                    <FiEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(artwork.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FiTrash2 />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">You haven't added any artworks yet.</p>
        )}
      </section>
    </div>
  );
};

export default ArtistDash;
