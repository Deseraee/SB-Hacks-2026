import React from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white-100 to-purple-100">
      {/* Pink Header with Back Button */}
      <div className="bg-gradient-to-r from-orange-100 to-pink-200 py-4 px-8 shadow-sm">
        <Link 
          to="/"
          className="text-pink-800 hover:text-pink-900 font-semibold text-2xl flex items-center gap-2" 
          style={{fontFamily: 'Mali'}}
        >
          ← Back to Home
        </Link>
      </div>
      
      <div className="p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-center mb-8 text-gray-900" style={{fontFamily: 'Mali'}}>
            Contact Us
          </h1>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-4" style={{fontFamily: 'Mali'}} >Get in Touch</h2>
                <p className="text-gray-600 mb-8" style={{fontFamily: 'Mali'}}>We'd love to hear from you!</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-pink-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-2" style={{fontFamily: 'Mali'}} >Email</h3>
                  <p className="text-gray-700" style={{fontFamily: 'Mali'}} >contact@womenempowerment.com</p>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-2" style={{fontFamily: 'Mali'}} >Phone</h3>
                  <p className="text-gray-700"style={{fontFamily: 'Mali'}} >(123) 456-7890</p>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-2"style={{fontFamily: 'Mali'}}>Location</h3>
                  <p className="text-gray-700"style={{fontFamily: 'Mali'}} >Santa Barbara, CA</p>
                </div>
                
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-2"style={{fontFamily: 'Mali'}}>Github</h3>
                  <p className="text-gray-700"style={{fontFamily: 'Mali'}} >https://github.com/Deseraee/SB-Hacks-2026</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}