import { Link } from 'react-router-dom';
import {
  CheckCircle,
  ArrowRight,
  DollarSign,
  Calendar,
  Home as HomeIcon,
  Sparkles,
  TruckIcon,
  Building2,
  Clock,
  Shield,
  Star,
  Zap,
} from 'lucide-react';

export default function Pricing() {
  const recurringPlans = [
    {
      name: 'Weekly',
      frequency: 'Every Week',
      discount: 'Best Value - Save 20%',
      features: [
        'Same team every visit',
        'Priority scheduling',
        'Lowest per-visit rate',
        'Flexible customization',
        '24hr cancellation policy',
        'Member-only benefits',
      ],
      popular: false,
      gradient: 'from-teal-600 to-teal-500',
    },
    {
      name: 'Bi-Weekly',
      frequency: 'Every 2 Weeks',
      discount: 'Most Popular - Save 15%',
      features: [
        'Consistent cleaning schedule',
        'Same professional team',
        'Priority booking',
        'Custom cleaning plan',
        '24hr cancellation policy',
        'Special member rates',
      ],
      popular: true,
      gradient: 'from-emerald-600 to-green-500',
    },
    {
      name: 'Monthly',
      frequency: 'Every 4 Weeks',
      discount: 'Save 10%',
      features: [
        'Regular maintenance',
        'Flexible scheduling',
        'Professional service',
        'Customized cleaning',
        '48hr cancellation policy',
        'Quality guaranteed',
      ],
      popular: false,
      gradient: 'from-blue-600 to-teal-500',
    },
  ];

  const oneTimeServices = [
    {
      icon: Sparkles,
      name: 'Deep Cleaning',
      description: 'Comprehensive top-to-bottom clean',
      basePrice: 'Starting at $180',
      details: [
        'All standard cleaning areas',
        'Baseboards and trim',
        'Interior windows',
        'Inside appliances',
        'Cabinet exteriors',
        'Light fixtures',
      ],
    },
    {
      icon: TruckIcon,
      name: 'Move-In/Out',
      description: 'Leave or arrive to a spotless space',
      basePrice: 'Starting at $220',
      details: [
        'Empty or occupied',
        'All deep cleaning included',
        'Cabinet interiors',
        'All appliances',
        'Window tracks',
        'Wall spot cleaning',
      ],
    },
    {
      icon: Building2,
      name: 'Post-Construction',
      description: 'Renovation cleanup specialists',
      basePrice: 'Custom Quote',
      details: [
        'Dust and debris removal',
        'Multiple cleaning passes',
        'Industrial equipment',
        'Floor treatment',
        'Detail finishing',
        'Final inspection',
      ],
    },
  ];

  const addOns = [
    { name: 'Interior Windows', price: '$3-5/window' },
    { name: 'Oven Deep Clean', price: '$35-45' },
    { name: 'Refrigerator Clean', price: '$35-45' },
    { name: 'Laundry Service', price: '$25/load' },
    { name: 'Organizing Service', price: '$45/hour' },
    { name: 'Extra Pet Hair Removal', price: '$20-30' },
  ];

  const pricingFactors = [
    {
      icon: HomeIcon,
      title: 'Home Size',
      description: 'Sq. footage and number of rooms affect pricing',
    },
    {
      icon: Calendar,
      title: 'Service Frequency',
      description: 'More frequent service = lower per-visit cost',
    },
    {
      icon: Clock,
      title: 'Cleaning Depth',
      description: 'Standard vs. deep cleaning requirements',
    },
    {
      icon: Sparkles,
      title: 'Add-On Services',
      description: 'Additional tasks and special requests',
    },
  ];

  const guarantees = [
    {
      icon: Shield,
      title: 'No Hidden Fees',
      description: 'Transparent pricing with no surprises',
    },
    {
      icon: Star,
      title: 'Satisfaction Guarantee',
      description: 'Not happy? We make it right for free',
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'Easy rescheduling and cancellation',
    },
    {
      icon: Zap,
      title: 'Instant Quotes',
      description: 'Get accurate pricing in minutes',
    },
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
              <DollarSign className="w-4 h-4" />
              Simple, Transparent Pricing
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Quality Cleaning at Fair Prices
            </h1>
            <p className="text-xl text-teal-50 leading-relaxed mb-8">
              No hidden fees, no surprises. Just honest pricing for exceptional eco-friendly cleaning services
            </p>
            <Link
              to="/quote"
              className="inline-flex items-center gap-2 bg-white text-teal-600 px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Get Your Instant Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Calendar className="w-4 h-4" />
              Recurring Service Plans
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Save More with Regular Service
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose a frequency that works for you and enjoy member benefits
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {recurringPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl p-8 border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
                  plan.popular
                    ? 'border-teal-500 shadow-xl scale-105'
                    : 'border-gray-200 shadow-lg'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.frequency}</p>
                  <div
                    className={`inline-block bg-gradient-to-r ${plan.gradient} text-white px-4 py-2 rounded-full text-sm font-semibold`}
                  >
                    {plan.discount}
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/quote"
                  className={`block w-full text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow-lg hover:shadow-xl'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl p-8 text-center border-2 border-teal-200">
            <p className="text-lg text-gray-700">
              <span className="font-bold text-teal-700">Sample Pricing:</span> A typical 1,500 sq ft home with 2 bedrooms, 2 bathrooms starts at{' '}
              <span className="font-bold text-gray-900">$120-150</span> for bi-weekly service
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Sparkles className="w-4 h-4" />
              One-Time Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Specialized Cleaning Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Perfect for occasional deep cleans or special circumstances
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {oneTimeServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-teal-100 to-emerald-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-teal-600" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>

                <div className="mb-6">
                  <span className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                    {service.basePrice}
                  </span>
                </div>

                <ul className="space-y-2 mb-6">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/quote"
                  className="block w-full text-center bg-gray-900 text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors"
                >
                  Request Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Popular Add-Ons
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Customize any service with these extras
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {addOns.map((addon, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border-2 border-gray-200 hover:border-teal-500 transition-colors"
              >
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-900">{addon.name}</span>
                  <span className="text-teal-600 font-bold">{addon.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Affects Your Price?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We consider these factors to give you accurate, fair pricing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingFactors.map((factor, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-teal-100 to-emerald-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <factor.icon className="w-10 h-10 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{factor.title}</h3>
                <p className="text-gray-600">{factor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Pricing Promise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent, fair, and backed by our guarantee
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {guarantees.map((guarantee, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 text-center border-2 border-gray-200 hover:border-teal-500 transition-colors"
              >
                <div className="bg-gradient-to-br from-teal-600 to-emerald-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <guarantee.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{guarantee.title}</h3>
                <p className="text-gray-600">{guarantee.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <DollarSign className="w-16 h-16 text-teal-400 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get Your Personalized Quote Today
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Tell us about your space and cleaning needs, and we'll provide an accurate quote in minutes—no obligation, no pressure
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/quote"
              className="bg-gradient-to-r from-teal-600 to-teal-500 text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Get Free Quote Now
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
