import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const ImageUploader = ({ uploadImageHandler }) => {
  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      uploadImageHandler(acceptedFiles[0]);
    }
  }, [uploadImageHandler]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.webp']
    },
    maxFiles: 1
  });

  return (
    <div
      {...getRootProps()}
      className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all duration-300
        ${isDragActive 
          ? 'border-perano-500 bg-perano-50' 
          : 'border-perano-300 hover:border-perano-400 hover:bg-perano-50'
        }`}
    >
      <input {...getInputProps()} />
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="w-16 h-16 bg-perano-100 rounded-full flex items-center justify-center">
          <svg
            className="w-8 h-8 text-perano-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            />
          </svg>
        </div>
        <div className="text-center">
          <p className="text-lg font-medium text-perano-900">
            {isDragActive ? 'Drop the image here' : 'Drag & drop your image here'}
          </p>
          <p className="text-sm text-perano-600 mt-1">
            or click to browse files
          </p>
          <p className="text-xs text-perano-500 mt-2">
            Supported formats: JPG, PNG, WebP
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageUploader;