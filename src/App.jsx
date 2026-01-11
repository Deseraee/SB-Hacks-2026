import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './WelcomePage';
import Contact from './Contact';
import About from './About';
import EmergencyPage from './EmergencyPage';
import MoodApp from './MoodApp';
import Resources from './Resources'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/emergency" element={<EmergencyPage />} />
        <Route path="/mood" element={<MoodApp />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </Router>
  );
}

export default App;