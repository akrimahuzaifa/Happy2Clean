import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Image as ImageIcon,
  Home as HomeIcon,
  Building2,
  Sparkles,
} from 'lucide-react';

export default function Gallery() {
  const [activeCompare, setActiveCompare] = useState<number | null>(null);

  const galleryItems = [
    {
      id: 1,
      title: 'Living Room Transformation',
      category: 'Residential Deep Clean',
      before: 'https://images.pexels.com/photos/3966568/pexels-photo-3966568.jpeg?auto=compress&cs=tinysrgb&w=600',
      after: 'https://images.pexels.com/photos/3587968/pexels-photo-3587968.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Complete deep clean including dust, vacuuming, and furniture arrangement',
    },
    {
      id: 2,
      title: 'Kitchen Deep Clean',
      category: 'Kitchen Cleaning',
      before: 'https://images.pexels.com/photos/5490274/pexels-photo-5490274.jpeg?auto=compress&cs=tinysrgb&w=600',
      after: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Appliance deep clean, grease removal, and cabinet detailing',
    },
    {
      id: 3,
      title: 'Bathroom Refresh',
      category: 'Bathroom Cleaning',
      before: 'https://images.pexels.com/photos/4228017/pexels-photo-4228017.jpeg?auto=compress&cs=tinysrgb&w=600',
      after: 'https://images.pexels.com/photos/2121122/pexels-photo-2121122.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Tile cleaning, mirror polishing, and grout restoration',
    },
    {
      id: 4,
      title: 'Office Cleaning',
      category: 'Commercial Cleaning',
      before: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600',
      after: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Professional office space cleanup with desk and floor polishing',
    },
    {
      id: 5,
      title: 'Bedroom Cleaning',
      category: 'Residential Cleaning',
      before: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600',
      after: 'https://images.pexels.com/photos/1454496/pexels-photo-1454496.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Dust removal, carpet cleaning, and furniture organization',
    },
    {
      id: 6,
      title: 'Move-Out Clean',
      category: 'Move-Out Cleaning',
      before: 'https://images.pexels.com/photos/2882521/pexels-photo-2882521.jpeg?auto=compress&cs=tinysrgb&w=600',
      after: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Complete move-out deep clean for maximum deposit recovery',
    },
  ];

  const categoryIcons: { [key: string]: React.ComponentType<any> } = {
    'Residential Deep Clean': HomeIcon,
    'Kitchen Cleaning': Sparkles,
    'Bathroom Cleaning': Sparkles,
    'Commercial Cleaning': Building2,
    'Residential Cleaning': HomeIcon,
    'Move-Out Cleaning': Building2,
  };

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
              <ImageIcon className="w-4 h-4" />
              Before & After Gallery
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              See the Happy2Clean Difference
            </h1>
            <p className="text-xl text-teal-50 leading-relaxed">
              Discover real transformations from our valued clients. See how we turn cluttered, dirty spaces into spotless, sparkling homes
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Real Results from Real Clients
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hover or tap on any image to see the before and after comparison
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item) => {
              const CategoryIcon = categoryIcons[item.category] || Sparkles;
              const isActive = activeCompare === item.id;

              return (
                <div
                  key={item.id}
                  className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer bg-white border-2 border-gray-200 hover:border-teal-500"
                  onMouseEnter={() => setActiveCompare(item.id)}
                  onMouseLeave={() => setActiveCompare(null)}
                  onClick={() => setActiveCompare(isActive ? null : item.id)}
                >
                  <div className="relative overflow-hidden bg-gray-100 h-80">
                    <img
                      src={isActive ? item.after : item.before}
                      alt={item.title}
                      className="w-full h-full object-cover transition-opacity duration-500"
                    />

                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="text-sm font-semibold bg-teal-600 px-4 py-2 rounded-full inline-block mb-3">
                          {isActive ? 'After' : 'Before'}
                        </div>
                        <p className="text-lg font-bold">
                          Click to compare
                        </p>
                      </div>
                    </div>

                    <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                      <CategoryIcon className="w-4 h-4 text-teal-600" />
                      <span className="text-xs font-semibold text-gray-700">
                        {isActive ? 'AFTER' : 'BEFORE'}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-teal-600 font-semibold mb-3">
                      {item.category}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-3xl p-12 shadow-xl border-2 border-teal-200">
            <Sparkles className="w-16 h-16 text-teal-600 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Your Transformation Starts Here
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Ready to see your space transform? Get in touch with our team to schedule your cleaning and join the hundreds of satisfied clients
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/quote"
                className="bg-gradient-to-r from-teal-600 to-teal-500 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Get Your Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-gray-200 flex items-center justify-center gap-2"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Happy2Clean?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: HomeIcon,
                title: 'Professional Results',
                description: 'Every project is treated with care and attention to detail',
              },
              {
                icon: Sparkles,
                title: 'Eco-Friendly Methods',
                description: 'Safe, non-toxic products that protect your family and environment',
              },
              {
                icon: Building2,
                title: 'Reliable Service',
                description: 'Consistent quality and punctual service you can depend on',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 text-center border-2 border-gray-200"
              >
                <div className="bg-gradient-to-br from-teal-100 to-emerald-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-10 h-10 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
