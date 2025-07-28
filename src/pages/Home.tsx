import React from 'react';
import UserCard from '../components/UserCard';
import { ArrowRight, Star, Users, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const sampleUsers = [
    { name: 'Sarah Johnson', email: 'sarah.johnson@example.com' },
    { name: 'Michael Chen', email: 'michael.chen@example.com' },
    { name: 'Emily Rodriguez', email: 'emily.rodriguez@example.com' },
  ];

  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: 'User Management',
      description: 'Efficiently manage and organize user profiles with our intuitive interface.',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Secure Platform',
      description: 'Your data is protected with enterprise-grade security measures.',
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: 'Premium Experience',
      description: 'Enjoy a seamless and professional user experience designed for productivity.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to <span className="text-blue-200">ProSite</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              A professional platform designed for modern businesses. Join thousands of users who trust our secure and intuitive interface.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/signup"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/about"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose ProSite?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our platform combines powerful features with an intuitive design to deliver exceptional results for your business.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4 text-white">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* User Cards Demo Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Community
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join thousands of professionals who are already using our platform to achieve their goals.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {sampleUsers.map((user, index) => (
              <UserCard key={index} name={user.name} email={user.email} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;