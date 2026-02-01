import { Link } from 'react-router-dom';
import {
  Sparkles,
  Shield,
  Clock,
  Heart,
  Leaf,
  CheckCircle,
  Star,
  ArrowRight,
  Users,
  Award,
  Home as HomeIcon,
  Building2,
} from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: Leaf,
      title: 'Eco-Friendly Products',
      description: 'Non-toxic, biodegradable cleaning solutions safe for your family and pets',
    },
    {
      icon: Shield,
      title: 'Trusted & Reliable',
      description: 'Fully insured professionals who respect your home and privacy',
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'Weekly, bi-weekly, or monthly service plans that fit your lifestyle',
    },
    {
      icon: Heart,
      title: 'Health Conscious',
      description: 'High-filtration vacuums and microfiber tools for a healthier clean',
    },
    {
      icon: Award,
      title: 'Quality Guaranteed',
      description: 'Satisfaction guaranteed on every service or we make it right',
    },
    {
      icon: Users,
      title: 'Locally Owned',
      description: 'Supporting our Metro Vancouver community with exceptional service',
    },
  ];

  const services = [
    {
      icon: HomeIcon,
      title: 'Recurring Residential',
      description: 'Regular cleaning to keep your home spotless week after week',
      features: ['Weekly or bi-weekly', 'Customized checklist', 'Same team each visit'],
    },
    {
      icon: Sparkles,
      title: 'Deep Cleaning',
      description: 'Thorough top-to-bottom cleaning for a fresh start',
      features: ['Detail-oriented', 'Hard-to-reach areas', 'Seasonal refresh'],
    },
    {
      icon: Building2,
      title: 'Commercial Cleaning',
      description: 'Professional office cleaning for productive workspaces',
      features: ['After-hours service', 'Custom schedules', 'Professional results'],
    },
  ];

  const serviceAreas = [
    'Vancouver',
    'Burnaby',
    'Coquitlam',
    'New Westminster',
    'North Vancouver',
    'West Vancouver',
  ];

  const stats = [
    { number: '500+', label: 'Happy Clients' },
    { number: '10,000+', label: 'Homes Cleaned' },
    { number: '100%', label: 'Eco-Friendly' },
    { number: '5★', label: 'Average Rating' },
  ];

  return (
    <div className="bg-white">
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-teal-50 via-white to-emerald-50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-teal-200 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-200 rounded-full opacity-20 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold">
                <Leaf className="w-4 h-4" />
                100% Eco-Friendly Cleaning Solutions
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                  A Cleaner Home,
                </span>
                <br />
                <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                  A Happier You
                </span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Experience the joy of a pristine home with Happy2Clean. Metro Vancouver's trusted eco-friendly cleaning service that puts your health and comfort first.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/quote"
                  className="group bg-gradient-to-r from-teal-600 to-teal-500 text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Get Your Free Quote
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/services"
                  className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-gray-200 flex items-center justify-center gap-2"
                >
                  View Services
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-4">
                {['No Hidden Fees', 'Satisfaction Guaranteed', 'Locally Owned'].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-teal-600" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-3xl transform rotate-3 opacity-20"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 space-y-6 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center justify-between pb-6 border-b border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-br from-teal-500 to-teal-600 p-3 rounded-xl">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl">Quick Quote</h3>
                      <p className="text-sm text-gray-600">Get instant pricing</p>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Service Type</label>
                    <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:outline-none transition-colors">
                      <option>Recurring Cleaning</option>
                      <option>Deep Cleaning</option>
                      <option>Move-In/Out</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Frequency</label>
                    <div className="grid grid-cols-3 gap-2">
                      {['Weekly', 'Bi-weekly', 'Monthly'].map((freq) => (
                        <button
                          key={freq}
                          className="px-4 py-2 border-2 border-gray-200 rounded-lg hover:border-teal-500 hover:bg-teal-50 transition-colors text-sm font-medium"
                        >
                          {freq}
                        </button>
                      ))}
                    </div>
                  </div>

                  <Link
                    to="/quote"
                    className="block w-full bg-gradient-to-r from-teal-600 to-teal-500 text-white py-3 rounded-xl font-semibold text-center hover:shadow-lg transition-shadow"
                  >
                    Continue to Full Quote
                  </Link>
                </div>

                <p className="text-xs text-center text-gray-500">
                  No credit card required • Free consultation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Shield className="w-4 h-4" />
              Why Happy2Clean?
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Cleaning Done Right, Every Time
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just about clean spaces—we're about creating healthy, happy environments for you and your loved ones
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="bg-gradient-to-br from-teal-100 to-emerald-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Sparkles className="w-4 h-4" />
              Our Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Tailored Cleaning Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From regular maintenance to deep cleans, we have a service perfect for your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-200 hover:border-teal-500 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="bg-gradient-to-br from-teal-600 to-emerald-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/services"
                  className="text-teal-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-teal-600 via-teal-500 to-emerald-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Proudly Serving Metro Vancouver</h2>
            <p className="text-xl text-teal-50 max-w-3xl mx-auto">
              We bring our exceptional cleaning services to homes and businesses across the region
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {serviceAreas.map((area) => (
              <div
                key={area}
                className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 text-center font-semibold hover:bg-white/20 transition-colors border border-white/20"
              >
                {area}
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/service-areas"
              className="inline-flex items-center gap-2 bg-white text-teal-600 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              View Full Coverage Map
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Sparkles className="w-16 h-16 text-teal-400 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready for a Spotless Space?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join hundreds of satisfied clients who trust Happy2Clean for their homes and offices. Get your free, no-obligation quote today and experience the difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/quote"
              className="bg-gradient-to-r from-teal-600 to-teal-500 text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Get Your Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:604-786-9009"
              className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Call 604-786-9009
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
