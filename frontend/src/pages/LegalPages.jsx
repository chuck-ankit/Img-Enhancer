import React from 'react';
import { useParams } from 'react-router-dom';
import { legalDocs } from '../docs/legalDocs';

const LegalPages = () => {
  const { type } = useParams();
  const content = legalDocs[type] || 'Page not found';

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            {type === 'privacy' && 'Privacy Policy'}
            {type === 'terms' && 'Terms of Service'}
            {type === 'contact' && 'Contact Us'}
          </h1>
          <div className="prose prose-lg max-w-none">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalPages; 