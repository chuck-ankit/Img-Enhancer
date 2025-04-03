import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="flex items-center space-x-4">
              <img src="/logo.svg" alt="logo" className="w-16 h-16 sm:w-20 sm:h-20" />
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Image Enhancer</h1>
                <p className="text-sm sm:text-base font-medium text-gray-600">Advanced AI-powered image enhancer tool</p>
              </div>
            </div>
            <nav className="mt-4 sm:mt-0">
              <ul className="flex space-x-4">
                <li><Link to="/" className="text-gray-700 hover:text-gray-900">Home</Link></li>
                <li><Link to="/pricing" className="text-gray-700 hover:text-gray-900">Pricing</Link></li>
                <li><Link to="/contact" className="text-gray-700 hover:text-gray-900">Contact</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <section className="text-center py-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Enhance Your Images with AI</h2>
          <p className="text-xl text-gray-600 mb-8">
            Transform your photos with our advanced AI technology. Perfect for portraits, landscapes, and low-light images.
          </p>
          <Link
            to="/pricing"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get Started
          </Link>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Portrait Enhancement</h3>
            <p className="text-gray-600">
              Perfect for selfies and portraits. Our AI enhances facial features while maintaining natural looks.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Landscape Enhancement</h3>
            <p className="text-gray-600">
              Bring out the best in your landscape photos with enhanced colors and details.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Low-Light Enhancement</h3>
            <p className="text-gray-600">
              Transform dark and grainy photos into clear, vibrant images.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home; 