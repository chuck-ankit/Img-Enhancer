import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: '1',
      title: 'Upload Your Image',
      description: 'Drag and drop your image or click to browse files. We support JPG, PNG, and WebP formats.',
      icon: '📤',
    },
    {
      number: '2',
      title: 'Choose Enhancement Type',
      description: 'Select the type of enhancement that best suits your image - portrait, landscape, or low-light.',
      icon: '⚙️',
    },
    {
      number: '3',
      title: 'AI Processing',
      description: 'Our AI analyzes your image and applies the optimal enhancements automatically.',
      icon: '🤖',
    },
    {
      number: '4',
      title: 'Download Result',
      description: 'Download your enhanced image in high quality, ready to use anywhere.',
      icon: '💾',
    },
  ];

  return (
    <section className="py-16 bg-perano-50 rounded-xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-perano-900 mb-4">How It Works</h2>
        <p className="text-xl text-perano-600 max-w-2xl mx-auto">
          Enhance your images in just a few simple steps
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-perano-500 text-white rounded-full flex items-center justify-center font-bold">
                {step.number}
              </div>
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-perano-900 mb-2">{step.title}</h3>
              <p className="text-perano-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 