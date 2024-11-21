// import React, { useState } from 'react';
// import { FiShoppingBag, FiMenu } from 'react-icons/fi';
// import { Link } from 'react-router-dom'


// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   // Dummy cart count (can be updated dynamically)
//   const cartCount = 0;

//   return (
//     <header className="fixed top-0 left-0 w-full py-4 px-4 md:px-12 lg:px-20 shadow-md bg-white z-50">
//       {/* Top Section - Logo and Icons */}
//       <div className="flex items-center justify-between">
//         {/* Middle Section - Logo */}
//         <div className="flex flex-1 justify-center items-center lg:pl-36">
//           <h1 className="text-3xl text-gray-800 font-logofont">Art<span className='text-yellow-500 font-logofont'>Gallery</span></h1>
//         </div>

//         {/* Right Section - Cart Icon, Count Bubble, Login Button, and Mobile Menu Button */}
//         <div className="flex items-center space-x-4">
//           {/* Cart Icon with Count Bubble */}
//           <div className="relative">
//             <button aria-label="Cart" className="text-gray-800 hover:text-gray-600 focus:outline-none"><Link to={'/cart'}><FiShoppingBag className="h-6 w-6"/></Link></button>
//             {cartCount > 0 && (
//               <span className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
//                 {cartCount}
//               </span>
//             )}
//           </div>

//           {/* Login Button */}
//           <button
//             aria-label="Login"
//             className="py-1 px-4 text-sm font-medium text-white bg-gray-800 hover:bg-gray-700 rounded focus:outline-none"><Link to={'/login'}>Login</Link></button>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="text-gray-800 hover:text-gray-600 focus:outline-none md:hidden"
//           >
//             <FiMenu className="h-6 w-6" />
//           </button>
//         </div>
//       </div>

//       {/* Bottom Section - Navigation Links */}
//       <nav className={`mt-6 ${menuOpen ? 'block' : 'hidden'} md:block`}>
//         <ul className="flex flex-col md:flex-row justify-center md:space-x-8 text-gray-800 space-y-4 md:space-y-0">
//            <Link className="hover:bg-black hover:text-white rounded-lg px-3 py-1 font-semibold" to={'/'}>Home</Link>
//             <li className="hover:bg-black hover:text-white rounded-lg px-3 py-1 font-semibold"><a href="#newest">Newest</a></li>
//             <Link className='hover:bg-black hover:text-white rounded-lg px-3 py-1 font-semibold' to={'/products'}>Art Works</Link>
//             <li className="hover:bg-black hover:text-white rounded-lg px-3 py-1 font-semibold"><a href="#about">About</a></li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;
// import React, { useState } from 'react';
// import { FiShoppingBag, FiMenu } from 'react-icons/fi';
// import { Link, useNavigate } from 'react-router-dom';

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isAuthenticated, setIsAuthenticated] = useState(false); // Track login state
//   const navigate = useNavigate();

//   // Dummy cart count (can be updated dynamically)
//   const cartCount = 0;

//   const handleLogout = () => {
//     // Clear authentication token (if stored in localStorage or cookies)
//     localStorage.removeItem('authToken'); // Adjust based on your auth implementation
//     setIsAuthenticated(false);
//     navigate('/login'); // Redirect to homepage or login page
//   };

//   return (
//     <header className="fixed top-0 left-0 w-full py-4 px-4 md:px-12 lg:px-20 shadow-md bg-white z-50">
//       {/* Top Section - Logo and Icons */}
//       <div className="flex items-center justify-between">
//         {/* Middle Section - Logo */}
//         <div className="flex flex-1 justify-center items-center lg:pl-36">
//           <h1 className="text-3xl text-gray-800 font-logofont">Art<span className="text-yellow-500 font-logofont">Gallery</span></h1>
//         </div>

//         {/* Right Section - Cart Icon, Count Bubble, Login/Logout Button, and Mobile Menu Button */}
//         <div className="flex items-center space-x-4">
//           {/* Cart Icon with Count Bubble */}
//           <div className="relative">
//             <button aria-label="Cart" className="text-gray-800 hover:text-gray-600 focus:outline-none">
//               <Link to={'/cart'}>
//                 <FiShoppingBag className="h-6 w-6" />
//               </Link>
//             </button>
//             {cartCount > 0 && (
//               <span className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
//                 {cartCount}
//               </span>
//             )}
//           </div>

