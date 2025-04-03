import React, { useState, useEffect } from 'react';
import Loading from './Loading';

const ImagePreview = ({ loading, previewImage, enhanced }) => {
  const [imageError, setImageError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const [currentImageUrl, setCurrentImageUrl] = useState(enhanced);
  const MAX_RETRIES = 3;
  const RETRY_DELAY = 2000; // 2 seconds

  useEffect(() => {
    // Reset states when enhanced image changes
    setImageError(false);
    setRetryCount(0);
    setCurrentImageUrl(enhanced);
  }, [enhanced]);

  const handleImageError = (e, type) => {
    console.error(`Error loading ${type} image`);
    setImageError(true);
    
    if (retryCount < MAX_RETRIES) {
      // Retry loading the image after a delay
      setTimeout(() => {
        setRetryCount(prev => prev + 1);
        // Add a cache-busting parameter to force a fresh request
        const newUrl = `${enhanced}${enhanced.includes('?') ? '&' : '?'}_t=${Date.now()}`;
        setCurrentImageUrl(newUrl);
        setImageError(false);
      }, RETRY_DELAY);
    } else {
      e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2VlZSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZSBub3QgYXZhaWxhYmxlPC90ZXh0Pjwvc3ZnPg==';
    }
  };

  return (
    <div className="mt-8">
      {loading ? (
        <div className="flex justify-center items-center p-8">
          <Loading />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {previewImage && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-perano-900">Original Image</h3>
              <div className="relative aspect-square rounded-lg overflow-hidden bg-perano-50">
                <img
                  src={previewImage}
                  alt="Original"
                  className="w-full h-full object-contain"
                  onError={(e) => handleImageError(e, 'original')}
                />
              </div>
            </div>
          )}
          
          {enhanced && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-perano-900">Enhanced Image</h3>
              <div className="relative aspect-square rounded-lg overflow-hidden bg-perano-50">
                <img
                  src={currentImageUrl}
                  alt="Enhanced"
                  className="w-full h-full object-contain"
                  onError={(e) => handleImageError(e, 'enhanced')}
                />
                {!imageError && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
                    <a
                      href={enhanced}
                      download="enhanced-image"
                      className="inline-flex items-center px-4 py-2 bg-perano-500 text-white rounded-lg hover:bg-perano-600 transition-colors duration-200"
                    >
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                      </svg>
                      Download Enhanced Image
                    </a>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ImagePreview;