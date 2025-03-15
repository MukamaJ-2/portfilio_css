import { useState, useEffect } from 'react'
import GeneralComponent from './components/generalComponent';
import HobbyVideo from './components/hobbyVideo';
import ContactInformation from './components/contactInformation';
import CareerGoal from './components/careerGoals';
import PersonalDetails from './components/personalDetails';
import Profile from './components/profile';
import LinkNavigation from './components/linkNavigation';
import heading from './components/heading';
import ResultComponent from './components/ResultComponent';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Force light mode by default
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
      </div>
      

      <GeneralComponent
      heading="MUKAMA JOSEPH"
      
      paragraph="I am a student at Uganda Christian University pursuing a Bachelor Degree in
    Computer Science. Web programming has been among my
    courses of interest cause before joining I had a dream of becoming a web developer
    and with this, I think it will contribute much to my success"/> 
      <PersonalDetails/>
      <Profile/>
      <HobbyVideo/>
      <ResultComponent/>
      <LinkNavigation/>
      <ContactInformation/>
      <CareerGoal/>
    </>
  )
}


export default App

