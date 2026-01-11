
import { gridLayer } from 'leaflet';
import { Link } from 'react-router-dom';
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
      greeting: 'Good Morning!',
    },
    afternoon: {
      greeting: 'Good Afternoon!',
    },
    night: {
      greeting: 'Good Evening!',
    },
  };

  const config = timeConfig[timeOfDay];
  return (
    <div className={`min-h-screen bg-gradient-to-br ${config.gradient} transition-all duration-1000 flex flex-col`}>
 {/* Navigation Bar */}
 <header className="bg-gradient-to-r from-orange-100 to-orange-200 shadow-sm">
 <nav className="container mx-auto px-4 py-4">
  <div className="flex items-center justify-between">
    {/* Logo on the left - only ONE logo needed */}
    <img 
      src="/logodos.png" 
      alt="Logo" 
      className="absolute left-4  top-4 h-14 w-quto"  
    />
    <div className="flex items-center justify-end"></div>
          
          <div className="flex gap-12">
          <Link 
          to="/contact"
          className="px-3 py-2 text-gray-800 hover:text-pink-400 font-semibold transition-colors text-2xl" style={{fontFamily: 'Mali'}}>
            Contact
          </Link>
          <Link 
          to="/about"
          className="px-3 py-2 text-gray-800 hover:text-pink-400 font-semibold transition-colors text-2xl"style={{fontFamily: 'Mali'}}
>
  About Us
</Link>
          </div>
        </div>
      </nav>
      </header>
      

      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-black-400 mb-6" style={{fontFamily: 'Mali'}}>
            {config.greeting}
            
          </h2>
          
          <p className="text-xl text-black-600 mb-12 max-w-2xl mx-auto" style={{fontFamily: 'Mali'}}>
          Welcome to Empowering Her! This application is focused on empowering women! 
          </p>
        </div>

  {/* Feature Cards */}
        <div className="flex justify-center gap-32 max-w-6xl mx-auto mt-24 px-4" style={{fontFamily: 'Mali'}}>

 {/* Mood Board Flower Button */}
<Link 
  to="/mood" 
  className="relative w-64 h-64 flex items-center justify-center block"
>
  {/* Petals */}
  <div className="absolute inset-0 flex items-center justify-center">
    {[0, 1, 2, 3, 4, 5].map((i) => (
      <div
        key={i}
        className="absolute w-24 h-24 bg-orange-200 rounded-full"
        style={{
          transform: `rotate(${i * 60}deg) translateY(-60px)`,
        }}
      />
    ))}
  </div>
  
  {/* Center Circle */}
  <div className="relative z-10 w-32 h-32 bg-orange-300 rounded-full flex flex-col items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform">
    <span className="text-4xl mb-1">😊</span> {/* Added smiley emoji */}
    <p className="text-white text-sm font-bold">Mood Board</p>
  </div>
</Link>

  {/* Second Flower Button */}
      <div className="relative w-64 h-64 flex items-center justify-center">
    {/* Petals */}
        <div className="absolute inset-0 flex items-center justify-center">
          {[0, 1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className="absolute w-24 h-24 bg-orange-300 rounded-full"
          style={{
            transform: `rotate(${i * 60}deg) translateY(-60px)`,
          }}
        />
      ))}
    </div>
    
    {/* Center Circle */}
    <div className="relative z-10 w-32 h-32 bg-orange-500 rounded-full flex flex-col items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform">
      <span className="text-4xl mb-1">💡</span>
      <p className="text-white text-sm font-bold">Resources</p>
    </div>
  </div>
{/* Emergency Flower Button */}
<Link 
  to="/emergency" 
  className="relative w-64 h-64 flex items-center justify-center block"
>
  {/* Petals */}
  <div className="absolute inset-0 flex items-center justify-center">
    {[0, 1, 2, 3, 4, 5].map((i) => (
      <div
        key={i}
        className="absolute w-24 h-24 bg-red-500 rounded-full"
        style={{
          transform: `rotate(${i * 60}deg) translateY(-60px)`,
        }}
      />
    ))}
  </div>
  
  {/* Center Circle */}
  <div className="relative z-10 w-32 h-32 bg-red-600 rounded-full flex flex-col items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform">
    <span className="text-4xl mb-1">🚨</span>
    <p className="text-white text-sm font-bold">Emergency</p>
  </div>
</Link>
  
</div>
      </main>
      <footer className="container mx-auto px-4 py-8">
        <div className="text-center">
        <h3 className="text-xl font-bold text-gray-800 mb-2" style={{fontFamily: 'Mali'}}>Developed By</h3>
      <p className="text-l text-gray-700" style={{fontFamily: 'Mali'}}>
        Aylin • Deserae • Emily • Heloisa 
      </p>

      {/* ElvenLabs ConvAI Widget */}
        <div className="mt-70">
        <elevenlabs-convai agent-id="agent_5701kemqx0kfeqmb2z4gcv6e748d"></elevenlabs-convai><script src="https://unpkg.com/@elevenlabs/convai-widget-embed" async type="text/javascript"></script>
        </div>
        </div>
      </footer>
    </div>
  );
}