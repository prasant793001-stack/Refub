import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <div className="relative z-10 min-h-screen py-20">
      {/* Hero */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-4">
            About <span className="gradient-text">REFUB</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            UAE's Premium Refurbished Electronics Store - Expert Tested, Certified, and Trusted.
          </p>
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto px-6 space-y-16">
        {/* Our Story */}
        <section>
          <h2 className="text-3xl font-display font-bold mb-6">Our Story</h2>
          <div className="glass-card p-8">
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Founded in 2024, REFUB was born from a simple mission: to make premium electronics accessible to everyone without compromising on quality. We saw too many people paying full price for new devices when they could get expert-refurbished alternatives at a fraction of the cost.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Today, we're proud to serve thousands of satisfied customers across the UAE, offering expert-tested devices with comprehensive warranties. Every product we sell undergoes our rigorous 50+ point inspection process, ensuring you get a device that performs like new.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              We believe in sustainable consumption and helping our customers save money while reducing electronic waste. That's why we work with manufacturers and retailers to source quality refurbished devices that meet our exacting standards.
            </p>
          </div>
        </section>

        {/* Our Process */}
        <section>
          <h2 className="text-3xl font-display font-bold mb-6">Our Process</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: '🔍',
                title: 'Sourcing',
                desc: 'We partner with manufacturers and retailers to source quality refurbished devices that meet our exacting standards.'
              },
              {
                icon: '🔧',
                title: 'Inspection',
                desc: 'Every device undergoes our rigorous 50+ point inspection process, including functionality tests, cosmetic checks, and performance benchmarks.'
              },
              {
                icon: '📦',
                title: 'Certification',
                desc: 'Only devices that pass all our tests receive our REFUB certification and are prepared for delivery with all original accessories.'
              }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="glass-card p-6 text-center"
              >
                <div className="text-5xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Our Values */}
        <section>
          <h2 className="text-3xl font-display font-bold mb-6">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-4">Quality First</h3>
              <p className="text-gray-400 leading-relaxed">
                We never compromise on quality. Every device we sell is expert-tested and certified. Our 3-month warranty demonstrates our confidence in our products.
              </p>
            </div>
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-4">Customer Trust</h3>
              <p className="text-gray-400 leading-relaxed">
                Our customers are our priority. We provide transparent pricing, excellent support, and fair trade-in values. Trust is everything to us.
              </p>
            </div>
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-4">Sustainability</h3>
              <p className="text-gray-400 leading-relaxed">
                By selling refurbished electronics, we help reduce electronic waste and promote sustainable consumption. Every device sold saves resources.
              </p>
            </div>
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-4">Expertise</h3>
              <p className="text-gray-400 leading-relaxed">
                Our team consists of tech enthusiasts and professionals who know electronics inside out. We provide expert advice and support.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section>
          <h2 className="text-3xl font-display font-bold mb-6 text-center">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { value: '1500+', label: 'Devices Sold' },
              { value: '4.9★', label: 'Customer Rating' },
              { value: '5000+', label: 'Happy Customers' },
              { value: '3mo', label: 'Warranty' }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-display font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-gray-500 uppercase tracking-wider text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <div className="glass-card p-12">
            <h2 className="text-3xl font-display font-bold mb-4">Ready to Experience the Difference?</h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Browse our collection of expert-tested devices or sell yours to us for a fair price.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a href="/products" className="px-8 py-4 rounded-full bg-brand hover:bg-brand-dark text-white font-bold transition-colors">
                Shop Now
              </a>
              <a href="/sell" className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-colors">
                Sell Your Device
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
