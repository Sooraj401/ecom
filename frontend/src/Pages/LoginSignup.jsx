import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login, signup } from '../services/api'; // Import API functions

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState(''); // Handle server errors
  const navigate = useNavigate(); // For navigation

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate form
  const validateForm = () => {
    let formErrors = {};

    // Email validation
    if (!formData.email) {
      formErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Email address is invalid';
    }

    // Password validation
    if (!formData.password) {
      formErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      formErrors.password = 'Password must be at least 6 characters';
    }

    // Full name validation (only for signup)
    if (!isLogin && !formData.fullName) {
      formErrors.fullName = 'Full name is required';
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      if (isLogin) {
        // Login
        const { data } = await login({ email: formData.email, password: formData.password });
        console.log("JWT Token from Login Response:", data.token);
        localStorage.setItem('jwt', data.token); // Store JWT token
        localStorage.setItem('authToken', eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3M2U2MjJhMzVkNGQ1N2Q2MjRmMTBhYSIsImlhdCI6MTczMjE0MjA5NCwiZXhwIjoxNzMyMTQyOTk0fQ.dU5qV9Btr10DWTcWs7zQ6iMSQVebnzUzTYV-Xtr6PMo); // Replace 'token' with the actual JWT token from the response
        console.log('Token:', token); // Check if this logs the token
        navigate('/artist_dashboard'); // Redirect to dashboard
      } else {
        // Signup
        await signup({
          name: formData.fullName,
          email: formData.email,
          password: formData.password,
        });
        setIsLogin(true); // Switch to login after successful signup
      }
    } catch (error) {
      setServerError(error.response?.data?.error || 'An error occurred. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 relative">
      {/* Logo Section */}
      <div className="absolute top-8 left-8">
        <h1 className="text-4xl font-serif font-bold text-gray-800">ArtGallery</h1>
      </div>

      {/* Form Container */}
      <section className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <div className="flex justify-center mb-8">
          <button
            className={`px-6 py-2 font-semibold ${isLogin ? 'text-gray-800' : 'text-gray-400'}`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`px-6 py-2 font-semibold ${!isLogin ? 'text-gray-800' : 'text-gray-400'}`}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          {isLogin ? 'Login' : 'Sign Up'}
        </h2>
        <form className="flex flex-col space-y-6" onSubmit={handleSubmit}>
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
                placeholder="Enter your full name"
              />
              {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
            </div>
          )}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
              placeholder="Enter your password"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-all"
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
          {serverError && <p className="text-red-500 text-sm mt-2">{serverError}</p>}
        </form>
      </section>
    </div>
  );
};

export default LoginSignup;
