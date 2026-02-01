import { Link } from 'react-router-dom';
import {
  Home as HomeIcon,
  Sparkles,
  TruckIcon,
  Building2,
  Calendar,
  CheckCircle,
  ArrowRight,
  Leaf,
  Shield,
  Clock,
  Star,
} from 'lucide-react';

export default function Services() {
  const mainServices = [
    {
      id: 'recurring',
      icon: Calendar,
      title: 'Recurring Residential Cleaning',
      subtitle: 'Weekly, Bi-weekly, or Monthly',
      description:
        'Keep your home consistently clean with our recurring service. We build a relationship with you and customize our cleaning to your preferences.',
      features: [
        'Same professional team each visit',
        'Customized cleaning checklist',
        'Flexible scheduling',
        'Consistent quality standards',
        'Priority booking',
        'Special member pricing',
      ],
      included: [
        'Kitchen: Counters, appliances, sink, floors',
        'Bathrooms: Toilets, showers, mirrors, fixtures',
        'Living areas: Dusting, vacuuming, floors',
        'Bedrooms: Making beds, dusting, vacuuming',
        'General: Trash removal, surface cleaning',
      ],
      gradient: 'from-teal-600 to-teal-500',
      bgColor: 'from-teal-50 to-emerald-50',
    },
    {
      id: 'deep',
      icon: Sparkles,
      title: 'One-Time & Deep Cleaning',
      subtitle: 'Thorough Top-to-Bottom Clean',
      description:
        'Perfect for seasonal refreshes, special occasions, or when you need a fresh start. We tackle every corner and hard-to-reach area.',
      features: [
        'Detail-oriented cleaning',
        'Hard-to-reach areas included',
        'Baseboards and trim',
        'Inside appliances',
        'Cabinet exteriors',
        'Light fixtures and fans',
      ],
      included: [
        'Everything in recurring service, plus:',
        'Interior window cleaning',
        'Deep appliance cleaning',
        'Baseboard wiping',
        'Door frames and light switches',
        'Behind and under furniture',
      ],
      gradient: 'from-emerald-600 to-green-500',
      bgColor: 'from-emerald-50 to-green-50',
    },
    {
      id: 'move',
      icon: TruckIcon,
      title: 'Move-In / Move-Out Cleaning',
      subtitle: 'Fresh Start for Your New Space',
      description:
        'Moving is stressful enough. Let us handle the cleaning. We ensure your old place is spotless or your new home is move-in ready.',
      features: [
        'Empty or occupied cleaning',
        'All rooms deep cleaned',
        'Appliance interior cleaning',
        'Cabinet cleaning inside/out',
        'Flexible scheduling',
        'Quick turnaround available',
      ],
      included: [
        'All deep cleaning services',
        'Interior cabinets and drawers',
        'All appliances inside and out',
        'Window tracks and sills',
        'Light fixtures removed and cleaned',
        'Wall spot cleaning',
      ],
      gradient: 'from-blue-600 to-teal-500',
      bgColor: 'from-blue-50 to-teal-50',
    },
    {
      id: 'construction',
      icon: Building2,
      title: 'Post-Construction Cleaning',
      subtitle: 'Renovation Cleanup Specialists',
      description:
        'Construction dust and debris require specialized cleaning. We have the tools and expertise to make your renovated space shine.',
      features: [
        'Industrial-grade equipment',
        'Multiple cleaning passes',
        'Safe debris removal',
        'Dust-free guarantee',
        'Detail cleaning',
        'Final touch inspection',
      ],
      included: [
        'Dust and debris removal',
        'Window and sill cleaning',
        'Floor scrubbing and polishing',
        'Fixture cleaning and polishing',
        'Vent and filter cleaning',
        'Final detailed inspection',
      ],
      gradient: 'from-orange-600 to-amber-500',
      bgColor: 'from-orange-50 to-amber-50',
    },
    {
      id: 'commercial',
      icon: Building2,
      title: 'Office & Commercial Cleaning',
      subtitle: 'Professional Workspace Solutions',
      description:
        'A clean office is a productive office. We provide flexible commercial cleaning that works around your business schedule.',
      features: [
        'After-hours service available',
        'Custom cleaning schedules',
        'Professional grade products',
        'Trained commercial staff',
        'Insured and bonded',
        'Consistent quality control',
      ],
      included: [
        'Office areas and workstations',
        'Conference and break rooms',
        'Restrooms and facilities',
        'Kitchen and common areas',
        'Floors and carpets',
        'Trash and recycling',
      ],
      gradient: 'from-purple-600 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50',
    },
  ];

  const addOns = [
    {
      title: 'Interior Windows',
      description: 'Streak-free window cleaning',
      icon: Sparkles,
    },
    {
      title: 'Oven Deep Clean',
      description: 'Interior oven scrubbing',
      icon: Sparkles,
    },
    {
      title: 'Refrigerator Clean',
      description: 'Inside fridge cleaning',
      icon: Sparkles,
    },
    {
      title: 'Laundry Service',
      description: 'Wash, dry, and fold',
      icon: Sparkles,
    },
    {
      title: 'Organizing Services',
      description: 'Closet and space organization',
      icon: Sparkles,
    },
    {
      title: 'Pet Hair Removal',
      description: 'Extra attention for pet owners',
      icon: Sparkles,
    },
  ];

  const whyChooseUs = [
    {
      icon: Leaf,
      title: 'Eco-Friendly Products',
      description: 'Safe for your family, pets, and the planet',
    },
    {
      icon: Shield,
      title: 'Insured & Bonded',
      description: 'Complete protection and peace of mind',
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'Service that fits your lifestyle',
    },
    {
      icon: Star,
      title: 'Quality Guaranteed',
      description: 'Not happy? We make it right',
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
              <Sparkles className="w-4 h-4" />
              Our Cleaning Services
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Professional Cleaning Solutions for Every Need
            </h1>
            <p className="text-xl text-teal-50 leading-relaxed">
              From regular maintenance to specialized deep cleans, we provide comprehensive eco-friendly cleaning services tailored to your home or business
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {mainServices.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`scroll-mt-24 ${index % 2 === 0 ? '' : ''}`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div
                      className={`bg-gradient-to-br ${service.bgColor} rounded-3xl p-12 shadow-xl`}
                    >
                      <div
                        className={`bg-gradient-to-br ${service.gradient} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                      >
                        <service.icon className="w-10 h-10 text-white" />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                        {service.title}
                      </h2>
                      <p className="text-lg text-teal-600 font-semibold mb-4">
                        {service.subtitle}
                      </p>
                      <p className="text-gray-700 text-lg leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {service.features.map((feature, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-3 bg-gray-50 rounded-lg p-3"
                            >
                              <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">What's Included</h3>
                        <ul className="space-y-2">
                          {service.included.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link
                        to="/quote"
                        className={`inline-flex items-center gap-2 bg-gradient-to-r ${service.gradient} text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300`}
                      >
                        Get a Quote for This Service
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Sparkles className="w-4 h-4" />
              Customize Your Clean
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Add-On Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enhance any cleaning service with these popular add-ons
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-200"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-teal-100 p-3 rounded-lg">
                    <addon.icon className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{addon.title}</h3>
                    <p className="text-gray-600">{addon.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Happy2Clean?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference with our professional, eco-friendly approach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-teal-100 to-emerald-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <reason.icon className="w-10 h-10 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <HomeIcon className="w-16 h-16 text-teal-400 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Experience the Happy2Clean Difference?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Let us create a customized cleaning plan that perfectly fits your needs and schedule
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
              to="/pricing"
              className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
