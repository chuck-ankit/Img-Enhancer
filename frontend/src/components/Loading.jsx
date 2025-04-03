import React from 'react';

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="relative w-16 h-16">
        <div className="absolute top-0 left-0 w-full h-full border-4 border-perano-200 rounded-full"></div>
        <div className="absolute top-0 left-0 w-full h-full border-4 border-perano-500 rounded-full animate-spin border-t-transparent"></div>
      </div>
      <p className="text-perano-600 font-medium">Enhancing your image...</p>
    </div>
  );
};

export default Loading;