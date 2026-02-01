import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Sparkles, Heart, Leaf } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Recurring Cleaning', to: '/services#recurring' },
    { name: 'Deep Cleaning', to: '/services#deep' },
    { name: 'Move-In/Out', to: '/services#move' },
    { name: 'Commercial', to: '/services#commercial' },
  ];

  const areas = [
    'Vancouver',
    'Burnaby',
    'Coquitlam',
    'New Westminster',
    'North Vancouver',
    'West Vancouver',
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4 group">
              <div className="relative">
                <div className="absolute inset-0 bg-teal-500 rounded-full blur-sm opacity-50"></div>
                <div className="relative bg-gradient-to-br from-teal-500 to-teal-600 p-2.5 rounded-full">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
              </div>
              <span className="text-xl font-bold text-white">Happy2Clean</span>
            </Link>
            <p className="text-sm mb-4 leading-relaxed">
              Metro Vancouver's trusted eco-friendly cleaning service. We bring sparkle to your home and office with safe, non-toxic products.
            </p>
            <div className="flex items-center gap-2 text-teal-400 text-sm">
              <Leaf className="w-4 h-4" />
              <span>100% Eco-Friendly Products</span>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-teal-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-teal-400 transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-teal-400 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/service-areas" className="hover:text-teal-400 transition-colors">
                  Service Areas
                </Link>
              </li>
              <li>
                <Link to="/quote" className="hover:text-teal-400 transition-colors">
                  Get a Quote
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link to={service.to} className="hover:text-teal-400 transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:604-786-9009"
                  className="flex items-center gap-2 hover:text-teal-400 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>604-786-9009</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:778-714-9049"
                  className="flex items-center gap-2 hover:text-teal-400 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>778-714-9049</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:happy2clean2@gmail.com"
                  className="flex items-center gap-2 hover:text-teal-400 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">happy2clean2@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="text-sm">Serving Metro Vancouver & Surrounding Areas</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <h4 className="text-white font-semibold mb-2">Service Areas</h4>
              <div className="flex flex-wrap gap-2">
                {areas.map((area) => (
                  <span
                    key={area}
                    className="text-xs bg-gray-800 px-3 py-1 rounded-full text-gray-400"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-start md:justify-end gap-2 text-sm">
              <Heart className="w-4 h-4 text-red-400" />
              <span>Safe for Kids, Pets & Environment</span>
            </div>
          </div>

          <div className="text-center text-sm text-gray-500">
            <p>&copy; {currentYear} Happy2Clean. All rights reserved.</p>
            <p className="mt-1">Proudly serving Metro Vancouver with eco-friendly cleaning solutions</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
