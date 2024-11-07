// RegisterPage.tsx
import React from 'react';
import { Phone, Lock, UserPlus } from 'lucide-react';
import register from '@/components/attractive-register-form'

const RegisterPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-800 to-indigo-900 text-white backdrop-blur-md bg-slate-500">
      <div className="w-full max-w-md p-8 bg-opacity-90 bg-transparent rounded-lg shadow-lg">
        {/* Title and Icon */}
        <div className="flex items-center justify-center mb-8 space-x-2">
          <UserPlus className="w-6 h-6 text-blue-300" />
          <h1 className="text-3xl font-semibold">Tiranga Registration</h1>
        </div>


        {/* Register Form */}
        <form className="space-y-6">
          {/* Phone Number Input */}
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-300" />
            <input
              type="text"
              placeholder="Enter your phone number"
              className="border-blue-700 border-2 w-full pl-10 py-2 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400  bg-transparent"
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-300" />
            <input
              type="password"
              placeholder="Set password"
              className="border-blue-700 border-2 w-full pl-10 py-2 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-transparent"
            />
          </div>

          {/* Confirm Password Input */}
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-300" />
            <input
              type="password"
              placeholder="Confirm password"
              className="border-blue-700 border-2 w-full pl-10 py-2 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-transparent"
            />
          </div>

          {/* Invite Code Input */}
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-300" />
            <input
              type="text"
              placeholder="Enter invite code"
              className="border-blue-700 border-2 w-full pl-10 py-2 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-transparent "
            />
          </div>

          {/* Agreement Checkbox */}
          <div className="flex items-center space-x-2 text-sm">
            <input type="checkbox" id="agreement" className="text-blue-300 focus:ring-0" />
            <label htmlFor="agreement" className="text-gray-400">
              I have read and agree to the{' '}
              <a href="#" className="text-blue-400 underline">
                Privacy Agreement
              </a>
            </label>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full py-2 text-lg font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Register
          </button>

          {/* Login Link */}
          <p className="text-center text-gray-400 mt-4">
            Already have an account?{' '}
            <a href="/login" className="text-blue-400 underline">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default register;
