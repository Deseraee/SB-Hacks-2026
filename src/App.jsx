import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './WelcomePage';
import Contact from './Contact';
import About from './About';
import EmergencyPage from './EmergencyPage'; // Import the EmergencyPage

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/emergency" element={<EmergencyPage />} /> {/* Add this route */}
      </Routes>
    </Router>
  );
}

export default App;