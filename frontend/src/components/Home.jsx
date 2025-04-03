import React, { useState } from 'react';
import ImageUploader from './ImageUploder';
import ImagePreview from './ImagePreview';
import { enhancedImageAPI } from '../utils/EnhancedImageAPI';
import Features from './Features';
import HowItWorks from './HowItWorks';
import Pricing from './Pricing';

const Home = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [enhancementType, setEnhancementType] = useState('general');

  const uploadImageHandler = async(file) => {
    try {
      setUploadedImage(URL.createObjectURL(file));
      setLoading(true);
      setError(null);
      setEnhancedImage(null);

      const response = await enhancedImageAPI(file);
      console.log('API Response:', response);
      
      if (!response?.image) {
        throw new Error('No enhanced image URL received from the API');
      }
      
      setEnhancedImage(response.image);
    } catch(error) {
      console.error("Error in uploadImageHandler:", error);
      setError(error.message || "Failed to enhance image. Please try again.");
      setEnhancedImage(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-16">
      {/* Hero Section with Upload */}
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center bg-gradient-to-b from-perano-50 to-perano-100 rounded-2xl p-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-perano-900 mb-4">Transform Your Images with AI</h2>
          <p className="text-xl text-perano-600 max-w-2xl mx-auto">
            Upload any image and let our advanced AI enhance its quality, colors, and details.
          </p>
        </div>

        {/* Main Upload Section */}
        <div className="w-full max-w-4xl bg-white rounded-xl shadow-xl p-8 transform -translate-y-0">
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
              <span className="block sm:inline">{error}</span>
            </div>
          )}
          
          <div className="mb-6">
            <label className="block text-sm font-medium text-perano-700 mb-2">Enhancement Type</label>
            <select
              value={enhancementType}
              onChange={(e) => setEnhancementType(e.target.value)}
              className="w-full p-3 border border-perano-300 rounded-lg focus:ring-2 focus:ring-perano-500 focus:border-perano-500 bg-white"
            >
              <option value="general">General Enhancement</option>
              <option value="portrait">Portrait Enhancement</option>
              <option value="landscape">Landscape Enhancement</option>
              <option value="low-light">Low Light Enhancement</option>
            </select>
          </div>

          <ImageUploader uploadImageHandler={uploadImageHandler} />
          <ImagePreview 
            loading={loading}
            previewImage={uploadedImage}
            enhanced={enhancedImage}
          />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="mt-16">
        <Features />
      </section>

      {/* How It Works Section */}
      <section id="how-it-works">
        <HowItWorks />
      </section>

      {/* Pricing Section */}
      <section id="pricing">
        <Pricing />
      </section>
    </div>
  );
};

export default Home;