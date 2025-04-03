import React from 'react';

const Features = () => {
  const features = [
    {
      title: 'AI-Powered Enhancement',
      description: 'Our advanced AI algorithms analyze and enhance your images automatically, improving quality and details.',
      icon: '✨',
    },
    {
      title: 'Multiple Enhancement Types',
      description: 'Choose from various enhancement types including portrait, landscape, and low-light optimization.',
      icon: '🎨',
    },
    {
      title: 'Real-time Preview',
      description: 'See the enhanced results instantly with our real-time preview feature.',
      icon: '🔍',
    },
    {
      title: 'High-Quality Output',
      description: 'Get professional-grade results with our high-resolution output capabilities.',
      icon: '📸',
    },
    {
      title: 'Secure Processing',
      description: 'Your images are processed securely and never stored permanently.',
      icon: '🔒',
    },
    {
      title: 'Easy to Use',
      description: 'Simple drag-and-drop interface makes image enhancement accessible to everyone.',
      icon: '🎯',
    },
  ];

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-perano-900 mb-4">Powerful Features</h2>
        <p className="text-xl text-perano-600 max-w-2xl mx-auto">
          Discover what makes our image enhancement tool stand out
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-perano-900 mb-2">{feature.title}</h3>
            <p className="text-perano-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features; 