import { Link } from 'react-router-dom';
import {
  MapPin,
  CheckCircle,
  ArrowRight,
  Home as HomeIcon,
  Building2,
  Clock,
  Phone,
  Sparkles,
} from 'lucide-react';

export default function ServiceAreas() {
  const serviceAreas = [
    {
      name: 'Vancouver',
      description: 'Downtown, West End, Kitsilano, Mount Pleasant, East Van, and all neighborhoods',
      highlights: [
        'Fast response times',
        'Daily service availability',
        'Experienced local teams',
        'High-rise and condo specialists',
      ],
      icon: Building2,
    },
    {
      name: 'Burnaby',
      description: 'North Burnaby, South Burnaby, Metrotown, Brentwood, Lougheed, and surrounding areas',
      highlights: [
        'Residential and commercial',
        'Same-day quotes available',
        'Flexible scheduling',
        'Family-owned properties',
      ],
      icon: HomeIcon,
    },
    {
      name: 'Coquitlam',
      description: 'City Centre, Burke Mountain, Westwood Plateau, and all Tri-Cities neighborhoods',
      highlights: [
        'Suburban home specialists',
        'Multi-level cleaning',
        'Flexible appointments',
        'Recurring service priority',
      ],
      icon: HomeIcon,
    },
    {
      name: 'New Westminster',
      description: 'Uptown, Downtown, Queensborough, and historic neighborhoods',
      highlights: [
        'Heritage home experience',
        'Modern condo cleaning',
        'River district coverage',
        'Quick response times',
      ],
      icon: Building2,
    },
    {
      name: 'North Vancouver',
      description: 'Lower Lonsdale, Upper Lonsdale, Lynn Valley, Deep Cove, and mountain properties',
      highlights: [
        'Mountain home specialists',
        'Eco-conscious cleaning',
        'Waterfront properties',
        'Premium service focus',
      ],
      icon: HomeIcon,
    },
    {
      name: 'West Vancouver',
      description: 'Ambleside, Dundarave, British Properties, Horseshoe Bay, and exclusive estates',
      highlights: [
        'Luxury home specialists',
        'High-end property care',
        'Discreet service',
        'Premium attention to detail',
      ],
      icon: Building2,
    },
  ];

  const coverageFeatures = [
    {
      icon: Clock,
      title: 'Reliable Scheduling',
      description: 'Prompt arrival and consistent service across all areas',
    },
    {
      icon: MapPin,
      title: 'Local Teams',
      description: 'Familiar with your neighborhood and community',
    },
    {
      icon: Sparkles,
      title: 'Consistent Quality',
      description: 'Same high standards in every location we serve',
    },
    {
      icon: Phone,
      title: 'Easy Communication',
      description: 'Quick response to inquiries from all service areas',
    },
  ];

  const expandingAreas = [
    'Port Moody',
    'Port Coquitlam',
    'Richmond',
    'Surrey',
    'Langley',
    'White Rock',
  ];

  return (
    <div className="bg-white">
      <section className="relative py-20 bg-gradient-to-br from-teal-600 via-teal-500 to-emerald-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <MapPin className="w-4 h-4" />
              Service Coverage
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Serving All of Metro Vancouver
            </h1>
            <p className="text-xl text-teal-50 leading-relaxed">
              Professional eco-friendly cleaning services delivered throughout the Lower Mainland with the same exceptional quality everywhere we go
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <CheckCircle className="w-4 h-4" />
              Primary Service Areas
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              We're in Your Neighborhood
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted cleaning services across Metro Vancouver's most vibrant communities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceAreas.map((area, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-200 hover:border-teal-500 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="bg-gradient-to-br from-teal-100 to-emerald-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <area.icon className="w-8 h-8 text-teal-600" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">{area.name}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{area.description}</p>

                <ul className="space-y-2">
                  {area.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Our Service Area Matters
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Being local means better service for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coverageFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-teal-100 to-emerald-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-10 h-10 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-3xl p-12 border-2 border-teal-200">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <MapPin className="w-16 h-16 text-teal-600 mx-auto mb-6" />
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Don't See Your Area?
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed">
                  We're actively expanding our coverage throughout the Lower Mainland. Contact us to see if we can serve your location.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Expanding to These Areas Soon
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {expandingAreas.map((area, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 bg-gray-50 rounded-lg px-4 py-3"
                    >
                      <MapPin className="w-5 h-5 text-teal-600 flex-shrink-0" />
                      <span className="font-semibold text-gray-700">{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <p className="text-lg text-gray-700 mb-6">
                  Call us to inquire about service in your area
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:604-786-9009"
                    className="bg-gradient-to-r from-teal-600 to-teal-500 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    604-786-9009
                  </a>
                  <a
                    href="tel:778-714-9049"
                    className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-gray-200 flex items-center justify-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    778-714-9049
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-teal-600 via-teal-500 to-emerald-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Locally Owned, Locally Focused
            </h2>
            <p className="text-xl text-teal-50 mb-8 max-w-3xl mx-auto leading-relaxed">
              As a local business, we understand Metro Vancouver homes and the unique needs of our community. We're not just your cleaning service—we're your neighbors.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">6+</div>
                <div className="text-teal-100">Cities Served</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-white/30"></div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-teal-100">Happy Clients</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-white/30"></div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-teal-100">Local & Eco-Friendly</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Sparkles className="w-16 h-16 text-teal-400 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Whether you're in Vancouver, North Shore, or the Tri-Cities, we're ready to bring our exceptional cleaning service to your door
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/quote"
              className="bg-gradient-to-r from-teal-600 to-teal-500 text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Get Your Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
