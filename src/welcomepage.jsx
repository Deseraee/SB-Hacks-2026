
import React from 'react';

export default function WelcomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-orange-200">
 {/* Navigation Bar */}
 <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800">Women Empowerment App</h1>
          
          <div className="flex gap-4">
            <button className="px-6 py-2 text-gray-800 hover:text-pink-600 font-semibold transition-colors">
              Home
            </button>
            <button className="px-6 py-2 text-gray-800 hover:text-pink-600 font-semibold transition-colors">
              About Us
            </button>
            <button className="px-6 py-2 text-gray-800 hover:text-pink-600 font-semibold transition-colors">
              Contact
            </button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome!
            <span className="text-pink-600"> Lovely to meet u!</span>
          </h2>
          
          <p className="text-xl text-black-600 mb-12 max-w-2xl mx-auto">
          This application is focused on empowering women! but is currently under construction. Please come back later
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-24">
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <span className="text-2xl">🙈</span>
            </div>
            <p className="text-gray-600">Work in progress</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <span className="text-2xl">💡</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Work in progress</h3>
            <p className="text-gray-600">Change me! </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center">
            <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
            <span className="text-2xl">😋</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Work in progress</h3>
            <p className="text-gray-600">change me </p>
          </div>
        </div>
      </main>
      <footer className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Developed By</h3>
          <p className="text-xl text-gray-700">
            Aylin • Deserae • Emily • Heloisa 
          </p>
        </div>
      </footer>
    </div>
  );
}