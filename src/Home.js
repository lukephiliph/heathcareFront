import React from 'react';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Welcome Section */}
        <h1 className="text-5xl text-center text-blue-900 font-semibold mb-8">
          Welcome to Sanctuary Hope
        </h1>
        <p className="text-lg text-center text-gray-700 mb-10">
          At Sanctuary Hope, we provide personalized healthcare services with compassion and excellence. 
          We are dedicated to offering the best medical care to ensure your health and well-being.
        </p>

        {/* Information Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-10">
          <h2 className="text-3xl text-blue-900 font-semibold mb-4">Our Services</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>24/7 Emergency Care</li>
            <li>Comprehensive Health Checkups</li>
            <li>Specialized Treatments and Surgeries</li>
            <li>Advanced Diagnostic Services</li>
            <li>Personalized Treatment Plans</li>
          </ul>
        </div>

        {/* Patient Portal Link */}
        <div className="text-center">
          <Link
            to="/patientsList"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700"
          >
            Visit Patient Portal
          </Link>
        </div>
      </div>
    </div>
  );
};
