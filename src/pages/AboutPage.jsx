import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Target, Heart } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">About E-TechHub</h1>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            Your trusted destination for premium tech products since 2018
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                E-TechHub was founded in 2018 with a simple mission: to make premium tech products accessible to everyone. What started as a small online store has grown into a trusted marketplace serving thousands of customers across the country.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We believe in quality, transparency, and customer satisfaction. Every product in our catalog is carefully selected to ensure you get the best value for your money.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Today, we continue to grow and innovate, always keeping our customers at the heart of everything we do.
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-8 text-center">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-blue-600 text-white p-6 rounded-lg">
                  <p className="text-3xl font-bold">10K+</p>
                  <p className="text-blue-100">Happy Customers</p>
                </div>
                <div className="bg-blue-600 text-white p-6 rounded-lg">
                  <p className="text-3xl font-bold">5K+</p>
                  <p className="text-blue-100">Products Sold</p>
                </div>
                <div className="bg-blue-600 text-white p-6 rounded-lg">
                  <p className="text-3xl font-bold">4.9★</p>
                  <p className="text-blue-100">Average Rating</p>
                </div>
                <div className="bg-blue-600 text-white p-6 rounded-lg">
                  <p className="text-3xl font-bold">24/7</p>
                  <p className="text-blue-100">Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <Users size={40} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Customer First
              </h3>
              <p className="text-gray-700">
                Your satisfaction is our priority. We listen to your feedback and continuously improve our services.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <Target size={40} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Quality Focus
              </h3>
              <p className="text-gray-700">
                We never compromise on quality. Every product is tested and verified before reaching you.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <Heart size={40} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Community Care
              </h3>
              <p className="text-gray-700">
                We give back to the community and support various initiatives to make a positive impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Team
          </h2>
          <p className="text-lg text-gray-700 text-center mb-8 max-w-3xl mx-auto">
            Our team consists of passionate tech enthusiasts and professionals dedicated to providing you with the best shopping experience.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Shopping?</h2>
          <p className="text-blue-100 text-lg mb-8">
            Browse our collection of premium tech products and enjoy hassle-free shopping.
          </p>
          <Link
            to="/"
            className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
