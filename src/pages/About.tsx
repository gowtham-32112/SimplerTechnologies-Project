import React from 'react';
import { Target, Heart, Zap } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Mission-Driven',
      description: 'We are committed to empowering businesses with cutting-edge technology solutions that drive real results.',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'User-Centric',
      description: 'Every feature we build is designed with our users in mind, ensuring the best possible experience.',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Innovation',
      description: 'We continuously push the boundaries of what\'s possible, staying ahead of industry trends.',
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About ProSite
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We're building the future of professional platforms, one feature at a time.
          </p>
        </div>

        {/* Story Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="prose prose-lg text-gray-600">
            <p className="mb-6">
              Founded in 2024, ProSite emerged from a simple observation: businesses needed a more intuitive, 
              secure, and powerful platform to manage their operations and connect with their users.
            </p>
            <p className="mb-6">
              Our team of experienced developers and designers came together with a shared vision of creating 
              something truly exceptional. We believe that great software should be both powerful and easy to use, 
              combining cutting-edge technology with thoughtful design.
            </p>
            <p>
              Today, we're proud to serve thousands of users worldwide, helping them achieve their goals with 
              our comprehensive platform. But this is just the beginning – we're constantly innovating and 
              expanding our capabilities to better serve our growing community.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Join Our Journey
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for building 
            exceptional user experiences. Together, we can shape the future of professional platforms.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
            Explore Careers
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;