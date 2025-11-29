import Card from './Card'

const features = [
  {
    id: 1,
    icon: '🚀',
    title: 'Lightning Fast',
    description: 'Experience blazing-fast performance with optimized code and modern infrastructure that scales with your needs.'
  },
  {
    id: 2,
    icon: '🔒',
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security with end-to-end encryption, regular backups, and 99.9% uptime guarantee.'
  },
  {
    id: 3,
    icon: '🎨',
    title: 'Beautiful Design',
    description: 'Stunning, intuitive interfaces that your users will love. Fully customizable to match your brand.'
  },
  {
    id: 4,
    icon: '📊',
    title: 'Advanced Analytics',
    description: 'Gain deep insights with powerful analytics and reporting tools. Make data-driven decisions with confidence.'
  },
  {
    id: 5,
    icon: '🔄',
    title: 'Seamless Integration',
    description: 'Connect with your favorite tools and services. Our API makes integration simple and straightforward.'
  },
  {
    id: 6,
    icon: '💬',
    title: '24/7 Support',
    description: 'Our dedicated support team is always here to help. Get answers fast with live chat and email support.'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 lg:py-32 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Powerful Features for{' '}
            <span className="text-gradient">Modern Teams</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to succeed, all in one place. Built for teams who demand excellence.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              className="border border-gray-100 hover:border-primary-200"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
