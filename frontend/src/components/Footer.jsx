import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import pay1 from '../assets/pay-1.jpg'
import pay2 from '../assets/pay-2.jpg'
import pay3 from '../assets/pay-3.jpg'
import pay4 from '../assets/pay-4.jpg'

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-16 px-4 md:px-12 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Shop Links */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Shop</h4>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-gray-900">Home</a></li>
            <li><a href="#newest" className="hover:text-gray-900">Newest</a></li>
            <li><a href="#artist" className="hover:text-gray-900">Shop By Artist</a></li>
            <li><a href="#about" className="hover:text-gray-900">About</a></li>
          </ul>
        </div>

        {/* Info Links */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Info</h4>
          <ul className="space-y-2">
            <li><a href="#our-story" className="hover:text-gray-900">Our Story</a></li>
            <li><a href="#journal" className="hover:text-gray-900">Journal</a></li>
            <li><a href="#contact" className="hover:text-gray-900">Contact</a></li>
          </ul>
        </div>

        {/* Logo and Mission Statement */}
        <div>
          <h4 className="text-3xl text-gray-800 mb-4 font-logofont">Art<span className='font-logofont text-yellow-500'>Gallery</span></h4>
          <p>We curate affordably priced pieces from the most exciting up-and-coming artists.</p>
        </div>

        {/* Email Subscription Form */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Subscribe to our emails</h4>
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 outline-none text-gray-700"
            />
            <button className="bg-gray-800 text-white p-3">
              <FiArrowRight />
            </button>
          </div>
        </div>
      </div>

      {/* Payment Icons and Copyright */}
      <div className="flex flex-col lg:flex-row items-center justify-between text-sm border-t border-gray-300 pt-8">
        {/* Payment Icons */}
        <div className="flex items-center space-x-4 mb-4 lg:mb-0">
          <img src={pay1} alt="Visa" width={80}/>
          <img src={pay2} alt="Visa" width={80}/>
          <img src={pay3} alt="Visa" width={80}/>
          <img src={pay4} alt="Visa" width={80}/>
        </div>

        {/* Copyright */}
        <p>&copy; {new Date().getFullYear()} Studio. All rights reserved. Powered by Shopify.</p>
      </div>
    </footer>
  );
};

export default Footer;
