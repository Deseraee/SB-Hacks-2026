
import React from 'react';

export default function WelcomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-orange-200">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-center gap-2">
        </div>
      </header>


      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome!
            <span className="text-pink-600"> Lovely to meet u!</span>
          </h2>
          
          <p className="text-xl text-black-600 mb-12 max-w-2xl mx-auto">
          This application is focused on empowering women! but is currently under construction. Please come back later
          </p>

          <button className="bg-blue-200 hover:bg-blue-300 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg hover:shadow-xl">
            Click me →
          </button>
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
      <p className="text-xl text-black-600 mb-12 max-w-4xl mx-auto text-center">
          Developed by Aylin - Deserae - Emily - Heloisa 
          </p>
    </div>
  );
}