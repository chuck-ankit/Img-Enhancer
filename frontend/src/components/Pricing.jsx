import React from 'react';

const Pricing = () => {
  const plans = [
    {
      name: 'Free',
      price: '0',
      features: [
        '5 image enhancements per month',
        'Basic enhancement options',
        'Standard quality output',
        'Community support',
      ],
      cta: 'Get Started',
      popular: false,
    },
    {
      name: 'Pro',
      price: '499',
      features: [
        '50 image enhancements per month',
        'All enhancement types',
        'High quality output',
        'Priority support',
        'Batch processing',
      ],
      cta: 'Upgrade Now',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      features: [
        'Unlimited enhancements',
        'Custom enhancement types',
        'Highest quality output',
        'Dedicated support',
        'API access',
        'Custom integrations',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  const formatPrice = (price) => {
    if (price === 'Custom') return price;
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-perano-900 mb-4">Simple, Transparent Pricing</h2>
        <p className="text-xl text-perano-600 max-w-2xl mx-auto">
          Choose the plan that's right for you
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative bg-white rounded-xl shadow-lg p-8 ${
              plan.popular ? 'border-2 border-perano-500' : ''
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-perano-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
            )}
            
            <h3 className="text-2xl font-bold text-perano-900 mb-2">{plan.name}</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold text-perano-900">
                {formatPrice(plan.price)}
              </span>
              {plan.price !== 'Custom' && <span className="text-perano-600">/month</span>}
            </div>
            
            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center text-perano-600">
                  <svg
                    className="w-5 h-5 mr-2 text-perano-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            
            <button
              className={`w-full py-3 px-4 rounded-lg font-semibold ${
                plan.popular
                  ? 'bg-perano-500 text-white hover:bg-perano-600'
                  : 'bg-perano-100 text-perano-700 hover:bg-perano-200'
              }`}
            >
              {plan.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing; 