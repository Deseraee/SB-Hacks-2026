import React from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#FCF6BD] transition-all duration-1000 flex flex-col">
      {/* Pink Header with Back Button */}
      <div className="bg-gradient-to-r from-orange-100 to-pink-200 shadow-md py-3 px-6">
        <Link 
          to="/"
          className="text-pink-800 hover:text-pink-900 font-semibold text-2xl flex items-center gap-2" 
          style={{fontFamily: 'Mali'}}
        >
          ← Back to Home
        </Link>
      </div>
      
      <div className="p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-center mb-8 text-gray-900" style={{fontFamily: 'Mali'}}>
            Contact Us
          </h1>
          
          <div className="bg-white p-12 rounded-2xl shadow-lg">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-4" style={{fontFamily: 'Mali'}} >Get in Touch</h2>
                <p className="text-xl text-gray-600 mb-8" style={{fontFamily: 'Mali'}}>We'd love to hear from you!</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-pink-50 p-8 rounded-lg">
                  <h3 className="font-bold text-xl mb-3" style={{fontFamily: 'Mali'}} >Email</h3>
                  <p className="text-gray-700 text-lg" style={{fontFamily: 'Mali'}} >contact@womenempowerment.com</p>
                </div>
                
                <div className="bg-purple-50 p-8 rounded-lg">
                  <h3 className="font-bold text-xl mb-3" style={{fontFamily: 'Mali'}} >Phone</h3>
                  <p className="text-gray-700 text-lg" style={{fontFamily: 'Mali'}} >(123) 456-7890</p>
                </div>
                
                <div className="bg-blue-50 p-8 rounded-lg">
                  <h3 className="font-bold text-xl mb-3" style={{fontFamily: 'Mali'}}>Location</h3>
                  <p className="text-gray-700 text-lg" style={{fontFamily: 'Mali'}} >Santa Barbara, CA</p>
                </div>
                
                <div className="bg-yellow-50 p-8 rounded-lg">
                  <h3 className="font-bold text-xl mb-3" style={{fontFamily: 'Mali'}}>Github</h3>
                  <p className="text-gray-700 text-lg" style={{fontFamily: 'Mali'}} >https://github.com/Deseraee/SB-Hacks-2026</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}