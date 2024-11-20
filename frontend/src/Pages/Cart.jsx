import React, { useState } from 'react';
import { FiTrash2 } from 'react-icons/fi';

const Cart = () => {
  // Sample cart data
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "7 A.M. Staring Contests",
      price: 500.00,
      quantity: 1,
      image: "https://via.placeholder.com/100x150?text=Product+Image",
    },
  ]);

  // Handle increment quantity
  const incrementQuantity = (itemId) => {
    setCartItems(cartItems.map(item => 
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  // Handle decrement quantity
  const decrementQuantity = (itemId) => {
    setCartItems(cartItems.map(item => 
      item.id === itemId && item.quantity > 1 
        ? { ...item, quantity: item.quantity - 1 } 
        : item
    ));
  };

  // Handle remove item from cart
  const removeItem = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  // Calculate subtotal
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <section className="max-w-4xl mx-auto py-16 px-4 md:px-12 lg:px-20">
      {/* Cart Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-serif font-bold text-gray-800">Your cart</h1>
        <a href="/shop" className="text-blue-600 underline">Continue shopping</a>
      </div>

      {/* Cart Items */}
      <div className="border-b border-gray-300 pb-8">
        <div className="grid grid-cols-4 gap-8 mb-4 text-gray-500">
          <span className="col-span-2">Product</span>
          <span>Quantity</span>
          <span>Total</span>
        </div>
        {cartItems.map(item => (
          <div key={item.id} className="grid grid-cols-4 gap-8 items-center mb-4">
            <div className="flex items-center col-span-2">
              <img src={item.image} alt={item.name} className="w-24 h-auto rounded-lg mr-4" />
              <div>
                <h3 className="text-lg font-medium text-gray-800">{item.name}</h3>
                <p className="text-gray-600">₹{item.price.toFixed(2)}</p>
              </div>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => decrementQuantity(item.id)}
                className="px-2 py-1 border border-gray-400 rounded-l-md"
              >
                -
              </button>
              <input
                type="text"
                readOnly
                value={item.quantity}
                className="w-12 text-center border-t border-b border-gray-400 outline-none"
              />
              <button
                onClick={() => incrementQuantity(item.id)}
                className="px-2 py-1 border border-gray-400 rounded-r-md"
              >
                +
              </button>
              <button
                onClick={() => removeItem(item.id)}
                className="ml-3 text-red-500 hover:text-red-700"
              >
                <FiTrash2 />
              </button>
            </div>
            <p className="text-gray-800">₹{(item.price * item.quantity).toFixed(2)}</p>
          </div>
        ))}
      </div>

      {/* Subtotal Section */}
      <div className="flex flex-col items-end mt-8">
        <p className="text-lg font-medium text-gray-800 mb-4">
          Subtotal: <span className="font-bold">₹{subtotal.toFixed(2)}INR</span>
        </p>
        <p className="text-gray-500 mb-4">Taxes and shipping calculated at checkout</p>
        <button className="py-3 px-8 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-all">
          Check out
        </button>
      </div>
    </section>
  );
};

export default Cart;
