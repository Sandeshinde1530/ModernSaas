const pricingPlans = [
  {
    id: 1,
    name: 'Basic',
    price: '$29',
    period: '/month',
    description: 'Perfect for individuals and small teams getting started',
    features: [
      'Up to 5 team members',
      '10 GB storage',
      'Basic analytics',
      'Email support',
      'Mobile app access'
    ],
    cta: 'Get Started',
    highlighted: false
  },
  {
    id: 2,
    name: 'Pro',
    price: '$79',
    period: '/month',
    description: 'Ideal for growing businesses that need more power',
    features: [
      'Up to 25 team members',
      '100 GB storage',
      'Advanced analytics',
      'Priority support',
      'Custom integrations',
      'API access'
    ],
    cta: 'Start Free Trial',
    highlighted: true
  },
  {
    id: 3,
    name: 'Enterprise',
    price: '$199',
    period: '/month',
    description: 'For large organizations with advanced needs',
    features: [
      'Unlimited team members',
      'Unlimited storage',
      'Enterprise analytics',
      '24/7 dedicated support',
      'Custom integrations',
      'Advanced security',
      'SLA guarantee'
    ],
    cta: 'Contact Sales',
    highlighted: false
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-32 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent{' '}
            <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your needs. All plans include a 14-day free trial.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 ${
                plan.highlighted
                  ? 'border-2 border-primary-500 transform lg:scale-105'
                  : 'border border-gray-200'
              }`}
            >
              {/* Recommended Badge */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <p className="text-gray-600 text-sm mb-6">{plan.description}</p>

              {/* Price */}
              <div className="mb-6">
                <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                <span className="text-gray-600 text-lg">{plan.period}</span>
              </div>

              {/* CTA Button */}
              <a
                href="#"
                className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors duration-200 mb-8 ${
                  plan.highlighted
                    ? 'bg-primary-600 text-white hover:bg-primary-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                {plan.cta}
              </a>

              {/* Features List */}
              <ul className="space-y-4">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