//           {/* Login/Logout Button */}
//           {isAuthenticated ? (
//             <button
//               aria-label="Logout"
//               onClick={handleLogout}
//               className="py-1 px-4 text-sm font-medium text-white bg-red-600 hover:bg-red-500 rounded focus:outline-none"
//             >
//               Logout
//             </button>
//           ) : (
//             <button
//               aria-label="Login"
//               className="py-1 px-4 text-sm font-medium text-white bg-gray-800 hover:bg-gray-700 rounded focus:outline-none"
//             >
//               <Link to={'/login'}>Login</Link>
//             </button>
//           )}

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="text-gray-800 hover:text-gray-600 focus:outline-none md:hidden"
//           >
//             <FiMenu className="h-6 w-6" />
//           </button>
//         </div>
//       </div>

//       {/* Bottom Section - Navigation Links */}
//       <nav className={`mt-6 ${menuOpen ? 'block' : 'hidden'} md:block`}>
//         <ul className="flex flex-col md:flex-row justify-center md:space-x-8 text-gray-800 space-y-4 md:space-y-0">
//           <Link className="hover:bg-black hover:text-white rounded-lg px-3 py-1 font-semibold" to={'/'}>
//             Home
//           </Link>
//           <li className="hover:bg-black hover:text-white rounded-lg px-3 py-1 font-semibold">
//             <a href="#newest">Newest</a>
//           </li>
//           <Link className="hover:bg-black hover:text-white rounded-lg px-3 py-1 font-semibold" to={'/products'}>
//             Art Works
//           </Link>
//           <li className="hover:bg-black hover:text-white rounded-lg px-3 py-1 font-semibold">
//             <a href="#about">About</a>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;


import React, { useState, useEffect } from 'react';
import { FiShoppingBag, FiMenu } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track login state
  const navigate = useNavigate();

  // Dummy cart count (can be updated dynamically)
  const cartCount = 0;

  // Check token on component mount
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken'); // Clear token from storage
    setIsAuthenticated(false); // Update state
    navigate('/login'); // Redirect to login page
  };

  return (
    <header className="fixed top-0 left-0 w-full py-4 px-4 md:px-12 lg:px-20 shadow-md bg-white z-50">
      {/* Top Section - Logo and Icons */}
      <div className="flex items-center justify-between">
        {/* Middle Section - Logo */}
        <div className="flex flex-1 justify-center items-center lg:pl-36">
          <h1 className="text-3xl text-gray-800 font-logofont">
            Art<span className="text-yellow-500 font-logofont">Gallery</span>
          </h1>
        </div>

        {/* Right Section - Cart Icon, Login/Logout Button */}
        <div className="flex items-center space-x-4">
          {/* Cart Icon with Count Bubble */}
          <div className="relative">
            <button
              aria-label="Cart"
              className="text-gray-800 hover:text-gray-600 focus:outline-none"
            >
              <Link to={'/cart'}>
                <FiShoppingBag className="h-6 w-6" />
              </Link>
            </button>
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>

          {/* Login/Logout Button */}
          {isAuthenticated ? (
            <button
              aria-label="Logout"
              onClick={handleLogout}
              className="py-1 px-4 text-sm font-medium text-white bg-red-600 hover:bg-red-500 rounded focus:outline-none"
            >
              Logout
            </button>
          ) : (
            <button
              aria-label="Login"
              className="py-1 px-4 text-sm font-medium text-white bg-gray-800 hover:bg-gray-700 rounded focus:outline-none"
            >
              <Link to={'/login'}>Login</Link>
            </button>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-800 hover:text-gray-600 focus:outline-none md:hidden"
          >
            <FiMenu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Bottom Section - Navigation Links */}
      <nav className={`mt-6 ${menuOpen ? 'block' : 'hidden'} md:block`}>
        <ul className="flex flex-col md:flex-row justify-center md:space-x-8 text-gray-800 space-y-4 md:space-y-0">
          <Link
            className="hover:bg-black hover:text-white rounded-lg px-3 py-1 font-semibold"
            to={'/'}
          >
            Home
          </Link>
          <li className="hover:bg-black hover:text-white rounded-lg px-3 py-1 font-semibold">
            <a href="#newest">Newest</a>
          </li>
          <Link
            className="hover:bg-black hover:text-white rounded-lg px-3 py-1 font-semibold"
            to={'/products'}
          >
            Art Works
          </Link>
          <li className="hover:bg-black hover:text-white rounded-lg px-3 py-1 font-semibold">
            <a href="#about">About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
