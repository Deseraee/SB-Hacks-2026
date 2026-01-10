
import { gridLayer } from 'leaflet';
import React, { useEffect } from 'react';

export default function WelcomePage() {
  const [timeOfDay, setTimeOfDay] = React.useState('morning');

  useEffect(() => {
    const updateTimeOfDay = () => {
      const hour = new Date().getHours();

      if (hour >= 5 && hour < 12) {
        setTimeOfDay('morning');
      }else if (hour >= 12 && hour < 18) {
        setTimeOfDay('afternoon');
      }else {
        setTimeOfDay('night');
      }
    };
    updateTimeOfDay();

    const interval = setInterval(updateTimeOfDay, 60 * 60 * 1000); // Updates every hour
    return () => clearInterval(interval);
  }, []);

  const timeConfig = {
    morning: {
      gradient: 'from-yellow-100 to-orange-200',
      greeting: 'Good Morning!',
    },
    afternoon: {
      gradient: 'from-blue-100 to-yellow-200',
      greeting: 'Good Afternoon!',
    },
    night: {
      gradient: 'from-gray-800 to-black',
      greeting: 'Good Evening!',
    },
  };

  const config = timeConfig[timeOfDay];
  return (
    <div className={`min-h-screen bg-gradient-to-br ${config.gradient} transition-all duration-1000`}>
 {/* Navigation Bar */}
 <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800">Logo</h1>
          
          <div className="flex gap-4">
            <button className="px-6 py-2 text-gray-800 hover:text-pink-600 font-semibold transition-colors" style={{fontFamily: 'Mali'}}>
              Home
            </button>
            <button className="px-6 py-2 text-gray-800 hover:text-pink-600 font-semibold transition-colors" style={{fontFamily: 'Mali'}}>
              About Us
            </button>
            <button className="px-6 py-2 text-gray-800 hover:text-pink-600 font-semibold transition-colors" style={{fontFamily: 'Mali'}}>
              Contact
            </button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-black-400 mb-6" style={{fontFamily: 'Mali'}}>
            {config.greeting}
            
          </h2>
          
          <p className="text-xl text-black-600 mb-12 max-w-2xl mx-auto" style={{fontFamily: 'Mali'}}>
          This application is focused on empowering women! but is currently under construction.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-24" style={{fontFamily: 'Mali'}}>
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
        <h3 className="text-xl font-bold text-gray-800 mb-2" style={{fontFamily: 'Mali'}} >Developed By</h3>
        <p className="text-l text-gray-700" style={{fontFamily: 'Mali'}}>
           Aylin • Deserae • Emily • Heloisa 
      </p>

      {/* ElvenLabs ConvAI Widget */}
        <div className="mt-6">
        <elevenlabs-convai agent-id="agent_5701kemqx0kfeqmb2z4gcv6e748d"></elevenlabs-convai>
        </div>
        </div>
      </footer>
    </div>
  );
}