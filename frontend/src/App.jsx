// import React from 'react'
// import Header from './components/Header'
// import Footer from './components/Footer'
// import HomePage from './Pages/HomePage'
// import SingleProducts from './Pages/SingleProducts'
// import ProductsGrid from './Pages/ProductsGrid'
// import { Route, Routes } from 'react-router-dom'
// import LoginSignup from './Pages/LoginSignup'



// const App = () => {
//   return (
//     <>
//     <Header />
//     <Routes>

//       <Route path='/' element={<HomePage />} />
//       <Route path='/product' element={<SingleProducts />}/>
//       <Route path='/products' element={<ProductsGrid />}/>
//       <Route path='/auth' element={<LoginSignup />}/>
//     </Routes>

//     <Footer />
//     </>
//   )
// }

// export default App


// import React from 'react';
// import { useLocation, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import HomePage from './Pages/HomePage';
// import SingleProducts from './Pages/SingleProducts';
// import ProductsGrid from './Pages/ProductsGrid';
// import LoginSignup from './Pages/LoginSignup';
// import Cart from './Pages/Cart';
// import ArtistDash from './Pages/ArtistDash';
// import ProtectedRoute from './components/ProtectedRoute';

// const App = () => {
//   const location = useLocation();

//   // Define routes where Header and Footer should be hidden
//   const hideNavbarFooter = ['/auth'];

//   return (
//     <>
//       {/* Conditionally render Header */}
//       {!hideNavbarFooter.includes(location.pathname) && <Header />}

//       {/* Routes */}
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/product" element={<SingleProducts />} />
//         <Route path="/products" element={<ProductsGrid />} />
//         <Route path="/login" element={<LoginSignup />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route 
//         path='artist_dashboard' 
//         element={
//           <ProtectedRoute>
//             <ArtistDash />
//           </ProtectedRoute>
//         }/>

//       </Routes>

//       {/* Conditionally render Footer */}
//       {!hideNavbarFooter.includes(location.pathname) && <Footer />}
//     </>
//   );
// };

// export default App;


// 

import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './Pages/HomePage';
import SingleProducts from './Pages/SingleProducts';
import ProductsGrid from './Pages/ProductsGrid';
import LoginSignup from './Pages/LoginSignup';
import Cart from './Pages/Cart';
import ArtistDash from './Pages/ArtistDash';
import ProtectedRoute from './components/ProtectedRoute';

// const handleLogout = () => {
//   localStorage.removeItem('jwt'); // Clear the token
//   navigate('/login'); // Redirect to login
// };


const App = () => {
  const location = useLocation();

  // Routes where Header/Footer should be hidden
  const hideNavbarFooter = ['/login'];

  // Check if user is authenticated
  const isAuthenticated = Boolean(localStorage.getItem('jwt'));

  return (
    <>
      {/* Header */}
      {!hideNavbarFooter.includes(location.pathname) && <Header />}

      {/* Routes */}
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<SingleProducts />} />
        <Route path="/products" element={<ProductsGrid />} />
        <Route path="/cart" element={<Cart />} />

        {/* Login/Signup */}
        <Route
          path="/login"
          element={
            isAuthenticated ? <Navigate to="/artist_dashboard" replace /> : <LoginSignup />
          }
        />

        {/* Protected Route */}
        <Route
          path="/artist_dashboard"
          element={
            <ProtectedRoute>
              <ArtistDash />
            </ProtectedRoute>
          }
        />
      </Routes>

      {/* Footer */}
      {!hideNavbarFooter.includes(location.pathname) && <Footer />}
    </>
  );
};

export default App;
