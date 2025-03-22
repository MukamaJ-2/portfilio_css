import { useState, useEffect } from 'react';
import Header from './Header';
import PersonalDetails from './personalDetails.js';
import Results from './Results';
import Contact from './Contact';
import CareerGoals from './careerGoals.js';
import ContactInformation from './contactInformation';

function Portfolio() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    localStorage.setItem('theme', 'light');
    if (document.body.classList.contains('dark-mode')) {
      document.body.classList.remove('dark-mode');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'light' : 'dark');
  };

  return (
    <>
      <div className="theme-toggle">
        <button id="theme-switch" onClick={toggleTheme}>
          <span className="mode-icon">{isDarkMode ? '☀️' : '🌙'}</span>
          <span className="mode-text">{isDarkMode ? 'Light' : 'Dark'}</span>
        </button>

    <Header />
    <PersonalDetails />
    <hobbVideo/>
    <Results />
    <Contact />
    <ContactInformation/>
    <CareerGoals />
       </div>
    </>
  );
}

export default Portfolio;
